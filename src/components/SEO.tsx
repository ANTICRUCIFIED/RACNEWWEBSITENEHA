import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  type?: 'website' | 'article';
}

export default function SEO({ title, description, keywords, canonical, type = 'website' }: SEOProps) {
  const fullTitle = `${title} | RAC Forge`;
  const siteUrl = "https://www.racforge.com"; 
  const defaultKeywords = "racforge, rac forge, USFDA, FDA, CDSCO, EU MDR, MDR, ANVISA, Medical Device Regulation, Regulatory Consulting, Medical Device License, India, USA, Europe, Brazil";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? "Article" : "Organization",
    "name": "RAC FORGE PRIVATE LIMITED",
    "alternateName": "RAC Forge",
    "url": siteUrl,
    "logo": "https://i.ibb.co/WNtHVDps/Whats-App-Image-2025-08-31-at-21-09-34-54925d9d.jpg",
    "description": description,
    "identifier": {
      "@type": "PropertyValue",
      "name": "D-U-N-S Number",
      "value": "771970978"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11, 1 Village Nanehar, Thural, Thural, Jaisinghpur Kangra",
      "addressLocality": "Jaisinghpur",
      "addressRegion": "Himachal Pradesh",
      "postalCode": "176107",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 62396 99077",
      "contactType": "customer service",
      "email": "info@racforge.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/racforge",
      "https://twitter.com/racforge",
      "https://www.linkedin.com/company/racforge",
      "https://www.instagram.com/racforge"
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${siteUrl}${canonical || ""}`} />
      <meta property="og:site_name" content="RAC Forge" />
      <meta property="og:image" content="https://i.postimg.cc/yxYBn7fb/banner.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://i.postimg.cc/yxYBn7fb/banner.png" />
      <meta name="twitter:site" content="@racforge" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
