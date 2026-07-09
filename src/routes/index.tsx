import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import heroBefore from "@/assets/hero-before.jpg";
import heroAfter from "@/assets/hero-after.jpg";

const faqs = [
  {
    q: "What exactly do I get?",
    a: "You get a library of copy-paste prompt workflows for product photography. Each workflow is a complete prompt — tested in ChatGPT, Midjourney or Gemini — plus a fix prompt for when a result needs adjustment.",
  },
  {
    q: "Which AI tools do the prompts work with?",
    a: "The prompts are written for ChatGPT (GPT-4o and image generation), Midjourney, and Google Gemini. Each workflow lists which tool it was tested in and any tool-specific variants.",
  },
  {
    q: "Do I need to know how to write prompts?",
    a: "No. The whole point of ListingReady is that the prompt writing is already done. You copy the workflow, paste your product context in the marked fields, and generate.",
  },
  {
    q: "Will the images meet Amazon or Etsy image requirements?",
    a: "The workflows are built with each channel's image guidelines in mind — for example pure white backgrounds for Amazon main images. You should still review every image against the current marketplace policy before you publish.",
  },
  {
    q: "Do the prompts guarantee a perfect image on the first try?",
    a: "Nothing about generative AI is guaranteed. What tested workflows do is dramatically reduce the number of tries — most workflows land a usable image in one or two generations instead of ten or twenty.",
  },
  {
    q: "Is ListingReady affiliated with Amazon, Shopify, Etsy, OpenAI or Midjourney?",
    a: "No. ListingReady is an independent library of prompt workflows and is not affiliated with, endorsed by, or sponsored by any marketplace or AI provider.",
  },
];

const categories = [
  { title: "Apparel", sub: "T-shirts, hoodies, accessories" },
  { title: "Beauty & skincare", sub: "Bottles, tubes, jars" },
  { title: "Home & kitchen", sub: "Small goods on white" },
  { title: "Food & beverage", sub: "Packaged product shots" },
  { title: "Electronics", sub: "Devices and accessories" },
  { title: "Jewelry", sub: "Rings, necklaces, macro" },
  { title: "Lifestyle scenes", sub: "In-use social shots" },
  { title: "Model on white", sub: "Apparel on figure" },
];

const comparison = [
  ["Garment color or pattern drifts between attempts", "Reference-locked prompt keeps color, pattern and shape consistent"],
  ["Colors shift under different lighting or background prompts", "Exact lighting and color-hold instructions built into the prompt"],
  ["Print or texture comes out blurry", "Resolution and detail instructions included by default"],
  ["Background looks obviously artificial", "Marketplace-appropriate background prompts, tested per channel"],
  ["You don't know what to type into the AI", "Complete, copy-paste prompt — no prompt-writing required"],
  ["Every failed attempt costs time and generation credits", "Workflow tested in advance, so the first result is usually the final one"],
];

const steps = [
  { n: "01", t: "Choose your product type", d: "Apparel, beauty, food, electronics, jewelry or a lifestyle scene." },
  { n: "02", t: "Pick the channel you're shooting for", d: "Amazon main, Shopify PDP, Etsy hero, eBay listing, or social." },
  { n: "03", t: "Copy the matched prompt workflow", d: "One complete, tested prompt — with the fields you need to fill in marked." },
  { n: "04", t: "Paste into ChatGPT, Midjourney or Gemini", d: "If something looks off, use the included fix prompt to correct it in one pass." },
];

const channels = ["Amazon", "Shopify", "Etsy", "eBay", "Instagram", "TikTok", "Facebook"];

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
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              For Amazon, Shopify, Etsy, eBay and social sellers
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.5rem]">
              Stop regenerating the same product shot to get one usable image.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              ListingReady is a tested library of prompt workflows for product photography. Copy the exact
              prompt, paste it into ChatGPT, Midjourney or Gemini, get a listing-ready image without the
              guesswork.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/workflows" className="btn-primary">Browse workflows</Link>
              <a href="#example" className="btn-ghost">See a real example</a>
            </div>
          </div>

          <BeforeAfter />
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-paper-alt py-6">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Workflows for
          </span>
          {channels.map((c) => (
            <span key={c} className="text-sm font-medium text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Featured workflow */}
      <section id="example" className="section-y">
        <div className="container-x">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">Featured workflow</p>
          <div className="mt-4 flex flex-col justify-between gap-6 border border-border p-8 md:flex-row md:items-end md:p-10">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                Amazon main image — apparel on white background
              </h2>
              <p className="mt-3 text-muted-foreground">
                Produces a compliant Amazon main image: pure #FFFFFF background, garment centered, true color
                held, sharp fabric detail. Tested in ChatGPT image generation and Midjourney v6.
              </p>
              <div className="mt-5">
                <pre className="overflow-x-auto rounded-md border border-border bg-paper-alt p-4 text-[13px] leading-relaxed text-ink">
{`Professional Amazon main product image of [PRODUCT],
folded and centered on a pure #FFFFFF seamless background.
Hold true garment color, keep pattern and stitching sharp,
even soft studio lighting, no shadow bleed, listing ready.`}
                </pre>
              </div>
            </div>
            <Link to="/workflows" className="btn-primary shrink-0">
              View full workflow
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-y bg-paper-alt">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              What normally goes wrong, and what a tested workflow fixes.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The same six problems come up in almost every product-photo generation. Each workflow is written
              specifically to prevent them.
            </p>
          </div>
          <div className="mt-10 overflow-hidden border border-border bg-paper">
            <div className="grid grid-cols-1 border-b border-border bg-paper-alt text-sm font-medium text-ink md:grid-cols-2">
              <div className="px-6 py-4">What goes wrong</div>
              <div className="border-t border-border px-6 py-4 md:border-l md:border-t-0">
                What the workflow fixes
              </div>
            </div>
            {comparison.map(([problem, fix], i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-2 ${
                  i < comparison.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="px-6 py-5 text-sm text-muted-foreground">{problem}</div>
                <div className="border-t border-border px-6 py-5 text-sm text-ink md:border-l md:border-t-0">
                  <span className="mr-2 text-accent">✓</span>
                  {fix}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">How it works</h2>
            <p className="mt-4 text-muted-foreground">
              Four steps between one product and a listing-ready image.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="border border-border p-6">
                <div className="font-mono text-xs text-accent">{s.n}</div>
                <h3 className="mt-3 font-display text-lg font-medium text-ink">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Categories */}
      <section className="section-y bg-paper-alt">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">Workflow categories</h2>
              <p className="mt-4 text-muted-foreground">
                Every workflow is written for a specific product type and a specific channel.
              </p>
            </div>
            <Link to="/categories" className="hidden text-sm text-ink underline-offset-4 hover:underline md:inline">
              All categories →
            </Link>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.title} className="bg-paper p-6 transition-colors hover:bg-paper-alt">
                <h3 className="font-display text-base font-medium text-ink">{c.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            From the founder
          </p>
          <blockquote className="mt-5 border-l-2 border-accent pl-6 font-display text-xl leading-relaxed text-ink md:text-2xl">
            I built ListingReady after burning through generation credits trying to swap a product background
            without the garment color drifting. If you sell online and you're tired of the same problem, these
            are the exact prompts that worked for me — tested ahead of time so you don't have to find them
            yourself.
          </blockquote>
          <p className="mt-6 text-sm text-muted-foreground">— The ListingReady team</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-paper-alt">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Written for real answers, and structured so voice search and AI Overviews can quote them
              directly.
            </p>
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-display text-base font-medium text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-y">
        <div className="container-x flex flex-col items-start justify-between gap-6 border border-border p-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              Start with a workflow, ship a listing.
            </h2>
            <p className="mt-2 text-muted-foreground">
              Copy the prompt. Paste it. Move on.
            </p>
          </div>
          <Link to="/workflows" className="btn-primary">Browse workflows</Link>
        </div>
      </section>
    </SiteShell>
  );
}

function BeforeAfter() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <figure>
        <div className="aspect-square overflow-hidden border border-border bg-paper-alt">
          <img
            src={heroBefore}
            alt="Common AI attempt at a product photo of a burgundy t-shirt — color drift and artificial-looking background"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
        <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Common AI attempt
        </figcaption>
      </figure>
      <figure>
        <div className="aspect-square overflow-hidden border border-border bg-paper-alt">
          <img
            src={heroAfter}
            alt="ListingReady workflow output — burgundy t-shirt on clean white background, listing ready"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
        <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-accent">
          ListingReady workflow
        </figcaption>
      </figure>
    </div>
  );
}
