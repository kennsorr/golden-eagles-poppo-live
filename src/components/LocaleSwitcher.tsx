"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, localeLabels } from "@/lib/i18n";

type LocaleSwitcherProps = {
  locale: Locale;
};

export default function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const nextLocale: Locale = locale === "en" ? "pt-br" : "en";
  const segments = pathname.split("/").filter(Boolean);
  const rest = segments.slice(1).join("/");
  const href = `/${nextLocale}${rest ? `/${rest}` : ""}`;
  const label = localeLabels[nextLocale];

  return (
    <Link
      href={href}
      className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold tracking-wide text-white/80 transition hover:border-amber-300 hover:text-amber-200"
      aria-label={`Switch language to ${label.text}`}
    >
      <span className="text-base">{label.flag}</span>
      <span className="ml-2 hidden sm:inline">{label.text}</span>
    </Link>
  );
}
