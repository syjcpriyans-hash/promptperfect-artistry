import type { Workflow } from "@/data/workflows";

function getWorkflowTitleBase(workflowOrTitle: Workflow | string) {
  const title = typeof workflowOrTitle === "string" ? workflowOrTitle : workflowOrTitle.title;

  return title
    .replace(/^Amazon\s+/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function getWorkflowDisplayTitle(workflowOrTitle: Workflow | string) {
  return getWorkflowTitleBase(workflowOrTitle)
    .replace(/\s+-\s+(T-Shirt|Shirt|Hoodie|Sweatshirt|Hoodie-Sweatshirt|Hoodie\/Sweatshirt)$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function getWorkflowPreviewPath(workflow: Workflow) {
  return `/workflow-previews/${workflow.id.toLowerCase()}.jpg`;
}

export function getWorkflowPublicSlug(workflow: Workflow) {
  // Keep the original subcategory suffix in the URL slug so workflows with the same
  // base name across T-Shirt, Hoodie/Sweatshirt, and Shirt remain unique.
  return getWorkflowTitleBase(workflow)
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
