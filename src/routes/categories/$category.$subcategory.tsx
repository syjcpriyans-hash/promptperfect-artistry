import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
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

const difficultyVariant: Record<string, "default" | "secondary" | "outline"> = {
  Easy: "secondary",
  Medium: "outline",
  Hard: "default",
};

function SubcategoryPage() {
  const { category, subcategory, items } = Route.useLoaderData();

  return (
    <SiteShell>
      <section className="section-y">
        <div className="container-x">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <Link to="/categories" className="hover:underline">
              Categories
            </Link>{" "}
            /{" "}
            <Link to="/categories/$category" params={{ category: category.slug }} className="hover:underline">
              {category.title}
            </Link>{" "}
            / {subcategory.title}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">
            {subcategory.title}
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{subcategory.description}</p>

          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
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
                  <h2 className="mt-3 font-display text-base font-medium text-ink group-hover:underline">
                    {w.title}
                  </h2>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <Badge variant={difficultyVariant[w.difficulty]}>{w.difficulty}</Badge>
                  <span className="text-xs text-muted-foreground">{w.timeRequired}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
