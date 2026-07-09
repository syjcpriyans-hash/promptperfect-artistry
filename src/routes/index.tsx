import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { getWorkflowDisplayTitle, getWorkflowPublicSlug } from "@/lib/workflow-display";
import { getWorkflow } from "@/data/workflows";

const faqs = [
  {
    q: "What exactly do I get?",
    a: "You get a library of copy-paste prompt workflows for product photography. Each workflow includes a complete prompt and paired fix prompts for when the first result needs adjustment.",
  },
  {
    q: "Which AI tools do the prompts work with?",
    a: "The workflows are written for specific AI tools such as ChatGPT, Midjourney, and Gemini. Each workflow tells you which AI to use.",
  },
  {
    q: "Do I need to know how to write prompts?",
    a: "No. The prompt writing is already done. Choose the workflow, copy it, paste it into the right AI tool, and use the paired fix prompt if the output drifts.",
  },
  {
    q: "Do the prompts guarantee a perfect image on the first try?",
    a: "No generative AI workflow can guarantee a perfect first result, but tested workflows reduce guessing and give you a clear fix prompt when something changes.",
  },
];

const categories = [
  { title: "Apparel", sub: "T-shirts, hoodies, shirts and accessories" },
  { title: "Packaged goods", sub: "Boxes, bottles, jars and pouches" },
  { title: "Jewelry", sub: "Rings, necklaces, earrings and macro detail" },
  { title: "Home", sub: "Home, kitchen and decor products" },
  { title: "Beauty", sub: "Skincare, cosmetics and personal care" },
  { title: "Lifestyle", sub: "In-use scenes and social visuals" },
];

const comparison = [
  ["Garment or pattern drifts between generations", "Reference-locked prompt keeps the product identical"],
  ["Color shifts under generated lighting", "Exact lighting and color-hold instructions"],
  ["Print and fabric texture come back blurry", "Resolution and detail instructions included"],
  ["Background looks artificial or off-brand", "Marketplace-tested background prompts"],
  ["You don't know what to prompt in the first place", "Complete copy-paste prompt, no guesswork"],
  ["Failed attempts burn through credits", "Pre-tested workflow — first pass is usable"],
];

const steps = [
  {
    n: "01",
    t: "Choose product type",
    d: "Apparel, packaged goods, jewelry, home, beauty, lifestyle.",
  },
  {
    n: "02",
    t: "Pick the workflow",
    d: "Choose what type of image you would like to create.",
  },
  {
    n: "03",
    t: "Copy the workflow",
    d: "One prompt, written for a specific AI out of ChatGPT, Midjourney, Gemini.",
  },
  {
    n: "04",
    t: "Paste and use the fix prompt",
    d: "If the first generation drifts, run the paired fix prompt.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featuredWorkflow = getWorkflow("WF-001");

  return (
    <SiteShell>
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Stop regenerating the same product shot to get one usable image.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            ListingReady is a tested library of prompt workflows for product photography. Copy the exact prompt, paste it into ChatGPT, Midjourney or Gemini, and get a listing-ready image without the guesswork.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/workflows" className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90">
              Browse workflows
            </Link>
            <a href="#featured-workflow" className="rounded-full border px-5 py-3 text-sm font-medium transition hover:bg-muted">
              See a real example
            </a>
          </div>
        </div>

        <div id="featured-workflow" className="rounded-3xl border bg-card p-5 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">Featured workflow</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            {featuredWorkflow ? getWorkflowDisplayTitle(featuredWorkflow) : "Main image — apparel on white background"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete prompt workflow built for turning one product reference image into a clean product visual.
          </p>

          <pre className="mt-6 overflow-x-auto rounded-2xl bg-muted p-4 text-sm leading-6 text-foreground">
            {`Using the uploaded product image as the only product reference, create a clean professional product image. Preserve the product exactly and change only the requested image style.`}
          </pre>

          {featuredWorkflow ? (
            <Link
              to="/workflows/$id"
              params={{ id: getWorkflowPublicSlug(featuredWorkflow) }}
              className="mt-5 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              View full workflow
            </Link>
          ) : (
            <Link to="/workflows" className="mt-5 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90">
              View workflows
            </Link>
          )}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            What goes wrong, and what the workflow fixes.
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="grid border-b bg-muted/30 md:grid-cols-2">
            <div className="border-b px-6 py-4 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground md:border-b-0 md:border-r">
              What goes wrong
            </div>
            <div className="px-6 py-4 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              What the workflow fixes
            </div>
          </div>

          {comparison.map(([problem, fix]) => (
            <div key={problem} className="grid border-b last:border-b-0 md:grid-cols-2">
              <div className="border-b px-6 py-5 text-sm text-muted-foreground md:border-b-0 md:border-r">
                {problem}
              </div>
              <div className="px-6 py-5 text-sm font-medium text-foreground">
                <span className="mr-3 text-primary">✓</span>
                {fix}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-3 text-muted-foreground">Four steps between one product and a listing-ready image.</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border bg-card p-5 shadow-sm">
              <p className="text-sm font-medium text-muted-foreground">{s.n}</p>
              <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">Workflow categories</h2>
            <p className="mt-3 text-muted-foreground">Every workflow is written for a specific product type and image type.</p>
          </div>
          <Link to="/categories" className="text-sm font-medium hover:underline">
            All categories →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-muted-foreground">From the founder</p>
          <blockquote className="mt-4 text-2xl font-medium leading-10 tracking-tight">
            I built ListingReady after burning through generation credits trying to swap a product background without the garment color drifting. If you sell online and you are tired of the same problem, these are the exact prompts that worked for me — tested ahead of time so you do not have to find them yourself.
          </blockquote>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight">Frequently asked questions</h2>
          <p className="mt-3 text-muted-foreground">Written for real answers before customers buy.</p>
        </div>

        <div className="mt-8 grid gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl border bg-card p-5 shadow-sm">
              <summary className="cursor-pointer text-lg font-semibold">{f.q}</summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight">Start with a workflow, ship a listing.</h2>
        <p className="mt-3 text-muted-foreground">Copy the prompt. Paste it. Move on.</p>
        <Link to="/workflows" className="mt-6 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90">
          Browse workflows
        </Link>
      </section>
    </SiteShell>
  );
}
