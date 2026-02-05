"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type AnalyticsProps = {
  gaId: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Analytics({ gaId }: AnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaId || !window.gtag) {
      return;
    }

    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag("config", gaId, { page_path: pagePath });
  }, [gaId, pathname, searchParams]);

  return null;
}
