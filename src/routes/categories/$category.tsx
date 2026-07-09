import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { getCategory, getSubcategoriesForCategory, getWorkflowsForSubcategory } from "@/data/workflows";

export const Route = createFileRoute("/categories/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category.title ?? "Category"} — ListingReady` },
      { name: "description", content: loaderData?.category.description ?? "" },
    ],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const subs = getSubcategoriesForCategory(category.slug);

  return (
    <SiteShell>
      <section className="section-y">
        <div className="container-x">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <Link to="/categories" className="hover:underline">
              Categories
            </Link>{" "}
            / {category.title}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
            {category.title}
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{category.description}</p>

          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {subs.map((s) => {
              const items = getWorkflowsForSubcategory(category.slug, s.slug);
              return (
                <Link
                  key={s.slug}
                  to="/categories/$category/$subcategory"
                  params={{ category: category.slug, subcategory: s.slug }}
                  className="group bg-paper p-6 transition-colors hover:bg-accent/5"
                >
                  <h2 className="font-display text-base font-medium text-ink group-hover:underline">
                    {s.title}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {items.length} workflows
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
