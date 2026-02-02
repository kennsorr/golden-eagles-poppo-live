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

  return (
    <Link
      href={href}
      className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:border-amber-300 hover:text-amber-200"
      aria-label={`Switch language to ${localeLabels[nextLocale]}`}
    >
      {localeLabels[nextLocale]}
    </Link>
  );
}
