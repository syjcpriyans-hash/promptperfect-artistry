import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ListingReady" },
      { name: "description", content: "How ListingReady handles the limited personal information we collect." },
      { property: "og:title", content: "Privacy Policy — ListingReady" },
      { property: "og:description", content: "How ListingReady handles personal information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Privacy Policy</h1>
          <div className="prose mt-8 space-y-6 text-muted-foreground">
            <p>
              ListingReady collects only the information we need to deliver the product: your email address
              when you sign up, and basic analytics about how the site is used. We do not sell personal
              information to third parties.
            </p>
            <p>
              When you use the prompt workflows in an external AI tool (ChatGPT, Midjourney, Gemini), your use
              of that tool is governed by that provider's own privacy policy. ListingReady does not receive or
              store the prompts you generate.
            </p>
            <p>
              To request access to, correction of, or deletion of your data, email{" "}
              <a href="mailto:hello@listingready.app" className="text-ink underline-offset-4 hover:underline">
                hello@listingready.app
              </a>
              .
            </p>
            <p className="text-xs">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}.</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
