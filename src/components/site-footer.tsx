import { Link } from "@tanstack/react-router";
import { Wordmark } from "./site-header";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-paper-alt">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark />
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              A tested library of AI prompt workflows for product photography.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Contact:{" "}
              <a href="mailto:hello@listingready.app" className="text-ink underline-offset-4 hover:underline">
                hello@listingready.app
              </a>
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-medium text-ink">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/workflows" className="hover:text-ink">Workflows</Link></li>
              <li><Link to="/categories" className="hover:text-ink">Categories</Link></li>
              <li><Link to="/pricing" className="hover:text-ink">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-ink">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-medium text-ink">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-ink">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-ink">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>
            ListingReady is an independent library of prompt workflows. We are not affiliated with, endorsed by,
            or sponsored by Amazon, Shopify, Etsy, eBay, Instagram, TikTok, Facebook, OpenAI, Midjourney or Google.
            AI-generated images should be reviewed for accuracy and reviewed against each marketplace's image and
            content policies before you publish them.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} ListingReady. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
