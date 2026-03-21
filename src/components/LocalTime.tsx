"use client";

import { useEffect, useState } from "react";

type LocalTimeProps = {
  utcTime: string;
  locale: string;
  fallback?: string;
};

export default function LocalTime({ utcTime, locale, fallback }: LocalTimeProps) {
  const [formatted, setFormatted] = useState<string | null>(null);

  useEffect(() => {
    if (!utcTime) return;

    const date = new Date(utcTime);
    if (Number.isNaN(date.getTime())) {
      setFormatted(fallback ?? utcTime);
      return;
    }

    setFormatted(
      new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      }).format(date),
    );
  }, [utcTime, locale, fallback]);

  if (!formatted) {
    return <span>{fallback ?? utcTime}</span>;
  }

  return <span>{formatted}</span>;
}
