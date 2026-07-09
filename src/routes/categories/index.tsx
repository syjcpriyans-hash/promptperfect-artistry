import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { categories, getSubcategoriesForCategory } from "@/data/workflows";

export const Route = createFileRoute("/categories/")({
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
            {categories.map((c) => {
              const subs = getSubcategoriesForCategory(c.slug);
              return (
                <Link
                  key={c.slug}
                  to="/categories/$category"
                  params={{ category: c.slug }}
                  className="group bg-paper p-6 transition-colors hover:bg-accent/5"
                >
                  <h2 className="font-display text-base font-medium text-ink group-hover:underline">
                    {c.title}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {c.description}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-wider text-accent">
                    {subs.length} subcategories →
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
