import EventCard from "@/components/EventCard";
import { copy } from "@/lib/copy";
import { Locale } from "@/lib/i18n";

type StrapiEvent = {
  id: number;
  title?: string | null;
  time?: string | null;
  category?: string | null;
  host?: string | null;
  guest?: string | null;
  description?: string | null;
  attributes?: {
    title?: string | null;
    time?: string | null;
    category?: string | null;
    host?: string | null;
    guest?: string | null;
    description?: string | null;
    image?: {
      data?: { attributes?: { url?: string | null } } | null;
      url?: string | null;
    } | null;
  };
  image?: {
    data?: { attributes?: { url?: string | null } } | null;
    url?: string | null;
  } | null;
};

const localeMap: Record<Locale, string> = {
  en: "en",
  "pt-br": "pt-BR",
};

async function fetchEvents(locale: Locale) {
  const baseUrl = process.env.STRAPI_URL;
  const token = process.env.STRAPI_API_TOKEN;

  if (!baseUrl || !token) {
    throw new Error("Missing STRAPI_URL or STRAPI_API_TOKEN");
  }

  const baseRequest = async (includeLocale: boolean) => {
    const url = new URL("/api/events", baseUrl);
    url.searchParams.set("sort", "createdAt:desc");
    url.searchParams.set("populate", "*");
    if (includeLocale) {
      url.searchParams.set("locale", localeMap[locale]);
    }

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    return response;
  };

  let response = await baseRequest(true);
  if (!response.ok && response.status === 400) {
    response = await baseRequest(false);
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.status}`);
  }

  const data = (await response.json()) as { data: StrapiEvent[] };

  return data.data.map((event) => ({
    id: event.id,
    title: event.attributes?.title ?? event.title ?? "",
    time: event.attributes?.time ?? event.time ?? "",
    category: event.attributes?.category ?? event.category ?? "",
    host: event.attributes?.host ?? event.host ?? "",
    guest: event.attributes?.guest ?? event.guest ?? undefined,
    description: event.attributes?.description ?? event.description ?? undefined,
    imageUrl: (() => {
      const rawImage =
        event.attributes?.image?.data?.attributes?.url ??
        event.attributes?.image?.url ??
        event.image?.data?.attributes?.url ??
        event.image?.url ??
        null;

      if (!rawImage) {
        return undefined;
      }

      try {
        return new URL(rawImage, baseUrl).toString();
      } catch {
        return rawImage ?? undefined;
      }
    })(),
  }));
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];
  const events = await fetchEvents(locale);
  const localeForDate = locale === "pt-br" ? "pt-BR" : "en-US";

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">
          {t.sections.events}
        </p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {t.nav.events}
        </h1>
        <p className="text-lg text-white/70">{t.eventsIntro}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {events.map((event) => (
          <EventCard
            key={event.id ?? event.title}
            event={event}
            locale={localeForDate}
            labels={{
              time: t.labels.time,
              category: t.labels.category,
              host: t.labels.host,
              guest: t.labels.guest,
            }}
          />
        ))}
      </section>
    </div>
  );
}
