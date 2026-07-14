import { Link } from "@tanstack/react-router";
import { Wordmark } from "./site-header";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-paper-alt">
      <div className="container-x py-10 sm:py-12 lg:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="sm:col-span-2">
            <Wordmark className="max-w-full" />
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              A tested library of AI prompt workflows for product photography.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Contact:{" "}
              <a
                href="mailto:hello@listingready.app"
                className="break-all text-ink underline-offset-4 hover:underline"
              >
                hello@listingready.app
              </a>
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-medium text-ink">Product</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li><Link to="/categories" className="inline-flex min-h-10 items-center hover:text-ink">Categories</Link></li>
              <li><Link to="/workflows" className="inline-flex min-h-10 items-center hover:text-ink">Workflows</Link></li>
              <li><Link to="/guides" className="inline-flex min-h-10 items-center hover:text-ink">Guides</Link></li>
              <li><Link to="/case-studies" className="inline-flex min-h-10 items-center hover:text-ink">Case Studies</Link></li>
              <li><Link to="/about" className="inline-flex min-h-10 items-center hover:text-ink">About</Link></li>
              <li><Link to="/methodology" className="inline-flex min-h-10 items-center hover:text-ink">How We Test</Link></li>
              <li><Link to="/faq" className="inline-flex min-h-10 items-center hover:text-ink">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-medium text-ink">Legal</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="inline-flex min-h-10 items-center hover:text-ink">Privacy Policy</Link></li>
              <li><Link to="/terms" className="inline-flex min-h-10 items-center hover:text-ink">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-xs leading-6 text-muted-foreground sm:mt-10">
          <p className="max-w-5xl">
            ListingsReady is an independent library of prompt workflows. We are not affiliated with, endorsed by,
            or sponsored by Amazon, Shopify, Etsy, eBay, Instagram, TikTok, Facebook, OpenAI, Midjourney or Google.
            AI-generated images should be reviewed for accuracy and reviewed against each marketplace&apos;s image and
            content policies before you publish them.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} ListingsReady. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
