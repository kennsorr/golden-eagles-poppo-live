import EventCard from "@/components/EventCard";
import { getEvents } from "@/data/events";
import { copy } from "@/lib/copy";
import { Locale } from "@/lib/i18n";

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];
  const events = getEvents(locale);

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
            key={event.title}
            event={event}
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
