import type { Workflow } from "@/data/workflows";

type ProductSeoProfile = {
  title: string;
  noun: string;
  details: string;
};

const productProfiles: Record<string, ProductSeoProfile> = {
  "t-shirt": {
    title: "T-Shirt",
    noun: "T-shirt",
    details: "colour, print, stitching, collar and proportions",
  },
  "hoodie-sweatshirt": {
    title: "Hoodie and Sweatshirt",
    noun: "hoodie or sweatshirt",
    details:
      "colour, print, hood, drawstrings, cuffs, stitching and proportions",
  },
  shirt: {
    title: "Shirt",
    noun: "shirt",
    details:
      "colour, pattern, collar, buttons, sleeves, cuffs and proportions",
  },
  dress: {
    title: "Dress",
    noun: "dress",
    details:
      "colour, print, neckline, waistline, hemline, fabric and proportions",
  },
  "kurti-ethnic-wear": {
    title: "Kurti and Ethnic Wear",
    noun: "kurti or ethnic-wear garment",
    details:
      "colour, print or embroidery, neckline, sleeves, side slits and proportions",
  },
  "jeans-pants": {
    title: "Jeans and Pants",
    noun: "jeans or pants",
    details:
      "wash, waistband, pockets, stitching, seams, fit and proportions",
  },
};

function formatSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getProductProfile(subcategorySlug: string): ProductSeoProfile {
  return (
    productProfiles[subcategorySlug] ?? {
      title: formatSlug(subcategorySlug),
      noun: subcategorySlug.split("-").join(" "),
      details: "colour, shape, texture, construction and proportions",
    }
  );
}

function getWorkflowKind(title: string) {
  return title
    .replace(/^Amazon\s+/i, "")
    .replace(/\s+-\s+.+$/i, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function includesAny(value: string, terms: string[]) {
  return terms.some((term) => value.includes(term));
}

function getSeoKind(kind: string) {
  if (kind.includes("main listing")) return "Main Image";
  if (includesAny(kind, ["lifestyle model", "model image"])) {
    return "Lifestyle Model Image";
  }
  if (kind.includes("flat lay")) return "Flat Lay Image";
  if (kind.includes("back view")) return "Back View Image";
  if (
    includesAny(kind, [
      "fit & length",
      "fit and length",
      "fit / leg shape",
      "fit demonstration",
      "leg shape",
    ])
  ) {
    return "Fit and Shape Image";
  }
  if (
    includesAny(kind, [
      "waistband / pocket",
      "waistband and pocket",
      "pocket detail",
    ])
  ) {
    return "Waistband and Pocket Detail";
  }
  if (
    includesAny(kind, [
      "neckline / embroidery",
      "neckline and embroidery",
    ])
  ) {
    return "Neckline and Embroidery Detail";
  }
  if (
    includesAny(kind, [
      "neckline / sleeve / strap",
      "neckline and sleeve",
      "sleeve / side slit / hem",
      "side slit",
      "hem detail",
    ])
  ) {
    return "Garment Construction Detail";
  }
  if (
    includesAny(kind, [
      "fabric / pattern",
      "fabric / print",
      "fabric / denim wash",
      "fabric texture",
      "fabric close-up",
      "pattern close-up",
      "denim wash close-up",
    ])
  ) {
    return "Fabric Detail Image";
  }
  if (
    includesAny(kind, [
      "print close-up",
      "artwork close-up",
      "embroidery close-up",
      "design close-up",
    ])
  ) {
    return "Design Detail Image";
  }
  if (
    includesAny(kind, [
      "occasion / styling",
      "occasion / festive styling",
      "styling / outfit",
      "styled outfit",
      "formal outfit",
    ])
  ) {
    return "Styling Image";
  }
  if (
    includesAny(kind, [
      "set / dupatta / bottom wear",
      "set presentation",
      "dupatta",
      "bottom wear",
    ])
  ) {
    return "Set Presentation Image";
  }
  if (
    includesAny(kind, [
      "packaging",
      "folded presentation",
      "folded dress",
      "delivery presentation",
    ])
  ) {
    return "Packaging Image";
  }
  if (
    includesAny(kind, [
      "size guide",
      "size chart",
      "measurement guide",
    ])
  ) {
    return "Size Guide Image";
  }

  return kind
    .split(/\s*\/\s*|\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getWorkflowSeoTitle(
  workflow: Pick<Workflow, "title" | "subcategorySlug">,
) {
  const product = getProductProfile(workflow.subcategorySlug);
  const kind = getSeoKind(getWorkflowKind(workflow.title));

  return `Amazon ${product.title} ${kind} Prompt — ListingReady`;
}

export function getWorkflowSeoDescription(
  workflow: Pick<Workflow, "title" | "subcategorySlug">,
) {
  const product = getProductProfile(workflow.subcategorySlug);
  const kind = getWorkflowKind(workflow.title);

  if (kind.includes("main listing")) {
    return `Create an Amazon-ready ${product.noun} main image on a pure white background while preserving the original ${product.details}.`;
  }

  if (includesAny(kind, ["lifestyle model", "model image"])) {
    return `Create a realistic lifestyle model image using the same ${product.noun} while preserving the original ${product.details}.`;
  }

  if (kind.includes("flat lay")) {
    return `Create a professional top-down flat lay image of the same ${product.noun} while preserving the original ${product.details}.`;
  }

  if (kind.includes("back view")) {
    return `Create an accurate back-view image of the same ${product.noun} without inventing details or changing the original ${product.details}.`;
  }

  if (
    includesAny(kind, [
      "fit & length",
      "fit and length",
      "fit / leg shape",
      "fit demonstration",
      "leg shape",
    ])
  ) {
    return `Create a realistic fit and shape demonstration for the same ${product.noun} while preserving its original design, length and proportions.`;
  }

  if (
    includesAny(kind, [
      "fabric",
      "pattern close-up",
      "print close-up",
      "artwork close-up",
      "embroidery",
      "denim wash",
      "waistband",
      "pocket detail",
      "neckline",
      "sleeve",
      "side slit",
      "hem detail",
    ])
  ) {
    return `Create a sharp product-detail image of the same ${product.noun} while preserving the original ${product.details}.`;
  }

  if (
    includesAny(kind, [
      "occasion",
      "styling",
      "outfit",
      "festive",
    ])
  ) {
    return `Create a professional styled e-commerce image featuring the same ${product.noun} while preserving the original ${product.details}.`;
  }

  if (
    includesAny(kind, [
      "set / dupatta / bottom wear",
      "set presentation",
      "dupatta",
      "bottom wear",
    ])
  ) {
    return `Create a complete product-set presentation for the same ${product.noun} while preserving every included garment, colour and design detail.`;
  }

  if (
    includesAny(kind, [
      "packaging",
      "folded presentation",
      "folded dress",
      "delivery presentation",
    ])
  ) {
    return `Create a clean folded packaging presentation of the same ${product.noun} while preserving the original ${product.details}.`;
  }

  return `Create a professional Amazon product image for the same ${product.noun} while preserving the original ${product.details}.`;
}
