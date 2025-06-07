import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "@/providers/TranslationProvider";
import Analytics from '@/components/Analytics';
import UptimeStatus from '@/components/UptimeStatus';

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Відкриття замків Рівне — LockService, аварійне відкриття дверей 24/7",
  description: "Професійне відкриття замків у Рівному та області. Швидко, цілодобово, без пошкоджень. Телефонуйте: +380 93 285 14 11",
  keywords: "відкриття замків Рівне, аварійне відкриття дверей, майстер замків Рівне, цілодобово, швидко, доступно, відкриття авто, відкриття сейфів, замки Рівне",
  authors: [{ name: 'LockService' }],
  creator: 'LockService',
  publisher: 'LockService',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  metadataBase: new URL('https://lockservice.in'),
  alternates: {
    canonical: "https://lockservice.in/"
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  },
  themeColor: '#1e40af',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'LockService Рівне'
  },
  openGraph: {
    title: 'LockService - Професійні послуги відкриття замків',
    description: 'Швидке та професійне відкриття замків у Львові. 24/7. Гарантія якості. Доступні ціни.',
    url: 'https://lockservice.in',
    siteName: 'LockService',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LockService - Професійні послуги відкриття замків',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LockService - Професійні послуги відкриття замків',
    description: 'Швидке та професійне відкриття замків у Львові. 24/7. Гарантія якості. Доступні ціни.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="LockService Рівне" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="uk_UA" />
        <meta property="og:url" content="https://lockservice.in/" />
        <meta property="og:title" content="Відкриття замків Рівне — LockService, аварійне відкриття дверей 24/7" />
        <meta property="og:description" content="Професійне відкриття замків у Рівному та області. Швидко, цілодобово, без пошкоджень. Телефонуйте: +380 93 285 14 11" />
        <meta property="og:image" content="https://lockservice.in/images/lock-bg.svg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Відкриття замків Рівне — LockService, аварійне відкриття дверей 24/7" />
        <meta name="twitter:description" content="Професійне відкриття замків у Рівному та області. Швидко, цілодобово, без пошкоджень. Телефонуйте: +380 93 285 14 11" />
        <meta name="twitter:image" content="https://lockservice.in/images/lock-bg.svg" />
        <script type="application/ld+json" suppressHydrationWarning>{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "LockService Рівне",
            "image": {
              "@type": "ImageObject",
              "url": "https://lockservice.in/images/lock-bg.svg",
              "caption": "Логотип LockService - професійне відкриття замків"
            },
            "@id": "https://lockservice.in/",
            "url": "https://lockservice.in/",
            "telephone": "+380932851411",
            "email": "lockservice33000@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Рівне",
              "addressCountry": "UA",
              "streetAddress": "",
              "postalCode": ""
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 50.6199,
              "longitude": 26.2516
            },
            "description": "Професійне відкриття замків у Рівному та області. Швидко, цілодобово, без пошкоджень.",
            "openingHours": "00:00-23:59",
            "areaServed": "Рівне, Рівненська область",
            "priceRange": "UAH",
            "sameAs": [
              "https://t.me/lockservice33000_bot"
            ],
            "makesOffer": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Аварійне відкриття дверей" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Відкриття автомобілів" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Відкриття сейфів" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Встановлення та заміна замків" } }
            ]
          }
        `}</script>
      </head>
      <body className={inter.className}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
        <Analytics />
        <UptimeStatus />
      </body>
    </html>
  );
}
