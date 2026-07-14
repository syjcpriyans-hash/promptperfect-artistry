import type { Workflow } from "@/data/workflows";

type WorkflowAbout = [string, string, string, string];

type ProductProfile = {
  name: string;
  noun: string;
  details: string;
  audience: string;
};

const productProfiles: Record<string, ProductProfile> = {
  "t-shirt": {
    name: "T-shirt",
    noun: "garment",
    details: "colour, print, stitching, collar and proportions",
    audience:
      "Amazon sellers, Shopify stores, clothing brands, print-on-demand businesses and marketplace agencies.",
  },
  "hoodie-sweatshirt": {
    name: "hoodie or sweatshirt",
    noun: "garment",
    details:
      "colour, print, hood, drawstrings, cuffs, stitching, fabric texture and proportions",
    audience:
      "Amazon sellers, Shopify stores, streetwear brands, print-on-demand businesses and marketplace agencies.",
  },
  shirt: {
    name: "shirt",
    noun: "garment",
    details:
      "colour, pattern, collar, buttons, sleeves, cuffs, stitching and proportions",
    audience:
      "Amazon sellers, Shopify stores, clothing brands, formalwear sellers and marketplace agencies.",
  },
  dress: {
    name: "dress",
    noun: "garment",
    details:
      "colour, print, neckline, sleeves or straps, waistline, hemline, fabric texture and proportions",
    audience:
      "Amazon sellers, Shopify stores, fashion brands, boutiques and marketplace agencies.",
  },
  "kurti-ethnic-wear": {
    name: "kurti or ethnic-wear garment",
    noun: "garment",
    details:
      "colour, print or embroidery, neckline, sleeves, side slits, hemline, fabric texture and proportions",
    audience:
      "Amazon sellers, Shopify stores, ethnic-wear brands, boutiques and marketplace agencies.",
  },
  "jeans-pants": {
    name: "jeans or pants",
    noun: "product",
    details:
      "colour or wash, waistband, pockets, belt loops, stitching, seams, fabric texture, hem and proportions",
    audience:
      "Amazon sellers, Shopify stores, denim brands, apparel retailers and marketplace agencies.",
  },
};

function formatSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .join(" ");
}

function getProductProfile(subcategorySlug: string): ProductProfile {
  return (
    productProfiles[subcategorySlug] ?? {
      name: formatSlug(subcategorySlug),
      noun: "product",
      details: "colour, shape, texture, construction and proportions",
      audience:
        "Amazon sellers, Shopify stores, product brands, online retailers and marketplace agencies.",
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

function containsAny(value: string, terms: string[]) {
  return terms.some((term) => value.includes(term));
}

export function getWorkflowAbout(
  workflow: Pick<Workflow, "title" | "subcategorySlug">,
): WorkflowAbout {
  const product = getProductProfile(workflow.subcategorySlug);
  const kind = getWorkflowKind(workflow.title);

  // Preserve the exact wording approved for the first T-shirt workflow.
  if (
    workflow.subcategorySlug === "t-shirt" &&
    kind.includes("main listing")
  ) {
    return [
      "Transforms an ordinary T-shirt photo into a professional main listing image with the garment centred on a pure white background while preserving the original colour, print, stitching, collar and proportions.",
      "Amazon sellers, Shopify stores, clothing brands, print-on-demand businesses and marketplace agencies.",
      "One clear original photo showing the complete T-shirt and all important product details.",
      "A clean, front-facing e-commerce product image with a pure white background, balanced studio lighting, sharp fabric details and a natural contact shadow.",
    ];
  }

  if (kind.includes("main listing")) {
    return [
      `Transforms an ordinary ${product.name} photo into a professional main listing image with the ${product.noun} centred on a pure white background while preserving the original ${product.details}.`,
      product.audience,
      `One clear original photo showing the complete ${product.name} and all important product details.`,
      `A clean, front-facing e-commerce product image with a pure white background, balanced studio lighting, sharp product details and a natural contact shadow.`,
    ];
  }

  if (containsAny(kind, ["lifestyle model", "model image"])) {
    return [
      `Transforms an ordinary ${product.name} photo into a professional lifestyle image showing the exact ${product.noun} naturally worn by a realistic model while preserving the original ${product.details}.`,
      product.audience,
      `One clear original photo showing the complete ${product.name}, preferably from the front with all important design details visible.`,
      `A realistic e-commerce lifestyle image with a natural model pose, believable fit, clean commercial lighting and the ${product.name} remaining the clear focus.`,
    ];
  }

  if (kind.includes("flat lay")) {
    return [
      `Transforms an ordinary ${product.name} photo into a professional flat lay image with the exact ${product.noun} arranged neatly in a clean top-down composition while preserving the original ${product.details}.`,
      product.audience,
      `One clear original photo showing the complete ${product.name} and its natural shape, construction and design details.`,
      `A clean top-down e-commerce image with the full ${product.name} visible, balanced spacing, realistic folds, soft shadows and minimal distractions.`,
    ];
  }

  if (kind.includes("back view")) {
    return [
      `Transforms an ordinary ${product.name} photo into a professional back-view image of the same exact ${product.noun} while preserving its identity, construction, ${product.details} and avoiding invented rear details.`,
      product.audience,
      `One clear original photo showing the complete ${product.name} and enough construction detail to create a consistent rear presentation.`,
      `A centred, realistic back-view e-commerce image on a clean background with balanced proportions, accurate construction and no invented artwork or branding.`,
    ];
  }

  if (
    containsAny(kind, [
      "fabric texture",
      "texture close-up",
      "fabric close-up",
      "material close-up",
    ])
  ) {
    return [
      `Transforms an ordinary ${product.name} photo into a professional macro detail image highlighting the authentic fabric texture and stitching while preserving the original ${product.details}.`,
      product.audience,
      `One high-quality original photo in which the fabric surface, stitching and material details of the ${product.name} are clearly visible.`,
      `A sharp close-up e-commerce image with realistic weave, stitching, colour and material detail under clean commercial lighting.`,
    ];
  }

  if (
    containsAny(kind, [
      "print close-up",
      "artwork close-up",
      "embroidery close-up",
      "design close-up",
      "detail close-up",
    ])
  ) {
    return [
      `Transforms an ordinary ${product.name} photo into a professional close-up image focused on its exact print, artwork, embroidery or design detail while preserving the original placement, scale, colour and texture.`,
      product.audience,
      `One high-resolution original photo in which the important print, artwork, embroidery or design detail is clearly visible.`,
      `A crisp e-commerce detail image with accurate artwork edges, colours, placement, fabric texture and realistic commercial lighting.`,
    ];
  }

  if (
    containsAny(kind, [
      "fit & length",
      "fit and length",
      "fit demonstration",
      "length demonstration",
      "fit image",
    ])
  ) {
    return [
      `Transforms an ordinary ${product.name} photo into a professional fit-and-length demonstration image showing how the exact ${product.noun} sits naturally on the body while preserving the original ${product.details}.`,
      product.audience,
      `One clear original photo showing the complete ${product.name}, including its true length, silhouette and important construction details.`,
      `A realistic full-length model image that clearly communicates fit, drape and garment length without changing the original design or proportions.`,
    ];
  }

  if (
    containsAny(kind, [
      "styling",
      "styled outfit",
      "outfit image",
      "smart-casual",
      "formal outfit",
    ])
  ) {
    return [
      `Transforms an ordinary ${product.name} photo into a professional styled outfit image while keeping the exact ${product.noun} as the hero product and preserving the original ${product.details}.`,
      product.audience,
      `One clear original photo showing the complete ${product.name} and all key design details that must remain visible.`,
      `A polished fashion e-commerce image with complementary neutral clothing or accessories, realistic commercial lighting and no important product details covered.`,
    ];
  }

  if (
    containsAny(kind, [
      "packaging",
      "delivery presentation",
      "folded presentation",
      "folded image",
    ])
  ) {
    return [
      `Transforms an ordinary ${product.name} photo into a professional folded packaging or delivery-presentation image while preserving the original ${product.details}.`,
      product.audience,
      `One clear original photo showing the complete ${product.name}, its material, colour and recognisable construction details.`,
      `A clean e-commerce packaging image with a realistic fold, simple premium presentation, soft commercial lighting and no invented logos or labels.`,
    ];
  }

  if (
    containsAny(kind, [
      "size guide",
      "size chart",
      "sizing guide",
      "measurement guide",
    ])
  ) {
    return [
      `Transforms an ordinary ${product.name} photo into a clear sizing or measurement reference while preserving the exact product identity and original ${product.details}.`,
      product.audience,
      `One clear original photo showing the complete ${product.name}, together with verified measurements supplied by the seller.`,
      `A clean and readable e-commerce sizing reference that communicates measurements accurately without changing the product or inventing dimensions.`,
    ];
  }

  return [
    `Transforms an ordinary ${product.name} photo into a professional ${kind} while preserving the original ${product.details}.`,
    product.audience,
    `One clear original photo showing the complete ${product.name} and all important product details required for the workflow.`,
    `A clean, realistic e-commerce image that clearly communicates the purpose of the workflow while keeping the ${product.name} accurate and visually consistent.`,
  ];
}
