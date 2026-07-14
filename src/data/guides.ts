export type GuideSection = {
  id: string;
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  points?: string[];
  prompt?: string;
};

export type GuideResource = {
  title: string;
  href: string;
  description: string;
};

export type Guide = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  directAnswer: string;
  sections: GuideSection[];
  checklist: string[];
  relatedResources: GuideResource[];
};

export const guides: Guide[] = [
  {
    "slug": "how-to-stop-ai-changing-product-colours-logos-details",
    "title": "How to Stop AI From Changing Product Colours, Logos and Details",
    "seoTitle": "Stop AI Changing Product Colours, Logos and Details | ListingsReady",
    "description": "A preservation-first method for creating AI product images without allowing the model to redesign the item being sold.",
    "category": "Product accuracy",
    "published": "July 14, 2026",
    "updated": "July 14, 2026",
    "datePublished": "2026-07-14",
    "dateModified": "2026-07-14",
    "readTime": "9 min read",
    "directAnswer": "Treat the uploaded photo as the only product reference, explicitly list every product feature that must remain unchanged, permit only the specific presentation edit you need, and compare the result with the original before publishing.",
    "sections": [
      {
        "id": "why-products-change",
        "eyebrow": "1. Why products change",
        "heading": "Generative tools may rebuild the item instead of editing it",
        "paragraphs": [
          "A request such as “put this shirt on a model” can be interpreted as permission to generate a new shirt that resembles the reference. That is when colours drift, logos are redrawn, seams move, label text changes or the material becomes unnaturally smooth.",
          "The risk increases when one prompt asks for a new model, pose, camera angle, background, lighting setup and garment fit at the same time. Every additional transformation gives the system another opportunity to reconstruct the product."
        ],
        "points": [
          "Use one authoritative product image as the reference.",
          "Avoid asking the AI to improve or redesign the product.",
          "Make the requested presentation change as narrow as possible."
        ]
      },
      {
        "id": "lock-product-identity",
        "eyebrow": "2. Lock product identity",
        "heading": "Name the details a buyer uses to recognise the item",
        "paragraphs": [
          "The instruction “keep the product the same” is too broad. A stronger prompt identifies the exact features that define the product.",
          "For apparel, this can include colour, pattern, print, collar, sleeve length, stitching, pocket placement, fabric texture, silhouette and proportions. For jewellery, it can include metal tone, stone colour, setting, prongs, chain, clasp and engraving."
        ],
        "points": [
          "Colour, wash and finish",
          "Shape, proportions and silhouette",
          "Logo, artwork, print, embroidery and text",
          "Material texture, stitching, seams and hardware",
          "Labels, closures and visible construction details"
        ]
      },
      {
        "id": "controlled-transformation",
        "eyebrow": "3. Control the transformation",
        "heading": "Separate what may change from what must remain locked",
        "paragraphs": [
          "Write the prompt in two clear groups: locked product details and editable presentation details. The product belongs in the locked group. The model, background, lighting and composition belong in the editable group.",
          "Request one controlled change first. A background replacement is easier to preserve than a complete lifestyle transformation with a new model, pose, scene and viewpoint."
        ],
        "prompt": "Use the uploaded [PRODUCT] image as the only product reference.\n\nPreserve the product exactly, including its colour, shape, proportions, material, logo, artwork, text, stitching, hardware, pattern and all visible construction details.\n\nChange only: [ALLOWED PRESENTATION CHANGE].\n\nDo not redesign, recolour, smooth, restyle, replace, add, remove or cover any product feature. The result must remain recognisably identical to the uploaded item."
      },
      {
        "id": "correct-specific-failures",
        "eyebrow": "4. Correct specific failures",
        "heading": "Use targeted fixes instead of regenerating blindly",
        "paragraphs": [
          "When a result is close but inaccurate, identify the exact failure and correct only that failure. A targeted correction is more controlled than repeating the full generation with a vague instruction."
        ],
        "points": [
          "Colour changed: restore the exact original tone and remove lighting that shifts it.",
          "Logo or text changed: restore the original artwork and lettering without redrawing it.",
          "Shape changed: match the original edges, proportions, seams and silhouette.",
          "Material looks artificial: restore the original weave, grain, reflections and surface finish.",
          "Important detail is hidden: adjust only the crop, model pose or packaging placement."
        ]
      },
      {
        "id": "review-before-publishing",
        "eyebrow": "5. Review before publishing",
        "heading": "A polished image can still misrepresent the product",
        "paragraphs": [
          "Compare every generated result with the source photo at full size. The AI output should be treated as a draft until the product has been checked feature by feature.",
          "Reject any result that changes information a customer would rely on when deciding whether to buy the item."
        ]
      }
    ],
    "checklist": [
      "Compare the product colour with the original photo.",
      "Zoom in on logos, prints, embroidery and label text.",
      "Check seams, pockets, closures, edges and hardware.",
      "Confirm the shape and proportions have not changed.",
      "Inspect material texture, reflections and transparency.",
      "Reject invented accessories, labels, props or product features."
    ],
    "relatedResources": [
      {
        "title": "T-shirt main image case study",
        "href": "/case-studies/tshirt-amazon-main-image",
        "description": "See how colour, print, collar, sleeves and fabric appearance are checked against the original."
      },
      {
        "title": "Kurti embroidery detail case study",
        "href": "/case-studies/kurti-embroidery-detail-ai",
        "description": "Review a workflow where textile detail and embroidery need careful preservation."
      },
      {
        "title": "Browse tested workflows",
        "href": "/workflows",
        "description": "Open product-specific prompts, settings, mistakes and targeted corrections."
      }
    ]
  },
  {
    "slug": "how-to-create-amazon-product-images-using-chatgpt",
    "title": "How to Create Amazon Product Images Using ChatGPT Without Changing the Product",
    "seoTitle": "Create Amazon Product Images With ChatGPT | ListingsReady",
    "description": "A controlled workflow for turning a product reference photo into a cleaner Amazon-style image while preserving product identity.",
    "category": "Marketplace images",
    "published": "July 14, 2026",
    "updated": "July 14, 2026",
    "datePublished": "2026-07-14",
    "dateModified": "2026-07-14",
    "readTime": "10 min read",
    "directAnswer": "Choose the exact image role first, upload one clear product reference, lock the product’s identity-defining details, request only the required Amazon presentation, and review the result against both the original item and the current marketplace requirements.",
    "sections": [
      {
        "id": "choose-image-role",
        "eyebrow": "1. Choose the image role",
        "heading": "Decide what the image must accomplish before writing the prompt",
        "paragraphs": [
          "A main image, detail image, packaging image and lifestyle image have different purposes. Mixing all of them into one prompt usually produces a cluttered or inaccurate result.",
          "Define the role first: clean product presentation, a close-up of an important feature, an in-use scene, a model image or a packaging view."
        ],
        "points": [
          "Main presentation: product clearly visible with minimal distraction.",
          "Detail image: one specific feature shown at useful scale.",
          "Lifestyle image: product shown in a believable use context.",
          "Packaging image: product and delivery presentation remain easy to inspect."
        ]
      },
      {
        "id": "prepare-reference",
        "eyebrow": "2. Prepare the reference",
        "heading": "The source photo determines how much product information the AI can preserve",
        "paragraphs": [
          "Use the clearest available photo. Important areas should be visible, in focus and large enough to inspect. The AI cannot accurately preserve a label, texture or closure that is hidden or unreadable in the source.",
          "Whenever possible, use a straight product view with neutral lighting and avoid heavy filters that distort colour."
        ]
      },
      {
        "id": "write-amazon-prompt",
        "eyebrow": "3. Build the prompt",
        "heading": "Lock the product first, then describe the Amazon presentation",
        "paragraphs": [
          "The prompt should identify the uploaded item as the only product reference and list the features that must remain unchanged. After that, describe the required background, framing, lighting and image role.",
          "Do not tell the AI to make the product more premium, stylish or attractive. Those words can encourage redesign."
        ],
        "prompt": "Using the uploaded [PRODUCT] image as the only product reference, create a clean e-commerce product image for [IMAGE ROLE].\n\nPreserve the product exactly, including [COLOUR], [SHAPE], [PROPORTIONS], [MATERIAL], [LOGO], [TEXT], [STITCHING], [HARDWARE] and all visible product construction.\n\nUse [BACKGROUND], [VIEW], [FRAMING] and soft commercial lighting.\n\nDo not add, remove, redraw, recolour, reshape or cover any product detail. Keep the product as the clear hero of the image."
      },
      {
        "id": "generate-in-stages",
        "eyebrow": "4. Generate in stages",
        "heading": "Start with the simplest acceptable version",
        "paragraphs": [
          "Create the clean product presentation first. Once the product is preserved correctly, create secondary variations such as lifestyle scenes, close-ups or packaging views.",
          "This staged approach makes it easier to identify where product drift begins and prevents one overloaded prompt from introducing several errors at once."
        ]
      },
      {
        "id": "amazon-review",
        "eyebrow": "5. Review for accuracy and marketplace use",
        "heading": "Product fidelity comes before visual polish",
        "paragraphs": [
          "Compare the generated image with the source and verify that the product has not been redesigned. Then check the current image requirements for the relevant Amazon marketplace and category before publishing.",
          "A workflow can improve presentation, but the seller remains responsible for product accuracy and marketplace compliance."
        ]
      }
    ],
    "checklist": [
      "The product is clearly visible and not cropped unintentionally.",
      "Colour, shape, material and proportions match the source.",
      "Logos, text, labels and prints are accurate.",
      "No fake accessories, packaging claims or product features were added.",
      "The background and lighting do not distort the product.",
      "The current marketplace and category rules have been checked."
    ],
    "relatedResources": [
      {
        "title": "T-shirt Amazon main image case study",
        "href": "/case-studies/tshirt-amazon-main-image",
        "description": "See the preservation controls used for a clean apparel main image."
      },
      {
        "title": "How ListingsReady tests workflows",
        "href": "/methodology",
        "description": "Read the testing and human-review process behind published workflows."
      },
      {
        "title": "Browse all workflows",
        "href": "/workflows",
        "description": "Find prompts for main images, details, models, lifestyle scenes and packaging."
      }
    ]
  },
  {
    "slug": "how-to-put-clothing-on-ai-model-without-changing-garment",
    "title": "How to Put Clothing on an AI Model Without Changing the Garment",
    "seoTitle": "Put Clothing on an AI Model Without Changing It | ListingsReady",
    "description": "A garment-preservation workflow for creating model images while protecting colour, print, fit, construction and proportions.",
    "category": "AI model images",
    "published": "July 14, 2026",
    "updated": "July 14, 2026",
    "datePublished": "2026-07-14",
    "dateModified": "2026-07-14",
    "readTime": "9 min read",
    "directAnswer": "Use the garment photo as the only clothing reference, specify the exact garment features and silhouette that must remain unchanged, keep the styling simple, and choose a model pose that leaves the full product visible from its key upper details to the hem.",
    "sections": [
      {
        "id": "garment-versus-model",
        "eyebrow": "1. Separate garment and model",
        "heading": "The model is editable; the garment is not",
        "paragraphs": [
          "The prompt should make a strict distinction between the product and the person wearing it. The model’s appearance, pose and setting can change. The garment’s identity cannot.",
          "Avoid asking for a fashionable reinterpretation or a better fit. Those instructions can change the cut, length, sleeve shape, waist, leg width or fabric drape."
        ]
      },
      {
        "id": "garment-lock",
        "eyebrow": "2. Build the garment lock",
        "heading": "Describe the exact clothing features that must survive the transformation",
        "paragraphs": [
          "A model image must preserve more than colour. The garment should retain its pattern, print, embroidery, collar, sleeves, cuffs, pockets, seams, closures, fabric texture, silhouette, length and visible proportions.",
          "For jeans or pants, include the waistband, rise, pocket placement, leg shape, taper and hem. For shirts, include the collar, placket, buttons, cuffs and pocket."
        ],
        "points": [
          "Exact colour, pattern and print placement",
          "Original silhouette, fit type and length",
          "Collar, neckline, sleeves, cuffs and hem",
          "Pockets, seams, stitching, buttons and closures",
          "Fabric texture, wash, drape and thickness"
        ]
      },
      {
        "id": "model-pose",
        "eyebrow": "3. Control styling and pose",
        "heading": "Choose a pose that demonstrates the product instead of hiding it",
        "paragraphs": [
          "Use a simple standing pose when fit and silhouette matter. Avoid crossed arms, oversized jackets, long tops, bags or props that cover the product.",
          "Keep the full garment visible whenever the purpose is to demonstrate fit. For detail-focused images, state exactly which area must remain unobstructed."
        ]
      },
      {
        "id": "model-prompt",
        "eyebrow": "4. Use a controlled model prompt",
        "heading": "Tell the AI what may change and what must not",
        "paragraphs": [
          "Keep the model description concise. The more space devoted to elaborate styling, scenery and accessories, the greater the chance that the garment stops being the hero."
        ],
        "prompt": "Using the uploaded [GARMENT] image as the only clothing reference, show the exact garment worn by a realistic model.\n\nPreserve the garment exactly, including its colour, pattern, print, embroidery, collar, sleeves, cuffs, pockets, seams, stitching, closures, fabric texture, silhouette, length and proportions.\n\nUse a simple standing pose and neutral styling that keeps the complete garment visible.\n\nDo not redesign, recolour, shorten, lengthen, tighten, loosen or cover the garment. Change only the model, pose and background."
      },
      {
        "id": "model-review",
        "eyebrow": "5. Inspect garment drift",
        "heading": "Compare the worn result with the unworn reference",
        "paragraphs": [
          "Check the upper construction, body width, length and hem separately. AI model images often preserve the general idea while quietly changing one of these areas.",
          "Reject the image if the model pose creates a misleading fit or if the garment appears materially different from the item the customer will receive."
        ]
      }
    ],
    "checklist": [
      "The full garment or required detail area is visible.",
      "Colour, pattern, print and embroidery match the source.",
      "The original silhouette, length and fit type are preserved.",
      "Pockets, buttons, cuffs, seams and closures are unchanged.",
      "The model pose does not create a misleading fit.",
      "Styling and accessories do not cover important product details."
    ],
    "relatedResources": [
      {
        "title": "Jeans lifestyle model case study",
        "href": "/case-studies/jeans-ai-lifestyle-model",
        "description": "See how a model image is evaluated while the jeans remain the hero product."
      },
      {
        "title": "Shirt smart-casual lifestyle case study",
        "href": "/case-studies/shirt-smart-casual-ai-lifestyle",
        "description": "Review styling controls for a shirt-focused lifestyle image."
      },
      {
        "title": "Browse clothing workflows",
        "href": "/workflows",
        "description": "Open model, fit, lifestyle and product-detail workflows."
      }
    ]
  },
  {
    "slug": "how-to-preserve-text-prints-embroidery-ai-product-images",
    "title": "How to Preserve Text, Prints and Embroidery in AI Product Images",
    "seoTitle": "Preserve Text, Prints and Embroidery in AI Images | ListingsReady",
    "description": "A detail-preservation method for protecting logos, labels, typography, printed artwork and embroidery during AI image generation.",
    "category": "Detail preservation",
    "published": "July 14, 2026",
    "updated": "July 14, 2026",
    "datePublished": "2026-07-14",
    "dateModified": "2026-07-14",
    "readTime": "8 min read",
    "directAnswer": "Use a sharp, readable source image, keep the decorated area visible at a similar angle and scale, explicitly forbid redrawing or reinterpreting the design, and reject any output where lettering, artwork, stitch structure or placement differs from the original.",
    "sections": [
      {
        "id": "why-details-fail",
        "eyebrow": "1. Why details fail",
        "heading": "Text and decorative artwork are high-risk areas",
        "paragraphs": [
          "Generative systems are good at producing text-like shapes and design-like patterns, but a plausible-looking replacement is not the same as the original product detail.",
          "Small lettering, curved labels, dense embroidery, reflective logos and low-resolution prints are especially likely to be simplified, misspelled or replaced."
        ]
      },
      {
        "id": "source-quality",
        "eyebrow": "2. Improve the source",
        "heading": "The AI needs enough visible information to preserve the detail",
        "paragraphs": [
          "Use a source image where the text, print or embroidery is sharp and large enough to inspect. Add a separate close-up reference when the main product photo does not show the detail clearly.",
          "Avoid glare, motion blur, deep folds and extreme angles across the decorated area."
        ],
        "points": [
          "Keep lettering in focus and readable.",
          "Use even lighting across prints and labels.",
          "Show embroidery thread direction and raised texture.",
          "Avoid folds that change the visible artwork shape."
        ]
      },
      {
        "id": "detail-lock",
        "eyebrow": "3. Write a detail lock",
        "heading": "Forbid interpretation, correction and invented replacement artwork",
        "paragraphs": [
          "The prompt should state that the logo, typography, artwork or embroidery must be preserved exactly as shown. Include its placement, scale, colour, orientation and relationship to nearby seams or product features.",
          "Do not ask the AI to make the design cleaner or sharper unless you are prepared to verify every character and line."
        ],
        "prompt": "Preserve the visible [LOGO / TEXT / PRINT / EMBROIDERY] exactly as shown in the uploaded reference.\n\nKeep the original wording, spelling, letter shapes, artwork, colours, scale, orientation, placement, stitch structure and relationship to nearby seams unchanged.\n\nDo not redraw, replace, simplify, correct, translate, restyle or invent any part of the design. Change only [ALLOWED PRESENTATION CHANGE]."
      },
      {
        "id": "keep-similar-view",
        "eyebrow": "4. Limit viewpoint changes",
        "heading": "Large angle changes make exact detail preservation harder",
        "paragraphs": [
          "A print shown from the front is easier to preserve in another front-facing image than in a dramatic side angle. When exact lettering or embroidery matters, keep the new view close to the reference.",
          "Create a separate detail image instead of forcing a tiny design to remain accurate inside a wide lifestyle scene."
        ]
      },
      {
        "id": "detail-review",
        "eyebrow": "5. Review character by character and stitch by stitch",
        "heading": "Visual similarity is not enough",
        "paragraphs": [
          "Zoom in and compare every word, character, shape, colour boundary and placement. For embroidery, inspect the thread direction, density, edge shape and relationship to the underlying fabric.",
          "If the design is commercially important, use the original product image or a controlled compositing workflow when generative output cannot preserve it reliably."
        ]
      }
    ],
    "checklist": [
      "Every word and character matches the source.",
      "Logo and artwork shapes have not been simplified.",
      "Colours, placement, orientation and scale are unchanged.",
      "Embroidery retains believable thread texture and edge structure.",
      "No translated, corrected or invented text appears.",
      "The decorated area remains visible and unobstructed."
    ],
    "relatedResources": [
      {
        "title": "Kurti embroidery detail case study",
        "href": "/case-studies/kurti-embroidery-detail-ai",
        "description": "See a detail-focused workflow for preserving textile and embroidery information."
      },
      {
        "title": "T-shirt main image case study",
        "href": "/case-studies/tshirt-amazon-main-image",
        "description": "Review how print and garment structure are checked together."
      },
      {
        "title": "Browse detail workflows",
        "href": "/workflows",
        "description": "Find close-up prompts and targeted fix instructions."
      }
    ]
  },
  {
    "slug": "how-to-turn-phone-product-photo-into-professional-listing-image",
    "title": "How to Turn a Phone Product Photo Into a Professional Listing Image",
    "seoTitle": "Turn a Phone Photo Into a Product Listing Image | ListingsReady",
    "description": "A practical capture-and-edit workflow for converting an ordinary phone product photo into a cleaner e-commerce listing image.",
    "category": "Source photography",
    "published": "July 14, 2026",
    "updated": "July 14, 2026",
    "datePublished": "2026-07-14",
    "dateModified": "2026-07-14",
    "readTime": "10 min read",
    "directAnswer": "Capture a clear, colour-accurate phone photo with the full product visible, then use AI only for controlled presentation changes such as background cleanup, framing and commercial lighting while keeping the original product locked.",
    "sections": [
      {
        "id": "capture-first",
        "eyebrow": "1. Capture before editing",
        "heading": "A better source photo gives the AI more truthful product information",
        "paragraphs": [
          "AI can improve presentation, but it cannot reliably recover product details that were never captured. Start with the cleanest source image you can create using the phone already available.",
          "Clean the camera lens, use the highest practical resolution and avoid digital zoom. Move closer while keeping the complete product in frame."
        ]
      },
      {
        "id": "simple-lighting",
        "eyebrow": "2. Use simple lighting",
        "heading": "Soft, even light protects colour and texture",
        "paragraphs": [
          "Place the product near a bright window with indirect daylight or use a large diffused light source. Avoid mixed lighting from daylight and warm indoor bulbs because it can make product colour difficult to judge.",
          "Turn off strong filters, portrait effects and automatic enhancements that smooth texture or shift colour."
        ],
        "points": [
          "Use a clean lens and steady camera.",
          "Keep the product parallel to the camera when shape matters.",
          "Use a plain background with clear edge separation.",
          "Capture additional close-ups for labels, texture and hardware."
        ]
      },
      {
        "id": "preserve-source",
        "eyebrow": "3. Preserve the source product",
        "heading": "Tell the AI to improve presentation, not redesign the item",
        "paragraphs": [
          "The phone photo should remain the only reference for the product. List the details that must remain unchanged and specify the exact presentation improvement required.",
          "A useful first transformation is background cleanup with restrained lighting. More complex lifestyle and model scenes can be created after a faithful clean product image is achieved."
        ],
        "prompt": "Using the uploaded phone photo as the only product reference, create a clean professional e-commerce image.\n\nPreserve the exact product colour, shape, proportions, material, texture, logo, text, stitching, hardware and visible construction.\n\nImprove only the background, framing and commercial lighting. Keep the product centred, fully visible and realistically grounded.\n\nDo not redesign, recolour, smooth, reshape, add, remove or invent any product feature."
      },
      {
        "id": "staged-improvement",
        "eyebrow": "4. Improve in stages",
        "heading": "Create one reliable base image before secondary variations",
        "paragraphs": [
          "First create a clean, accurate product image. Use that result only after confirming it matches the original phone photo. Then create secondary images such as details, lifestyle scenes, packaging presentations or model views.",
          "A staged workflow reduces compounding errors and gives you a stable reference point for later generations."
        ]
      },
      {
        "id": "phone-photo-review",
        "eyebrow": "5. Review the final image",
        "heading": "Check both product accuracy and photographic quality",
        "paragraphs": [
          "Inspect the product at full size and confirm that colour, edges, texture, labels and proportions remain accurate. Then assess the background, shadow, framing and overall visual cleanliness.",
          "The goal is not to make the item look like a different premium product. The goal is to present the real product clearly and professionally."
        ]
      }
    ],
    "checklist": [
      "The source image is sharp and the full product is visible.",
      "Lighting does not create a strong colour cast.",
      "The generated product matches the original phone photo.",
      "Labels, text, logos and important details remain readable.",
      "Background, crop and shadow look clean but realistic.",
      "No product features were added to compensate for missing source information."
    ],
    "relatedResources": [
      {
        "title": "How ListingsReady tests workflows",
        "href": "/methodology",
        "description": "See how generated results are compared with source images."
      },
      {
        "title": "Dress flat-lay case study",
        "href": "/case-studies/dress-ai-flat-lay",
        "description": "Review a controlled product-presentation transformation."
      },
      {
        "title": "Browse product workflows",
        "href": "/workflows",
        "description": "Choose a workflow after capturing the source photo."
      }
    ]
  }
];

export const stopAiChangingGuide = guides[0];
export const amazonProductImagesGuide = guides[1];
export const aiModelClothingGuide = guides[2];
export const preserveTextPrintsGuide = guides[3];
export const phonePhotoGuide = guides[4];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
