import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  type?: 'website' | 'article';
  datePublished?: string;
  authorName?: string;
}

export default function SEO({ title, description, keywords, canonical, type = 'website', datePublished, authorName }: SEOProps) {
  const fullTitle = `${title} | RAC Forge Private Limited`;
  const siteUrl = "https://www.racforge.com"; 
  const defaultKeywords = "RAC Forge Private Limited, CDSCO medical device registration consultant India, SUGAM portal registration support, medical device compliance consulting India, medical device manufacturing license consultant, Form MD-5 MD-9 MD-14 registration, Class A B C D medical device consultant, ISO 13485 QMS certification India, medical device clinical trial coordinator India, Indian Authorized Representative, IAR consultant, medical device regulatory consulting firms, CDSCO Class B approval timelines, CDSCO Loan License MD-6 MD-10 consultant, medical device technical file preparation CDSCO, USFDA, fda 510(k) clearance consultant, EU MDR consultant India, CE marking medical devices India, medical device compliance consultant, regulatory affairs agency India";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "RAC Forge Private Limited",
    "url": siteUrl,
    "logo": "https://anticrucified.github.io/MyWebP_Images/images/logo.webp",
    "description": "RAC Forge Private Limited is an elite medical device regulatory and quality compliance consulting agency specializing in CDSCO registrations, USFDA 510(k), and EU MDR compliance.",
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
    "@id": `${siteUrl}/#website`,
    "name": "RAC Forge Private Limited",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Base schema is always Organization & WebSite
  const schemaList: any[] = [organizationSchema, websiteSchema];

  // If this is an article page, output a rich TechArticle schema targeting expert EEAT indexes
  if (type === 'article') {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${siteUrl}${canonical || ""}`
      },
      "headline": title,
      "description": description,
      "image": "https://anticrucified.github.io/MyWebP_Images/images/home-banner.webp",
      "datePublished": datePublished || new Date().toISOString(),
      "author": {
        "@type": "Person",
        "name": authorName || "Atul Sharma Sankhyayan",
        "jobTitle": "Director & Principal Consultant",
        "url": "https://www.linkedin.com/company/rac-forge/",
        "knowsAbout": ["Medical Devices Rules 2017", "CDSCO compliance", "Biocompatibility safety", "Software as a Medical Device (SaMD)", "Quality Management Systems (ISO 13485)"]
      },
      "publisher": {
        "@id": `${siteUrl}/#organization`
      },
      "inLanguage": "en-US"
    };
    schemaList.push(articleSchema);
  }

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
      <meta property="og:image" content="https://anticrucified.github.io/MyWebP_Images/images/home-banner.webp" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://anticrucified.github.io/MyWebP_Images/images/home-banner.webp" />
      <meta name="twitter:site" content="@racforge" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaList)}
      </script>
    </Helmet>
  );
}
