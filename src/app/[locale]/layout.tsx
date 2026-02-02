import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { copy } from "@/lib/copy";
import { isLocale, Locale } from "@/lib/i18n";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const t = copy[locale];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader
        locale={locale}
        siteName={t.siteName}
        headerTagline={t.headerTagline}
        introLabel={t.nav.intro}
        eventsLabel={t.nav.events}
      />
      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        {children}
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto w-full max-w-6xl px-6 text-sm text-white/60">
          {t.footer.tagline}
        </div>
      </footer>
    </div>
  );
}
