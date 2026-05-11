import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Locale } from "@/lib/i18n";

type BlogPostCardProps = {
  post: BlogPost;
  locale: Locale;
  readMoreLabel: string;
};

export default function BlogPostCard({
  post,
  locale,
  readMoreLabel,
}: BlogPostCardProps) {
  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group block h-full cursor-pointer rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
    >
      <article className="h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-lg shadow-black/20 transition group-hover:border-amber-200/20">
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-64 w-full rounded-b-3xl object-cover sm:h-72 md:h-80"
            loading="lazy"
          />
        )}
        <div className="flex flex-col gap-3 p-6">
          <time className="text-xs uppercase tracking-widest text-amber-200/60">
            {new Date(post.date).toLocaleDateString(
              locale === "pt-br" ? "pt-BR" : "en-US",
              { year: "numeric", month: "long", day: "numeric" },
            )}
          </time>
          <h3 className="text-xl font-semibold text-white transition group-hover:text-amber-100">
            {post.title}
          </h3>
          <p className="text-sm leading-relaxed text-white/60">
            {post.excerpt}
          </p>
          <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-amber-200/80 transition group-hover:text-amber-200">
          {readMoreLabel}
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
          </span>
        </div>
      </article>
    </Link>
  );
}
