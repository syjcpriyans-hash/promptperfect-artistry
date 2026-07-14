import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { getVisibleWorkflows } from "@/lib/workflow-visibility";
import { getCategory, getSubcategoriesForCategory, getWorkflowsForSubcategory } from "@/data/all-workflows";

export const Route = createFileRoute("/categories/$category/")({
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
  const subcategories = getSubcategoriesForCategory(category.slug);

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm text-muted-foreground">
            <Link to="/categories" className="hover:text-foreground">
              Categories
            </Link>{" "}
            / {category.title}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">{category.title}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{category.description}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subcategories.map((subcategory) => {
            const items = getVisibleWorkflows(
              getWorkflowsForSubcategory(category.slug, subcategory.slug),
            );

            return (
              <Link
                key={subcategory.slug}
                to="/categories/$category/$subcategory"
                params={{ category: category.slug, subcategory: subcategory.slug }}
                className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-24 items-center justify-center rounded-xl bg-muted text-lg font-semibold text-muted-foreground transition group-hover:bg-muted/70">
                  {subcategory.title}
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{subcategory.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {items.length} visual prompt workflows for this product type.
                </p>
                <p className="mt-5 text-sm font-medium">Open workflows →</p>
              </Link>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
