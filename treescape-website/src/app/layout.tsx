import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F8F5F0',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://treescapeliving.com'),
  title: {
    template: "Treescape Living | %s",
    default: "Treescape Living - Furniture Showroom in Bengaluru",
  },
  description: "Crafted by Nature • Styled for Living. Premium furniture showroom located in Sarjapur Road, Bengaluru.",
  openGraph: {
    title: "Treescape Living",
    description: "Premium furniture showroom located in Sarjapur Road, Bengaluru.",
    url: "https://treescapeliving.com",
    siteName: "Treescape Living",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Treescape Living Showroom",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "name": "Treescape Living",
  "image": "https://treescapeliving.com/og-image.jpg",
  "@id": "https://treescapeliving.com",
  "url": "https://treescapeliving.com",
  "telephone": "+917665554027",
  "email": "treescapeliving@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5/4, 2nd Floor, Rana City Complex, Opp. Prestige City, Yamare Village, Sarjapur Road",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "562125",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:30",
    "closes": "21:30"
  },
  "sameAs": [
    "https://www.instagram.com/treescapelivingg/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-cream text-deepBrown antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
