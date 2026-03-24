import { locales, type Locale } from "@/lib/i18n";

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export function buildAlternates(locale: Locale, path = "") {
  const siteUrl = getSiteUrl();
  const suffix = path ? `/${path}` : "";

  return {
    canonical: `${siteUrl}/${locale}${suffix}`,
    languages: Object.fromEntries(
      locales.map((l) => [
        l === "pt-br" ? "pt-BR" : l,
        `${siteUrl}/${l}${suffix}`,
      ]),
    ),
  };
}
