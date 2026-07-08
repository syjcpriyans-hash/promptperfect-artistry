import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — ListingReady" },
      { name: "description", content: "Prompt workflows organized by product category." },
      { property: "og:title", content: "Categories — ListingReady" },
      { property: "og:description", content: "Prompt workflows organized by product category." },
      { property: "og:url", content: "/categories" },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

const categories = [
  { title: "Apparel", sub: "T-shirts, hoodies, accessories" },
  { title: "Beauty & skincare", sub: "Bottles, tubes, jars" },
  { title: "Home & kitchen", sub: "Small goods on white" },
  { title: "Food & beverage", sub: "Packaged product shots" },
  { title: "Electronics", sub: "Devices and accessories" },
  { title: "Jewelry", sub: "Rings, necklaces, macro" },
  { title: "Lifestyle scenes", sub: "In-use social shots" },
  { title: "Model on white", sub: "Apparel on figure" },
];

function CategoriesPage() {
  return (
    <SiteShell>
      <section className="section-y">
        <div className="container-x">
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Categories</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Browse workflows grouped by what you sell.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.title} className="bg-paper p-6">
                <h2 className="font-display text-base font-medium text-ink">{c.title}</h2>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
