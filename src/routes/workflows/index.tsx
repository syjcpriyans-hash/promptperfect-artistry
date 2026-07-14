import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { WorkflowPreviewImage } from "@/components/workflow-preview-image";
import { getWorkflowDisplayTitle, getWorkflowPublicSlug } from "@/lib/workflow-display";
import { getVisibleWorkflows } from "@/lib/workflow-visibility";
import { categories, subcategories, getWorkflowsForSubcategory } from "@/data/all-workflows";

export const Route = createFileRoute("/workflows/")({
  head: () => ({
    meta: [
      { title: "Workflows — ListingReady" },
      { name: "description", content: "Tested prompt workflows for product photography, organized by product type." },
      { property: "og:title", content: "Workflows — ListingReady" },
      { property: "og:description", content: "Tested prompt workflows for product photography." },
      { property: "og:url", content: "/workflows" },
    ],
    links: [{ rel: "canonical", href: "/workflows" }],
  }),
  component: WorkflowsPage,
});

function WorkflowsPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-medium text-muted-foreground">Library</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">Workflows</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Browse visual prompt workflows by product type. Each card shows the kind of image the workflow helps create.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.slug}>
              <h2 className="text-2xl font-semibold">{category.title}</h2>

              <div className="mt-6 space-y-10">
                {subcategories
                  .filter((subcategory) => subcategory.categorySlug === category.slug)
                  .map((subcategory) => {
                    const items = getVisibleWorkflows(
                      getWorkflowsForSubcategory(category.slug, subcategory.slug),
                    );

                    return (
                      <div key={subcategory.slug}>
                        <div className="mb-4 flex items-end justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-semibold">{subcategory.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{items.length} workflows</p>
                          </div>
                          <Link
                            to="/categories/$category/$subcategory"
                            params={{ category: category.slug, subcategory: subcategory.slug }}
                            className="text-sm font-medium hover:underline"
                          >
                            View all →
                          </Link>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                          {items.map((workflow) => (
                            <article
                              key={workflow.id}
                              className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                              <WorkflowPreviewImage workflow={workflow} />
                              <div className="p-4">
                                <Link
                                  to="/workflows/$id"
                                  params={{ id: getWorkflowPublicSlug(workflow) }}
                                  className="line-clamp-2 text-base font-semibold leading-snug group-hover:underline"
                                >
                                  {getWorkflowDisplayTitle(workflow)}
                                </Link>
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
