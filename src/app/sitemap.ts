import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const pages = ["", "/events", "/polls", "/shop"];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? ("weekly" as const) : ("daily" as const),
      priority: page === "" ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [
            l === "pt-br" ? "pt-BR" : l,
            `${siteUrl}/${l}${page}`,
          ]),
        ),
      },
    })),
  );
}
