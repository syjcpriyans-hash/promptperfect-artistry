import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — ListingReady" },
      { name: "description", content: "Answers about ListingReady prompt workflows, supported AI tools, and marketplace compatibility." },
      { property: "og:title", content: "FAQ — ListingReady" },
      { property: "og:description", content: "Answers about ListingReady prompt workflows and supported AI tools." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd) }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteShell>
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
            Frequently asked questions
          </h1>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-display text-base font-medium text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </SiteShell>
  );
}
