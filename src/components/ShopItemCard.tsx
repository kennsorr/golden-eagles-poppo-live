import ImageWithFallback from "./ImageWithFallback";

export type ShopItem = {
  id: number;
  link: string;
  title: string | null;
  imageUrl: string | null;
};

type ShopItemCardProps = {
  item: ShopItem;
};

export default function ShopItemCard({ item }: ShopItemCardProps) {
  const displayTitle = item.title?.trim() || "View product";

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex cursor-alias flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-lg shadow-black/20 transition hover:border-amber-300/30 hover:bg-slate-900/80"
    >
      <ImageWithFallback
        src={item.imageUrl ?? undefined}
        alt={displayTitle}
        className="h-44 w-full object-cover transition group-hover:opacity-95"
        loading="lazy"
      />
      <div className="flex flex-col gap-1 p-5">
        <h3 className="text-lg font-semibold text-white group-hover:text-amber-200">
          {displayTitle}
        </h3>
        <span className="text-sm text-amber-200/80">Open link →</span>
      </div>
    </a>
  );
}
