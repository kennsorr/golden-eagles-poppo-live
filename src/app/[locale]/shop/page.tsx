import ShopItemCard from "@/components/ShopItemCard";
import { copy } from "@/lib/copy";
import { Locale } from "@/lib/i18n";

type StrapiShopItem = {
  id: number;
  link?: string | null;
  title?: string | null;
  imageUrl?: string | null;
  attributes?: {
    link?: string | null;
    title?: string | null;
    imageUrl?: string | null;
    image?: {
      data?: { attributes?: { url?: string | null } } | null;
      url?: string | null;
    } | null;
  };
  image?: {
    data?: { attributes?: { url?: string | null } } | null;
    url?: string | null;
  } | null;
};

async function fetchShopItems(locale: Locale) {
  const baseUrl = process.env.STRAPI_URL;
  const token = process.env.STRAPI_API_TOKEN;

  if (!baseUrl || !token) {
    throw new Error("Missing STRAPI_URL or STRAPI_API_TOKEN");
  }

  const url = new URL("/api/shop-items", baseUrl);
  url.searchParams.set("sort", "createdAt:desc");
  url.searchParams.set("populate", "*");

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch shop items: ${response.status}`);
  }

  const data = (await response.json()) as { data: StrapiShopItem[] };

  return data.data.map((item) => {
    const link =
      item.attributes?.link ?? item.link ?? "";
    const explicitImageUrl =
      item.attributes?.imageUrl ?? item.imageUrl ?? null;
    const rawImage =
      item.attributes?.image?.data?.attributes?.url ??
      item.attributes?.image?.url ??
      item.image?.data?.attributes?.url ??
      item.image?.url ??
      null;
    const mediaImageUrl = rawImage
      ? (() => {
          try {
            return new URL(rawImage, baseUrl).toString();
          } catch {
            return rawImage;
          }
        })()
      : null;
    const imageUrl = mediaImageUrl ?? explicitImageUrl;

    return {
      id: item.id,
      link,
      title: item.attributes?.title ?? item.title ?? null,
      imageUrl,
    };
  });
}

export default async function ShopPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = copy[locale as Locale];
  let items: Awaited<ReturnType<typeof fetchShopItems>> = [];
  let errorMessage: string | null = null;

  try {
    items = await fetchShopItems(locale as Locale);
  } catch {
    errorMessage =
      locale === "pt-br"
        ? "Não foi possível carregar os itens agora. Tente novamente em alguns instantes."
        : "We couldn't load shop items right now. Please try again in a moment.";
  }

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">
          {t.sections.shop}
        </p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {t.nav.shop}
        </h1>
        <p className="text-lg text-white/70">{t.shopIntro}</p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {errorMessage ? (
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-white/80 sm:col-span-2 lg:col-span-3">
            {errorMessage}
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-white/80 sm:col-span-2 lg:col-span-3">
            {t.shopEmpty}
          </div>
        ) : (
          items.map((item) => <ShopItemCard key={item.id} item={item} />)
        )}
      </section>
    </div>
  );
}
