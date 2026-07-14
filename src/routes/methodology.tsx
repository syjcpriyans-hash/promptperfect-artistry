import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

const testingSteps = [
  {
    number: "01",
    title: "Start with a real product photo",
    description:
      "Each workflow begins with an actual product image, not a text-only concept. The reference photo gives us a real colour, shape, print, texture, stitching and construction to preserve.",
  },
  {
    number: "02",
    title: "Test the complete prompt",
    description:
      "We test the full copy-paste prompt using the model and settings shown on the workflow page. The goal is to reproduce the intended listing image without requiring the user to write or restructure the prompt.",
  },
  {
    number: "03",
    title: "Check product preservation",
    description:
      "We review whether the generated image preserves the original product colour, print, stitching, texture, shape and proportions. A visually attractive result is not considered successful when the product itself has changed.",
  },
  {
    number: "04",
    title: "Record common failures",
    description:
      "Problems found during testing are documented in the Common Mistakes section. These can include colour shifts, altered prints, incorrect garment proportions, invented details or unrealistic fabric texture.",
  },
  {
    number: "05",
    title: "Create correction prompts",
    description:
      "Specific Fix Prompts are written for the issues discovered during testing. These correction instructions help users repair a result without restarting the entire workflow.",
  },
  {
    number: "06",
    title: "Publish the tested workflow",
    description:
      "The finished workflow is published with its complete prompt, recommended AI, exact settings, example result, testing information, common mistakes and correction prompts.",
  },
];

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      {
        title: "How ListingReady Tests AI Image Workflows — ListingReady",
      },
      {
        name: "description",
        content:
          "See how ListingReady tests AI product-image prompts using real product photos, preservation checks, documented failures and correction prompts.",
      },
      {
        property: "og:title",
        content: "How ListingReady Tests AI Image Workflows",
      },
      {
        property: "og:description",
        content:
          "Our process for testing product-image prompts, checking product accuracy and creating practical correction prompts.",
      },
      {
        property: "og:url",
        content: "/methodology",
      },
    ],
    links: [{ rel: "canonical", href: "/methodology" }],
  }),
  component: MethodologyPage,
});

function MethodologyPage() {
  return (
    <SiteShell>
      <main>
        <section className="section-y border-b border-border bg-paper-alt">
          <div className="container-x max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
              ListingReady methodology
            </p>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              How ListingReady Tests AI Image Workflows
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              ListingReady workflows are built around real product-image tasks.
              We test whether the prompt creates the intended e-commerce image
              while keeping the original product accurate and recognisable.
            </p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x max-w-5xl">
            <div className="grid gap-5 md:grid-cols-2">
              {testingSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <p className="font-mono text-xs font-semibold tracking-[0.14em] text-accent">
                    {step.number}
                  </p>

                  <h2 className="mt-3 font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-paper-alt">
          <div className="container-x max-w-4xl">
            <div className="rounded-2xl border border-border bg-paper p-7 shadow-sm md:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Our publishing standard
              </p>

              <blockquote className="mt-5 font-display text-2xl leading-relaxed text-ink md:text-3xl">
                ListingReady does not publish untested prompt ideas. Each
                workflow is designed around a real product-image task and
                includes practical correction prompts based on common
                AI-generation failures.
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x flex max-w-4xl flex-col items-start justify-between gap-6 border border-border p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Explore the tested workflows
              </h2>
              <p className="mt-2 text-muted-foreground">
                Choose a product type and open the complete prompt, settings and
                correction instructions.
              </p>
            </div>

            <Link to="/workflows" className="btn-primary shrink-0">
              Browse workflows
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
