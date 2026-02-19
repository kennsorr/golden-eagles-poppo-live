import PollCard, { PollItem } from "@/components/PollCard";
import { copy } from "@/lib/copy";
import { Locale } from "@/lib/i18n";

type StrapiPollOption = {
  id: number;
  label?: string | null;
  votes?: number | null;
};

type StrapiPoll = {
  id: number;
  title?: string | null;
  active?: boolean | null;
  endsAt?: string | null;
  options?: StrapiPollOption[] | null;
  attributes?: {
    title?: string | null;
    active?: boolean | null;
    endsAt?: string | null;
    options?: StrapiPollOption[] | null;
  };
};

async function fetchPolls() {
  const baseUrl = process.env.STRAPI_URL;
  const token = process.env.STRAPI_API_TOKEN;

  if (!baseUrl || !token) {
    throw new Error("Missing STRAPI_URL or STRAPI_API_TOKEN");
  }

  const url = new URL("/api/polls", baseUrl);
  url.searchParams.set("sort", "createdAt:desc");
  url.searchParams.set("populate", "options");

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch polls: ${response.status}`);
  }

  const data = (await response.json()) as { data: StrapiPoll[] };

  return data.data.map<PollItem>((poll) => {
    const rawOptions = poll.attributes?.options ?? poll.options ?? [];
    return {
      id: poll.id,
      title: poll.attributes?.title ?? poll.title ?? "",
      active: poll.attributes?.active ?? poll.active ?? true,
      endsAt: poll.attributes?.endsAt ?? poll.endsAt ?? null,
      options: rawOptions
        .filter((option): option is StrapiPollOption => Boolean(option))
        .map((option) => ({
          id: option.id,
          label: option.label ?? "",
          votes: option.votes ?? 0,
        })),
    };
  });
}

export default async function PollsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];
  let polls: PollItem[] = [];
  let errorMessage: string | null = null;

  try {
    polls = await fetchPolls();
  } catch {
    errorMessage =
      locale === "pt-br"
        ? "Não foi possível carregar as enquetes agora. Tente novamente em alguns instantes."
        : "We couldn't load polls right now. Please try again in a moment.";
  }

  const localeForDate = locale === "pt-br" ? "pt-BR" : "en-US";

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">
          {t.sections.polls}
        </p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {t.nav.polls}
        </h1>
        <p className="text-lg text-white/70">{t.pollsIntro}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {errorMessage ? (
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-white/80">
            {errorMessage}
          </div>
        ) : polls.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-white/80">
            {t.pollsEmpty}
          </div>
        ) : (
          polls.map((poll) => (
            <PollCard
              key={poll.id}
              poll={poll}
              locale={localeForDate}
              labels={{
                status: t.labels.pollStatus,
                endsAt: t.labels.pollEndsAt,
                open: t.labels.pollOpen,
                closed: t.labels.pollClosed,
                votes: t.labels.pollVotes,
                submit: t.labels.pollSubmit,
                selected: t.labels.pollSelected,
                firstName: t.labels.pollFirstName,
                lastName: t.labels.pollLastName,
              }}
            />
          ))
        )}
      </section>
    </div>
  );
}
