import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/workflows", label: "Workflows" },
  { href: "/guides", label: "Guides" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/brand/listingsready-logo.png"
      alt="ListingsReady"
      width={1000}
      height={138}
      className={`h-8 w-auto max-w-[210px] object-contain sm:h-10 sm:max-w-[260px] ${className}`}
      decoding="async"
    />
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 shadow-[0_1px_0_rgba(15,36,57,0.03)] backdrop-blur">
      <div className="relative mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 xl:min-h-[72px]">
        <a
          href="/"
          className="shrink-0"
          aria-label="ListingsReady home"
          onClick={() => setMobileOpen(false)}
        >
          <Wordmark />
        </a>

        <nav
          className="hidden items-center gap-5 text-sm font-medium text-muted-foreground xl:absolute xl:left-1/2 xl:flex xl:-translate-x-1/2 xl:gap-6 2xl:gap-7"
          aria-label="Primary navigation"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap py-2 transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-paper text-ink transition hover:bg-paper-alt xl:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background xl:hidden"
        >
          <nav
            className="mx-auto grid w-full max-w-7xl gap-2 px-4 py-4 sm:grid-cols-2 sm:px-6"
            aria-label="Mobile navigation"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center rounded-md border border-transparent px-4 py-3 text-base font-medium text-ink transition hover:border-border hover:bg-paper-alt"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
