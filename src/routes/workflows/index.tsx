import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { subcategories, categories, getWorkflowsForSubcategory } from "@/data/workflows";

export const Route = createFileRoute("/workflows/")({
  head: () => ({
    meta: [
      { title: "Workflows — ListingReady" },
      { name: "description", content: "Tested prompt workflows for product photography, organized by product type and marketplace." },
      { property: "og:title", content: "Workflows — ListingReady" },
      { property: "og:description", content: "Tested prompt workflows for product photography." },
      { property: "og:url", content: "/workflows" },
    ],
    links: [{ rel: "canonical", href: "/workflows" }],
  }),
  component: WorkflowsPage,
});

const difficultyVariant: Record<string, "default" | "secondary" | "outline"> = {
  Easy: "secondary",
  Medium: "outline",
  Hard: "default",
};

function WorkflowsPage() {
  return (
    <SiteShell>
      <section className="section-y">
        <div className="container-x">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Library</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">Workflows</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every workflow is a complete, copy-paste prompt tested for a specific product type and
            marketplace. Browse by category, or jump straight into a workflow below.
          </p>

          {categories.map((cat) => (
            <div key={cat.slug} className="mt-14 first:mt-10">
              <h2 className="font-display text-xl font-semibold text-ink">{cat.title}</h2>
              {subcategories
                .filter((s) => s.categorySlug === cat.slug)
                .map((sub) => {
                  const items = getWorkflowsForSubcategory(cat.slug, sub.slug);
                  return (
                    <div key={sub.slug} className="mt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                          {sub.title}
                        </h3>
                        <Link
                          to="/categories/$category/$subcategory"
                          params={{ category: cat.slug, subcategory: sub.slug }}
                          className="text-xs text-accent hover:underline"
                        >
                          View all →
                        </Link>
                      </div>
                      <div className="mt-3 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((w) => (
                          <Link
                            key={w.id}
                            to="/workflows/$id"
                            params={{ id: w.id }}
                            className="group flex flex-col justify-between bg-paper p-6 transition-colors hover:bg-accent/5"
                          >
                            <div>
                              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                                {w.id} · {w.bestAI}
                              </p>
                              <h4 className="mt-3 font-display text-base font-medium text-ink group-hover:underline">
                                {w.title}
                              </h4>
                            </div>
                            <div className="mt-6 flex items-center gap-2">
                              <Badge variant={difficultyVariant[w.difficulty]}>{w.difficulty}</Badge>
                              <span className="text-xs text-muted-foreground">{w.timeRequired}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
