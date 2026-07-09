import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/workflows", label: "Workflows" },
  { to: "/categories", label: "Categories" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline text-3xl font-semibold tracking-tight text-foreground sm:text-4xl ${className}`}>
      ListingReady<span className="text-primary">.</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0" aria-label="ListingReady home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="transition hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/workflows" className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90 sm:inline-flex">
          Browse workflows
        </Link>
      </div>
    </header>
  );
}
