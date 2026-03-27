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
  blogLabel: string;
};

export default function SiteHeader({
  locale,
  siteName,
  headerTagline,
  introLabel,
  eventsLabel,
  pollsLabel,
  shopLabel,
  blogLabel,
}: SiteHeaderProps) {
  const pathname = usePathname() ?? "/";
  const introPath = `/${locale}`;
  const eventsPath = `/${locale}/events`;
  const pollsPath = `/${locale}/polls`;
  const shopPath = `/${locale}/shop`;
  const blogPath = `/${locale}/blog`;
  const isIntro = pathname === introPath;
  const isEvents = pathname === eventsPath;
  const isPolls = pathname === pollsPath;
  const isShop = pathname === shopPath;
  const isBlog = pathname.startsWith(blogPath);

  const navLinkClass = (active: boolean) =>
    `whitespace-nowrap transition hover:text-amber-200 ${
      active ? "text-amber-200 underline underline-offset-8" : ""
    }`;

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
        <nav
          className="flex w-full items-center justify-between text-sm font-semibold text-white/85 sm:text-base md:justify-start md:gap-6 md:text-lg"
          aria-label="Main"
        >
          <Link href={introPath} className={navLinkClass(isIntro)}>
            {introLabel}
          </Link>
          <span className="h-3.5 w-px bg-white/15 md:hidden" aria-hidden />
          <Link href={eventsPath} className={navLinkClass(isEvents)}>
            {eventsLabel}
          </Link>
          <span className="h-3.5 w-px bg-white/15 md:hidden" aria-hidden />
          <Link href={pollsPath} className={navLinkClass(isPolls)}>
            {pollsLabel}
          </Link>
          <span className="h-3.5 w-px bg-white/15 md:hidden" aria-hidden />
          <Link href={blogPath} className={navLinkClass(isBlog)}>
            {blogLabel}
          </Link>
          <span className="h-3.5 w-px bg-white/15 md:hidden" aria-hidden />
          <Link href={shopPath} className={navLinkClass(isShop)}>
            {shopLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
