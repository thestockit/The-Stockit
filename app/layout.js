import { Inter } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SITE } from "@/constant/site";
import { BUSINESS } from "@/Data/Seo/business";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: "The Stockit — Web Design & Digital Marketing Agency in Pakistan",
    template: "%s | TheStockIt Pakistan",
  },
  description: BUSINESS.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_PK",
    url: SITE.baseUrl,
    title: "The Stockit — Web Design & Digital Marketing Agency in Pakistan",
    description: BUSINESS.description,
    images: [
      {
        url: BUSINESS.ogImage,
        width: 1200,
        height: 630,
        alt: "The Stockit — Web Design & Digital Marketing in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Stockit — Web Design & Digital Marketing Agency in Pakistan",
    description: BUSINESS.description,
    images: [BUSINESS.ogImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Bing search verification */}
        <meta name="msvalidate.01" content="7F776B3F3070C484B922BE380BAC3C4D" />
        {/* Google search verification */}
        <meta name="google-site-verification" content="2F1MJ6Euhoc4rS-al7sdV-7VB17pLQtY6mgURg-OxL0" />

        <SchemaMarkup />
      </head>
      <body className={inter.className}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
