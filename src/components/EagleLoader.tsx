import { EAGLE_LOADER_LOGO_SRC } from "@/lib/eagleLoaderAsset";

export default function EagleLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-6"
    >
      <div className="eagle-loader">
        <span className="eagle-loader__halo" aria-hidden />
        <span className="eagle-loader__ring" aria-hidden />
        <span
          className="eagle-loader__sparkle eagle-loader__sparkle--a"
          aria-hidden
        />
        <span
          className="eagle-loader__sparkle eagle-loader__sparkle--b"
          aria-hidden
        />
        <span
          className="eagle-loader__sparkle eagle-loader__sparkle--c"
          aria-hidden
        />
        <img
          src={EAGLE_LOADER_LOGO_SRC}
          alt=""
          width={96}
          height={96}
          className="eagle-loader__bird"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          aria-hidden
        />
      </div>
      <p className="eagle-loader__text">Loading</p>
    </div>
  );
}
