type StrapiPollOption = {
  id: number;
  label?: string | null;
  votes?: number | null;
};

type StrapiImage = {
  url?: string | null;
  alternativeText?: string | null;
  width?: number | null;
  height?: number | null;
};

type StrapiPoll = {
  id: number;
  title?: string | null;
  active?: boolean | null;
  endsAt?: string | null;
  image?: StrapiImage | null;
  options?: StrapiPollOption[] | null;
  attributes?: {
    title?: string | null;
    active?: boolean | null;
    endsAt?: string | null;
    image?:
      | StrapiImage
      | { data?: { attributes?: StrapiImage } | null }
      | null;
    options?: StrapiPollOption[] | null;
  };
};

type StrapiEvent = {
  id: number;
  title?: string | null;
  time?: string | null;
  attributes?: {
    title?: string | null;
    time?: string | null;
  };
};

function getStrapiConfig() {
  const baseUrl = process.env.STRAPI_URL;
  const token = process.env.STRAPI_API_TOKEN;
  if (!baseUrl || !token) return null;
  return { baseUrl, token };
}

export type ActivePoll = { id: number; title: string };
export type UpcomingEvent = { id: number; title: string; time: string };

export async function fetchActivePolls(): Promise<ActivePoll[]> {
  const config = getStrapiConfig();
  if (!config) return [];

  try {
    const url = new URL("/api/polls", config.baseUrl);
    url.searchParams.set("sort", "createdAt:desc");
    url.searchParams.set("populate[0]", "options");

    const response = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${config.token}` },
      cache: "no-store",
    });

    if (!response.ok) return [];

    const data = (await response.json()) as { data: StrapiPoll[] };
    const now = Date.now();

    return data.data
      .filter((poll) => {
        const active = poll.attributes?.active ?? poll.active ?? true;
        if (!active) return false;
        const endsAt = poll.attributes?.endsAt ?? poll.endsAt ?? null;
        if (!endsAt) return true;
        const end = new Date(endsAt);
        if (Number.isNaN(end.getTime())) return true;
        return now < end.getTime();
      })
      .map((poll) => ({
        id: poll.id,
        title: poll.attributes?.title ?? poll.title ?? "",
      }));
  } catch {
    return [];
  }
}

export async function fetchUpcomingEvents(): Promise<UpcomingEvent[]> {
  const config = getStrapiConfig();
  if (!config) return [];

  try {
    const url = new URL("/api/events", config.baseUrl);
    url.searchParams.set("sort", "time:asc");
    url.searchParams.set("populate", "*");

    const response = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${config.token}` },
      cache: "no-store",
    });

    if (!response.ok) return [];

    const data = (await response.json()) as { data: StrapiEvent[] };
    const now = Date.now();

    return data.data
      .filter((event) => {
        const time = event.attributes?.time ?? event.time ?? null;
        if (!time) return false;
        const eventTime = new Date(time);
        if (Number.isNaN(eventTime.getTime())) return false;
        return eventTime.getTime() > now;
      })
      .map((event) => ({
        id: event.id,
        title: event.attributes?.title ?? event.title ?? "",
        time: event.attributes?.time ?? event.time ?? "",
      }));
  } catch {
    return [];
  }
}
