import TeamMemberCard from "@/components/TeamMemberCard";
import { getTeamMembers } from "@/data/team";
import { copy } from "@/lib/copy";
import { Locale } from "@/lib/i18n";

export default async function IntroductionPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];
  const members = getTeamMembers(locale);

  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">
            {t.hero.badge}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            {t.hero.title}
          </h1>
          <p className="text-lg text-white/70">{t.hero.body}</p>
          <a
            href="https://www.poppo.com/@22071637"
            target="_blank"
            rel="noreferrer"
            className="go-live-button inline-flex items-center gap-3 rounded-full border border-amber-200/40 bg-gradient-to-r from-amber-400/20 via-amber-300/10 to-pink-400/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100 shadow-lg shadow-amber-400/20 transition hover:border-amber-200/70 hover:text-white cursor-[alias]"
          >
            <span className="flex h-8 w-8 items-center justify-center">
              <img
                src="/images/poppo-logo.png"
                alt="Poppo Live"
                className="h-5 w-5 object-contain"
              />
            </span>
            <span className="go-live-text">GO LIVE</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
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
            </span>
          </a>
        </div>
        <div className="rounded-3xl border border-amber-200/20 bg-gradient-to-br from-amber-400/20 via-slate-900/70 to-slate-900/40 p-8 shadow-lg shadow-black/30">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80 whitespace-nowrap">
            Golden Eagles
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            {t.hero.highlightTitle}
          </h2>
          <p className="mt-4 text-sm text-white/70">{t.hero.highlightBody}</p>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            {t.sections.administration}
          </h2>
          <p className="text-sm text-white/60">
            {t.labels.administrationBlurb}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <TeamMemberCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
