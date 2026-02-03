import { notFound } from "next/navigation";
import PageTransition from "@/components/PageTransition";
import SiteHeader from "@/components/SiteHeader";
import SparkleBackground from "@/components/SparkleBackground";
import { copy } from "@/lib/copy";
import { isLocale, Locale } from "@/lib/i18n";

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
      <SparkleBackground />
      <SiteHeader
        locale={safeLocale}
        siteName={t.siteName}
        headerTagline={t.headerTagline}
        introLabel={t.nav.intro}
        eventsLabel={t.nav.events}
      />
      <main className="relative mx-auto w-full max-w-6xl px-6 py-12">
        <PageTransition>{children}</PageTransition>
      </main>
      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto w-full max-w-6xl px-6 text-sm text-white/60">
          {t.footer.tagline}
        </div>
      </footer>
    </div>
  );
}
