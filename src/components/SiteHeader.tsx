 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n";
import LocaleSwitcher from "@/components/LocaleSwitcher";

type SiteHeaderProps = {
  locale: Locale;
  siteName: string;
  headerTagline: string;
  introLabel: string;
  eventsLabel: string;
  pollsLabel: string;
  shopLabel: string;
};

export default function SiteHeader({
  locale,
  siteName,
  headerTagline,
  introLabel,
  eventsLabel,
  pollsLabel,
  shopLabel,
}: SiteHeaderProps) {
  const pathname = usePathname() ?? "/";
  const introPath = `/${locale}`;
  const eventsPath = `/${locale}/events`;
  const pollsPath = `/${locale}/polls`;
  const shopPath = `/${locale}/shop`;
  const isIntro = pathname === introPath;
  const isEvents = pathname === eventsPath;
  const isPolls = pathname === pollsPath;
  const isShop = pathname === shopPath;

  return (
    <header className="border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3 -ml-3">
            <img
              src="/images/golden-eagles-logo-s.png"
              alt="Golden Eagles logo"
              className="h-20 w-20 object-contain"
            />
            <div className="min-w-0">
              <p className="whitespace-nowrap text-sm uppercase tracking-[0.24em] text-amber-200/85">
                {headerTagline}
              </p>
              <p className="text-xl font-semibold text-white">{siteName}</p>
            </div>
          </div>
          <div className="shrink-0">
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
        <nav className="flex items-center gap-4 text-base font-semibold text-white/85 md:gap-6 md:text-lg">
          <Link
            href={introPath}
            className={`transition hover:text-amber-200 ${
              isIntro ? "text-amber-200 underline underline-offset-8" : ""
            }`}
          >
            {introLabel}
          </Link>
          <Link
            href={eventsPath}
            className={`transition hover:text-amber-200 ${
              isEvents ? "text-amber-200 underline underline-offset-8" : ""
            }`}
          >
            {eventsLabel}
          </Link>
          <Link
            href={pollsPath}
            className={`transition hover:text-amber-200 ${
              isPolls ? "text-amber-200 underline underline-offset-8" : ""
            }`}
          >
            {pollsLabel}
          </Link>
          <Link
            href={shopPath}
            className={`transition hover:text-amber-200 ${
              isShop ? "text-amber-200 underline underline-offset-8" : ""
            }`}
          >
            {shopLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
