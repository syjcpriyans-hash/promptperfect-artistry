import { createFileRoute } from "@tanstack/react-router";
import { GuideArticlePage } from "@/components/guide-article-page";
import { stopAiChangingGuide } from "@/data/guides";
import { createGuideHead } from "@/lib/guide-seo";

const guide = stopAiChangingGuide;

export const Route = createFileRoute("/guides/how-to-stop-ai-changing-product-colours-logos-details")({
  head: () => createGuideHead(guide),
  component: GuideRoute,
});

function GuideRoute() {
  return <GuideArticlePage guide={guide} />;
}
