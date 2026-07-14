import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { getGuideBySlug } from "@/data/guides";

const GUIDE_SLUG = "how-to-stop-ai-changing-product-colours-logos-details";
const GUIDE_URL = `https://listingsready.com/guides/${GUIDE_SLUG}`;

const guide = getGuideBySlug(GUIDE_SLUG);

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide?.title,
  description: guide?.description,
  datePublished: "2026-07-14",
  dateModified: "2026-07-14",
  mainEntityOfPage: GUIDE_URL,
  author: {
    "@type": "Organization",
    name: "ListingsReady",
    url: "https://listingsready.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "ListingsReady",
    url: "https://listingsready.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://listingsready.com/brand/listingsready-logo.png",
    },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://listingsready.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: "https://listingsready.com/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: guide?.title,
      item: GUIDE_URL,
    },
  ],
};

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const selectedGuide = getGuideBySlug(params.slug);
    if (!selectedGuide || params.slug !== GUIDE_SLUG) throw notFound();
    return { guide: selectedGuide };
  },
  head: () => ({
    meta: [
      {
        title:
          "Stop AI Changing Product Colours, Logos and Details | ListingsReady",
      },
      {
        name: "description",
        content:
          "Use this preservation-first method to stop AI from changing product colours, logos, text, materials, shape and important listing details.",
      },
      {
        property: "og:title",
        content:
          "How to Stop AI From Changing Product Colours, Logos and Details",
      },
      {
        property: "og:description",
        content:
          "A practical preservation-first method for producing more accurate AI product images.",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "article:published_time",
        content: "2026-07-14",
      },
      {
        property: "article:modified_time",
        content: "2026-07-14",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(articleJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd),
      },
    ],
  }),
  component: ProductAccuracyGuide,
});

function ProductAccuracyGuide() {
  const { guide } = Route.useLoaderData();

  return (
    <SiteShell>
      <article>
        <header className="section-y border-b border-border bg-paper-alt">
          <div className="container-x max-w-4xl">
            <nav className="text-sm leading-6 text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/guides" className="underline-offset-4 hover:text-ink hover:underline">
                Guides
              </Link>
              <span aria-hidden="true"> / </span>
              <span>Product accuracy</span>
            </nav>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-accent">
              Product accuracy guide
            </p>

            <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              {guide.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              AI can create a cleaner background, a model image or a lifestyle
              scene while quietly changing the product itself. This guide shows
              how to separate the parts that may change from the details that
              must remain locked.
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
                <p className="mt-4 text-lg leading-8 text-ink">
                  To stop AI from changing a product, treat the uploaded photo as
                  the only product reference, list every identity-defining detail
                  that must remain unchanged, permit only the specific edit you
                  need and compare the result with the original before publishing.
                </p>
              </section>

              <section id="why-products-change" className="scroll-mt-28 pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  1. Why the product changes
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  Generative tools tend to recreate the whole image
                </h2>
                <div className="mt-5 space-y-5 leading-8 text-muted-foreground">
                  <p>
                    An instruction such as “put this shirt on a model” sounds
                    simple, but the system may interpret it as permission to
                    generate a new shirt that resembles the reference. That is
                    when colours drift, logos are redrawn, seams move, packaging
                    text changes or materials become unrealistically smooth.
                  </p>
                  <p>
                    The risk increases when one prompt asks for several major
                    changes at once: a new model, pose, background, camera angle,
                    lighting setup and garment fit. The more the scene changes,
                    the more opportunities the system has to reconstruct the
                    product instead of preserving it.
                  </p>
                </div>
              </section>

              <section id="preservation-method" className="scroll-mt-28 pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  2. The preservation-first method
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  Define what is locked before describing what should change
                </h2>

                <ol className="mt-7 space-y-5">
                  {[
                    {
                      title: "Use one authoritative product reference",
                      body: "State that the uploaded product photo is the only reference for the item. Do not invite the model to invent an improved, similar or replacement version.",
                    },
                    {
                      title: "Separate locked details from editable details",
                      body: "Locked details are product identity: colour, shape, logo, text, stitching, material, proportions and construction. Editable details are the model, background, lighting or presentation requested for the new image.",
                    },
                    {
                      title: "Name the details that matter",
                      body: "Generic wording such as “keep the product the same” is weaker than a product-specific checklist. Name the collar, sleeve length, pocket shape, label position, cap style, gemstone setting or other features a buyer would use to recognise the item.",
                    },
                    {
                      title: "Request one controlled transformation",
                      body: "Ask for the smallest necessary change. A controlled background replacement is easier to preserve than a complete redesign of camera angle, pose, lighting and environment in one generation.",
                    },
                    {
                      title: "Review before publication",
                      body: "AI output is not automatically listing-ready. Compare the generated image with the original at full size and reject any result that misrepresents the product.",
                    },
                  ].map((step, index) => (
                    <li
                      key={step.title}
                      className="grid gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:grid-cols-[48px_minmax(0,1fr)] sm:p-6"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper-alt font-mono text-sm font-semibold text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">
                          {step.title}
                        </h3>
                        <p className="mt-2 leading-7 text-muted-foreground">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="prompt-structure" className="scroll-mt-28 pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  3. A reusable prompt structure
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  Build the instruction in seven controlled layers
                </h2>

                <div className="mt-7 overflow-hidden rounded-2xl border border-border">
                  {[
                    ["Reference lock", "Use the uploaded image as the only product reference."],
                    ["Transformation", "Describe the single presentation change required."],
                    ["Preservation list", "Name every product feature that must remain identical."],
                    ["Composition", "Specify view, framing, visibility and placement."],
                    ["Lighting", "Use restrained commercial lighting that does not shift colour."],
                    ["Exclusions", "State what must not be added, removed, redrawn or covered."],
                    ["Quality control", "Require realistic texture, proportions and product fidelity."],
                  ].map(([label, description], index) => (
                    <div
                      key={label}
                      className={`grid gap-2 bg-paper p-5 sm:grid-cols-[180px_minmax(0,1fr)] ${
                        index > 0 ? "border-t border-border" : ""
                      }`}
                    >
                      <p className="font-semibold text-ink">{label}</p>
                      <p className="leading-7 text-muted-foreground">{description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-border bg-ink p-5 text-paper shadow-sm sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E6B15D]">
                    Reusable preservation block
                  </p>
                  <pre className="mt-4 whitespace-pre-wrap font-mono text-sm leading-7 text-paper">
{`Use the uploaded [PRODUCT] image as the only product reference.

Preserve the product exactly, including:
[COLOUR], [SHAPE], [PROPORTIONS], [MATERIAL],
[LOGO OR ARTWORK], [TEXT OR LABEL], [STITCHING],
[HARDWARE], [PATTERN] and all visible construction details.

Change only: [ALLOWED PRESENTATION CHANGE].

Do not redesign, recolour, smooth, restyle, replace,
add, remove or cover any product feature.

The result must remain recognisably identical to the
uploaded item and must be checked against the reference.`}
                  </pre>
                </div>
              </section>

              <section id="product-checklists" className="scroll-mt-28 pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  4. Product-specific preservation lists
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  The checklist should match the product
                </h2>

                <div className="mt-7 grid gap-5 md:grid-cols-3">
                  {[
                    {
                      title: "Apparel",
                      items: [
                        "Exact colour and pattern",
                        "Print, logo or embroidery",
                        "Collar, sleeves and cuffs",
                        "Pockets, seams and stitching",
                        "Fabric texture and drape",
                        "Length, fit and silhouette",
                      ],
                    },
                    {
                      title: "Jewellery",
                      items: [
                        "Metal colour and finish",
                        "Stone colour and cut",
                        "Setting and prong structure",
                        "Chain, clasp and proportions",
                        "Engraving or hallmark",
                        "Surface texture and reflections",
                      ],
                    },
                    {
                      title: "Packaging",
                      items: [
                        "Brand name and label text",
                        "Container shape and dimensions",
                        "Cap, pump or closure",
                        "Material transparency",
                        "Colour and print placement",
                        "Warnings, marks and symbols",
                      ],
                    },
                  ].map((group) => (
                    <section
                      key={group.title}
                      className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
                    >
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {group.title}
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                        {group.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </section>

              <section id="common-failures" className="scroll-mt-28 pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  5. Common failures and corrections
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  Correct the specific failure instead of regenerating blindly
                </h2>

                <div className="mt-7 overflow-hidden rounded-2xl border border-border">
                  {[
                    [
                      "Colour shifted",
                      "Restore the exact original product colour and remove lighting or grading that changes its perceived tone.",
                    ],
                    [
                      "Logo or text changed",
                      "Restore the original logo, artwork and visible text exactly. Do not redraw, reinterpret or invent lettering.",
                    ],
                    [
                      "Shape changed",
                      "Match the uploaded product proportions, silhouette, edges and construction. Change only the requested presentation.",
                    ],
                    [
                      "Material looks artificial",
                      "Restore the original texture, weave, grain, reflection and surface finish without smoothing or replacing the material.",
                    ],
                    [
                      "Important detail is hidden",
                      "Adjust the model pose, crop, props or packaging so the required product details remain fully visible.",
                    ],
                  ].map(([failure, correction], index) => (
                    <div
                      key={failure}
                      className={`grid gap-3 bg-paper p-5 sm:grid-cols-[180px_minmax(0,1fr)] ${
                        index > 0 ? "border-t border-border" : ""
                      }`}
                    >
                      <div className="flex gap-2 font-semibold text-ink">
                        <X className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                        <span>{failure}</span>
                      </div>
                      <p className="leading-7 text-muted-foreground">{correction}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="review-checklist" className="scroll-mt-28 pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  6. Pre-publication review
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  A professional-looking image can still be inaccurate
                </h2>

                <div className="mt-7 rounded-2xl border border-border bg-paper-alt p-5 sm:p-7">
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Compare colour against the original photo.",
                      "Zoom in on logos, prints, embroidery and label text.",
                      "Check all edges, seams, pockets, closures and hardware.",
                      "Confirm the product shape and proportions have not changed.",
                      "Inspect material texture, reflections and transparency.",
                      "Verify that the crop does not hide important product details.",
                      "Reject invented accessories, props, labels or features.",
                      "Check the current requirements of the marketplace where the image will be published.",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-xl bg-paper p-4 text-sm leading-6 text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section id="related-resources" className="scroll-mt-28 pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  7. See the method applied
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  Related ListingsReady resources
                </h2>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      title: "T-shirt main image case study",
                      description:
                        "See how colour, print, collar, sleeves and fabric appearance are evaluated against the original.",
                      to: "/case-studies/tshirt-amazon-main-image" as const,
                    },
                    {
                      title: "Kurti embroidery detail case study",
                      description:
                        "Review a workflow where embroidery, textile detail and garment identity need careful preservation.",
                      to: "/case-studies/kurti-embroidery-detail-ai" as const,
                    },
                    {
                      title: "Jeans lifestyle model case study",
                      description:
                        "See how model styling is controlled while keeping the jeans as the recognisable hero product.",
                      to: "/case-studies/jeans-ai-lifestyle-model" as const,
                    },
                    {
                      title: "Browse all tested workflows",
                      description:
                        "Open product-specific prompts, settings, common mistakes and targeted fix prompts.",
                      to: "/workflows" as const,
                    },
                  ].map((resource) => (
                    <Link
                      key={resource.title}
                      to={resource.to}
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
                    </Link>
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
                      Start with the complete preservation checklist, recommended
                      settings and targeted corrections for your product type.
                    </p>
                  </div>
                  <Link
                    to="/workflows"
                    className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md bg-accent px-5 font-medium text-white transition hover:opacity-90"
                  >
                    Browse workflows
                  </Link>
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
                    {[
                      ["Why products change", "#why-products-change"],
                      ["Preservation-first method", "#preservation-method"],
                      ["Reusable prompt structure", "#prompt-structure"],
                      ["Product checklists", "#product-checklists"],
                      ["Common failures", "#common-failures"],
                      ["Review checklist", "#review-checklist"],
                      ["Related resources", "#related-resources"],
                    ].map(([label, href]) => (
                      <li key={href}>
                        <a
                          href={href}
                          className="flex min-h-10 items-center rounded-md px-3 py-2 transition hover:bg-paper-alt hover:text-ink"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
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
