import type { Workflow } from "@/data/workflows";

export function getWorkflowDisplayTitle(workflowOrTitle: Workflow | string) {
  const title = typeof workflowOrTitle === "string" ? workflowOrTitle : workflowOrTitle.title;

  return title
    .replace(/^Amazon\s+/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function getWorkflowPreviewPath(workflow: Workflow) {
  return `/workflow-previews/${workflow.id.toLowerCase()}.jpg`;
}
