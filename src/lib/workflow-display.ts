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

export function getWorkflowPublicSlug(workflow: Workflow) {
  return getWorkflowDisplayTitle(workflow)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findWorkflowByPublicParam(param: string, workflows: Workflow[]) {
  const normalizedParam = param.toLowerCase();

  return workflows.find(
    (workflow) =>
      workflow.id.toLowerCase() === normalizedParam ||
      getWorkflowPublicSlug(workflow) === normalizedParam,
  );
}
