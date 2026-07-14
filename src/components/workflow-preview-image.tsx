import { useState } from "react";
import type { Workflow } from "@/data/workflows";
import { getWorkflowDisplayTitle, getWorkflowPreviewPath } from "@/lib/workflow-display";
import { getWorkflowResultAlt } from "@/lib/workflow-image-alt";
import { cn } from "@/lib/utils";

type WorkflowPreviewImageProps = {
  workflow: Workflow;
  className?: string;
  enableZoom?: boolean;
};

export function WorkflowPreviewImage({
  workflow,
  className,
  enableZoom = false,
}: WorkflowPreviewImageProps) {
  const [failed, setFailed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const title = getWorkflowDisplayTitle(workflow);
  const imagePath = getWorkflowPreviewPath(workflow);
  const imageAlt = getWorkflowResultAlt(workflow);

  const openPreview = () => {
    if (!enableZoom) return;
    setZoom(1);
    setIsOpen(true);
  };

  if (failed) {
    return (
      <div
        className={cn(
          "flex aspect-[4/3] w-full items-center justify-center rounded-t-2xl border-b bg-muted/30 p-6 text-center",
          className,
        )}
      >
        <div>
          <p className="text-sm font-medium text-foreground">Preview image coming soon</p>
          <p className="mt-1 text-xs text-muted-foreground">This workflow preview has not been uploaded yet.</p>
        </div>
      </div>
    );
  }

  const image = (
    <img
      src={imagePath}
      alt={imageAlt}
      className="h-full w-full object-contain"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );

  return (
    <>
      {enableZoom ? (
        <button
          type="button"
          className={cn(
            "block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-t-2xl bg-muted/20 p-2 text-left",
            className,
          )}
          aria-label={`Open ${title} result image`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            openPreview();
          }}
        >
          {image}
        </button>
      ) : (
        <div
          className={cn(
            "block aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-muted/20 p-2",
            className,
          )}
        >
          {image}
        </div>
      )}

      {enableZoom && isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-background/95 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image preview`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
        >
          <div className="mx-auto mb-4 flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 rounded-2xl border bg-card p-3 shadow-sm">
            <p className="text-sm font-semibold text-foreground">{title}</p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="rounded-lg border px-3 py-2 text-sm font-medium hover:bg-muted"
                onClick={() => setZoom((value) => Math.max(1, Number((value - 0.25).toFixed(2))))}
              >
                Zoom out
              </button>
              <button
                type="button"
                className="rounded-lg border px-3 py-2 text-sm font-medium hover:bg-muted"
                onClick={() => setZoom(1)}
              >
                Reset
              </button>
              <button
                type="button"
                className="rounded-lg border px-3 py-2 text-sm font-medium hover:bg-muted"
                onClick={() => setZoom((value) => Math.min(4, Number((value + 0.25).toFixed(2))))}
              >
                Zoom in
              </button>
              <button
                type="button"
                className="rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background hover:opacity-90"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>

          <div className="mx-auto min-h-0 w-full max-w-6xl flex-1 overflow-auto rounded-2xl border bg-card p-4 shadow-sm">
            <div
              className="flex min-h-full min-w-full items-center justify-center"
              style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }}
            >
              <img
                src={imagePath}
                alt={imageAlt}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
