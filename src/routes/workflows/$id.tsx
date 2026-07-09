import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { WorkflowPreviewImage } from "@/components/workflow-preview-image";
import { getWorkflowDisplayTitle } from "@/lib/workflow-display";
import { getCategory, getSubcategory, getWorkflow } from "@/data/workflows";

export const Route = createFileRoute("/workflows/$id")({
  loader: ({ params }) => {
    const workflow = getWorkflow(params.id);
    if (!workflow) throw notFound();
    const category = getCategory(workflow.categorySlug);
    const subcategory = getSubcategory(workflow.categorySlug, workflow.subcategorySlug);
    return { workflow, category, subcategory };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.workflow.id} — ${getWorkflowDisplayTitle(loaderData.workflow)} — ListingReady`
          : "Workflow — ListingReady",
      },
      { name: "description", content: "Copy-paste-ready AI product image prompt workflow." },
    ],
  }),
  component: WorkflowDetailPage,
});

function CopyButton({ text, label = "Copy prompt" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — button simply will not show confirmation.
    }
  };

  return (
    <Button type="button" variant="outline" size="sm" onClick={handleCopy}>
      {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
      {copied ? "Copied!" : label}
    </Button>
  );
}

function WorkflowDetailPage() {
  const { workflow, category, subcategory } = Route.useLoaderData();
  const title = getWorkflowDisplayTitle(workflow);

  return (
    <SiteShell>
      <article className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-sm text-muted-foreground">
          <Link to="/categories" className="hover:text-foreground">
            Categories
          </Link>
          {category && (
            <>
              {" "}/ {" "}
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
              {" "}/ {" "}
              <Link
                to="/categories/$category/$subcategory"
                params={{ category: category.slug, subcategory: subcategory.slug }}
                className="hover:text-foreground"
              >
                {subcategory.title}
              </Link>
            </>
          )}
          {" "}/ {workflow.id}
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{workflow.id}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">{title}</h1>
            <p className="mt-4 text-muted-foreground">
              Copy the complete prompt, upload your product photo, and use the fix prompts only when the AI changes the product.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <WorkflowPreviewImage workflow={workflow} />
            <div className="p-4">
              <p className="text-sm font-semibold">{title}</p>
            </div>
          </div>
        </div>

        <section className="mt-10 rounded-2xl border bg-card p-5 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Complete Prompt</h2>
            <CopyButton text={workflow.prompt} />
          </div>
          <pre className="whitespace-pre-wrap rounded-xl bg-muted p-4 text-sm leading-6 text-foreground">
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

        <section className="mt-8 rounded-2xl border bg-card p-5 shadow-sm">
          <h2 className="text-2xl font-semibold">Settings in ChatGPT</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
            <li>Open ChatGPT and start a new chat using GPT-4o / ChatGPT Images.</li>
            <li>Upload your original product photo as the only reference image.</li>
            <li>Paste the Complete Prompt above exactly as written — do not shorten it.</li>
            <li>Generate the image, then compare it against the original for any drift.</li>
            <li>If something changes that should not change, use the matching Fix Prompt below in the same chat.</li>
          </ol>
        </section>

        <section className="mt-8 rounded-2xl border bg-card p-5 shadow-sm">
          <h2 className="text-2xl font-semibold">Common Mistakes</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {workflow.commonMistakes.map((mistake) => (
              <li key={mistake} className="rounded-xl bg-muted px-3 py-2 text-sm text-muted-foreground">
                {mistake}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border bg-card p-5 shadow-sm">
          <h2 className="text-2xl font-semibold">Fix Prompts</h2>
          <div className="mt-4 space-y-4">
            {workflow.fixPrompts.map((fixPrompt) => (
              <div key={fixPrompt.issue} className="rounded-xl border p-4">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-semibold">{fixPrompt.issue}</h3>
                  <CopyButton text={fixPrompt.fix} label="Copy fix" />
                </div>
                <p className="whitespace-pre-wrap text-sm leading-6 text-muted-foreground">
                  {fixPrompt.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        {subcategory && category && (
          <div className="mt-10">
            <Link
              to="/categories/$category/$subcategory"
              params={{ category: category.slug, subcategory: subcategory.slug }}
              className="text-sm font-medium hover:underline"
            >
              ← Back to {subcategory.title} workflows
            </Link>
          </div>
        )}
      </article>
    </SiteShell>
  );
}
