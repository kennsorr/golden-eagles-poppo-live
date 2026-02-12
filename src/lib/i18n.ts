export const locales = ["en", "pt-br"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, { flag: string; text: string }> = {
  en: { flag: "🇺🇸", text: "English" },
  "pt-br": { flag: "🇧🇷", text: "Português" },
};

export const defaultLocale: Locale = "pt-br";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
