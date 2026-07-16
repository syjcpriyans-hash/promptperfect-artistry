import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { WorkflowPreviewImage } from "@/components/workflow-preview-image";
import { Button } from "@/components/ui/button";
import { WorkflowImageComparison } from "@/components/workflow-image-comparison";
import { WorkflowEngagementPanel } from "@/components/workflow-engagement-panel";
import { getWorkflowAbout } from "@/lib/workflow-about";
import { createBreadcrumbJsonLd } from "@/lib/breadcrumb-structured-data";
import {
  getWorkflowSeoDescription,
  getWorkflowSeoTitle,
} from "@/lib/workflow-seo";
import {
  findWorkflowByPublicParam,
  getWorkflowDisplayTitle,
  getWorkflowPublicSlug,
} from "@/lib/workflow-display";
import { isSizeGuideWorkflow } from "@/lib/workflow-visibility";
import { getCategory, getSubcategory, workflows } from "@/data/all-workflows";
import { trackEvent, type AnalyticsParams } from "@/lib/analytics";

export const Route = createFileRoute("/workflows/$id")({
  loader: ({ params }) => {
    const workflow = findWorkflowByPublicParam(params.id, workflows);
    if (!workflow || isSizeGuideWorkflow(workflow)) throw notFound();

    const category = getCategory(workflow.categorySlug);
    const subcategory = getSubcategory(
      workflow.categorySlug,
      workflow.subcategorySlug,
    );

    const relatedWorkflows = workflows
      .filter(
        (item) =>
          item.id !== workflow.id &&
          item.categorySlug === workflow.categorySlug &&
          item.subcategorySlug === workflow.subcategorySlug &&
          !isSizeGuideWorkflow(item),
      )
      .slice(0, 4);

    return { workflow, category, subcategory, relatedWorkflows };
  },
  head: ({ loaderData }) => {
    const breadcrumbItems = [
      { name: "Home", path: "/" },
      { name: "Categories", path: "/categories" },
    ];

    if (loaderData?.category) {
      breadcrumbItems.push({
        name: loaderData.category.title,
        path: `/categories/${loaderData.category.slug}`,
      });
    }

    if (loaderData?.category && loaderData.subcategory) {
      breadcrumbItems.push({
        name: loaderData.subcategory.title,
        path: `/categories/${loaderData.category.slug}/${loaderData.subcategory.slug}`,
      });
    }

    if (loaderData) {
      breadcrumbItems.push({
        name: getWorkflowDisplayTitle(loaderData.workflow),
        path: `/workflows/${getWorkflowPublicSlug(loaderData.workflow)}`,
      });
    }

    return {
      meta: [
        {
          title: loaderData
            ? getWorkflowSeoTitle(loaderData.workflow)
            : "AI Product Image Prompt Workflow — ListingsReady",
        },
        {
          name: "description",
          content: loaderData
            ? getWorkflowSeoDescription(loaderData.workflow)
            : "Tested AI prompt workflows for creating professional e-commerce product images.",
        },
      ],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(
                createBreadcrumbJsonLd(breadcrumbItems),
              ),
            },
          ]
        : [],
    };
  },
  component: WorkflowDetailPage,
});

function CopyButton({
  text,
  label = "Copy prompt",
  eventName,
  eventParams,
}: {
  text: string;
  label?: string;
  eventName: string;
  eventParams?: AnalyticsParams;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      trackEvent(eventName, eventParams);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — button simply will not show confirmation.
    }
  };

  return (
    <Button type="button" variant="outline" size="sm" className="w-full sm:w-auto" onClick={handleCopy}>
      {copied ? (
        <Check className="mr-2 h-4 w-4" />
      ) : (
        <Copy className="mr-2 h-4 w-4" />
      )}
      {copied ? "Copied!" : label}
    </Button>
  );
}

function WorkflowDetailPage() {
  const { workflow, category, subcategory, relatedWorkflows } =
    Route.useLoaderData();
  const title = getWorkflowDisplayTitle(workflow);
  const about = getWorkflowAbout(workflow);
  const workflowSlug = getWorkflowPublicSlug(workflow);

  useEffect(() => {
    trackEvent("workflow_view", {
      workflow_slug: workflowSlug,
      workflow_title: title,
      category: workflow.categorySlug,
      subcategory: workflow.subcategorySlug,
    });
  }, [
    title,
    workflow.categorySlug,
    workflow.subcategorySlug,
    workflowSlug,
  ]);

  return (
    <SiteShell>
      <article className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-7 break-words text-sm leading-6 text-muted-foreground sm:mb-8">
          <Link to="/categories" className="hover:text-foreground">
            Categories
          </Link>

          {category && (
            <>
              {" "}
              /{" "}
              <Link
                to="/categories/$category"
                params={{ category: category.slug }}
                className="hover:text-foreground"
              >
                {category.title}
              </Link>
            </>
          )}

          {subcategory && category && (
            <>
              {" "}
              /{" "}
              <Link
                to="/categories/$category/$subcategory"
                params={{
                  category: category.slug,
                  subcategory: subcategory.slug,
                }}
                className="hover:text-foreground"
              >
                {subcategory.title}
              </Link>
            </>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Copy the complete prompt, upload your product photo, and use the fix
            prompts only when the AI changes the product.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-8">
          <div className="min-w-0">
        <section className="rounded-2xl border bg-card p-4 shadow-sm sm:p-5">
          <h2 className="text-xl font-semibold sm:text-2xl">About this Workflow</h2>
          <ol className="mt-4 space-y-3 pl-6 text-sm leading-6 text-muted-foreground [list-style-type:decimal]">
            {about.map((item) => (
              <li key={item} className="pl-1">
                {item}
              </li>
            ))}
          </ol>
        </section>

        <WorkflowImageComparison workflow={workflow} />

        <section className="mt-8 rounded-2xl border bg-card p-4 shadow-sm sm:p-5">
            <div className="mb-4 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <h2 className="text-xl font-semibold sm:text-2xl">Complete Prompt</h2>
              <CopyButton
                text={workflow.prompt}
                eventName="copy_prompt"
                eventParams={{
                  workflow_slug: workflowSlug,
                  workflow_title: title,
                  category: workflow.categorySlug,
                  subcategory: workflow.subcategorySlug,
                }}
              />
            </div>

            <pre className="whitespace-pre-wrap rounded-xl bg-muted p-3 text-[13px] leading-6 text-foreground sm:p-4 sm:text-sm">
              {workflow.prompt}
            </pre>
          </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Best AI to Use</h2>
            <p className="mt-3 text-muted-foreground">{workflow.bestAI}</p>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Original Image Required</h2>
            <p className="mt-3 text-muted-foreground">
              Your own uploaded product photo — this is the only reference used.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border bg-card p-4 shadow-sm sm:p-5">
          <h2 className="text-xl font-semibold sm:text-2xl">Settings in ChatGPT</h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-muted px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Model
              </dt>
              <dd className="mt-1 text-base font-semibold text-foreground">
                GPT-5.5
              </dd>
            </div>

            <div className="rounded-xl bg-muted px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Intelligence
              </dt>
              <dd className="mt-1 text-base font-semibold text-foreground">
                High
              </dd>
            </div>

            <div className="rounded-xl bg-muted px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Mode
              </dt>
              <dd className="mt-1 text-base font-semibold text-foreground">
                Create an Image
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-8 rounded-2xl border bg-card p-4 shadow-sm sm:p-5">
          <h2 className="text-xl font-semibold sm:text-2xl">Workflow Testing</h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-muted px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Last tested
              </dt>
              <dd className="mt-1 text-base font-semibold text-foreground">
                July 2026
              </dd>
            </div>

            <div className="rounded-xl bg-muted px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Tested with
              </dt>
              <dd className="mt-1 text-base font-semibold text-foreground">
                GPT-5.5
              </dd>
            </div>

            <div className="rounded-xl bg-muted px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Workflow version
              </dt>
              <dd className="mt-1 text-base font-semibold text-foreground">
                1.0
              </dd>
            </div>

            <div className="rounded-xl bg-muted px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Typical result
              </dt>
              <dd className="mt-1 text-base font-semibold text-foreground">
                1–2 generations
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-8 rounded-2xl border bg-card p-4 shadow-sm sm:p-5">
          <h2 className="text-xl font-semibold sm:text-2xl">Common Mistakes</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {workflow.commonMistakes.map((mistake) => (
              <li
                key={mistake}
                className="rounded-xl bg-muted px-3 py-2 text-sm text-muted-foreground"
              >
                {mistake}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border bg-card p-4 shadow-sm sm:p-5">
          <h2 className="text-xl font-semibold sm:text-2xl">Fix Prompts</h2>
          <div className="mt-4 space-y-4">
            {workflow.fixPrompts.map((fixPrompt) => (
              <div key={fixPrompt.issue} className="rounded-xl border p-4">
                <div className="mb-3 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <h3 className="font-semibold">{fixPrompt.issue}</h3>
                  <CopyButton
                    text={fixPrompt.fix}
                    label="Copy fix"
                    eventName="copy_fix_prompt"
                    eventParams={{
                      workflow_slug: workflowSlug,
                      workflow_title: title,
                      fix_issue: fixPrompt.issue,
                    }}
                  />
                </div>

                <p className="whitespace-pre-wrap text-sm leading-6 text-muted-foreground">
                  {fixPrompt.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        {relatedWorkflows.length > 0 && (
          <section className="mt-10">
            <div className="mb-5">
              <h2 className="text-xl font-semibold sm:text-2xl">Related Workflows</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Explore more image workflows for the same product type.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {relatedWorkflows.map((relatedWorkflow) => (
                <Link
                  key={relatedWorkflow.id}
                  to="/workflows/$id"
                  params={{ id: getWorkflowPublicSlug(relatedWorkflow) }}
                  className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <WorkflowPreviewImage workflow={relatedWorkflow} />

                  <div className="p-4">
                    <h3 className="line-clamp-2 text-base font-semibold leading-snug group-hover:underline">
                      {getWorkflowDisplayTitle(relatedWorkflow)}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {subcategory && category && (
          <div className="mt-10">
            <Link
              to="/categories/$category/$subcategory"
              params={{
                category: category.slug,
                subcategory: subcategory.slug,
              }}
              className="text-sm font-medium hover:underline"
            >
              ← Back to {subcategory.title} workflows
            </Link>
          </div>
        )}
          </div>

          <WorkflowEngagementPanel
            workflowSlug={workflowSlug}
            workflowTitle={title}
            category={workflow.categorySlug}
            subcategory={workflow.subcategorySlug}
          />
        </div>
      </article>
    </SiteShell>
  );
}
