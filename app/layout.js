import { Inter } from "next/font/google";
import "./globals.css";

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

      </head>
      <body className={inter.className}>{children}

        
      </body>
    </html>
  );
}
