import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — ListingsReady" },
      { name: "description", content: "The terms that apply when you use ListingsReady." },
      { property: "og:title", content: "Terms of Service — ListingsReady" },
      { property: "og:description", content: "The terms that apply when you use ListingsReady." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Terms of Service</h1>
          <div className="prose mt-8 space-y-6 text-muted-foreground">
            <p>
              ListingsReady provides a library of prompt workflows for use with third-party AI tools. You are
              responsible for reviewing every image you generate for accuracy, rights, and compliance with the
              policies of the marketplace where you publish it.
            </p>
            <p>
              Prompt workflows are licensed for use inside your own business, including for images you list on
              marketplaces. You may not resell, republish, or redistribute the workflows themselves as a
              product.
            </p>
            <p>
              ListingsReady is provided "as is." Generative AI outputs are inherently variable, and we make no
              warranty that any specific generation will meet a specific marketplace's policy at a given point
              in time.
            </p>
            <p>
              Questions:{" "}
              <a href="mailto:hello@listingsready.com" className="text-ink underline-offset-4 hover:underline">
                hello@listingsready.com
              </a>
              .
            </p>
            <p className="text-xs">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}.</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
