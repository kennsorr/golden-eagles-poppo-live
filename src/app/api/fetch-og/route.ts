import { NextRequest, NextResponse } from "next/server";

const TIMEOUT_MS = 10_000;
const MAX_HTML_LENGTH = 512_000;

function extractOg(html: string): {
  title: string | null;
  imageUrl: string | null;
  description: string | null;
} {
  const result = {
    title: null as string | null,
    imageUrl: null as string | null,
    description: null as string | null,
  };

  const ogTitleMatch =
    html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i) ||
    html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:title["']/i);
  if (ogTitleMatch) result.title = ogTitleMatch[1].trim();

  const ogImageMatch =
    html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i) ||
    html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
  if (ogImageMatch) result.imageUrl = ogImageMatch[1].trim();

  const ogDescMatch =
    html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i) ||
    html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:description["']/i);
  if (ogDescMatch) result.description = ogDescMatch[1].trim();

  // Fallback: get title from body when OG title is missing (e.g. Amazon bot page)
  if (!result.title) {
    result.title = extractTitleFromBody(html);
  }

  // Fallback: get main image from body when OG image is missing
  if (!result.imageUrl) {
    result.imageUrl = extractImageFromBody(html);
  }

  return result;
}

/** Extract product/page title from body when OG is missing. Uses your working Amazon span#productTitle regex first. */
function extractTitleFromBody(html: string): string | null {
  // Amazon: your working pattern - <span id="productTitle".*?>(.*?)</span>
  const amazonTitle = html.match(/<span id="productTitle".*?>([\s\S]*?)<\/span>/);
  if (amazonTitle) {
    const t = amazonTitle[1].trim();
    if (t.length > 0 && t.length < 500) return t;
  }

  // Document <title> (often "Product Name – Site")
  const titleTag = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleTag) {
    let t = titleTag[1].replace(/\s+/g, " ").trim();
    t = t
      .replace(/\s*[:\-–—|]\s*Amazon(?:\.[a-z.]+)?\s*$/i, "")
      .replace(/\s*[:\-–—|]\s*Keep shopping.*$/i, "")
      .trim();
    if (t.length > 0 && t.length < 500) return t;
  }

  // First <h1>
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1) {
    const t = h1[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (t.length > 0 && t.length < 500) return t;
  }

  return null;
}

/** Extract main product image from body when OG image is missing. Uses img inside div#imgTagWrapperId, then other Amazon/generic. */
function extractImageFromBody(html: string): string | null {
  // Amazon: image is usually a child of div with id="imgTagWrapperId"
  const wrapperBlock = html.match(
    /<div[^>]*id=["']imgTagWrapperId["'][^>]*>([\s\S]*?)<\/div>/i
  );
  if (wrapperBlock) {
    const imgInWrapper = wrapperBlock[1].match(
      /<img[^>]*src=["'](https?:\/\/[^"']+)["']/i
    );
    if (imgInWrapper) return imgInWrapper[1].trim();
  }

  // Amazon: first img inside imgTagWrapperId (alternate order of attributes)
  const amazonImgInWrapper = html.match(
    /<div[^>]*id=["']imgTagWrapperId["'][^>]*>[\s\S]*?<img[^>]*src=["']([^"']+)["']/i
  );
  if (amazonImgInWrapper) return amazonImgInWrapper[1].trim();

  // Amazon: landingImage / imgBlkFront
  const amazonImg = html.match(
    /<img[^>]*(?:id=["']landingImage["']|id=["']imgBlkFront["'])[^>]*src=["']([^"']+)["']/i
  );
  if (amazonImg) return amazonImg[1].trim();
  const amazonImg2 = html.match(
    /<img[^>]*src=["']([^"']+)["'][^>]*(?:id=["']landingImage["']|id=["']imgBlkFront["'])/i
  );
  if (amazonImg2) return amazonImg2[1].trim();

  // Generic: first img with width/height
  const genericImg = html.match(
    /<img[^>]*src=["'](https?:\/\/[^"']+)["'][^>]*(?:width|height)=/i
  );
  if (genericImg) return genericImg[1].trim();

  return null;
}

function isValidUrl(s: string): boolean {
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const urlParam = request.nextUrl.searchParams.get("url");
  if (!urlParam || !urlParam.trim()) {
    return NextResponse.json(
      { error: "Missing url query parameter" },
      { status: 400 }
    );
  }

  const url = urlParam.trim();
  if (!isValidUrl(url)) {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch: ${res.status}` },
        { status: 422 }
      );
    }

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("text/html")) {
      return NextResponse.json(
        { error: "URL did not return HTML" },
        { status: 422 }
      );
    }

    const text = await res.text();
    const html =
      text.length > MAX_HTML_LENGTH ? text.slice(0, MAX_HTML_LENGTH) : text;
    return NextResponse.json(extractOg(html), { status: 200 });
  } catch (err) {
    clearTimeout(timeoutId);
    const message = err instanceof Error ? err.message : "Fetch failed";
    return NextResponse.json({ error: message }, { status: 422 });
  }
}
