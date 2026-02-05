import { EventItem } from "@/data/events";

type EventCardProps = {
  event: EventItem;
  locale: string;
  labels: {
    time: string;
    category: string;
    host: string;
    guest: string;
  };
};

function formatEventTime(value: string, locale: string) {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function EventCard({ event, locale, labels }: EventCardProps) {
  const formattedTime = formatEventTime(event.time, locale);

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-lg shadow-black/20">
      {event.imageUrl ? (
        <img
          src={event.imageUrl}
          alt={event.title}
          className="h-44 w-full object-cover"
          loading="lazy"
        />
      ) : null}
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-xl font-semibold text-white">{event.title}</h3>
        <div className="text-sm text-white/70">
          <span className="font-semibold text-white/80">{labels.time}:</span>{" "}
          {formattedTime || event.time}
        </div>
        <div className="text-sm text-white/70">
          <span className="font-semibold text-white/80">
            {labels.category}:
          </span>{" "}
          {event.category}
        </div>
        <div className="text-sm text-white/70">
          <span className="font-semibold text-white/80">{labels.host}:</span>{" "}
          {event.host}
        </div>
        {event.guest ? (
          <div className="text-sm text-white/70">
            <span className="font-semibold text-white/80">{labels.guest}:</span>{" "}
            {event.guest}
          </div>
        ) : null}
        {event.description ? (
          <p className="text-sm text-white/70">{event.description}</p>
        ) : null}
      </div>
    </article>
  );
}
