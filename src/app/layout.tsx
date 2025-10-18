import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import "./globals.css";
import AnalyticsWrapper from "@/utils/AnalyticsWrapper";
import localFont from "next/font/local";
import Script from 'next/script';
import JQueryProvider from '@/utils/jQueryProvider';
import "./vendor.css";
import { sewaroTattooServicesStructuredData, sewaroTattooSpecialtiesStructuredData, sewaroTattooStructuredData } from '@/constants';

const oswald = localFont({
  src: [
    {
      path: "../../public/fonts/oswald/Oswald-200.woff2",
      weight: "200",
      style: "normal"
    },
    {
      path: "../../public/fonts/oswald/Oswald-300.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../public/fonts/oswald/Oswald-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/oswald/Oswald-500.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/oswald/Oswald-600.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/oswald/Oswald-700.woff2",
      weight: "700",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-oswald'
});

const raleway = localFont({
  src: [
    {
      path: "../../public/fonts/raleway/Raleway-100.woff2",
      weight: "100",
      style: "normal"
    },
    {
      path: "../../public/fonts/raleway/Raleway-200.woff2",
      weight: "200",
      style: "normal"
    },
    {
      path: "../../public/fonts/raleway/Raleway-300.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../public/fonts/raleway/Raleway-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/raleway/Raleway-500.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/raleway/Raleway-600.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/raleway/Raleway-700.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/fonts/raleway/Raleway-800.woff2",
      weight: "800",
      style: "normal"
    },
    {
      path: "../../public/fonts/raleway/Raleway-900.woff2",
      weight: "900",
      style: "normal"
    },
    {
      path: "../../public/fonts/raleway/Raleway-100-Italic.woff2",
      weight: "100",
      style: "italic"
    },
    {
      path: "../../public/fonts/raleway/Raleway-200-Italic.woff2",
      weight: "200",
      style: "italic"
    },
    {
      path: "../../public/fonts/raleway/Raleway-300-Italic.woff2",
      weight: "300",
      style: "italic"
    },
    {
      path: "../../public/fonts/raleway/Raleway-Italic.woff2",
      weight: "400",
      style: "italic"
    },
    {
      path: "../../public/fonts/raleway/Raleway-500-Italic.woff2",
      weight: "500",
      style: "italic"
    },
    {
      path: "../../public/fonts/raleway/Raleway-600-Italic.woff2",
      weight: "600",
      style: "italic"
    },
    {
      path: "../../public/fonts/raleway/Raleway-700-Italic.woff2",
      weight: "700",
      style: "italic"
    },
    {
      path: "../../public/fonts/raleway/Raleway-800-Italic.woff2",
      weight: "800",
      style: "italic"
    },
    {
      path: "../../public/fonts/raleway/Raleway-900-Italic.woff2",
      weight: "900",
      style: "italic"
    },
  ],
  display: 'swap',
  variable: '--font-raleway'
});

const rozhaOne = localFont({
  src: [
    {
      path: "../../public/fonts/rozha-one/RozhaOne-Regular.woff2",
      weight: "400",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-rozhaOne'
});

export const metadata: Metadata = {
  title: "Sewaro Tattoo - Professional Tattoo Studio in Nepal | Birtamode, Itahari, Damak & Lalitpur",
  description: "Sewaro Tattoo offers professional tattoo services across Nepal with studios in Birtamode, Itahari, Damak, and Jawalakhel, Lalitpur. Expert tattoo artists specializing in custom tattoos, cover-ups, traditional designs, modern art, piercing, and tattoo aftercare in hygienic, creative studios.",
  keywords: [
    "Sewaro Tattoo",
    "tattoo studio Nepal",
    "tattoo artist Birtamode",
    "tattoo artist Itahari",
    "tattoo artist Damak",
    "tattoo artist Lalitpur",
    "tattoo Jawalakhel",
    "custom tattoo Nepal",
    "professional tattoo artist",
    "best tattoo studio Birtamode",
    "best tattoo studio Itahari",
    "best tattoo studio Damak",
    "best tattoo studio Lalitpur",
    "traditional tattoo Nepal",
    "modern tattoo designs",
    "tattoo cover up",
    "small tattoo",
    "large tattoo",
    "color tattoo",
    "black and grey tattoo",
    "tattoo piercing",
    "body art Nepal",
    "tattoo aftercare",
    "hygienic tattoo studio",
    "affordable tattoo Nepal",
    "portrait tattoo",
    "geometric tattoo",
    "tribal tattoo",
    "realistic tattoo",
    "minimalist tattoo",
    "Sewaro Tattoo Nepal"
  ],
  authors: [{ name: "Sewaro Tattoo" }],
  creator: "Sewaro Tattoo",
  publisher: "Sewaro Tattoo",
  metadataBase: new URL("https://sewarotattoo.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon.ico',
        sizes: '32x32'
      },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: "Sewaro Tattoo - Professional Tattoo Studio in Nepal",
    description: "Expert tattoo artists in Birtamode, Itahari, Damak, and Jawalakhel (Lalitpur) offering custom tattoos, cover-ups, piercings, and professional body art in hygienic, creative studios.",
    type: "website",
    locale: "en_US",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "Sewaro Tattoo",
    images: [
      {
        url: "/images/preview.webp",
        width: 1200,
        height: 630,
        alt: "Sewaro Tattoo Studio Preview",
      }
    ],
  },
  category: "art",
  classification: "Tattoo Studio",
  referrer: "origin-when-cross-origin",
  applicationName: "Sewaro Tattoo",
  generator: "Next.js",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <script
          type="application/ld+json"
          // "dangerouslySetInnerHTML" is a way to inject raw HTML content into a React component.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sewaroTattooStructuredData),  // "__html" property accepts raw HTML/text
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sewaroTattooServicesStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sewaroTattooSpecialtiesStructuredData),
          }}
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script id="check-plugins" strategy="afterInteractive">
          {`
    console.log('jQuery loaded:', typeof window.$ !== 'undefined');
    console.log('easyPieChart loaded:', typeof window.$.fn.easyPieChart !== 'undefined');
  `}
        </Script>
      </head>

      <body
        className={`${oswald.variable} ${raleway.variable} ${rozhaOne.variable}`}
        suppressHydrationWarning={true}
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
      >
        <JQueryProvider>
          {children}
        </JQueryProvider>
        <AnalyticsWrapper />

        <Script
          src="/js/plugins.js"
          strategy="afterInteractive"
        />
      </body>

    </html>
  );
}
