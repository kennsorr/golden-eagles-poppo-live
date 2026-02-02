import TeamMemberCard from "@/components/TeamMemberCard";
import { getTeamMembers } from "@/data/team";
import { copy } from "@/lib/copy";
import { Locale } from "@/lib/i18n";

export default function IntroductionPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = copy[params.locale];
  const members = getTeamMembers(params.locale);

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
        </div>
        <div className="rounded-3xl border border-amber-200/20 bg-gradient-to-br from-amber-400/20 via-slate-900/70 to-slate-900/40 p-8 shadow-lg shadow-black/30">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">
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
              whatsappLabel={t.labels.whatsapp}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
