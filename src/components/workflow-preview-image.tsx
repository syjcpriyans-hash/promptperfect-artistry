import { useState } from "react";
import type { Workflow } from "@/data/workflows";
import { getWorkflowDisplayTitle, getWorkflowPreviewPath } from "@/lib/workflow-display";
import { cn } from "@/lib/utils";

export function WorkflowPreviewImage({ workflow, className }: { workflow: Workflow; className?: string }) {
  const [failed, setFailed] = useState(false);
  const title = getWorkflowDisplayTitle(workflow);

  if (failed) {
    return (
      <div
        className={cn(
          "flex aspect-[4/3] w-full items-center justify-center rounded-t-2xl border-b bg-muted/30 p-6 text-center",
          className,
        )}
      >
        <div>
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border bg-background text-xs font-semibold text-muted-foreground">
            {workflow.id}
          </div>
          <p className="text-sm font-medium text-foreground">Preview image slot</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Upload {workflow.id.toLowerCase()}.jpg to public/workflow-previews
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={getWorkflowPreviewPath(workflow)}
      alt={`${title} preview`}
      className={cn("aspect-[4/3] w-full rounded-t-2xl bg-muted/20 object-contain p-2", className)}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
