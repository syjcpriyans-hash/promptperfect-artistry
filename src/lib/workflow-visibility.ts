import type { Workflow } from "@/data/workflows";

const hiddenSizeGuidePatterns = [
  /\bsize\s*(guide|chart)\b/i,
  /\bsizing\s*(guide|chart)\b/i,
  /\bmeasurement\s*(guide|chart)\b/i,
];

export function isSizeGuideWorkflow(
  workflow: Pick<Workflow, "title">,
) {
  return hiddenSizeGuidePatterns.some((pattern) =>
    pattern.test(workflow.title),
  );
}

export function getVisibleWorkflows<T extends Pick<Workflow, "title">>(
  workflows: T[],
) {
  return workflows.filter((workflow) => !isSizeGuideWorkflow(workflow));
}
