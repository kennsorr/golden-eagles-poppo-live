import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import ConsentScripts from "@/components/ConsentScripts";
import { getSiteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Golden Eagles | Poppo Live Agency",
    template: "%s | Golden Eagles",
  },
  description:
    "Golden Eagles is a Poppo Live agency focused on community, events, and fun. Join our streamers, PK battles, and live events.",
  keywords: [
    "Poppo Live",
    "Poppo Live agency",
    "Golden Eagles",
    "live streaming",
    "PK battles",
    "streamer community",
    "Poppo Live Brasil",
    "agência Poppo Live",
  ],
  icons: {
    icon: "/golden-eagle-favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Golden Eagles",
    title: "Golden Eagles | Poppo Live Agency",
    description:
      "Golden Eagles is a Poppo Live agency focused on community, events, and fun.",
    images: [{ url: "/images/golden-eagles-logo-s.png", width: 512, height: 512, alt: "Golden Eagles Logo" }],
  },
  twitter: {
    card: "summary",
    title: "Golden Eagles | Poppo Live Agency",
    description:
      "Golden Eagles is a Poppo Live agency focused on community, events, and fun.",
    images: ["/images/golden-eagles-logo-s.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  other: {
    "google-adsense-account": "ca-pub-3776862700552324",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Golden Eagles",
      url: siteUrl,
      logo: `${siteUrl}/images/golden-eagles-logo-s.png`,
      description:
        "Golden Eagles is a Poppo Live agency focused on community, events, and fun.",
      sameAs: ["https://www.poppo.com/@22071637"],
    },
    {
      "@type": "WebSite",
      name: "Golden Eagles",
      url: siteUrl,
      inLanguage: ["en", "pt-BR"],
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const headersList = await headers();
  const lang = headersList.get("x-locale") ?? "pt-br";

  return (
    <html lang={lang === "pt-br" ? "pt-BR" : lang} suppressHydrationWarning>
      <head>
        <script
          id="google-consent-default"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-white antialiased`}
        suppressHydrationWarning
      >
        {children}
        <ConsentScripts gaId={gaId} />
      </body>
    </html>
  );
}
