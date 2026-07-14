import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { Workflow } from "@/data/workflows";
import { WorkflowPreviewImage } from "@/components/workflow-preview-image";
import { getWorkflowOriginalAlt } from "@/lib/workflow-image-alt";

type WorkflowImageComparisonProps = {
  workflow: Workflow;
};

export function WorkflowImageComparison({
  workflow,
}: WorkflowImageComparisonProps) {
  const workflowOriginalPath = `/workflow-originals/${workflow.id.toLowerCase()}.jpg`;
  const subcategoryOriginalPath = `/workflow-originals/${workflow.subcategorySlug}.jpg`;

  const [originalPath, setOriginalPath] = useState(workflowOriginalPath);
  const [originalFailed, setOriginalFailed] = useState(false);
  const originalAlt = getWorkflowOriginalAlt(workflow);

  useEffect(() => {
    setOriginalPath(workflowOriginalPath);
    setOriginalFailed(false);
  }, [workflowOriginalPath]);

  const handleOriginalError = () => {
    if (originalPath !== subcategoryOriginalPath) {
      setOriginalPath(subcategoryOriginalPath);
      return;
    }

    setOriginalFailed(true);
  };

  return (
    <section className="mt-8 rounded-2xl border bg-card p-4 shadow-sm sm:mt-10 sm:p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold sm:text-2xl">
          Original photo vs ListingsReady result
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Compare the uploaded product reference with the image created using this workflow.
        </p>
      </div>

      <div className="grid min-w-0 items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-6">
        <div className="min-w-0 overflow-hidden rounded-2xl border bg-background">
          <div className="flex aspect-[4/3] w-full items-center justify-center bg-muted/20 p-2 sm:p-3">
            {originalFailed ? (
              <div className="px-4 text-center sm:px-6">
                <p className="text-sm font-semibold text-foreground">
                  Original product photo coming soon
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Upload the original reference image for this product type.
                </p>
              </div>
            ) : (
              <img
                src={originalPath}
                alt={originalAlt}
                className="h-full w-full object-contain"
                loading="lazy"
                onError={handleOriginalError}
              />
            )}
          </div>
          <div className="border-t p-4">
            <p className="text-sm font-semibold text-foreground">
              Original product photo
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Uploaded reference
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center py-1 text-primary md:py-0">
          <ArrowDown className="h-7 w-7 md:hidden" aria-hidden="true" />
          <ArrowRight className="hidden h-8 w-8 md:block" aria-hidden="true" />
          <span className="sr-only">Transforms into</span>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl border bg-background">
          <WorkflowPreviewImage workflow={workflow} enableZoom />
          <div className="border-t p-4">
            <p className="text-sm font-semibold text-foreground">
              ListingsReady result
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Click the image to zoom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
