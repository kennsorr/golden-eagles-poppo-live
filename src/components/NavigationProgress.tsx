"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const lastPathRef = useRef(pathname);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (lastPathRef.current !== pathname) {
      lastPathRef.current = pathname;
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
      fadeTimer.current = setTimeout(() => setIsNavigating(false), 120);
    }
    return () => {
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;
      if (link.target && link.target !== "" && link.target !== "_self") return;
      if (link.hasAttribute("download")) return;
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      let nextPath = href;
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) return;
        nextPath = url.pathname + url.search;
      } catch {
        return;
      }

      if (nextPath === pathname) return;

      setIsNavigating(true);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return (
    <div
      aria-hidden
      className={`nav-progress${isNavigating ? " nav-progress--active" : ""}`}
    >
      <div className="nav-progress__bar" />
    </div>
  );
}
