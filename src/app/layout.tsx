import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import Analytics from "@/components/Analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golden Eagles | Poppo Live Agency",
  description:
    "Golden Eagles is a Poppo Live agency focused on community, events, and fun.",
  icons: {
    icon: "/golden-eagle-favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3776862700552324"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-white antialiased`}
        suppressHydrationWarning
      >
        {children}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
            <Suspense fallback={null}>
              <Analytics gaId={gaId} />
            </Suspense>
          </>
        ) : null}
      </body>
    </html>
  );
}
