import { Inter } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup"; // ← ADD THIS IMPORT

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://thestockit.com"),
  title: {
    default: "The Stockit",
    template: "%s | The Stockit",
  },
  description: "The Stockit is a digital agency offering services like web development, SEO, digital marketing, and video editing.",
  keywords: "digital agency, web development, SEO, digital marketing, video editing",
  author: "The Stockit",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?=v4'],
  },
  openGraph: {
    type: "website",
    siteName: "The Stockit",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload Keen Slider CSS */}
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" async as="style" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" async media="print" />
        
        {/* Bing search verification */}
        <meta name="msvalidate.01" content="7F776B3F3070C484B922BE380BAC3C4D" />
        {/* Google search verification */}
        <meta name="google-site-verification" content="2F1MJ6Euhoc4rS-al7sdV-7VB17pLQtY6mgURg-OxL0" />

        {/* 🚀 ADD SCHEMA MARKUP HERE */}
        <SchemaMarkup />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}