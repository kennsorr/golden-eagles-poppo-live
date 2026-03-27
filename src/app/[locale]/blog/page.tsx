import type { Metadata } from "next";
import BlogPostCard from "@/components/BlogPostCard";
import { getBlogPosts } from "@/data/blog";
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
    title: t.nav.blog,
    description: t.blogIntro,
    alternates: buildAlternates(locale, "blog"),
    openGraph: {
      title: `${t.nav.blog} | ${t.siteName}`,
      description: t.blogIntro,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];
  const posts = getBlogPosts(locale);

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {t.nav.blog}
        </h1>
        <p className="text-lg text-white/70">{t.blogIntro}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-white/80">
            {t.blogEmpty}
          </div>
        ) : (
          posts.map((post) => (
            <BlogPostCard
              key={post.slug}
              post={post}
              locale={locale}
              readMoreLabel={t.labels.blogReadMore}
            />
          ))
        )}
      </section>
    </div>
  );
}
