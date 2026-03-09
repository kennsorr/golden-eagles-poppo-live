import type { StrapiApp } from '@strapi/strapi/admin';
import { createElement, useState } from 'react';

const SHOP_ITEM_MODEL = 'api::shop-item.shop-item';

type EditViewContext = {
  model: string;
  document?: { link?: string; title?: string; imageUrl?: string } | null;
  documentId?: string;
  collectionType: string;
  activeTab: string | null;
  meta?: unknown;
};

function ShopItemFetchPanel(props: EditViewContext) {
  const { model, document } = props;
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<{
    title?: string | null;
    imageUrl?: string | null;
    description?: string | null;
    error?: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  if (model !== SHOP_ITEM_MODEL) {
    return createElement('div', null, null);
  }

  const handleFetch = async (fetchUrl: string) => {
    if (!fetchUrl.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(
        `/api/shop-items/fetch-preview?url=${encodeURIComponent(fetchUrl.trim())}`
      );
      const data = await res.json();
      if (!res.ok) {
        setResult({ error: data?.error || 'Fetch failed' });
        return;
      }
      setResult(data);
    } catch (e) {
      setResult({
        error: e instanceof Error ? e.message : 'Fetch failed',
      });
    } finally {
      setLoading(false);
    }
  };

  const linkFromForm = document?.link?.trim() || '';

  const content = (
    <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <p style={{ margin: 0, fontSize: 13, color: '#666' }}>
        Paste a product URL (e.g. Amazon) to fetch title and image from the page.
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <input
          type="url"
          placeholder="https://..."
          value={url || linkFromForm}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleFetch((url || linkFromForm) || '')}
          style={{
            flex: 1,
            minWidth: 120,
            padding: '6px 10px',
            fontSize: 13,
            border: '1px solid #e0e0e0',
            borderRadius: 4,
          }}
        />
        <button
          type="button"
          onClick={() => handleFetch(url || linkFromForm)}
          disabled={loading || !(url || linkFromForm)}
          style={{
            padding: '6px 12px',
            fontSize: 13,
            background: '#4945ff',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: loading ? 'wait' : 'pointer',
          }}
        >
          {loading ? 'Fetching…' : 'Fetch'}
        </button>
      </div>
      {result?.error && (
        <p style={{ margin: 0, fontSize: 12, color: '#b02b2b' }}>{result.error}</p>
      )}
      {result && !result.error && (
        <div style={{ fontSize: 12, color: '#32324d' }}>
          {result.title && (
            <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{result.title}</p>
          )}
          {result.imageUrl && (
            <img
              src={result.imageUrl}
              alt=""
              style={{ maxWidth: '100%', maxHeight: 120, objectFit: 'contain', marginTop: 4 }}
            />
          )}
          <p style={{ margin: '8px 0 0', fontSize: 11, color: '#666' }}>
            Save the entry to apply these values (or paste the link and save to auto-fill).
          </p>
        </div>
      )}
    </div>
  );

  return content;
}

function FetchPreviewPanelReducer(ctx: EditViewContext) {
  return {
    title: 'Fetch preview',
    content: createElement(ShopItemFetchPanel, ctx),
  };
}

function createShopItemHeaderAction(context: EditViewContext) {
  if (context.model !== SHOP_ITEM_MODEL) return null;
  const link = context.document?.link?.trim?.();
  return {
    label: 'Fetch from URL',
    disabled: !link,
    onClick: async () => {
      if (!link) return;
      try {
        const res = await fetch(
          `/api/shop-items/fetch-preview?url=${encodeURIComponent(link)}`
        );
        const data = await res.json();
        if (res.ok) {
          window.alert(
            `Fetched:\nTitle: ${data.title ?? '(none)'}\nImage: ${data.imageUrl ? 'Yes' : 'No'}\n\nSave the entry to apply, or use the "Fetch preview" panel to paste a URL.`
          );
        } else {
          window.alert(data?.error || 'Fetch failed');
        }
      } catch (e) {
        window.alert(e instanceof Error ? e.message : 'Fetch failed');
      }
    },
  };
}

export default {
  config: {
    locales: [],
  },
  bootstrap(app: StrapiApp) {
    const apis = app.getPlugin('content-manager')?.apis as
      | {
          addEditViewSidePanel?: (
            panels:
              | ((ctx: EditViewContext) => { title: string; content: React.ReactNode })
              | Array<(ctx: EditViewContext) => { title: string; content: React.ReactNode }>
          ) => void;
          addDocumentHeaderAction?: (
            actions:
              | ((ctx: EditViewContext) => { label: string; disabled?: boolean; onClick?: () => void } | null)
              | Array<(ctx: EditViewContext) => { label: string; disabled?: boolean; onClick?: () => void } | null>
          ) => void;
        }
      | undefined;

    // Disabled: these caused "React.Children.only expected to receive a single React element child"
    // on the Shop Item create/edit view. Fetch-on-save (lifecycle) still works without them.
    // if (apis?.addEditViewSidePanel) {
    //   apis.addEditViewSidePanel([FetchPreviewPanelReducer]);
    // }
    // if (apis?.addDocumentHeaderAction) {
    //   apis.addDocumentHeaderAction([
    //     (ctx) => createShopItemHeaderAction(ctx as EditViewContext),
    //   ]);
    // }
  },
};
