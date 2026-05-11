import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TeamMemberCard from "@/components/TeamMemberCard";
import { getRecentBlogPost } from "@/data/blog";
import { getTeamMembers } from "@/data/team";
import { copy } from "@/lib/copy";
import { isLocale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";
import {
  fetchActivePolls,
  fetchUpcomingEvents,
  fetchRecentShopItems,
} from "@/lib/strapi";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const t = copy[locale];

  return {
    title: t.hero.title,
    description: t.hero.body,
    alternates: buildAlternates(locale),
    openGraph: {
      title: `${t.hero.title} | ${t.siteName}`,
      description: t.hero.body,
    },
  };
}

export default async function IntroductionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const t = copy[locale];
  const [members, activePolls, upcomingEvents, recentShopItems, recentBlogPost] =
    await Promise.all([
      Promise.resolve(getTeamMembers(locale)),
      fetchActivePolls(),
      fetchUpcomingEvents(),
      fetchRecentShopItems(),
      Promise.resolve(getRecentBlogPost(locale)),
    ]);

  let highlightTitle: string;
  let highlightBody: string;
  let highlightCta: { label: string; href: string } | null = null;

  if (activePolls.length > 0) {
    highlightTitle = t.hero.highlightPoll.title;
    highlightBody = t.hero.highlightPoll.body;
    highlightCta = { label: t.hero.highlightPoll.cta, href: `/${locale}/polls` };
  } else if (upcomingEvents.length > 0) {
    highlightTitle = t.hero.highlightEvent.title;
    highlightBody = t.hero.highlightEvent.body;
    highlightCta = { label: t.hero.highlightEvent.cta, href: `/${locale}/events` };
  } else if (recentBlogPost) {
    highlightTitle = t.hero.highlightBlog.title;
    highlightBody = t.hero.highlightBlog.body;
    highlightCta = {
      label: t.hero.highlightBlog.cta,
      href: `/${locale}/blog/${recentBlogPost.slug}`,
    };
  } else if (recentShopItems.length > 0) {
    highlightTitle = t.hero.highlightShop.title;
    highlightBody = t.hero.highlightShop.body;
    highlightCta = { label: t.hero.highlightShop.cta, href: `/${locale}/shop` };
  } else {
    highlightTitle = t.hero.highlightEmpty.title;
    highlightBody = t.hero.highlightEmpty.body;
  }

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
          <div className="flex flex-wrap gap-4">
            <a
              href="https://invite-poppo.com/BZwr3S"
              target="_blank"
              rel="noreferrer"
              className="go-live-button invite-ping inline-flex items-center gap-3 rounded-full border border-amber-200/40 bg-gradient-to-r from-amber-400/20 via-amber-300/10 to-pink-400/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100 shadow-lg shadow-amber-400/20 transition hover:border-amber-200/70 hover:text-white cursor-[alias]"
            >
              <span className="flex h-8 w-8 items-center justify-center">
                <img
                  src="/images/poppo-logo.png"
                  alt="Poppo Live"
                  className="h-5 w-5 object-contain"
                />
              </span>
              <span className="go-live-text">GET POPPO LIVE</span>
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
            <a
              href="https://www.poppo.com/@22071637"
              target="_blank"
              rel="noreferrer"
              className="go-live-button inline-flex items-center gap-3 rounded-full border border-amber-200/40 bg-gradient-to-r from-amber-400/20 via-amber-300/10 to-pink-400/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100 shadow-lg shadow-amber-400/20 transition hover:border-amber-200/70 hover:text-white cursor-[alias]"
            >
              <span className="flex h-8 w-8 items-center justify-center">
                <img
                  src="/images/golden-eagle-64x64.png"
                  alt="Golden Eagles"
                  className="h-5 w-5 object-contain"
                />
              </span>
              <span className="go-live-text whitespace-nowrap">
                Golden Eagles Live
              </span>
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
        </div>
        <div className="rounded-3xl border border-amber-200/20 bg-gradient-to-br from-amber-400/20 via-slate-900/70 to-slate-900/40 p-8 shadow-lg shadow-black/30">
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-amber-200/80 whitespace-nowrap">
            <span
              className="notification-wiggle inline-flex h-5 w-5 items-center justify-center rounded-full border border-amber-200/30 bg-amber-300/10 text-amber-100 shadow-lg shadow-amber-400/10"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </span>
            <span>{t.hero.highlightLabel}</span>
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            {highlightTitle}
          </h2>
          <p className="mt-4 text-sm text-white/70">{highlightBody}</p>
          {highlightCta && (
            <Link
              href={highlightCta.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-200/40 bg-gradient-to-r from-amber-400/30 via-amber-300/20 to-pink-400/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-amber-100 shadow-lg shadow-amber-400/20 transition hover:border-amber-200/70 hover:text-white hover:shadow-amber-400/30"
            >
              {highlightCta.label}
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
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
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
