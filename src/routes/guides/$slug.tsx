import { createFileRoute } from "@tanstack/react-router";
import { GuideArticlePage } from "@/components/guide-article-page";
import { SiteShell } from "@/components/site-shell";
import { getGuideBySlug } from "@/data/guides";

export const Route = createFileRoute("/guides/$slug")({
  component: GuideFallbackRoute,
});

function GuideFallbackRoute() {
  const { slug } = Route.useParams();
  const guide = getGuideBySlug(slug);

  if (guide) {
    return <GuideArticlePage guide={guide} />;
  }

  return (
    <SiteShell>
      <main className="container-x flex min-h-[60vh] max-w-3xl flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-medium text-muted-foreground">Guide not found</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink">
          This guide is not available
        </h1>
        <p className="mt-4 text-muted-foreground">
          Browse the published ListingsReady guides and choose another topic.
        </p>
        <a href="/guides" className="btn-primary mt-6">
          View all guides
        </a>
      </main>
    </SiteShell>
  );
}
