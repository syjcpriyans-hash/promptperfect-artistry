import { createFileRoute } from "@tanstack/react-router";
import { GuideArticlePage } from "@/components/guide-article-page";
import { preserveTextPrintsGuide } from "@/data/guides";
import { createGuideHead } from "@/lib/guide-seo";

const guide = preserveTextPrintsGuide;

export const Route = createFileRoute("/guides/how-to-preserve-text-prints-embroidery-ai-product-images")({
  head: () => createGuideHead(guide),
  component: GuideRoute,
});

function GuideRoute() {
  return <GuideArticlePage guide={guide} />;
}
