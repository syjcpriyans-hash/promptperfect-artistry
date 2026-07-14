import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { caseStudySummaries } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "AI Product Image Case Studies — ListingsReady" },
      {
        name: "description",
        content:
          "Explore real ListingsReady workflow tests showing how AI product-image prompts are evaluated for product accuracy, common failures and listing readiness.",
      },
      {
        property: "og:title",
        content: "AI Product Image Case Studies — ListingsReady",
      },
      {
        property: "og:description",
        content:
          "Detailed workflow tests covering product preservation, AI-image failures, evaluation checkpoints and practical correction methods.",
      },
      { property: "og:url", content: "/case-studies" },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <SiteShell>
      <main>
        <section className="section-y border-b border-border bg-paper-alt">
          <div className="container-x max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
              Workflow evidence
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              ListingsReady Case Studies
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Detailed tests showing the original product-image problem, the
              ListingsReady approach, the generated result, evaluation
              checkpoints, remaining limitations and the workflow used.
            </p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x max-w-5xl">
            <div className="grid gap-6">
              {caseStudySummaries.map((caseStudy) => (
                <article
                  key={caseStudy.path}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                >
                  <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                    <Link
                      to={caseStudy.path}
                      className="block bg-muted/20"
                      aria-label={`Read case study: ${caseStudy.title}`}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.imageAlt}
                          className="h-full w-full object-contain p-4 transition duration-300 hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                    </Link>

                    <div className="flex flex-col justify-center p-6 md:p-8">
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        <span>{caseStudy.category}</span>
                        <span>{caseStudy.published}</span>
                      </div>

                      <h2 className="mt-4 font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
                        <Link
                          to={caseStudy.path}
                          className="underline-offset-4 hover:underline"
                        >
                          {caseStudy.title}
                        </Link>
                      </h2>

                      <p className="mt-4 leading-7 text-muted-foreground">
                        {caseStudy.description}
                      </p>

                      <Link
                        to={caseStudy.path}
                        className="mt-6 inline-flex text-sm font-semibold text-ink underline decoration-accent underline-offset-4"
                      >
                        Read the case study →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-paper-alt p-6">
              <p className="text-sm leading-7 text-muted-foreground">
                These are workflow-test case studies, not customer testimonials.
                They evaluate generated images and prompt behaviour without
                claiming sales, conversion or revenue improvements.
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
