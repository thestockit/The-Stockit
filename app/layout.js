import { Inter } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup"; // ← ADD THIS IMPORT

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Stockit",
  description: "The Stockit is a digital agency offering services like web development, SEO, digital marketing, and video editing.",
  keywords: "digital agency, web development, SEO, digital marketing, video editing",
  author: "The Stockit",
  robots: "index, follow",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?=v4'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />

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