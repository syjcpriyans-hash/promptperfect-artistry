import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/workflows")({
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

const workflows = [
  { title: "Amazon main image — apparel on white background", channel: "Amazon", type: "Apparel" },
  { title: "Shopify PDP — beauty bottle with soft shadow", channel: "Shopify", type: "Beauty" },
  { title: "Etsy hero — handmade jewelry macro", channel: "Etsy", type: "Jewelry" },
  { title: "eBay listing — electronics on gradient", channel: "eBay", type: "Electronics" },
  { title: "Instagram — apparel lifestyle scene", channel: "Instagram", type: "Apparel" },
  { title: "TikTok — food product in hand", channel: "TikTok", type: "Food & beverage" },
];

function WorkflowsPage() {
  return (
    <SiteShell>
      <section className="section-y">
        <div className="container-x">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Library</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink md:text-5xl">Workflows</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every workflow is a complete, copy-paste prompt tested for a specific product type and marketplace.
            The full library is expanding — a preview of what's inside is below.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {workflows.map((w) => (
              <div key={w.title} className="flex flex-col justify-between bg-paper p-6">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                    {w.channel} · {w.type}
                  </p>
                  <h2 className="mt-3 font-display text-base font-medium text-ink">{w.title}</h2>
                </div>
                <Link to="/" className="mt-6 text-sm text-ink underline-offset-4 hover:underline">
                  View workflow →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
