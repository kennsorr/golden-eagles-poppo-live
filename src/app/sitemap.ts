import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/data/blog";
import { locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const mainPages = ["", "/events", "/polls", "/shop", "/blog"];
  const legalPages = ["/about", "/contact", "/privacy-policy", "/terms"];
  const blogSlugs = getAllBlogSlugs();

  const mainEntries = mainPages.flatMap((page) =>
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

  const legalEntries = legalPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
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

  const blogEntries = blogSlugs.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [
            l === "pt-br" ? "pt-BR" : l,
            `${siteUrl}/${l}/blog/${slug}`,
          ]),
        ),
      },
    })),
  );

  return [...mainEntries, ...legalEntries, ...blogEntries];
}
