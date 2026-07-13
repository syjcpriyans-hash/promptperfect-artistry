import type { Workflow } from "@/data/workflows";

function getWorkflowTitleBase(workflowOrTitle: Workflow | string) {
  const title =
    typeof workflowOrTitle === "string"
      ? workflowOrTitle
      : workflowOrTitle.title;

  return title
    .replace(/^Amazon\s+/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function getWorkflowDisplayTitle(workflowOrTitle: Workflow | string) {
  return getWorkflowTitleBase(workflowOrTitle)
    .replace(
      /\s+-\s+(T-Shirt|Shirt|Hoodie|Sweatshirt|Hoodie-Sweatshirt|Hoodie\/Sweatshirt|Dress|Kurti\s*\/\s*Ethnic Wear|Jeans\s*\/\s*Pants)$/i,
      "",
    )
    .replace(/\s+/g, " ")
    .trim();
}

export function getWorkflowPreviewPath(workflow: Workflow) {
  return `/workflow-previews/${workflow.id.toLowerCase()}.jpg`;
}

export function getWorkflowPublicSlug(workflow: Workflow) {
  // Keep the product suffix in the URL slug so similarly named workflows
  // remain unique across product categories.
  return getWorkflowTitleBase(workflow)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findWorkflowByPublicParam(
  param: string,
  workflows: Workflow[],
) {
  const normalizedParam = param.toLowerCase();

  return workflows.find(
    (workflow) =>
      workflow.id.toLowerCase() === normalizedParam ||
      getWorkflowPublicSlug(workflow) === normalizedParam,
  );
}
