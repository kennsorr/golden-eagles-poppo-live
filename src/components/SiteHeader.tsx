import Link from "next/link";
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
  return (
    <header className="border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-lg font-bold text-amber-200">
            GE
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">
              {headerTagline}
            </p>
            <p className="text-lg font-semibold text-white">{siteName}</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-white/80 md:flex">
          <Link
            href={`/${locale}`}
            className="transition hover:text-amber-200"
          >
            {introLabel}
          </Link>
          <Link
            href={`/${locale}/events`}
            className="transition hover:text-amber-200"
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
