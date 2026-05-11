"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n";

type CookieConsentProps = {
  locale: Locale;
  message: string;
  acceptLabel: string;
  declineLabel: string;
};

const STORAGE_KEY = "ge-cookie-consent";
const CONSENT_CHANGE_EVENT = "ge-cookie-consent-change";

export default function CookieConsent({
  locale,
  message,
  acceptLabel,
  declineLabel,
}: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function handleChoice(accepted: boolean) {
    const consent = accepted ? "accepted" : "declined";

    localStorage.setItem(STORAGE_KEY, consent);
    window.dispatchEvent(
      new CustomEvent(CONSENT_CHANGE_EVENT, { detail: { consent } }),
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/95 px-6 py-4 shadow-2xl backdrop-blur sm:flex-row sm:justify-between">
        <p className="text-sm text-white/70">
          {message}{" "}
          <Link
            href={`/${locale}/privacy-policy`}
            className="underline text-amber-200/80 hover:text-amber-200"
          >
            {locale === "pt-br" ? "Saiba mais" : "Learn more"}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => handleChoice(false)}
            className="rounded-full border border-white/10 px-4 py-1.5 text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white/80"
          >
            {declineLabel}
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="rounded-full border border-amber-200/40 bg-linear-to-r from-amber-400/20 to-pink-400/20 px-4 py-1.5 text-sm font-semibold text-amber-100 transition hover:border-amber-200/70 hover:text-white"
          >
            {acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
