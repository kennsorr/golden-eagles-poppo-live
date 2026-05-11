import type { Metadata } from "next";
import TeamMemberCard from "@/components/TeamMemberCard";
import { getTeamMembers } from "@/data/team";
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
    title: t.about.title,
    description: t.about.description,
    alternates: buildAlternates(locale, "about"),
    openGraph: {
      title: `${t.about.title} | ${t.siteName}`,
      description: t.about.description,
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];
  const members = getTeamMembers(locale);

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {t.about.title}
        </h1>
        <p className="text-lg text-white/70">{t.about.intro}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          {t.about.missionTitle}
        </h2>
        <p className="text-white/70">{t.about.missionBody}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          {t.about.whatWeDoTitle}
        </h2>
        <p className="text-white/70">{t.about.whatWeDoBody}</p>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            {t.about.teamTitle}
          </h2>
          <p className="text-sm text-white/60">{t.about.teamBody}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
