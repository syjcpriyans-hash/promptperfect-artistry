import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import heroBefore from "@/assets/hero-before.jpg";
import heroAfter from "@/assets/hero-after.jpg";

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
  { n: "04", t: "Paste into ChatGPT image generation", d: "Use the model and settings shown inside the workflow. If something looks off, apply the included fix prompt." },
];

const channels = ["Amazon", "Shopify", "Etsy", "eBay", "Instagram", "TikTok", "Facebook"];

const newWorkflows = [
  {
    slug: "lifestyle-model-image-jeans-pants",
    title: "Lifestyle Model Image",
    image: "/workflow-previews/wf-072.jpg",
    alt: "Jeans lifestyle model workflow showing the exact jeans worn by a model.",
  },
  {
    slug: "fabric-denim-wash-close-up-jeans-pants",
    title: "Fabric / Denim Wash Close-Up",
    image: "/workflow-previews/wf-076.jpg",
    alt: "Jeans fabric and denim wash close-up showing texture, fade and stitching.",
  },
  {
    slug: "folded-packaging-presentation-jeans-pants",
    title: "Folded / Packaging Presentation",
    image: "/workflow-previews/wf-080.jpg",
    alt: "Jeans folded beside simple packaging for an e-commerce presentation.",
  },
  {
    slug: "waistband-pocket-detail-image-jeans-pants",
    title: "Waistband / Pocket Details",
    image: "/workflow-previews/wf-075.jpg",
    alt: "Jeans waistband and pocket detail showing the button, belt loops and stitching.",
  },
];

export const Route = createFileRoute("/")({
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
              ListingsReady is a tested library of prompt workflows for product photography. Copy the exact
              prompt, paste it into ChatGPT image generation, and get a listing-ready image without the
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

      {/* New workflows */}
      <section id="example" className="section-y">
        <div className="container-x">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">New workflows</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
                Latest jeans workflow additions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Four newly added workflows from the jeans collection. Click any card to open the full workflow.
              </p>
            </div>
            <Link
              to="/categories/$category/$subcategory"
              params={{ category: "clothes", subcategory: "jeans-pants" }}
              className="text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              View all jeans workflows →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {newWorkflows.map((item) => (
              <Link
                key={item.slug}
                to="/workflows/$id"
                params={{ id: item.slug }}
                className="group overflow-hidden border border-border bg-paper transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="aspect-[4/5] overflow-hidden bg-paper-alt p-3">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="border-t border-border p-5">
                  <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Open workflow</p>
                </div>
              </Link>
            ))}
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
            I built ListingsReady after burning through generation credits trying to swap a product background
            without the garment color drifting. If you sell online and you're tired of the same problem, these
            are the exact prompts that worked for me — tested ahead of time so you don't have to find them
            yourself.
          </blockquote>
          <p className="mt-6 text-sm text-muted-foreground">— The ListingsReady team</p>
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
            alt="ListingsReady workflow output — burgundy t-shirt on clean white background, listing ready"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
        <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-accent">
          ListingsReady workflow
        </figcaption>
      </figure>
    </div>
  );
}
