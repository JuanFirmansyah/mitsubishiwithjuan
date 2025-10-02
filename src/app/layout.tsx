// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 OPTIMIZED METADATA UNTUK MITSUBISHI WITH JUAN MAKASSAR
export const metadata: Metadata = {
  title: {
    default: "Mitsubishi With Juan Makassar | Dealer Resmi Mitsubishi Terpercaya",
    template: "%s | Mitsubishi With Juan Makassar"
  },
  description: "Dealer Resmi Mitsubishi di Makassar. Juan siap membantu Anda memiliki Mitsubishi Xforce, Xpander, Pajero Sport dengan harga terbaik dan promo spesial Sulawesi!",
  keywords: "mitsubishi makassar, dealer mitsubishi makassar, mitsubishi with juan, xpander makassar, xforce makassar, pajero sport makassar, kredit mobil makassar",
  authors: [{ name: "Mitsubishi With Juan" }],
  creator: "Mitsubishi With Juan",
  publisher: "Mitsubishi With Juan",
  formatDetection: {
    email: false,
    address: false,
    telephone: true, // 🔥 AKTIFKAN UNTUK MOBILE
  },
  metadataBase: new URL('https://mitsubishiwithjuan.com'),
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/',
    },
  },
  openGraph: {
    title: "Mitsubishi With Juan Makassar - Dealer Resmi Mitsubishi",
    description: "Juan siap membantu Anda memiliki Mitsubishi impian di Makassar. Promo khusus wilayah Sulawesi!",
    url: 'https://mitsubishiwithjuan.com',
    siteName: 'Mitsubishi With Juan',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mitsubishi With Juan - Dealer Resmi Mitsubishi Makassar',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mitsubishi With Juan Makassar",
    description: "Dealer Resmi Mitsubishi di Makassar - Harga Terbaik Sulawesi",
    images: ['/og-image.jpg'],
    creator: '@mitsubishiwithjuan',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* 🔥 SCHEMA MARKUP UNTUK CAR DEALER MAKASSAR */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CarDealer",
              "name": "Mitsubishi With Juan",
              "description": "Dealer Resmi Mitsubishi Terpercaya di Makassar - Melayani Wilayah Sulawesi",
              "url": "https://mitsubishiwithjuan.com",
              "telephone": "+6282343057060",
              "email": "juan@mitsubishiwithjuan.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Urip Sumoharjo No. 123",
                "addressLocality": "Makassar",
                "addressRegion": "Sulawesi Selatan",
                "postalCode": "90231",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-5.147665",
                "longitude": "119.432731"
              },
              "openingHours": [
                "Mo-Fr 08:00-17:00",
                "Sa 08:00-15:00",
                "Su 09:00-12:00"
              ],
              "priceRange": "Rp 250.000.000 - Rp 650.000.000",
              "image": [
                "https://mitsubishiwithjuan.com/og-image.jpg",
                "https://mitsubishiwithjuan.com/showroom.jpg"
              ],
              "brand": {
                "@type": "Brand",
                "name": "Mitsubishi Motors"
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Car",
                    "name": "Mitsubishi Xforce Ultimate CVT 2025",
                    "brand": "Mitsubishi",
                    "bodyType": "SUV"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Car",
                    "name": "Mitsubishi Xpander Ultimate CVT 2025",
                    "brand": "Mitsubishi", 
                    "bodyType": "MPV"
                  }
                }
              ],
              "areaServed": {
                "@type": "State",
                "name": "Sulawesi Selatan"
              },
              "sameAs": [
                "https://www.instagram.com/mitsubishiwithjuan",
                "https://www.facebook.com/mitsubishiwithjuan"
              ]
            })
          }}
        />

        {/* 🔥 SCHEMA LOCAL BUSINESS UNTUK MAKASSAR */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutomotiveBusiness", 
              "name": "Mitsubishi With Juan",
              "image": "https://mitsubishiwithjuan.com/logo.png",
              "@id": "https://mitsubishiwithjuan.com",
              "url": "https://mitsubishiwithjuan.com",
              "telephone": "+6282343057060",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Urip Sumoharjo No. 123",
                "addressLocality": "Makassar",
                "addressRegion": "Sulawesi Selatan", 
                "postalCode": "90231",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-5.147665",
                "longitude": "119.432731"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification", 
                  "dayOfWeek": ["Saturday"],
                  "opens": "08:00",
                  "closes": "15:00"
                }
              ],
              "areaServed": {
                "@type": "City",
                "name": "Makassar"
              }
            })
          }}
        />

        {/* 🔥 PERSON SCHEMA UNTUK BRANDING "JUAN" */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Juan",
              "worksFor": {
                "@type": "Organization",
                "name": "Mitsubishi With Juan"
              },
              "jobTitle": "Mitsubishi Consultant",
              "telephone": "+6282343057060",
              "url": "https://mitsubishiwithjuan.com",
              "image": "https://mitsubishiwithjuan.com/juan-profile.jpg",
              "description": "Juan - Konsultan Mitsubishi profesional di Makassar yang siap membantu Anda memiliki mobil Mitsubishi impian dengan pelayanan terbaik."
            })
          }}
        />

        {/* 🔥 FAVICON & ICONS */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}