import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getCategory,
  getSubcategory,
  getWorkflow,
  type Workflow,
} from "@/data/workflows";

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
      { title: loaderData ? `${loaderData.workflow.id} — ${loaderData.workflow.title} — ListingReady` : "Workflow — ListingReady" },
      { name: "description", content: loaderData?.workflow.notes ?? "Copy-paste-ready AI prompt workflow." },
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
      // Clipboard API unavailable — fail silently, button just won't confirm.
    }
  };

  return (
    <Button onClick={handleCopy} variant={copied ? "secondary" : "default"} size="sm" className="gap-1.5">
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? "Copied!" : label}
    </Button>
  );
}

const difficultyVariant: Record<string, "default" | "secondary" | "outline"> = {
  Easy: "secondary",
  Medium: "outline",
  Hard: "default",
};

function WorkflowDetailPage() {
  const { workflow, category, subcategory } = Route.useLoaderData();

  return (
    <SiteShell>
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <Link to="/categories" className="hover:underline">
              Categories
            </Link>{" "}
            {category && (
              <>
                /{" "}
                <Link to="/categories/$category" params={{ category: category.slug }} className="hover:underline">
                  {category.title}
                </Link>{" "}
              </>
            )}
            {subcategory && (
              <>
                /{" "}
                <Link
                  to="/categories/$category/$subcategory"
                  params={{ category: workflow.categorySlug, subcategory: workflow.subcategorySlug }}
                  className="hover:underline"
                >
                  {subcategory.title}
                </Link>{" "}
              </>
            )}
            / {workflow.id}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-accent">{workflow.id}</span>
            <Badge variant={difficultyVariant[workflow.difficulty]}>{workflow.difficulty}</Badge>
            <span className="text-xs text-muted-foreground">{workflow.timeRequired}</span>
          </div>

          <h1 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            {workflow.title}
          </h1>

          {/* Complete Prompt */}
          <div className="mt-8 border border-border bg-paper p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-sm font-medium uppercase tracking-wider text-ink">
                Complete Prompt
              </h2>
              <CopyButton text={workflow.prompt} />
            </div>
            <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-ink/90">
              {workflow.prompt}
            </p>
          </div>

          {/* Best AI / original image / settings */}
          <div className="mt-6 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            <div className="bg-paper p-5">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Best AI to Use
              </h3>
              <p className="mt-1 font-display text-base text-ink">{workflow.bestAI}</p>
            </div>
            <div className="bg-paper p-5">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Original Image Required
              </h3>
              <p className="mt-1 font-display text-base text-ink">
                Your own uploaded product photo — this is the only reference used.
              </p>
            </div>
          </div>

          {/* Settings to use in ChatGPT */}
          <div className="mt-6 border border-border bg-paper p-5">
            <h2 className="font-display text-sm font-medium uppercase tracking-wider text-ink">
              Settings in ChatGPT
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm text-ink/90">
              <li>1. Open ChatGPT and start a new chat using GPT-4o / ChatGPT Images.</li>
              <li>2. Upload your original product photo as the only reference image.</li>
              <li>3. Paste the Complete Prompt above exactly as written — do not shorten it.</li>
              <li>4. Generate the image, then compare it against the original for any drift.</li>
              <li>5. If something changes that shouldn't, use the matching Fix Prompt below in the same chat.</li>
            </ul>
          </div>

          {/* Common Mistakes */}
          <div className="mt-6 border border-border bg-paper p-5">
            <h2 className="font-display text-sm font-medium uppercase tracking-wider text-ink">
              Common Mistakes
            </h2>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {workflow.commonMistakes.map((m) => (
                <li key={m} className="text-sm text-ink/80">
                  · {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Fix Prompts */}
          <div className="mt-6 border border-border bg-paper p-5">
            <h2 className="font-display text-sm font-medium uppercase tracking-wider text-ink">
              Fix Prompts
            </h2>
            <div className="mt-3 divide-y divide-border">
              {workflow.fixPrompts.map((fp) => (
                <div key={fp.issue} className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between">
                  <div className="pr-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {fp.issue}
                    </p>
                    <p className="mt-1 text-sm text-ink/90">{fp.fix}</p>
                  </div>
                  <div className="shrink-0">
                    <CopyButton text={fp.fix} label="Copy fix" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example / expected output */}
          <div className="mt-6 border border-border bg-paper p-5">
            <h2 className="font-display text-sm font-medium uppercase tracking-wider text-ink">
              Expected Output
            </h2>
            <p className="mt-3 text-sm text-ink/90">{workflow.exampleNote}</p>
          </div>

          {/* Amazon Compliance */}
          <div className="mt-6 border border-border bg-paper p-5">
            <h2 className="font-display text-sm font-medium uppercase tracking-wider text-ink">
              Amazon Compliance
            </h2>
            <div className="mt-3 divide-y divide-border">
              {workflow.compliance.map((row) => (
                <div key={row.label} className="flex items-center justify-between py-2 text-sm">
                  <span className="text-ink/80">{row.label}</span>
                  <span
                    className={cn(
                      "font-medium",
                      row.value === "Yes" ? "text-ink" : "text-muted-foreground",
                    )}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="mt-6 border border-border bg-paper p-5">
            <h2 className="font-display text-sm font-medium uppercase tracking-wider text-ink">Notes</h2>
            <p className="mt-3 text-sm text-ink/90">{workflow.notes}</p>
          </div>

          {subcategory && category && (
            <div className="mt-10">
              <Link
                to="/categories/$category/$subcategory"
                params={{ category: category.slug, subcategory: subcategory.slug }}
                className="text-sm text-ink underline-offset-4 hover:underline"
              >
                ← Back to {subcategory.title} workflows
              </Link>
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

export type { Workflow };
