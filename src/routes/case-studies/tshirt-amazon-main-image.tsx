import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { WorkflowImageComparison } from "@/components/workflow-image-comparison";
import { workflows } from "@/data/all-workflows";
import { getWorkflowPublicSlug } from "@/lib/workflow-display";

const commonFailures = [
  "The garment colour shifts after the background is replaced.",
  "The print, artwork or logo is redrawn instead of preserved.",
  "The collar shape or sleeve proportions change.",
  "The fabric becomes unnaturally smooth or plastic-looking.",
  "The product is not centred or framed appropriately.",
  "The AI adds a floating shadow, props or unrelated objects.",
];

const approachItems = [
  [
    "Reference-only instruction",
    "The uploaded T-shirt is treated as the only product reference, reducing the chance that the model invents a replacement garment.",
  ],
  [
    "Explicit preservation checklist",
    "The prompt names the shape, proportions, stitching, collar, sleeves, folds, fabric texture, print, artwork and colours that must remain unchanged.",
  ],
  [
    "Controlled background",
    "Only the background is replaced, using pure white #FFFFFF for a clean main listing presentation.",
  ],
  [
    "Restricted composition",
    "The prompt requires a centred front view and excludes models, mannequins, hangers, props, reflections and unrelated objects.",
  ],
  [
    "Natural commercial lighting",
    "Soft studio lighting and a restrained contact shadow are requested so the product remains readable without appearing to float.",
  ],
];

const evaluationRows = [
  ["Product colour", "Preserved in the published test result"],
  ["Print and design", "Preserved in the published test result"],
  ["Collar and sleeves", "Maintained without an obvious structural redesign"],
  ["Background", "Converted to a clean white listing background"],
  ["Product placement", "Centred and clearly visible"],
  [
    "Listing readiness",
    "Suitable for final human and marketplace-policy review",
  ],
];

export const Route = createFileRoute(
  "/case-studies/tshirt-amazon-main-image",
)({
  loader: () => {
    const workflow = workflows.find((item) => item.id === "WF-001");
    if (!workflow) throw notFound();
    return { workflow };
  },
  head: () => ({
    meta: [
      { title: "T-Shirt Amazon Main Image Case Study — ListingReady" },
      {
        name: "description",
        content:
          "See how a ListingReady workflow turns an ordinary T-shirt photo into a clean Amazon-style main listing image while preserving the product.",
      },
      {
        property: "og:title",
        content:
          "Creating an Amazon-Ready T-Shirt Main Image Without Changing the Product",
      },
      {
        property: "og:description",
        content:
          "A detailed workflow test covering the original-image problem, preservation controls, result evaluation and limitations.",
      },
      {
        property: "og:url",
        content: "/case-studies/tshirt-amazon-main-image",
      },
    ],
  }),
  component: TShirtCaseStudyPage,
});

function TShirtCaseStudyPage() {
  const { workflow } = Route.useLoaderData();

  return (
    <SiteShell>
      <article>
        <section className="section-y border-b border-border bg-paper-alt">
          <div className="container-x max-w-4xl">
            <div className="text-sm text-muted-foreground">
              <Link
                to="/case-studies"
                className="underline-offset-4 hover:text-ink hover:underline"
              >
                Case Studies
              </Link>
              <span aria-hidden="true"> / </span>
              <span>T-Shirt Main Image</span>
            </div>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-accent">
              Workflow test case study
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Creating an Amazon-Ready T-Shirt Main Image Without Changing the
              Product
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              This case study examines how a ListingReady workflow converts an
              ordinary T-shirt photo into a clean main listing image while
              prioritising the accuracy of the original garment.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>Published: July 2026</span>
              <span>Product: T-Shirt</span>
              <span>Use case: Main listing image</span>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x grid max-w-5xl gap-10 lg:grid-cols-2">
            <section>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                1. The objective
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
                Create a clean main image without redesigning the garment
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                The objective was to create a professional front-facing main
                listing image from an ordinary T-shirt photograph. The product
                needed to remain recognisably the same, including its colour,
                print, collar, stitching, fabric appearance and proportions.
              </p>
            </section>
            <section>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                2. The original-image problem
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
                The source photo was not ready for a marketplace listing
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                The source photograph was useful as a product reference, but
                its background, lighting, framing and presentation were not
                suitable for a polished main listing image. The required change
                was presentational—not a redesign of the product.
              </p>
            </section>
          </div>
        </section>

        <section className="section-y bg-paper-alt">
          <div className="container-x max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
              3. What commonly goes wrong
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-ink md:text-4xl">
              A cleaner image is not useful when the product changes
            </h2>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {commonFailures.map((failure) => (
                <li
                  key={failure}
                  className="rounded-2xl border border-border bg-paper p-5 text-sm leading-7 text-muted-foreground shadow-sm"
                >
                  <span className="mr-2 font-semibold text-accent">×</span>
                  {failure}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
              4. The ListingReady approach
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-ink md:text-4xl">
              Constrain the edit and define what must remain unchanged
            </h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {approachItems.map(([title, description]) => (
                <section
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {description}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-paper-alt">
          <div className="container-x max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
              5. Original and result
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-ink md:text-4xl">
              Compare the source product photo with the published workflow
              result
            </h2>
            <WorkflowImageComparison workflow={workflow} />
          </div>
        </section>

        <section className="section-y">
          <div className="container-x max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
              6. Result evaluation
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
              Evaluation against the workflow objective
            </h2>
            <div className="mt-9 overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-[0.8fr_1.2fr] bg-paper-alt text-sm font-semibold text-ink">
                <div className="px-5 py-4">Evaluation area</div>
                <div className="border-l border-border px-5 py-4">
                  Observed result
                </div>
              </div>
              {evaluationRows.map(([area, result]) => (
                <div
                  key={area}
                  className="grid grid-cols-[0.8fr_1.2fr] border-t border-border bg-paper text-sm"
                >
                  <div className="px-5 py-4 font-medium text-ink">{area}</div>
                  <div className="border-l border-border px-5 py-4 leading-6 text-muted-foreground">
                    {result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-paper-alt">
          <div className="container-x grid max-w-5xl gap-8 lg:grid-cols-2">
            <section className="rounded-2xl border border-border bg-paper p-7 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                7. Corrections and limitations
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                Final review is still required
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                AI-generated product images should be compared closely with the
                original item before publication. Sellers should inspect colour
                accuracy, artwork, stitching, garment edges and background
                purity, then check the current rules of the marketplace where
                the image will be used.
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                This case study evaluates visual workflow performance. It does
                not measure customer conversion, sales, revenue or advertising
                performance.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-paper p-7 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                8. Testing information
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  ["Tested", "July 2026"],
                  ["AI", "ChatGPT image generation"],
                  ["Model", "GPT-5.5"],
                  ["Typical attempts", "1–2 generations"],
                  ["Workflow version", "1.0"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-6 border-b border-border pb-3 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd className="text-right font-semibold text-ink">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x flex max-w-5xl flex-col items-start justify-between gap-7 border border-border p-8 md:flex-row md:items-center md:p-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                9. Workflow used
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                Amazon Main Listing Image — T-Shirt
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Open the complete prompt, recommended settings, common mistakes
                and fix prompts used for this test.
              </p>
            </div>
            <Link
              to="/workflows/$id"
              params={{ id: getWorkflowPublicSlug(workflow) }}
              className="btn-primary shrink-0"
            >
              View complete workflow
            </Link>
          </div>
          <div className="container-x mt-8 max-w-5xl">
            <Link
              to="/case-studies"
              className="text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              ← Back to all case studies
            </Link>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
