import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

const workflowFeatures = [
  "Complete copy-paste prompts",
  "Recommended AI tools and settings",
  "Real input and result examples",
  "Common failure warnings",
  "Product-preservation instructions",
  "Specific correction prompts",
  "Workflow testing information",
];

const audiences = [
  "Amazon sellers",
  "Shopify stores",
  "D2C brands",
  "Clothing businesses",
  "Marketplace agencies",
  "Product photographers",
  "E-commerce teams using AI",
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About ListingReady — Tested AI Product Image Workflows",
      },
      {
        name: "description",
        content:
          "Learn why ListingReady was created and how its tested AI prompt workflows help e-commerce sellers produce accurate, listing-ready product images.",
      },
      {
        property: "og:title",
        content: "About ListingReady — Tested AI Product Image Workflows",
      },
      {
        property: "og:description",
        content:
          "Learn why ListingReady was created and how its tested AI workflows help sellers produce accurate product images.",
      },
      {
        property: "og:url",
        content: "/about",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <main>
        <section className="section-y border-b border-border bg-paper-alt">
          <div className="container-x max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
              About ListingReady
            </p>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Helping online sellers create accurate product images with tested
              AI workflows.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              ListingReady is a library of tested AI prompt workflows for
              e-commerce product photography. It helps sellers create
              professional listing images while preserving the original
              product&apos;s colour, design, texture, stitching and proportions.
            </p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                The problem
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                Why ListingReady exists
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                AI image tools can create attractive images, but they often
                change the product itself. Colours shift, prints are altered,
                stitching disappears, proportions change and important product
                details are invented.
              </p>
              <p>
                ListingReady was created to solve this problem with structured,
                repeatable workflows instead of generic one-line prompts. Every
                workflow is designed for a specific product-image task and
                includes instructions focused on keeping the product accurate.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-paper-alt">
          <div className="container-x max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                What you receive
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                More than a single prompt
              </h2>
              <p className="mt-4 text-muted-foreground">
                Each workflow combines the instructions, testing details and
                correction guidance needed to complete a real product-image
                task.
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {workflowFeatures.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl border border-border bg-paper p-5 text-sm font-medium text-ink shadow-sm"
                >
                  <span className="mr-2 text-accent">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Built for e-commerce
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                Who ListingReady is for
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                ListingReady is designed for businesses and creators who need
                professional product images without repeating the same
                prompt-writing and correction process for every listing.
              </p>
            </div>

            <ul className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {audiences.map((audience) => (
                <li
                  key={audience}
                  className="bg-paper px-5 py-4 text-sm font-medium text-ink"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y bg-paper-alt">
          <div className="container-x max-w-5xl">
            <div className="rounded-2xl border border-border bg-paper p-7 shadow-sm md:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                How workflows are created
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
                Tested before publication
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
                Each workflow begins with a real product-image task. The prompt
                is tested, the generated result is reviewed for product
                accuracy, common mistakes are recorded and correction prompts
                are created before the workflow is published.
              </p>

              <Link
                to="/methodology"
                className="mt-7 inline-flex text-sm font-semibold text-ink underline decoration-accent underline-offset-4"
              >
                Read How We Test →
              </Link>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
              Founder story
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
              Built from a real product-image problem
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                ListingReady began after repeated attempts to create product
                images with AI resulted in altered colours, incorrect details
                and unusable outputs.
              </p>
              <p>
                The problem was not a lack of AI tools—it was the lack of
                reliable instructions designed specifically for product
                preservation. ListingReady turns that testing process into
                practical workflows that other sellers can use without
                repeating the same trial and error.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-paper-alt">
          <div className="container-x max-w-4xl">
            <div className="border-l-2 border-accent pl-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Independent resource
              </p>
              <p className="mt-4 text-lg leading-8 text-ink">
                ListingReady is an independent workflow library. It is not
                affiliated with or endorsed by Amazon, Shopify, Etsy, OpenAI,
                Google, Midjourney or any other marketplace or AI provider.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x flex max-w-5xl flex-col items-start justify-between gap-7 border border-border p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                Start with a tested workflow.
              </h2>
              <p className="mt-2 text-muted-foreground">
                Choose the product type and listing image you need.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/workflows" className="btn-primary">
                Browse Workflows
              </Link>
              <Link to="/categories" className="btn-ghost">
                Explore Categories
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
