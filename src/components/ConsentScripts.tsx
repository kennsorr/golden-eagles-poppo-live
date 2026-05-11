"use client";

import Script from "next/script";
import { Suspense, useEffect, useState } from "react";
import Analytics from "@/components/Analytics";

type ConsentScriptsProps = {
  gaId?: string;
};

type CookieConsentValue = "accepted" | "declined";

declare global {
  interface Window {
    dataLayer?: unknown[];
    adsbygoogle?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ADSENSE_CLIENT_ID = "ca-pub-3776862700552324";
const STORAGE_KEY = "ge-cookie-consent";
const CONSENT_CHANGE_EVENT = "ge-cookie-consent-change";

function hasAcceptedCookies() {
  return localStorage.getItem(STORAGE_KEY) === "accepted";
}

function updateGoogleConsent(isAccepted: boolean) {
  window.gtag?.("consent", "update", {
    ad_storage: isAccepted ? "granted" : "denied",
    analytics_storage: isAccepted ? "granted" : "denied",
    ad_user_data: isAccepted ? "granted" : "denied",
    ad_personalization: isAccepted ? "granted" : "denied",
  });
}

export default function ConsentScripts({ gaId }: ConsentScriptsProps) {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const storedAccepted = hasAcceptedCookies();

    updateGoogleConsent(storedAccepted);
    setAccepted(storedAccepted);

    function handleConsentChange(event: Event) {
      const customEvent = event as CustomEvent<{ consent: CookieConsentValue }>;
      const isAccepted = customEvent.detail?.consent === "accepted";

      updateGoogleConsent(isAccepted);
      setAccepted(isAccepted);
    }

    window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);

    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
    };
  }, []);

  if (!accepted) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-consented" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'update', {
                ad_storage: 'granted',
                analytics_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted'
              });
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
          <Suspense fallback={null}>
            <Analytics gaId={gaId} />
          </Suspense>
        </>
      ) : null}
    </>
  );
}
