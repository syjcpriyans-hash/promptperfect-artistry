import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link to="/" className="btn-primary mt-6 text-sm">
        Go home
      </Link>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">This page didn&apos;t load</h1>
      <p className="mt-4 text-muted-foreground">Something went wrong on our end. You can try refreshing or head back home.</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="btn-primary text-sm"
        >
          Try again
        </button>
        <Link to="/" className="text-sm font-medium hover:underline">
          Go home
        </Link>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ListingsReady — Tested AI prompt workflows for product photos" },
      {
        name: "description",
        content:
          "A tested library of AI prompt workflows that turn one product photo into a listing-ready image for Amazon, Shopify, Etsy, eBay and social.",
      },
      { name: "author", content: "ListingsReady" },
      { property: "og:site_name", content: "ListingsReady" },
      { property: "og:title", content: "ListingsReady — Tested AI prompt workflows for product photos" },
      {
        property: "og:description",
        content:
          "Copy the exact prompt, paste it into ChatGPT, Midjourney or Gemini, get a listing-ready image without the guesswork.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ListingsReady — Tested AI prompt workflows for product photos" },
      {
        name: "twitter:description",
        content: "Tested prompt workflows for Amazon, Shopify, Etsy, eBay and social product photography.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600&family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
