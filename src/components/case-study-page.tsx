import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { WorkflowImageComparison } from "@/components/workflow-image-comparison";
import type { Workflow } from "@/data/workflows";
import type { CaseStudyDetail } from "@/data/case-studies";
import {
  getWorkflowDisplayTitle,
  getWorkflowPublicSlug,
} from "@/lib/workflow-display";

type CaseStudyPageProps = {
  workflow: Workflow;
  study: CaseStudyDetail;
};

export function CaseStudyPage({ workflow, study }: CaseStudyPageProps) {
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
              <span>{study.shortTitle}</span>
            </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-accent">
              {study.eyebrow}
            </p>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {study.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              This case study examines a real ListingsReady workflow and the
              product-specific checks required before an AI-generated image is
              used in an e-commerce listing.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>Published: {study.published}</span>
              <span>Product: {study.product}</span>
              <span>Use case: {study.useCase}</span>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x max-w-4xl">
            <div className="rounded-2xl border border-accent/30 bg-paper-alt p-6 shadow-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Direct answer
              </p>
              <p className="mt-4 text-lg leading-8 text-ink">{study.answer}</p>
            </div>
          </div>
        </section>

        <section className="section-y pt-0">
          <div className="container-x grid max-w-5xl gap-10 lg:grid-cols-2">
            <section>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                1. The objective
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
                {study.objectiveHeading}
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                {study.objective}
              </p>
            </section>

            <section>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                2. The source-image problem
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
                {study.sourceProblemHeading}
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                {study.sourceProblem}
              </p>
            </section>
          </div>
        </section>

        <section className="section-y bg-paper-alt">
          <div className="container-x max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                3. Common AI failures
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                {study.failureHeading}
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                {study.failureIntro}
              </p>
            </div>

            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {study.commonFailures.map((failure) => (
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
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                4. The ListingsReady approach
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                {study.approachHeading}
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                {study.approachIntro}
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {study.approachItems.map((item) => (
                <section
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
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
              {study.comparisonHeading}
            </h2>

            <WorkflowImageComparison workflow={workflow} />
          </div>
        </section>

        <section className="section-y">
          <div className="container-x max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                6. Evaluation framework
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                {study.evaluationHeading}
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                {study.evaluationIntro}
              </p>
            </div>

            <div className="mt-9 overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-[0.72fr_1.28fr] bg-paper-alt text-sm font-semibold text-ink">
                <div className="px-5 py-4">Evaluation area</div>
                <div className="border-l border-border px-5 py-4">
                  What to verify
                </div>
              </div>

              {study.evaluationRows.map((row) => (
                <div
                  key={row.area}
                  className="grid grid-cols-[0.72fr_1.28fr] border-t border-border bg-paper text-sm"
                >
                  <div className="px-5 py-4 font-medium text-ink">
                    {row.area}
                  </div>
                  <div className="border-l border-border px-5 py-4 leading-6 text-muted-foreground">
                    {row.checkpoint}
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
                {study.limitationHeading}
              </h2>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                {study.limitations.map((limitation) => (
                  <li key={limitation} className="flex gap-3">
                    <span className="font-semibold text-accent">•</span>
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-paper p-7 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                8. Testing information
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-start justify-between gap-6 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Tested</dt>
                  <dd className="text-right font-semibold text-ink">
                    July 2026
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-b border-border pb-3">
                  <dt className="text-muted-foreground">AI</dt>
                  <dd className="text-right font-semibold text-ink">
                    ChatGPT image generation
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Model</dt>
                  <dd className="text-right font-semibold text-ink">
                    GPT-5.5
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Typical result</dt>
                  <dd className="text-right font-semibold text-ink">
                    1–2 generations
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <dt className="text-muted-foreground">Workflow version</dt>
                  <dd className="text-right font-semibold text-ink">1.0</dd>
                </div>
              </dl>
            </section>
          </div>
        </section>

        <section className="section-y">
          <div className="container-x max-w-5xl">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-sm md:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Questions this case study answers
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {study.questions.map((question) => (
                  <li
                    key={question}
                    className="rounded-xl bg-muted px-4 py-3 text-sm font-medium text-ink"
                  >
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-y pt-0">
          <div className="container-x flex max-w-5xl flex-col items-start justify-between gap-7 border border-border p-8 md:flex-row md:items-center md:p-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Workflow used
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                {getWorkflowDisplayTitle(workflow)}
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Open the complete prompt, recommended settings, common mistakes
                and fix prompts used for this case study.
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
