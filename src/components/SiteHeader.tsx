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
};

export default function SiteHeader({
  locale,
  siteName,
  headerTagline,
  introLabel,
  eventsLabel,
}: SiteHeaderProps) {
  const pathname = usePathname() ?? "/";
  const introPath = `/${locale}`;
  const eventsPath = `/${locale}/events`;
  const isIntro = pathname === introPath;
  const isEvents = pathname === eventsPath;

  return (
    <header className="border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src="/images/golden-eagles-logo-s.png"
            alt="Golden Eagles logo"
            className="h-20 w-20 object-contain"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-amber-200/85">
              {headerTagline}
            </p>
            <p className="text-xl font-semibold text-white">{siteName}</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-lg font-semibold text-white/85 md:flex">
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
        </nav>
        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
