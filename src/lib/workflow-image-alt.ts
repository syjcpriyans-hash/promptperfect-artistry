import type { Workflow } from "@/data/workflows";
import { getWorkflowDisplayTitle } from "@/lib/workflow-display";

type ProductAltProfile = {
  name: string;
  details: string;
};

const productAltProfiles: Record<string, ProductAltProfile> = {
  "t-shirt": {
    name: "T-shirt",
    details: "colour, print, stitching, collar and proportions",
  },
  "hoodie-sweatshirt": {
    name: "hoodie or sweatshirt",
    details: "colour, print, hood, drawstrings, cuffs, stitching and proportions",
  },
  shirt: {
    name: "shirt",
    details: "colour, pattern, collar, buttons, sleeves, cuffs and proportions",
  },
  dress: {
    name: "dress",
    details: "colour, print, neckline, waistline, hemline and proportions",
  },
  "kurti-ethnic-wear": {
    name: "kurti or ethnic-wear garment",
    details: "colour, embroidery, neckline, sleeves, side slits and proportions",
  },
  "jeans-pants": {
    name: "jeans or pants",
    details: "wash, waistband, pockets, stitching, seams, hem and proportions",
  },
};

function formatSlug(slug: string) {
  return slug.split("-").filter(Boolean).join(" ");
}

function getProductProfile(subcategorySlug: string): ProductAltProfile {
  return (
    productAltProfiles[subcategorySlug] ?? {
      name: formatSlug(subcategorySlug),
      details: "colour, shape, texture and proportions",
    }
  );
}

function getWorkflowKind(workflow: Pick<Workflow, "title">) {
  return workflow.title
    .replace(/^Amazon\s+/i, "")
    .replace(/\s+-\s+.+$/i, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function includesAny(value: string, terms: string[]) {
  return terms.some((term) => value.includes(term));
}

export function getWorkflowOriginalAlt(
  workflow: Pick<Workflow, "title" | "subcategorySlug">,
) {
  const product = getProductProfile(workflow.subcategorySlug);
  const workflowName = getWorkflowDisplayTitle(workflow);

  return `Original ${product.name} product photo used as the reference for the ListingReady ${workflowName} workflow.`;
}

export function getWorkflowResultAlt(
  workflow: Pick<Workflow, "title" | "subcategorySlug">,
) {
  const product = getProductProfile(workflow.subcategorySlug);
  const kind = getWorkflowKind(workflow);

  if (kind.includes("main listing")) {
    return `Amazon-ready main listing image of the same ${product.name} on a pure white background, created using ListingReady while preserving the original ${product.details}.`;
  }

  if (includesAny(kind, ["lifestyle model", "model image"])) {
    return `Lifestyle model wearing the same ${product.name}, created using ListingReady while preserving the original ${product.details}.`;
  }

  if (kind.includes("flat lay")) {
    return `Top-down flat lay image of the same ${product.name}, created using ListingReady with the full product visible and the original ${product.details} preserved.`;
  }

  if (kind.includes("back view")) {
    return `Professional back-view image of the same ${product.name}, created using ListingReady without inventing rear details or changing the original ${product.details}.`;
  }

  if (
    includesAny(kind, [
      "fabric texture",
      "texture close-up",
      "fabric close-up",
      "material close-up",
    ])
  ) {
    return `Macro close-up of the same ${product.name} showing authentic fabric texture and stitching, created using ListingReady with the original colour and material preserved.`;
  }

  if (
    includesAny(kind, [
      "print close-up",
      "artwork close-up",
      "embroidery close-up",
      "design close-up",
      "detail close-up",
    ])
  ) {
    return `Close-up image of the same ${product.name} showing its original print, artwork or embroidery, created using ListingReady without changing placement, scale or colour.`;
  }

  if (
    includesAny(kind, [
      "fit & length",
      "fit and length",
      "fit demonstration",
      "length demonstration",
      "fit image",
    ])
  ) {
    return `Fit-and-length demonstration image of the same ${product.name} on a model, created using ListingReady while preserving the original design and proportions.`;
  }

  if (
    includesAny(kind, [
      "styling",
      "styled outfit",
      "outfit image",
      "smart-casual",
      "formal outfit",
    ])
  ) {
    return `Styled outfit image featuring the same ${product.name} as the hero product, created using ListingReady while preserving the original ${product.details}.`;
  }

  if (
    includesAny(kind, [
      "packaging",
      "delivery presentation",
      "folded presentation",
      "folded image",
    ])
  ) {
    return `Folded packaging presentation of the same ${product.name}, created using ListingReady with realistic folds and the original ${product.details} preserved.`;
  }

  return `${getWorkflowDisplayTitle(workflow)} result for the same ${product.name}, created using ListingReady while preserving the original ${product.details}.`;
}
