/**
 * Shop Item lifecycles: when link is set, fetch OG data from the URL and fill
 * title/imageUrl before create/update. Always applies OG when returned (overwrites placeholders).
 */

const FRONTEND_URL =
  process.env.FRONTEND_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

async function fetchOgForUrl(url: string): Promise<{
  title: string | null;
  imageUrl: string | null;
  description: string | null;
} | null> {
  try {
    const fetchOgUrl = new URL('/api/fetch-og', FRONTEND_URL);
    fetchOgUrl.searchParams.set('url', url);
    const res = await fetch(fetchOgUrl.toString());
    if (!res.ok) return null;
    const data = (await res.json()) as {
      title?: string | null;
      imageUrl?: string | null;
      description?: string | null;
    };
    return {
      title: data.title ?? null,
      imageUrl: data.imageUrl ?? null,
      description: data.description ?? null,
    };
  } catch {
    return null;
  }
}

function applyOg(
  data: Record<string, unknown>,
  og: { title: string | null; imageUrl: string | null } | null
) {
  if (!og) return;
  if (og.title) data.title = og.title;
  if (og.imageUrl) data.imageUrl = og.imageUrl;
}

export { fetchOgForUrl, applyOg };

const lifecycles = {
  async beforeCreate(event: { params: { data: Record<string, unknown> } }) {
    const data = event.params.data;
    const link = typeof data?.link === 'string' ? data.link.trim() : '';
    if (!link) return;

    const og = await fetchOgForUrl(link);
    applyOg(data, og);
  },

  async beforeUpdate(event: { params: { data: Record<string, unknown> } }) {
    const data = event.params.data;
    const link = typeof data?.link === 'string' ? data.link.trim() : '';
    if (!link) return;

    const og = await fetchOgForUrl(link);
    applyOg(data, og);
  },
};

export default lifecycles;
