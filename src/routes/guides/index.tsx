import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { guides } from "@/data/guides";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      {
        title: "AI Product Photography Guides | ListingsReady",
      },
      {
        name: "description",
        content:
          "Practical guides for creating accurate AI product images while preserving colours, logos, text, materials and product details.",
      },
      {
        property: "og:title",
        content: "AI Product Photography Guides | ListingsReady",
      },
      {
        property: "og:description",
        content:
          "Practical guidance for producing more accurate and usable AI-generated product images.",
      },
    ],
  }),
  component: GuidesPage,
});

function GuidesPage() {
  return (
    <SiteShell>
      <section className="section-y border-b border-border bg-paper-alt">
        <div className="container-x max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
            ListingsReady guides
          </p>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            Practical guidance for more accurate AI product images
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Learn how to protect product identity, diagnose common AI failures and
            create listing images that remain faithful to the item being sold.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2">
            {guides.map((guide) => (
              <article
                key={guide.slug}
                className="flex min-w-0 flex-col rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  <span>{guide.category}</span>
                  <span aria-hidden="true">•</span>
                  <span>{guide.readTime}</span>
                </div>

                <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                  <Link
                    to="/guides/$slug"
                    params={{ slug: guide.slug }}
                    className="underline-offset-4 hover:underline"
                  >
                    {guide.title}
                  </Link>
                </h2>

                <p className="mt-4 flex-1 leading-7 text-muted-foreground">
                  {guide.description}
                </p>

                <div className="mt-6 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted-foreground">
                    Published {guide.published}
                  </p>
                  <Link
                    to="/guides/$slug"
                    params={{ slug: guide.slug }}
                    className="inline-flex min-h-11 items-center gap-2 font-medium text-ink underline-offset-4 hover:underline"
                  >
                    Read guide
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
