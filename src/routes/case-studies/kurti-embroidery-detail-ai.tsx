import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/case-study-page";
import { caseStudyDetails } from "@/data/case-studies";
import { workflows } from "@/data/all-workflows";
import { createBreadcrumbJsonLd } from "@/lib/breadcrumb-structured-data";

const study = caseStudyDetails["kurti-embroidery-detail-ai"];

export const Route = createFileRoute("/case-studies/kurti-embroidery-detail-ai")({
  loader: () => {
    const workflow = workflows.find((item) => item.id === study.workflowId);
    if (!workflow) throw notFound();
    return { workflow };
  },
  head: () => ({
    meta: [
      { title: study.seoTitle },
      {
        name: "description",
        content: study.metaDescription,
      },
      {
        property: "og:title",
        content: study.title,
      },
      {
        property: "og:description",
        content: study.ogDescription,
      },
      {
        property: "og:url",
        content: `/case-studies/${study.slug}`,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            {
              name: study.shortTitle,
              path: `/case-studies/${study.slug}`,
            },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { workflow } = Route.useLoaderData();
  return <CaseStudyPage workflow={workflow} study={study} />;
}
