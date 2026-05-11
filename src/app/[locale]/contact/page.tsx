import type { Metadata } from "next";
import { copy } from "@/lib/copy";
import { Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = copy[locale];

  return {
    title: t.contact.title,
    description: t.contact.description,
    alternates: buildAlternates(locale, "contact"),
    openGraph: {
      title: `${t.contact.title} | ${t.siteName}`,
      description: t.contact.description,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {t.contact.title}
        </h1>
        <p className="text-lg text-white/70">{t.contact.intro}</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/10">
            <img
              src="/images/poppo-logo.png"
              alt="Poppo Live"
              className="h-6 w-6 object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-white">
            {t.contact.poppoTitle}
          </h2>
          <p className="text-white/70">{t.contact.poppoBody}</p>
          <a
            href="https://www.poppo.com/@22071637"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 bg-linear-to-r from-amber-400/20 via-amber-300/10 to-pink-400/20 px-5 py-2.5 text-sm font-semibold text-amber-100 transition hover:border-amber-200/70 hover:text-white"
          >
            Golden Eagles @ Poppo
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M9 7h8v8" />
            </svg>
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/10">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-amber-200/80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13 2 4" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white">
            {t.contact.emailTitle}
          </h2>
          <p className="text-white/70">{t.contact.emailBody}</p>
          <a
            href="mailto:contact@goldeneagles.live"
            className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 bg-linear-to-r from-amber-400/20 via-amber-300/10 to-pink-400/20 px-5 py-2.5 text-sm font-semibold text-amber-100 transition hover:border-amber-200/70 hover:text-white"
          >
            contact@goldeneagles.live
          </a>
        </div>
      </div>
    </div>
  );
}
