import { createFileRoute } from "@tanstack/react-router";
import { GuideArticlePage } from "@/components/guide-article-page";
import { phonePhotoGuide } from "@/data/guides";
import { createGuideHead } from "@/lib/guide-seo";

const guide = phonePhotoGuide;

export const Route = createFileRoute("/guides/how-to-turn-phone-product-photo-into-professional-listing-image")({
  head: () => createGuideHead(guide),
  component: GuideRoute,
});

function GuideRoute() {
  return <GuideArticlePage guide={guide} />;
}
