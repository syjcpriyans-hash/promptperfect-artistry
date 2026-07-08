import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — ListingReady" },
      { name: "description", content: "One flat price for the full library of tested prompt workflows." },
      { property: "og:title", content: "Pricing — ListingReady" },
      { property: "og:description", content: "One flat price for the full library of tested prompt workflows." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter",
    price: "$0",
    tag: "Preview",
    perks: ["Sample workflow", "Preview 2 categories", "No credit card required"],
    cta: "Browse workflows",
  },
  {
    name: "Library",
    price: "$29",
    tag: "One-time",
    perks: ["Full workflow library", "All categories and channels", "Fix prompts included", "Free updates for 12 months"],
    cta: "Get the library",
    highlight: true,
  },
];

function PricingPage() {
  return (
    <SiteShell>
      <section className="section-y">
        <div className="container-x">
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Pricing</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Simple pricing. Pay once, get the full tested library.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`border p-8 ${p.highlight ? "border-ink" : "border-border"}`}
              >
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">{p.tag}</p>
                <h2 className="mt-3 font-display text-xl font-medium text-ink">{p.name}</h2>
                <div className="mt-4 font-display text-4xl font-semibold text-ink">{p.price}</div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {p.perks.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/workflows"
                  className={`mt-8 inline-flex ${p.highlight ? "btn-primary" : "btn-ghost"}`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
