import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ListingsReady" },
      {
        name: "description",
        content:
          "How ListingsReady handles personal information, analytics preferences and website usage data.",
      },
      { property: "og:title", content: "Privacy Policy — ListingsReady" },
      {
        property: "og:description",
        content: "How ListingsReady handles personal information and analytics.",
      },
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
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
            Privacy Policy
          </h1>

          <div className="mt-8 space-y-8 text-muted-foreground">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                Information we collect
              </h2>
              <p className="mt-3 leading-7">
                ListingsReady collects only information needed to operate and
                improve the website. We do not sell personal information to third
                parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                Optional website analytics
              </h2>
              <p className="mt-3 leading-7">
                When you accept analytics, ListingsReady uses Google Analytics to
                understand page views, traffic sources and interactions such as
                workflow views, prompt-copy actions and contact-link clicks.
                Analytics is not loaded when you decline.
              </p>
              <p className="mt-3 leading-7">
                We do not intentionally send product photos, prompt text, names,
                email addresses or other directly identifying information through
                these analytics events.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                External AI tools
              </h2>
              <p className="mt-3 leading-7">
                When you use a ListingsReady workflow in an external AI tool, your
                use of that tool is governed by the provider&apos;s own privacy
                policy. ListingsReady does not receive or store the product images
                or prompts you submit directly to those external services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                Contact
              </h2>
              <p className="mt-3 leading-7">
                To request access to, correction of or deletion of information
                associated with you, email{" "}
                <a
                  href="mailto:hello@listingready.app"
                  className="text-ink underline-offset-4 hover:underline"
                >
                  hello@listingready.app
                </a>
                .
              </p>
            </section>

            <p className="text-xs">
              Last updated: July 2026.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
