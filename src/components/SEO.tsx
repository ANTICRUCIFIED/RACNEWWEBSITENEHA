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
  const fullTitle = `${title} | RAC Forge Private Limited`;
  const siteUrl = "https://www.racforge.com"; 
  const defaultKeywords = "RAC Forge Private Limited, USFDA, FDA, CDSCO, EU MDR, MDR, ANVISA, Medical Device Regulation, Regulatory Consulting, Medical Device License, India, USA, Europe, Brazil, medical device regulatory consultant India, CDSCO registration consultant, USFDA 510(k) clearance consultant, medical device import license India, medical device manufacturing license CDSCO, EU MDR consultant India, SaMD regulatory consultant, CE marking medical devices India, ISO 13485 consultant India, medical device clinical trial consultant, CDSCO Sugam portal registration, medical device compliance consultant";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? "Article" : "Organization",
    "name": "RAC Forge Private Limited",
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
      "https://www.facebook.com/people/R-A-C-Forge-Private-Limited/61584695412489/",
      "https://twitter.com/RACForge",
      "https://www.linkedin.com/company/rac-forge/",
      "https://www.instagram.com/racforge/",
      "https://www.youtube.com/@RACForge"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RAC Forge Private Limited",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const schemaData = type === 'article' ? organizationSchema : [organizationSchema, websiteSchema];

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
      <meta property="og:site_name" content="RAC Forge Private Limited" />
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
