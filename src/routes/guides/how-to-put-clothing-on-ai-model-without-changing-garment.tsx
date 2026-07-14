import { createFileRoute } from "@tanstack/react-router";
import { GuideArticlePage } from "@/components/guide-article-page";
import { aiModelClothingGuide } from "@/data/guides";
import { createGuideHead } from "@/lib/guide-seo";

const guide = aiModelClothingGuide;

export const Route = createFileRoute("/guides/how-to-put-clothing-on-ai-model-without-changing-garment")({
  head: () => createGuideHead(guide),
  component: GuideRoute,
});

function GuideRoute() {
  return <GuideArticlePage guide={guide} />;
}
