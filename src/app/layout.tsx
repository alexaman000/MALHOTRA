import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malhotra Estates | Luxury Real Estate Consultant in Gurugram",
  description: "Premium Residential, Commercial & Investment Properties in Gurugram. Buy, Sell, and Invest in luxury real estate with Malhotra Estates.",
  metadataBase: new URL("https://www.malhotraestates.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Malhotra Estates | Luxury Real Estate Consultant in Gurugram",
    description: "Find Your Dream Property With Malhotra Estates. Premium Residential, Commercial & Investment Properties in Gurugram.",
    url: "https://www.malhotraestates.com",
    siteName: "Malhotra Estates",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Malhotra Estates Luxury Properties",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malhotra Estates | Luxury Real Estate Consultant",
    description: "Premium Residential, Commercial & Investment Properties in Gurugram.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Malhotra Estates",
  "image": "https://www.malhotraestates.com/logo.png",
  "telephone": "+919355211735",
  "url": "https://www.malhotraestates.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 83",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122012",
    "addressCountry": "IN"
  },
  "priceRange": "$$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased no-scrollbar`}
    >
      <body className="min-h-full flex flex-col bg-black-main text-white selection:bg-gold selection:text-black-main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
