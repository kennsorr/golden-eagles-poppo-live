import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  let body: {
    optionId?: number;
    deviceId?: string;
    name?: string;
  };

  try {
    body = await request.json();
  } catch {
    body = {};
  }

  if (!id) {
    return NextResponse.json({ error: "Missing poll id" }, { status: 400 });
  }

  if (!body.optionId) {
    return NextResponse.json(
      { error: "Missing optionId" },
      { status: 400 }
    );
  }

  if (!body.deviceId) {
    return NextResponse.json(
      { error: "Missing deviceId" },
      { status: 400 }
    );
  }

  if (!body.name) {
    return NextResponse.json(
      { error: "Missing name" },
      { status: 400 }
    );
  }

  const baseUrl = process.env.STRAPI_URL;
  const token = process.env.STRAPI_API_TOKEN;

  if (!baseUrl || !token) {
    return NextResponse.json(
      { error: "Missing STRAPI_URL or STRAPI_API_TOKEN" },
      { status: 500 }
    );
  }

  const url = new URL(`/api/polls/${id}/vote`, baseUrl);
  const response = await fetch(url.toString(), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      optionId: body.optionId,
      deviceId: body.deviceId,
      name: body.name,
    }),
    cache: "no-store",
  });

  let responseBody: unknown = null;
  try {
    responseBody = await response.json();
  } catch {
    responseBody = { ok: response.ok };
  }

  return NextResponse.json(responseBody, { status: response.status });
}
