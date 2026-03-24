"use client";

import { useState } from "react";

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackClassName?: string;
};

const messages = [
  "Photo not found",
  "Eagle eye can't find this one",
  "Image flew away",
  "Gone with the wind",
];

function pickMessage(src?: string) {
  const seed = (src ?? "").length;
  return messages[seed % messages.length];
}

export default function ImageWithFallback({
  src,
  alt,
  className,
  fallbackClassName,
  ...rest
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (!src) return null;

  if (failed) {
    return (
      <div
        className={
          fallbackClassName ??
          `${className ?? ""} flex flex-col items-center justify-center bg-slate-800/80`
        }
        role="img"
        aria-label={alt ?? "Image unavailable"}
      >
        <img
          src="/images/golden-eagle-64x64.png"
          alt=""
          aria-hidden="true"
          className="h-12 w-12 opacity-25 grayscale"
        />
        <span className="mt-2 select-none text-xs tracking-wide text-white/25">
          {pickMessage(typeof src === "string" ? src : undefined)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
