export type GuideSummary = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  readTime: string;
};

export const guides: GuideSummary[] = [
  {
    slug: "how-to-stop-ai-changing-product-colours-logos-details",
    title: "How to Stop AI From Changing Product Colours, Logos and Details",
    description:
      "A preservation-first method for creating AI product images without allowing the model to redesign the item you are trying to sell.",
    category: "Product accuracy",
    published: "July 14, 2026",
    updated: "July 14, 2026",
    readTime: "9 min read",
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
