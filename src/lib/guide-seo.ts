import type { Guide } from "@/data/guides";

const SITE_URL = "https://listingsready.com";

export function createGuideHead(guide: Guide) {
  const url = `${SITE_URL}/guides/${guide.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: "ListingsReady",
      url: `${SITE_URL}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "ListingsReady",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/listingsready-logo.png`,
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: `${SITE_URL}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: url,
      },
    ],
  };

  return {
    meta: [
      { title: guide.seoTitle },
      {
        name: "description",
        content: guide.description,
      },
      {
        property: "og:title",
        content: guide.title,
      },
      {
        property: "og:description",
        content: guide.description,
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content: url,
      },
      {
        property: "article:published_time",
        content: guide.datePublished,
      },
      {
        property: "article:modified_time",
        content: guide.dateModified,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(articleJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd),
      },
    ],
  };
}
