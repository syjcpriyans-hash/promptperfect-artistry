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
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-medium text-muted-foreground">Library</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">Categories</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Browse workflows grouped by what you sell.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const subcategories = getSubcategoriesForCategory(category.slug);

            return (
              <Link
                key={category.slug}
                to="/categories/$category"
                params={{ category: category.slug }}
                className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-24 items-center justify-center rounded-xl bg-muted text-3xl font-semibold text-muted-foreground transition group-hover:bg-muted/70">
                  {category.title.slice(0, 1)}
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{category.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                <p className="mt-5 text-sm font-medium">{subcategories.length} subcategories →</p>
              </Link>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
