export default function SchemaMarkup() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "DigitalMarketingAgency",
      "name": "The Stockit",
      "description": "The Stockit is a digital agency offering services like web development, SEO, digital marketing, and video editing.",
      "url": "https://thestockit.com",
      "logo": "https://thestockit.com/logo.png",
      "telephone": "+44-7360506217",
      "email": "info@thestockit.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Asian Business Center, First Floor",
        "addressLocality": "Bahria Town Phase 7",
        "addressRegion": "Rawalpindi",
        "postalCode": "46000",
        "addressCountry": "PK"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "33.5651",
          "longitude": "73.0169"
        },
        "geoRadius": "50000"
      },
      "services": [
        "Web Development",
        "SEO Services",
        "Digital Marketing",
        "Video Editing",
        "Content Creation"
      ],
      "priceRange": "$$",
      "sameAs": [
        "https://www.facebook.com/thestockit/",
        "https://pk.linkedin.com/company/the-stockit"
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }