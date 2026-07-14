import { createFileRoute } from "@tanstack/react-router";
import { GuideArticlePage } from "@/components/guide-article-page";
import { amazonProductImagesGuide } from "@/data/guides";
import { createGuideHead } from "@/lib/guide-seo";

const guide = amazonProductImagesGuide;

export const Route = createFileRoute("/guides/how-to-create-amazon-product-images-using-chatgpt")({
  head: () => createGuideHead(guide),
  component: GuideRoute,
});

function GuideRoute() {
  return <GuideArticlePage guide={guide} />;
}
