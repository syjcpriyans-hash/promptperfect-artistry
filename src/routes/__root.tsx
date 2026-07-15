import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";
import { AnalyticsRouteTracker } from "@/components/analytics-route-tracker";

const SITE_URL = "https://listingsready.com";

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "ListingsReady",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/listingsready-logo.png`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "ListingsReady",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en",
    },
  ],
};

function NotFoundComponent() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
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
      <p className="mt-4 text-muted-foreground">
        Something went wrong on our end. You can try refreshing or head back home.
      </p>
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
      { title: "ListingsReady — Tested AI Prompt Workflows for Product Photos" },
      {
        name: "description",
        content:
          "Tested AI prompt workflows for creating professional product images for Amazon, Shopify, Etsy, eBay and social commerce.",
      },
      { name: "author", content: "ListingsReady" },
      {
        name: "robots",
        content:
          "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      { property: "og:site_name", content: "ListingsReady" },
      {
        property: "og:title",
        content: "ListingsReady — Tested AI Prompt Workflows for Product Photos",
      },
      {
        property: "og:description",
        content:
          "Use tested, product-specific AI prompt workflows to create listing-ready e-commerce images with less trial and error.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "ListingsReady — Tested AI Prompt Workflows for Product Photos",
      },
      {
        name: "twitter:description",
        content:
          "Tested prompt workflows for Amazon, Shopify, Etsy, eBay and social product photography.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
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
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const canonicalPath =
    pathname === "/" ? "" : pathname.replace(/\/+$/, "");
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FQYCQ4ELH1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FQYCQ4ELH1');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData),
          }}
        />
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
      <AnalyticsRouteTracker />
      <Outlet />
    </QueryClientProvider>
  );
}
