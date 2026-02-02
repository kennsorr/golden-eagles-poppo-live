import { EventItem } from "@/data/events";

type EventCardProps = {
  event: EventItem;
  labels: {
    time: string;
    category: string;
    host: string;
    guest: string;
  };
};

export default function EventCard({ event, labels }: EventCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white">{event.title}</h3>
        <div className="text-sm text-white/70">
          <span className="font-semibold text-white/80">{labels.time}:</span>{" "}
          {event.time}
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
      </div>
    </article>
  );
}
