export type CaseStudySummary = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  published: string;
  category: string;
};

export type CaseStudyApproachItem = {
  title: string;
  description: string;
};

export type CaseStudyEvaluationRow = {
  area: string;
  checkpoint: string;
};

export type CaseStudyDetail = {
  workflowId: string;
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  product: string;
  useCase: string;
  published: string;
  seoTitle: string;
  metaDescription: string;
  ogDescription: string;
  answer: string;
  objectiveHeading: string;
  objective: string;
  sourceProblemHeading: string;
  sourceProblem: string;
  failureHeading: string;
  failureIntro: string;
  commonFailures: string[];
  approachHeading: string;
  approachIntro: string;
  approachItems: CaseStudyApproachItem[];
  comparisonHeading: string;
  evaluationHeading: string;
  evaluationIntro: string;
  evaluationRows: CaseStudyEvaluationRow[];
  limitationHeading: string;
  limitations: string[];
  questions: string[];
};

export const caseStudySummaries: CaseStudySummary[] = [
  {
    title:
      "Creating an Amazon-Ready T-Shirt Main Image Without Changing the Product",
    description:
      "A workflow test showing how ListingsReady converts an ordinary T-shirt photo into a clean main listing image while prioritising colour, print, collar, stitching and proportion accuracy.",
    path: "/case-studies/tshirt-amazon-main-image",
    image: "/workflow-previews/wf-001.jpg",
    imageAlt:
      "ListingsReady result showing a T-shirt prepared as a clean Amazon-style main listing image",
    published: "July 2026",
    category: "T-Shirt · Main listing image",
  },
  {
    title:
      "How We Put Jeans on an AI Model Without Changing the Denim Wash or Fit",
    description:
      "A product-preservation test focused on keeping the original denim wash, waistband, pockets, stitching, leg shape and proportions visible on a lifestyle model.",
    path: "/case-studies/jeans-ai-lifestyle-model",
    image: "/workflow-previews/wf-072.jpg",
    imageAlt:
      "ListingsReady lifestyle result showing the same jeans or pants worn by a model",
    published: "July 2026",
    category: "Jeans / Pants · Lifestyle model",
  },
  {
    title:
      "Creating a Kurti Embroidery Close-Up Without Inventing New Patterns",
    description:
      "A detail-image test examining whether AI can enlarge a kurti neckline and embroidery area without redesigning motifs, thread colours, buttons, tassels or fabric.",
    path: "/case-studies/kurti-embroidery-detail-ai",
    image: "/workflow-previews/wf-065.jpg",
    imageAlt:
      "ListingsReady close-up result highlighting the neckline and embroidery of a kurti",
    published: "July 2026",
    category: "Kurti / Ethnic Wear · Embroidery detail",
  },
  {
    title:
      "Creating a Smart-Casual Shirt Lifestyle Image Without Hiding Product Details",
    description:
      "A styling test focused on preserving the original shirt collar, buttons, cuffs, pocket, pattern and proportions while keeping the garment visible.",
    path: "/case-studies/shirt-smart-casual-ai-lifestyle",
    image: "/workflow-previews/wf-049.jpg",
    imageAlt:
      "ListingsReady smart-casual lifestyle result featuring the same shirt",
    published: "July 2026",
    category: "Shirt · Smart-casual lifestyle",
  },
  {
    title:
      "Converting a Dress Photo Into a Flat Lay Without Changing Its Shape or Print",
    description:
      "A flat-lay test focused on preserving the original neckline, sleeves or straps, waistline, print placement, hemline, length and proportions.",
    path: "/case-studies/dress-ai-flat-lay",
    image: "/workflow-previews/wf-053.jpg",
    imageAlt:
      "ListingsReady flat-lay result showing the same dress on a clean neutral surface",
    published: "July 2026",
    category: "Dress · Flat lay",
  },
];

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  "jeans-ai-lifestyle-model": {
    workflowId: "WF-072",
    slug: "jeans-ai-lifestyle-model",
    title:
      "How We Put Jeans on an AI Model Without Changing the Denim Wash or Fit",
    shortTitle: "Jeans Lifestyle Model",
    eyebrow: "Jeans lifestyle workflow test",
    product: "Jeans / Pants",
    useCase: "Lifestyle model image",
    published: "July 2026",
    seoTitle:
      "AI Jeans Lifestyle Model Case Study — Preserving Wash and Fit",
    metaDescription:
      "See how a ListingsReady workflow places jeans on an AI model while preserving the original denim wash, waistband, pockets, stitching, fit and proportions.",
    ogDescription:
      "A detailed AI jeans lifestyle test covering denim wash, waistband, pockets, fit, model styling and product preservation.",
    answer:
      "To place jeans on an AI model without changing the product, the prompt must treat the uploaded jeans as the only product reference and explicitly preserve the denim wash, waistband, pockets, stitching, seams, leg shape and proportions. The model, pose and background may change, but the jeans must remain visually consistent with the original photograph.",
    objectiveHeading:
      "Show the jeans on a model without turning them into a different product",
    objective:
      "The objective was to create a realistic secondary lifestyle image in which the original jeans or pants are worn by a natural-looking model. The garment needed to remain identifiable through its wash, waistband, pockets, stitching, leg shape, length and proportions.",
    sourceProblemHeading:
      "The product needed context, but the context could not cover the garment",
    sourceProblem:
      "An ordinary product photograph can show the item clearly but may not demonstrate how the jeans look when worn. A lifestyle image adds fit and scale, yet it also introduces a model, pose and styling choices that can hide the waistband, distort the leg shape or alter the denim finish.",
    failureHeading:
      "Why AI commonly changes denim when it adds a model",
    failureIntro:
      "Jeans contain many small construction details and tonal variations. A generic model prompt can replace those details with a more familiar or fashionable pair.",
    commonFailures: [
      "The denim wash, fade pattern or colour tone changes.",
      "The waistband, button, zipper area or belt loops are covered or redesigned.",
      "Front pockets, coin pockets, rivets or stitching move or disappear.",
      "The original straight, slim, relaxed, tapered or wide-leg shape changes.",
      "The pants become shorter, longer, tighter or baggier on the model.",
      "A long top, jacket, bag, belt or pose hides important product details.",
    ],
    approachHeading:
      "Separate the garment rules from the model and scene instructions",
    approachIntro:
      "The workflow allows the person, pose and setting to change while locking the garment identity to the uploaded reference.",
    approachItems: [
      {
        title: "Reference-locked garment",
        description:
          "The uploaded jeans or pants are defined as the only product reference so the AI is not invited to substitute a different style.",
      },
      {
        title: "Denim-wash preservation",
        description:
          "The prompt explicitly protects the wash, fade, fabric finish, colour and texture rather than describing the garment only as blue jeans.",
      },
      {
        title: "Construction-detail checklist",
        description:
          "Waistband, belt loops, button, zipper fly, pockets, stitching, seams, rivets, labels and hem details are named individually.",
      },
      {
        title: "Fit and leg-shape control",
        description:
          "The model should wear the garment naturally without changing the original rise, leg width, taper, length or silhouette.",
      },
      {
        title: "Visibility rules",
        description:
          "The styling and pose must keep the full product visible from waistband to hem and avoid clothing or accessories that cover key details.",
      },
    ],
    comparisonHeading:
      "Compare the uploaded jeans with the model-worn ListingsReady result",
    evaluationHeading:
      "How to evaluate the jeans lifestyle result",
    evaluationIntro:
      "The comparison should be reviewed against product-specific checkpoints rather than judged only by how attractive the model image appears.",
    evaluationRows: [
      {
        area: "Denim wash",
        checkpoint:
          "Compare the placement of light areas, dark areas, fades, distressing and the overall fabric tone.",
      },
      {
        area: "Waistband and hardware",
        checkpoint:
          "Check waistband height, button, zipper fly, belt loops and visible rivets against the original.",
      },
      {
        area: "Pockets and stitching",
        checkpoint:
          "Confirm pocket shape, placement, seam lines and thread details remain consistent.",
      },
      {
        area: "Fit and leg shape",
        checkpoint:
          "Verify the original straight, slim, relaxed, tapered, flared or wide-leg silhouette has not changed.",
      },
      {
        area: "Length and hem",
        checkpoint:
          "Check that the garment length and hem construction remain consistent when worn.",
      },
      {
        area: "Product visibility",
        checkpoint:
          "Ensure the pose and styling do not hide the waistband, pockets, legs or hem.",
      },
    ],
    limitationHeading:
      "Model images still require a close product comparison",
    limitations: [
      "AI may interpret how an unworn garment should drape, so the result should not be treated as a guaranteed fit simulation.",
      "Body shape, pose and camera angle can make the leg width or length appear different even when the garment is not intentionally redesigned.",
      "The final image should be reviewed for product accuracy and checked against the current marketplace image policy before publication.",
      "This workflow test does not claim improvements in sales, conversion rate, revenue or advertising performance.",
    ],
    questions: [
      "How can I put jeans on an AI model?",
      "How do I stop AI from changing denim wash?",
      "Can AI create lifestyle images for jeans?",
      "How do I preserve pockets and stitching in AI product photos?",
    ],
  },

  "kurti-embroidery-detail-ai": {
    workflowId: "WF-065",
    slug: "kurti-embroidery-detail-ai",
    title:
      "Creating a Kurti Embroidery Close-Up Without Inventing New Patterns",
    shortTitle: "Kurti Embroidery Detail",
    eyebrow: "Ethnic-wear detail workflow test",
    product: "Kurti / Ethnic Wear",
    useCase: "Neckline and embroidery detail image",
    published: "July 2026",
    seoTitle:
      "AI Kurti Embroidery Detail Case Study — Preserving the Original Design",
    metaDescription:
      "Learn how a ListingsReady workflow creates a detailed kurti close-up without changing the original embroidery, neckline, colour, print or fabric texture.",
    ogDescription:
      "A kurti detail-image test covering neckline accuracy, embroidery preservation, motifs, thread colours and fabric texture.",
    answer:
      "AI should not recreate or enhance kurti embroidery because doing so can produce a design that does not exist on the real garment. A reliable embroidery-detail workflow enlarges the relevant section of the uploaded product while instructing the AI to preserve every visible thread pattern, motif, colour, neckline shape and fabric detail.",
    objectiveHeading:
      "Make the embroidery easier to inspect without redesigning it",
    objective:
      "The objective was to create a close-up secondary image that highlights the original neckline, embroidery and upper-front construction of a kurti or ethnic-wear garment. The closer crop needed to reveal real details, not generate a sharper but different design.",
    sourceProblemHeading:
      "A full-garment image can hide the workmanship customers want to inspect",
    sourceProblem:
      "Marketplace images often show the entire kurti, which makes small motifs, threadwork, buttons, tassels, trims and neckline borders difficult to inspect. Enlarging the area with AI creates a risk that the model will redraw or beautify the embroidery instead of preserving it.",
    failureHeading:
      "Why embroidery close-ups are especially vulnerable to AI invention",
    failureIntro:
      "Repeated motifs, fine threadwork and decorative borders are pattern-heavy details. Generative models may simplify them, change their spacing or create new elements that look plausible but are not present on the product.",
    commonFailures: [
      "The neckline shape becomes deeper, higher, rounder or more decorative.",
      "Embroidery motifs are redrawn, simplified or replaced.",
      "Thread colours, motif spacing or embroidery placement change.",
      "Buttons, tassels, beads, trim or decorative elements are added or removed.",
      "The fabric texture becomes too smooth, glossy or artificial.",
      "The crop is so tight that buyers cannot understand where the detail appears on the garment.",
    ],
    approachHeading:
      "Treat the close-up as documentation, not creative enhancement",
    approachIntro:
      "The workflow asks for a clearer view of the same visible product area and names each decorative detail that must remain unchanged.",
    approachItems: [
      {
        title: "Exact neckline control",
        description:
          "The prompt preserves the original neckline shape, depth, stitching, border and garment construction.",
      },
      {
        title: "Motif-level preservation",
        description:
          "Embroidery design, motif shape, placement, spacing, thread appearance and colour are explicitly protected.",
      },
      {
        title: "Decorative-element control",
        description:
          "Buttons, tassels, trims, beads and other elements may appear only when they are present in the uploaded garment.",
      },
      {
        title: "Context-aware crop",
        description:
          "The neckline and embroidery are enlarged while enough surrounding fabric remains visible to show where the detail belongs.",
      },
      {
        title: "Neutral commercial presentation",
        description:
          "A simple white or light neutral background and clean lighting keep attention on the real workmanship.",
      },
    ],
    comparisonHeading:
      "Compare the original kurti with the embroidery-detail result",
    evaluationHeading:
      "How to evaluate the embroidery close-up",
    evaluationIntro:
      "A successful detail image should make the original workmanship easier to inspect without introducing any decorative information that is absent from the source product.",
    evaluationRows: [
      {
        area: "Neckline",
        checkpoint:
          "Compare shape, depth, border, stitching and the transition into the upper garment.",
      },
      {
        area: "Embroidery motifs",
        checkpoint:
          "Check motif shapes, spacing, placement, density and direction against the source image.",
      },
      {
        area: "Thread and decorative colours",
        checkpoint:
          "Verify thread, bead, trim, button and fabric colours have not shifted.",
      },
      {
        area: "Buttons, tassels and trim",
        checkpoint:
          "Confirm no decorative components were invented, removed, multiplied or repositioned.",
      },
      {
        area: "Fabric texture",
        checkpoint:
          "Check that the material still resembles the original weave and does not appear plastic or overly smooth.",
      },
      {
        area: "Crop clarity",
        checkpoint:
          "Ensure the detail is large enough to inspect while retaining enough fabric context to be understandable.",
      },
    ],
    limitationHeading:
      "The original photograph determines how much real detail can be recovered",
    limitations: [
      "AI cannot reliably recover threadwork that is completely hidden or too blurred in the uploaded source photograph.",
      "A visually sharper result may still contain invented micro-details, so motif-by-motif comparison is necessary.",
      "Colour accuracy can be affected by lighting and display settings even when the prompt requests exact preservation.",
      "The final image should be reviewed for accuracy and current marketplace compliance before publication.",
    ],
    questions: [
      "How do I create kurti product photos with AI?",
      "How do I stop AI from changing embroidery?",
      "Can AI create an embroidery close-up?",
      "How can ethnic-wear sellers use AI product photography?",
    ],
  },

  "shirt-smart-casual-ai-lifestyle": {
    workflowId: "WF-049",
    slug: "shirt-smart-casual-ai-lifestyle",
    title:
      "Creating a Smart-Casual Shirt Lifestyle Image Without Hiding Product Details",
    shortTitle: "Shirt Smart-Casual Lifestyle",
    eyebrow: "Shirt styling workflow test",
    product: "Shirt",
    useCase: "Formal or smart-casual lifestyle image",
    published: "July 2026",
    seoTitle:
      "AI Shirt Lifestyle Image Case Study — Preserving Collar, Buttons and Pattern",
    metaDescription:
      "See how a ListingsReady workflow creates a smart-casual shirt lifestyle image while preserving the original collar, buttons, cuffs, pattern, pocket and fit.",
    ogDescription:
      "A shirt lifestyle-image test covering collar shape, button placket, cuffs, pattern accuracy, styling and product visibility.",
    answer:
      "A shirt lifestyle image should change the setting and styling, not the shirt itself. The workflow must preserve the original collar, button placket, buttons, cuffs, pocket, sleeve length, fabric pattern and proportions while using a natural pose that keeps the front of the garment visible.",
    objectiveHeading:
      "Show how the shirt can be styled while keeping it as the hero product",
    objective:
      "The objective was to place the original shirt into a realistic formal or smart-casual outfit. The setting and supporting clothing could change, but the shirt's collar, button placket, buttons, sleeves, cuffs, pocket, pattern, texture and proportions needed to remain consistent.",
    sourceProblemHeading:
      "A product-only image does not show styling, but lifestyle styling can hide the product",
    sourceProblem:
      "A clean product image documents the shirt, yet it does not demonstrate how the garment works in an office, café, studio or casual setting. Once a model and outfit are introduced, jackets, crossed arms, accessories and camera angles can cover precisely the details the seller needs to show.",
    failureHeading:
      "What generic shirt-on-model prompts commonly get wrong",
    failureIntro:
      "Shirts contain repeated structures that AI often normalises: collars become more fashionable, buttons move, checked patterns bend and sleeves change with the pose.",
    commonFailures: [
      "The collar shape, collar height or neckline opening changes.",
      "Buttons disappear, multiply, change colour or move along the placket.",
      "Checks, stripes or other patterns warp across the torso and sleeves.",
      "The pocket is invented, removed or covered.",
      "Sleeve length, cuff construction or cuff buttons change.",
      "A jacket, bag, folded arms or accessories hide the shirt front.",
    ],
    approachHeading:
      "Control the styling around the shirt rather than regenerating the shirt",
    approachIntro:
      "The workflow treats the shirt as fixed and uses simple outfit and pose instructions to create context without obscuring the product.",
    approachItems: [
      {
        title: "Shirt identity lock",
        description:
          "Colour, pattern, collar, placket, buttons, sleeves, cuffs, pocket, stitching, texture and proportions are explicitly preserved.",
      },
      {
        title: "Simple supporting outfit",
        description:
          "Neutral trousers, chinos, jeans or minimal footwear add context without competing with the shirt.",
      },
      {
        title: "Front-detail visibility",
        description:
          "The pose should keep the collar, button placket, pocket, sleeves and pattern readable.",
      },
      {
        title: "Controlled environment",
        description:
          "Office, studio, café or restrained streetwear settings provide realistic context without turning the image into an editorial campaign.",
      },
      {
        title: "Correction-first workflow",
        description:
          "Fix prompts target pattern changes, hidden details, altered collars, changed buttons and distracting scenes.",
      },
    ],
    comparisonHeading:
      "Compare the original shirt with the styled lifestyle result",
    evaluationHeading:
      "How to evaluate the shirt lifestyle image",
    evaluationIntro:
      "The styling should help a buyer imagine wearing the shirt while still allowing a direct visual comparison with the original product.",
    evaluationRows: [
      {
        area: "Collar",
        checkpoint:
          "Check the collar shape, points, height, opening and structure against the source shirt.",
      },
      {
        area: "Buttons and placket",
        checkpoint:
          "Verify button count, colour, spacing and placket construction remain consistent.",
      },
      {
        area: "Pattern",
        checkpoint:
          "Inspect checks, stripes, prints or texture for warping, missing sections or scale changes.",
      },
      {
        area: "Pocket",
        checkpoint:
          "Confirm the pocket appears only when it exists and remains in the correct position.",
      },
      {
        area: "Sleeves and cuffs",
        checkpoint:
          "Compare sleeve length, cuff shape, cuff buttons and visible stitching.",
      },
      {
        area: "Pose and styling",
        checkpoint:
          "Ensure arms, jackets, bags and accessories do not block important shirt details.",
      },
    ],
    limitationHeading:
      "Lifestyle imagery can suggest styling, but not guarantee real-world fit",
    limitations: [
      "The generated model's body, posture and camera angle can influence how the shirt fit appears.",
      "Fine repeated patterns may distort across folds, elbows or body contours and require close review.",
      "The supporting outfit should not imply that trousers, shoes or accessories are included with the product.",
      "The final image should be reviewed for product accuracy and current marketplace policy compliance.",
    ],
    questions: [
      "How do I put a shirt on an AI model?",
      "How do I create lifestyle photos for shirts?",
      "How can AI preserve a striped or checked shirt?",
      "How do I stop an AI model from covering the product?",
    ],
  },

  "dress-ai-flat-lay": {
    workflowId: "WF-053",
    slug: "dress-ai-flat-lay",
    title:
      "Converting a Dress Photo Into a Flat Lay Without Changing Its Shape or Print",
    shortTitle: "Dress Flat Lay",
    eyebrow: "Dress flat-lay workflow test",
    product: "Dress",
    useCase: "Flat-lay product image",
    published: "July 2026",
    seoTitle:
      "AI Dress Flat Lay Case Study — Preserving Shape, Print and Proportions",
    metaDescription:
      "See how a ListingsReady workflow converts a dress photo into a professional flat lay while preserving its neckline, print, sleeves, waistline, hem and proportions.",
    ogDescription:
      "A dress flat-lay test covering silhouette, neckline, sleeves or straps, print placement, hemline, fabric arrangement and proportions.",
    answer:
      "To create an accurate dress flat lay with AI, the uploaded garment must remain the only product reference. The prompt should preserve the neckline, sleeves or straps, waistline, print placement, hemline, length and proportions while changing only the garment presentation and background.",
    objectiveHeading:
      "Change the presentation from an ordinary photo to a clean top-down flat lay",
    objective:
      "The objective was to arrange the original dress as a premium secondary flat-lay image while preserving its silhouette, neckline, sleeves or straps, waistline, hemline, length, fabric texture, print, embroidery and proportions.",
    sourceProblemHeading:
      "A different viewing angle can accidentally become a different dress",
    sourceProblem:
      "A flat lay helps buyers inspect the complete garment without a model, but converting a source photograph into a top-down arrangement requires the AI to infer how the fabric lies. That inference can shorten the dress, change the flare, move the waistline or reorganise the print.",
    failureHeading:
      "Why AI flat lays often distort dress construction",
    failureIntro:
      "Dresses contain long continuous shapes and large printed areas. When the garment is rearranged, AI may simplify the silhouette or make the layout more symmetrical at the expense of accuracy.",
    commonFailures: [
      "The dress becomes shorter, wider, slimmer or more flared than the original.",
      "The neckline, sleeves or straps change shape or placement.",
      "The waistline or seam position moves.",
      "Print, pattern or embroidery is rearranged across the garment.",
      "The hemline is cropped, straightened or redesigned.",
      "The fabric appears rigid, overly smooth or unnaturally symmetrical.",
    ],
    approachHeading:
      "Preserve garment construction while changing only the presentation",
    approachIntro:
      "The workflow requests a clean top-down arrangement and explicitly protects every structural area that commonly shifts during the conversion.",
    approachItems: [
      {
        title: "Full-garment visibility",
        description:
          "The complete dress must remain visible from neckline to hem with no cropping.",
      },
      {
        title: "Silhouette and proportion lock",
        description:
          "The original shape, waistline, length, hemline and proportions are preserved rather than beautified.",
      },
      {
        title: "Neckline and sleeve control",
        description:
          "Sleeves or straps are arranged naturally without changing their shape, width, length or placement.",
      },
      {
        title: "Print-placement preservation",
        description:
          "Print, pattern, embroidery, buttons, zipper and belt details remain attached to the correct areas of the garment.",
      },
      {
        title: "Natural flat-lay fabric",
        description:
          "The fabric is laid neatly but should retain realistic folds, drape and soft commercial shadows.",
      },
    ],
    comparisonHeading:
      "Compare the original dress with the top-down flat-lay result",
    evaluationHeading:
      "How to evaluate the dress flat lay",
    evaluationIntro:
      "A successful flat lay should look orderly without making the dress more symmetrical, shorter, wider or structurally different from the uploaded product.",
    evaluationRows: [
      {
        area: "Dress silhouette",
        checkpoint:
          "Compare the original fitted, straight, A-line, flared or other shape from neckline to hem.",
      },
      {
        area: "Neckline",
        checkpoint:
          "Check neckline shape, depth, trim and nearby seam construction.",
      },
      {
        area: "Sleeves or straps",
        checkpoint:
          "Verify length, width, attachment points and natural placement.",
      },
      {
        area: "Waistline and seams",
        checkpoint:
          "Confirm the waist seam, pleats, darts, belt or shaping details have not moved.",
      },
      {
        area: "Print and embroidery",
        checkpoint:
          "Compare pattern scale, placement, direction, colours and decorative details.",
      },
      {
        area: "Hem and length",
        checkpoint:
          "Ensure the complete hemline is visible and the dress has not been shortened or widened.",
      },
    ],
    limitationHeading:
      "A top-down view must be inferred when the source image does not show one",
    limitations: [
      "AI may estimate hidden folds, back layers or fabric overlap that are not visible in the uploaded photograph.",
      "Long dresses and highly flared silhouettes need extra space and are more vulnerable to cropping or proportion changes.",
      "Print alignment should be checked across seams, pleats and folds because those areas can be reconstructed incorrectly.",
      "The final image should be compared with the physical product and reviewed against current marketplace requirements.",
    ],
    questions: [
      "How do I create a clothing flat lay with AI?",
      "Can AI convert a dress photo into a flat lay?",
      "How do I preserve a dress print in AI images?",
      "How can I create e-commerce dress photos without a photoshoot?",
    ],
  },
};
