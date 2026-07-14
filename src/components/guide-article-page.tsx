import { ArrowRight, Check } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import type { Guide } from "@/data/guides";

export function GuideArticlePage({ guide }: { guide: Guide }) {
  return (
    <SiteShell>
      <article>
        <header className="section-y border-b border-border bg-paper-alt">
          <div className="container-x max-w-4xl">
            <nav className="text-sm leading-6 text-muted-foreground" aria-label="Breadcrumb">
              <a href="/guides" className="underline-offset-4 hover:text-ink hover:underline">
                Guides
              </a>
              <span aria-hidden="true"> / </span>
              <span>{guide.category}</span>
            </nav>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-accent">
              {guide.category} guide
            </p>

            <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              {guide.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {guide.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>Published: {guide.published}</span>
              <span>Updated: {guide.updated}</span>
              <span>{guide.readTime}</span>
            </div>
          </div>
        </header>

        <section className="section-y">
          <div className="container-x grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
            <div className="min-w-0">
              <section className="rounded-2xl border border-accent/30 bg-paper-alt p-5 shadow-sm sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Direct answer
                </p>
                <p className="mt-4 text-base leading-7 text-ink sm:text-lg sm:leading-8">
                  {guide.directAnswer}
                </p>
              </section>

              {guide.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 pt-12"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-5 leading-8 text-muted-foreground">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.points && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-6 text-muted-foreground shadow-sm"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.prompt && (
                    <div className="mt-7 rounded-2xl border border-border bg-ink p-5 text-paper shadow-sm sm:p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E6B15D]">
                        Reusable prompt block
                      </p>
                      <pre className="mt-4 whitespace-pre-wrap font-mono text-[13px] leading-7 text-paper sm:text-sm">
                        {section.prompt}
                      </pre>
                    </div>
                  )}
                </section>
              ))}

              <section className="scroll-mt-28 pt-12" id="review-checklist">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  Final review checklist
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  Check the result before it reaches a customer
                </h2>
                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  {guide.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-xl bg-paper-alt p-4 text-sm leading-6 text-muted-foreground"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="scroll-mt-28 pt-12" id="related-resources">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  Related resources
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  Continue with tested ListingsReady resources
                </h2>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  {guide.relatedResources.map((resource) => (
                    <a
                      key={resource.href}
                      href={resource.href}
                      className="group flex min-h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
                    >
                      <h3 className="font-display text-xl font-semibold text-ink group-hover:underline">
                        {resource.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                        {resource.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
                        Open resource
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              <section className="pt-12">
                <div className="flex flex-col items-stretch justify-between gap-6 rounded-2xl border border-border bg-ink p-6 text-paper sm:p-8 md:flex-row md:items-center">
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-paper">
                      Use a product-specific workflow
                    </h2>
                    <p className="mt-2 max-w-2xl leading-7 text-paper/75">
                      Open the complete prompt, recommended settings, common mistakes
                      and targeted corrections for the product image you need.
                    </p>
                  </div>
                  <a
                    href="/workflows"
                    className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md bg-accent px-5 font-medium text-white transition hover:opacity-90"
                  >
                    Browse workflows
                  </a>
                </div>
              </section>
            </div>

            <aside className="order-first lg:order-none">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm lg:sticky lg:top-28">
                <p className="font-display text-sm font-semibold text-ink">
                  In this guide
                </p>
                <nav className="mt-4" aria-label="Guide contents">
                  <ol className="space-y-1 text-sm text-muted-foreground">
                    {guide.sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="flex min-h-10 items-center rounded-md px-3 py-2 transition hover:bg-paper-alt hover:text-ink"
                        >
                          {section.eyebrow.replace(/^\d+\.\s*/, "")}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#review-checklist"
                        className="flex min-h-10 items-center rounded-md px-3 py-2 transition hover:bg-paper-alt hover:text-ink"
                      >
                        Review checklist
                      </a>
                    </li>
                    <li>
                      <a
                        href="#related-resources"
                        className="flex min-h-10 items-center rounded-md px-3 py-2 transition hover:bg-paper-alt hover:text-ink"
                      >
                        Related resources
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
