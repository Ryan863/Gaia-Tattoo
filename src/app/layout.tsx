import type { Metadata, Viewport } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SITE_URL = "https://gaia-tattoo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Gaia Tattoo, Piercing & Bar | Estúdio e Bar Alternativo em Rio do Sul - SC",
  description:
    "Estúdio completo de tatuagem e piercing, bar com cerveja gelada, drinks e shot Disco Voador, sinuca, karaokê e música ao vivo. O ponto de encontro da cena alternativa em Rio do Sul - SC.",
  keywords: [
    "tatuagem Rio do Sul",
    "piercing Rio do Sul",
    "bar alternativo Rio do Sul",
    "Gaia Tattoo",
    "sinuca e karaokê Rio do Sul",
  ],
  openGraph: {
    title: "Gaia Tattoo, Piercing & Bar — Arte na pele. Cultura na noite.",
    description:
      "Tattoo, piercing, bar, bilhar, karaokê e música ao vivo em Rio do Sul - SC.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/assets/hero-desktop.png", width: 1024, height: 572 }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0c0a09",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["TattooParlor", "BarOrPub"],
  name: "Gaia Tattoo, Piercing & Bar",
  description:
    "Estúdio de tatuagem e piercing com bar alternativo, sinuca, karaokê e música ao vivo.",
  url: SITE_URL,
  telephone: "+554735226052",
  image: `${SITE_URL}/assets/hero-desktop.png`,
  sameAs: [
    "https://www.instagram.com/gaiatattoorsl",
    "https://www.facebook.com/gaiatattoorSL/",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Pres. Kennedy, 383",
    addressLocality: "Rio do Sul",
    addressRegion: "SC",
    postalCode: "89160-190",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "14:00",
      closes: "02:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "170",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${anton.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
