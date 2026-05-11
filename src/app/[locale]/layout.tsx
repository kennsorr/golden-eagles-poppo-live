import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CookieConsent from "@/components/CookieConsent";
import NavigationProgress from "@/components/NavigationProgress";
import PageTransition from "@/components/PageTransition";
import SiteHeader from "@/components/SiteHeader";
import SparkleBackground from "@/components/SparkleBackground";
import { copy } from "@/lib/copy";
import { isLocale, Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "pt-br";
  const t = copy[safeLocale];

  return {
    title: {
      template: `%s | ${t.siteName}`,
      default: `${t.siteName} | ${t.headerTagline}`,
    },
    description: t.hero.body,
    alternates: buildAlternates(safeLocale),
    openGraph: {
      siteName: t.siteName,
      locale: safeLocale === "pt-br" ? "pt_BR" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const safeLocale = locale as Locale;
  const t = copy[safeLocale];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <NavigationProgress />
      <SparkleBackground />
      <SiteHeader
        locale={safeLocale}
        siteName={t.siteName}
        headerTagline={t.headerTagline}
        introLabel={t.nav.intro}
        eventsLabel={t.nav.events}
        pollsLabel={t.nav.polls}
        shopLabel={t.nav.shop}
        blogLabel={t.nav.blog}
      />
      <main className="relative mx-auto w-full max-w-6xl px-6 py-12">
        <PageTransition>{children}</PageTransition>
      </main>
      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6">
          <nav
            className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-white/40"
            aria-label="Footer"
          >
            <Link href={`/${safeLocale}/about`} className="transition hover:text-white/60">
              {t.footerLinks.about}
            </Link>
            <Link href={`/${safeLocale}/contact`} className="transition hover:text-white/60">
              {t.footerLinks.contact}
            </Link>
            <Link href={`/${safeLocale}/privacy-policy`} className="transition hover:text-white/60">
              {t.footerLinks.privacy}
            </Link>
            <Link href={`/${safeLocale}/terms`} className="transition hover:text-white/60">
              {t.footerLinks.terms}
            </Link>
          </nav>
          <p className="text-sm font-bold text-white/60">
            {t.footer.tagline}
            <a
              href={t.footer.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-amber-200/90 underline hover:text-amber-200"
            >
              {t.footer.linkText}
            </a>
          </p>
        </div>
      </footer>
      <CookieConsent
        locale={safeLocale}
        message={t.cookieConsent.message}
        acceptLabel={t.cookieConsent.accept}
        declineLabel={t.cookieConsent.decline}
      />
    </div>
  );
}
