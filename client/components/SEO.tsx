/**
 * @SEO.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  faq?: Array<{ question: string; answer: string }>;
}

export default function SEO({ title, description, keywords, ogImage, canonical, faq }: SEOProps) {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Synergy Asia WLL`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // JSON-LD for Organization & FAQ
    const schemaData: any = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Synergy Asia WLL",
        "url": window.location.origin,
        "logo": `${window.location.origin}/placeholder.svg`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+973 1750 0000",
          "contactType": "customer service"
        }
      }
    ];

    if (faq && faq.length > 0) {
      schemaData.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      });
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [title, description, keywords, faq]);

  return null;
}
