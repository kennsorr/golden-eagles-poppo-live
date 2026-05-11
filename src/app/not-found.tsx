import Link from "next/link";
import { headers } from "next/headers";
import SparkleBackground from "@/components/SparkleBackground";

export default async function NotFound() {
  const headersList = await headers();
  const lang = headersList.get("x-locale") ?? "pt-br";
  const isPt = lang === "pt-br";

  const title = isPt ? "Página Não Encontrada" : "Page Not Found";
  const body = isPt
    ? "A página que você procura não existe ou foi movida."
    : "The page you're looking for doesn't exist or has been moved.";
  const cta = isPt ? "Ir para o Início" : "Go Home";
  const locale = isPt ? "pt-br" : "en";

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white">
      <SparkleBackground />
      <div className="relative z-10 mx-auto max-w-md px-6 text-center">
        <p className="text-8xl font-bold text-amber-200/30">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">{title}</h1>
        <p className="mt-3 text-white/60">{body}</p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-200/40 bg-linear-to-r from-amber-400/20 via-amber-300/10 to-pink-400/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-amber-100 shadow-lg shadow-amber-400/20 transition hover:border-amber-200/70 hover:text-white"
        >
          {cta}
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
      </div>
    </div>
  );
}
