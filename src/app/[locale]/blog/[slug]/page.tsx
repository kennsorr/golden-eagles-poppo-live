import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getBlogPost, getAllBlogSlugs } from "@/data/blog";
import { copy } from "@/lib/copy";
import { locales, Locale } from "@/lib/i18n";
import { buildAlternates, getSiteUrl } from "@/lib/seo";

export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(locale, slug);
  if (!post) return {};

  const t = copy[locale];

  const ogImages = post.coverImage
    ? [{ url: `${getSiteUrl()}${post.coverImage}`, width: 1200, height: 630, alt: post.title }]
    : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: buildAlternates(locale, `blog/${slug}`),
    openGraph: {
      title: `${post.title} | ${t.siteName}`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${t.siteName}`,
      description: post.excerpt,
      images: ogImages?.map((img) => img.url),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getBlogPost(locale, slug);
  const t = copy[locale];

  if (!post) notFound();

  return (
    <div className="space-y-8">
      <div>
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200/70 transition hover:text-amber-200"
        >
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
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          {t.labels.blogBackToList}
        </Link>
      </div>

      <article className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-lg shadow-black/20">
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-72 w-full rounded-b-3xl object-cover sm:h-96 md:h-120"
          />
        )}
        <div className="p-8 md:p-12">
          <header className="mb-8 space-y-3">
            <time className="text-xs uppercase tracking-widest text-amber-200/60">
              {new Date(post.date).toLocaleDateString(
                locale === "pt-br" ? "pt-BR" : "en-US",
                { year: "numeric", month: "long", day: "numeric" },
              )}
            </time>
            <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              {post.title}
            </h1>
          </header>
          <MarkdownRenderer content={post.content} />
        </div>
      </article>
    </div>
  );
}
