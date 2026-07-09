import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { WorkflowPreviewImage } from "@/components/workflow-preview-image";
import { getWorkflowDisplayTitle } from "@/lib/workflow-display";
import { getCategory, getSubcategory, getWorkflowsForSubcategory } from "@/data/workflows";

export const Route = createFileRoute("/categories/$category/$subcategory")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    const subcategory = getSubcategory(params.category, params.subcategory);
    if (!category || !subcategory) throw notFound();
    const items = getWorkflowsForSubcategory(category.slug, subcategory.slug);
    return { category, subcategory, items };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.subcategory.title ?? "Subcategory"} — ListingReady` },
      { name: "description", content: loaderData?.subcategory.description ?? "" },
    ],
  }),
  component: SubcategoryPage,
});

function SubcategoryPage() {
  const { category, subcategory, items } = Route.useLoaderData();

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm text-muted-foreground">
            <Link to="/categories" className="hover:text-foreground">
              Categories
            </Link>{" "}
            /{" "}
            <Link
              to="/categories/$category"
              params={{ category: category.slug }}
              className="hover:text-foreground"
            >
              {category.title}
            </Link>{" "}
            / {subcategory.title}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">{subcategory.title}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{subcategory.description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((workflow) => (
            <Link
              key={workflow.id}
              to="/workflows/$id"
              params={{ id: workflow.id }}
              className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <WorkflowPreviewImage workflow={workflow} />
              <div className="p-4">
                <h2 className="line-clamp-2 text-base font-semibold leading-snug group-hover:underline">
                  {getWorkflowDisplayTitle(workflow)}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
