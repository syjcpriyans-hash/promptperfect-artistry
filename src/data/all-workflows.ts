import {
  categories as baseCategories,
  subcategories as baseSubcategories,
  workflows as baseWorkflows,
  type Category,
  type Subcategory,
  type Workflow,
} from "@/data/workflows";

const addedSubcategories: Subcategory[] = [
  {
    "slug": "dress",
    "categorySlug": "clothes",
    "title": "Dress",
    "description": "10 workflows"
  },
  {
    "slug": "kurti-ethnic-wear",
    "categorySlug": "clothes",
    "title": "Kurti / Ethnic Wear",
    "description": "10 workflows"
  },
  {
    "slug": "jeans-pants",
    "categorySlug": "clothes",
    "title": "Jeans / Pants",
    "description": "10 workflows"
  }
];

const addedWorkflows: Workflow[] = [
  {
    "id": "WF-051",
    "title": "Amazon Main Listing Image - Dress",
    "categorySlug": "clothes",
    "subcategorySlug": "dress",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded dress image as the only product reference, create a professional Amazon main listing image. The dress must remain 100% identical to the uploaded reference. Do not modify, redesign, recolor, reshape, regenerate, or reinterpret the product. Preserve exactly: dress silhouette, proportions, neckline, sleeves or straps, waistline, hemline, length, seams, stitching, folds, pleats, fabric texture, print, pattern, embroidery, buttons, zipper, belt, logo, artwork, colours, and natural garment shadows. Remove only the existing background and replace it with a pure white (#FFFFFF) background. Place the full dress centered in the frame. Show the front view only. The full garment must be visible from top to bottom with no cropping. No model, no mannequin, no hanger, no props, no floor, no reflections, no extra objects, and no promotional text. Use clean commercial studio lighting with a soft natural contact shadow beneath the garment. Ultra high-resolution Amazon-ready apparel product photography. Keep the uploaded dress completely unchanged.",
    "commonMistakes": [
      "Dress length changes",
      "Hemline changes",
      "Waistline shifts",
      "Neckline changes",
      "Sleeves or straps change",
      "Print or pattern changes",
      "Fabric texture becomes fake",
      "Dress becomes wider or slimmer",
      "AI adds a mannequin or model",
      "Background becomes grey instead of pure white",
      "Full dress gets cropped",
      "AI creates a different dress"
    ],
    "fixPrompts": [
      {
        "issue": "If the product changes",
        "fix": "Keep the uploaded dress completely identical. Do not redesign, reshape, recolor, or regenerate the garment. Only change the background."
      },
      {
        "issue": "If dress length changes",
        "fix": "Preserve the exact original dress length and hemline shown in the uploaded reference."
      },
      {
        "issue": "If neckline changes",
        "fix": "Restore the original neckline shape, depth, stitching, and structure exactly."
      },
      {
        "issue": "If sleeves or straps change",
        "fix": "Preserve the original sleeve or strap shape, length, width, placement, and stitching."
      },
      {
        "issue": "If waistline changes",
        "fix": "Keep the original waistline placement, seam structure, and garment proportions exactly the same."
      },
      {
        "issue": "If pattern changes",
        "fix": "Preserve the exact original print, pattern, embroidery, or artwork. Do not redraw, simplify, recolor, or reinterpret it."
      },
      {
        "issue": "If colour changes",
        "fix": "Preserve the exact original fabric colour and pattern colours. Do not adjust hue, saturation, brightness, or contrast."
      },
      {
        "issue": "If full dress is cropped",
        "fix": "Show the complete dress from neckline to hem with enough white space around it."
      },
      {
        "issue": "If background is not pure white",
        "fix": "Replace the background with pure white (#FFFFFF) only."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-052",
    "title": "Amazon Lifestyle Model Image - Dress",
    "categorySlug": "clothes",
    "subcategorySlug": "dress",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded dress image as the only product reference, create a realistic Amazon secondary lifestyle image showing the exact dress worn by a natural-looking model. Preserve the dress 100% exactly, including silhouette, length, neckline, sleeves or straps, waistline, hemline, seams, stitching, folds, pleats, fabric texture, print, pattern, embroidery, buttons, zipper, belt if present, artwork, and colours. The dress should fit naturally on the model without stretching, shrinking, shortening, lengthening, or changing the design. Show the model in a clean lifestyle setting such as a studio, outdoor walkway, cafe, event space, or casual elegant setting. The full dress must remain clearly visible from top to bottom. No jacket, handbag, crossed arms, or props should cover important garment details. Use realistic commercial lighting and high-resolution fashion e-commerce photography.",
    "commonMistakes": [
      "Dress becomes a different style",
      "Length changes on the model",
      "Neckline changes",
      "Sleeves or straps change",
      "Waistline shifts",
      "Pattern or print changes",
      "Model pose hides the dress",
      "Dress fit becomes too tight or loose",
      "Fabric colour shifts",
      "Background becomes too editorial",
      "Full dress gets cropped",
      "AI adds accessories that cover the dress"
    ],
    "fixPrompts": [
      {
        "issue": "If the dress changes",
        "fix": "Keep the uploaded dress identical. Only adjust the model, pose, or background."
      },
      {
        "issue": "If dress length changes",
        "fix": "Preserve the exact original dress length and hemline while fitting it naturally on the model."
      },
      {
        "issue": "If neckline changes",
        "fix": "Restore the original neckline shape, depth, and construction exactly."
      },
      {
        "issue": "If sleeves or straps change",
        "fix": "Preserve the original sleeves or straps exactly as shown in the uploaded reference."
      },
      {
        "issue": "If pattern changes",
        "fix": "Keep the print, pattern, embroidery, or artwork exactly identical to the uploaded reference."
      },
      {
        "issue": "If the dress is hidden",
        "fix": "Use a simple standing pose where the full dress remains visible from neckline to hem."
      },
      {
        "issue": "If fit looks wrong",
        "fix": "Make the dress fit naturally without changing its silhouette, waistline, length, or proportions."
      },
      {
        "issue": "If the scene distracts from the product",
        "fix": "Simplify the background and keep the dress as the clear visual focus."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-053",
    "title": "Amazon Flat Lay Image - Dress",
    "categorySlug": "clothes",
    "subcategorySlug": "dress",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded dress image as the only product reference, create a premium flat lay Amazon secondary image of the exact dress. Preserve the product exactly, including silhouette, neckline, sleeves or straps, waistline, hemline, length, seams, stitching, folds, pleats, fabric texture, print, pattern, embroidery, buttons, zipper, belt if present, and colours. Place the dress neatly laid flat on a clean white or light neutral surface. Show the full dress clearly from a top-down view without cropping the hem or neckline. Arrange the fabric naturally without changing the garment shape. Do not cover the print, embroidery, straps, sleeves, buttons, or waist details. Use bright commercial lighting with realistic soft shadows. High-resolution e-commerce product photography.",
    "commonMistakes": [
      "Dress shape becomes distorted",
      "Hemline gets cropped",
      "Neckline changes",
      "Sleeves or straps move incorrectly",
      "Waistline changes",
      "Pattern or print changes",
      "Flat lay angle is not top-down",
      "Fabric looks too stiff or fake",
      "Background becomes decorative",
      "Dress looks shorter or wider than reference"
    ],
    "fixPrompts": [
      {
        "issue": "If flat lay is not top-down",
        "fix": "Use a clean top-down flat lay view with the full dress visible from neckline to hem."
      },
      {
        "issue": "If dress shape changes",
        "fix": "Preserve the exact original silhouette, waistline, hemline, and proportions."
      },
      {
        "issue": "If hemline is cropped",
        "fix": "Show the complete hemline with enough space around the dress."
      },
      {
        "issue": "If neckline changes",
        "fix": "Restore the original neckline shape and garment construction."
      },
      {
        "issue": "If sleeves or straps look wrong",
        "fix": "Arrange sleeves or straps naturally while preserving their original shape, length, and placement."
      },
      {
        "issue": "If pattern changes",
        "fix": "Preserve the exact original print, pattern, embroidery, and colour."
      },
      {
        "issue": "If background is distracting",
        "fix": "Use a clean white or light neutral surface with minimal styling."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-054",
    "title": "Amazon Back View Image - Dress",
    "categorySlug": "clothes",
    "subcategorySlug": "dress",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded dress image as the only product reference, create a professional Amazon secondary image showing the back view of the same exact dress. Preserve the garment identity exactly, including fabric colour, fabric texture, silhouette, length, hemline, neckline, back neckline, sleeve or strap structure, waistline, seams, stitching, zipper if present, belt if present, print, pattern, embroidery, and proportions. If the original product does not show back artwork, do not invent any back print, logo, embroidery, or design. Show the back side clearly on a pure white or clean light neutral background. Center the dress and keep it fully visible from top to bottom. Use commercial studio lighting with soft natural shadows. High-resolution e-commerce product photography.",
    "commonMistakes": [
      "AI invents back design",
      "Back neckline becomes unrealistic",
      "Dress length changes",
      "Hemline changes",
      "Waistline shifts",
      "Sleeves or straps become asymmetrical",
      "Pattern does not match the front",
      "Fabric colour changes",
      "Zipper is invented or removed incorrectly",
      "Full dress gets cropped",
      "Background becomes grey"
    ],
    "fixPrompts": [
      {
        "issue": "If back artwork is invented",
        "fix": "Remove all invented back graphics, logos, embroidery, text, or design unless they exist in the original product."
      },
      {
        "issue": "If the back does not match the front",
        "fix": "Make the back view look like the same exact dress with matching fabric, colour, length, hemline, waistline, sleeves/straps, pattern, and proportions."
      },
      {
        "issue": "If back neckline changes",
        "fix": "Preserve the original back neckline structure as realistically as possible based on the dress design."
      },
      {
        "issue": "If dress length changes",
        "fix": "Keep the exact original length and hemline."
      },
      {
        "issue": "If sleeves or straps are asymmetrical",
        "fix": "Make both sides balanced and natural while preserving the garment’s original structure."
      },
      {
        "issue": "If pattern changes",
        "fix": "Keep the pattern consistent with the uploaded reference and do not invent a new pattern layout."
      },
      {
        "issue": "If full dress is cropped",
        "fix": "Show the complete dress from top to hem."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-055",
    "title": "Amazon Fit & Length Demonstration Image - Dress",
    "categorySlug": "clothes",
    "subcategorySlug": "dress",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded dress image as the only product reference, create an Amazon secondary image showing the exact dress worn by a realistic model to demonstrate fit and dress length. Preserve the dress exactly, including silhouette, neckline, sleeves or straps, waistline, hemline, length, fabric texture, print, pattern, embroidery, buttons, zipper, belt if present, and colours. Show the model standing straight in a clean studio or simple lifestyle setting. The full dress must be visible from top to bottom. The image should clearly show where the hem falls on the body, such as mini, knee-length, midi, calf-length, or maxi, without changing the original dress length. Use natural human proportions, realistic drape, and commercial e-commerce lighting.",
    "commonMistakes": [
      "Dress length changes",
      "Hemline falls at wrong body point",
      "Model pose hides the length",
      "Dress becomes too tight or loose",
      "Waistline shifts",
      "Neckline changes",
      "Print or pattern changes",
      "Full dress gets cropped",
      "Body proportions look unrealistic",
      "AI adds high heels or accessories that distract"
    ],
    "fixPrompts": [
      {
        "issue": "If dress length is wrong",
        "fix": "Preserve the exact original dress length and show the hem falling naturally according to the uploaded reference."
      },
      {
        "issue": "If full dress is not visible",
        "fix": "Show the complete dress from neckline to hem with the model standing straight."
      },
      {
        "issue": "If fit looks wrong",
        "fix": "Make the dress fit naturally without changing the silhouette, waistline, neckline, or hemline."
      },
      {
        "issue": "If model pose hides the length",
        "fix": "Use a simple front-facing standing pose with arms relaxed and the dress fully visible."
      },
      {
        "issue": "If body proportions are unrealistic",
        "fix": "Use natural human proportions and realistic fashion e-commerce photography."
      },
      {
        "issue": "If product changes",
        "fix": "Keep the uploaded dress identical and only adjust the model pose or background."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-056",
    "title": "Amazon Fabric / Pattern Close-Up - Dress",
    "categorySlug": "clothes",
    "subcategorySlug": "dress",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded dress image as the only product reference, create a macro close-up Amazon secondary image focusing on the exact fabric texture and pattern of the dress. Preserve the original material appearance, weave, fabric colour, print, pattern spacing, pattern scale, embroidery if present, stitching if visible, and fabric feel exactly. Do not smooth, stylize, redraw, recolor, or regenerate the fabric. Show a realistic close-up section of the garment such as the chest area, sleeve area, waist seam, hem edge, embroidered detail, or printed fabric area. Use clean commercial lighting. Crisp macro detail. High-resolution product photography.",
    "commonMistakes": [
      "Fabric gets overly smooth",
      "Pattern changes",
      "Pattern scale changes",
      "Colour shifts",
      "Texture becomes fake",
      "AI invents new material",
      "Embroidery becomes redesigned",
      "Macro crop looks unrealistic",
      "Stitching changes"
    ],
    "fixPrompts": [
      {
        "issue": "If texture changes",
        "fix": "Preserve the exact original fabric texture and weave. Do not smooth or replace the material."
      },
      {
        "issue": "If pattern changes",
        "fix": "Keep the original pattern exactly unchanged, including spacing, scale, colour, and direction."
      },
      {
        "issue": "If embroidery changes",
        "fix": "Preserve the embroidery exactly without redrawing, simplifying, or inventing new details."
      },
      {
        "issue": "If colour changes",
        "fix": "Preserve the exact original fabric colour and pattern colours."
      },
      {
        "issue": "If macro crop is unrealistic",
        "fix": "Show a natural, believable crop from the actual dress."
      },
      {
        "issue": "If stitching changes",
        "fix": "Keep visible stitching consistent with the uploaded reference."
      },
      {
        "issue": "If AI invents new material",
        "fix": "Remove the invented material appearance and restore the original dress fabric."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-057",
    "title": "Amazon Neckline / Sleeve / Strap Detail Image - Dress",
    "categorySlug": "clothes",
    "subcategorySlug": "dress",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded dress image as the only product reference, create a close-up Amazon secondary image highlighting the neckline, sleeve, or strap detail of the exact dress. Preserve the original neckline shape, sleeve or strap shape, seam structure, stitching, fabric texture, fabric colour, print, pattern, embroidery, buttons, trim, and garment construction exactly. Do not change the neckline depth, sleeve length, strap width, strap placement, or decorative details. Use clean commercial lighting and a simple white or light neutral background. High-resolution product detail photography.",
    "commonMistakes": [
      "Neckline shape changes",
      "Neckline becomes too deep or too high",
      "Sleeves or straps change length",
      "Strap width changes",
      "Decorative trim changes",
      "Pattern or embroidery changes",
      "Fabric texture becomes fake",
      "Colour shifts",
      "Crop is too close or unclear"
    ],
    "fixPrompts": [
      {
        "issue": "If neckline changes",
        "fix": "Restore the exact original neckline shape, depth, stitching, and structure."
      },
      {
        "issue": "If sleeve or strap changes",
        "fix": "Preserve the original sleeve or strap length, width, placement, and construction."
      },
      {
        "issue": "If decorative trim changes",
        "fix": "Keep lace, trim, embroidery, buttons, or edge details exactly as shown in the uploaded reference."
      },
      {
        "issue": "If pattern changes",
        "fix": "Preserve the original print, pattern, or embroidery without alteration."
      },
      {
        "issue": "If colour changes",
        "fix": "Preserve the exact original fabric colour."
      },
      {
        "issue": "If crop is unclear",
        "fix": "Show the neckline, sleeve, or strap detail clearly with enough surrounding fabric for context."
      },
      {
        "issue": "If fabric texture looks fake",
        "fix": "Use realistic fabric texture and natural commercial lighting."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-058",
    "title": "Amazon Size Guide Image - Dress",
    "categorySlug": "clothes",
    "subcategorySlug": "dress",
    "bestAI": "ChatGPT Images + Canva for final text editing",
    "difficulty": "Hard",
    "timeRequired": "2-4 minutes",
    "prompt": "Using the uploaded dress image as the only product reference, create a clean Amazon secondary size guide image for the exact dress. Preserve the product exactly, including silhouette, neckline, sleeves or straps, waistline, hemline, dress length, seams, stitching, fabric texture, print, pattern, embroidery, colours, and proportions. Place the dress clearly on one side of the layout and add clean measurement guide lines for bust/chest width, waist width, hip width if relevant, shoulder width if relevant, sleeve length if relevant, and full dress length. Use a white or light neutral background with a clean size table area. Leave editable placeholder text for size values. Do not distort, stretch, shorten, lengthen, or reshape the dress. High-resolution e-commerce infographic style.",
    "commonMistakes": [
      "Dress stretches or distorts",
      "Measurement lines are messy",
      "Text becomes unreadable",
      "AI invents wrong size values",
      "Dress length changes",
      "Neckline or sleeves change",
      "Pattern or colour changes",
      "Layout becomes cluttered",
      "Dress becomes too small"
    ],
    "fixPrompts": [
      {
        "issue": "If the dress distorts",
        "fix": "Keep the dress proportions exactly unchanged. Do not stretch, compress, shorten, lengthen, or reshape the garment."
      },
      {
        "issue": "If measurement lines are messy",
        "fix": "Use clean, simple measurement lines pointing to bust/chest, waist, hip if relevant, sleeve length if relevant, and full dress length."
      },
      {
        "issue": "If text is unreadable",
        "fix": "Use clean placeholder text areas only. Final size values will be added manually."
      },
      {
        "issue": "If AI invents size values",
        "fix": "Remove all invented measurements and leave editable placeholders."
      },
      {
        "issue": "If dress length changes",
        "fix": "Preserve the exact original dress length and hemline."
      },
      {
        "issue": "If product changes",
        "fix": "Keep the dress identical to the uploaded reference."
      },
      {
        "issue": "If layout is cluttered",
        "fix": "Simplify the layout and keep the size guide easy to read."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-059",
    "title": "Amazon Occasion / Styling Image - Dress",
    "categorySlug": "clothes",
    "subcategorySlug": "dress",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded dress image as the only product reference, create an Amazon secondary lifestyle image showing the exact dress styled for a realistic occasion. Preserve the dress exactly, including colour, silhouette, neckline, sleeves or straps, waistline, hemline, length, stitching, fabric texture, print, pattern, embroidery, buttons, belt if present, and proportions. Style the dress in a clean occasion-appropriate setting such as casual daywear, office wear, brunch, vacation, evening outing, party, or festive event. Keep the styling simple and do not cover the dress with jackets, bags, scarves, or excessive accessories. The dress must remain the hero product and must be clearly visible from top to bottom. Use realistic commercial lighting and high-resolution fashion e-commerce photography.",
    "commonMistakes": [
      "Accessories cover the dress",
      "Dress changes style",
      "Length changes",
      "Pattern or colour changes",
      "Scene becomes too dramatic",
      "Model pose hides the garment",
      "Occasion setting distracts from product",
      "AI adds luxury elements that misrepresent the product",
      "Full dress gets cropped"
    ],
    "fixPrompts": [
      {
        "issue": "If accessories cover the product",
        "fix": "Remove or reposition accessories so the full dress remains clearly visible."
      },
      {
        "issue": "If scene is too busy",
        "fix": "Simplify the setting and keep the dress as the main focus."
      },
      {
        "issue": "If product changes",
        "fix": "Keep the uploaded dress identical and change only the styling, model pose, or background."
      },
      {
        "issue": "If length changes",
        "fix": "Preserve the exact original dress length and hemline."
      },
      {
        "issue": "If pattern or colour changes",
        "fix": "Preserve the exact original pattern, embroidery, and colours."
      },
      {
        "issue": "If model pose hides the dress",
        "fix": "Use a simple standing pose with the full garment visible."
      },
      {
        "issue": "If occasion looks misleading",
        "fix": "Use a realistic setting that matches the dress style without exaggeration."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-060",
    "title": "Amazon Packaging / Folded Dress Presentation",
    "categorySlug": "clothes",
    "subcategorySlug": "dress",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded dress image as the only product reference, create a clean Amazon secondary image showing the exact dress neatly folded with simple packaging or delivery presentation. Preserve the product exactly, including fabric colour, texture, pattern, embroidery, stitching, neckline details if visible, sleeves or straps if visible, waist detail if visible, hem detail if visible, and visible garment construction. The folded dress must look realistic and not overly thick, stiff, or distorted. Show it beside or inside simple premium packaging such as a clean polybag, kraft box, tissue wrap, garment pouch, or folded retail presentation. Do not cover important design details. Do not invent fake brand logos or labels. Use a white or light neutral background with soft commercial lighting. High-resolution e-commerce photography.",
    "commonMistakes": [
      "Dress becomes too bulky when folded",
      "Pattern or embroidery changes",
      "Fabric colour shifts",
      "Fold looks unrealistic",
      "Packaging covers the product",
      "AI adds fake brand logos",
      "Product looks damaged or wrinkled",
      "Scene becomes cluttered",
      "Dress identity is lost after folding"
    ],
    "fixPrompts": [
      {
        "issue": "If folded dress looks too bulky",
        "fix": "Make the folded garment look realistic for a dress without exaggerated thickness or stiffness."
      },
      {
        "issue": "If packaging covers the product",
        "fix": "Reposition packaging so the dress remains clearly visible."
      },
      {
        "issue": "If pattern or embroidery changes",
        "fix": "Preserve the original print, pattern, embroidery, and colours exactly."
      },
      {
        "issue": "If AI adds fake branding",
        "fix": "Remove all invented logos, labels, slogans, or brand marks from packaging."
      },
      {
        "issue": "If fold looks unrealistic",
        "fix": "Make the folded dress appear soft, natural, and suitable for delivery presentation."
      },
      {
        "issue": "If product looks damaged",
        "fix": "Keep the dress clean, new, premium, and e-commerce ready."
      },
      {
        "issue": "If layout is cluttered",
        "fix": "Use a clean minimal packaging presentation with the product as the hero."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-061",
    "title": "Amazon Main Listing Image - Kurti / Ethnic Wear",
    "categorySlug": "clothes",
    "subcategorySlug": "kurti-ethnic-wear",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded kurti or ethnic wear image as the only product reference, create a professional Amazon main listing image. The kurti/ethnic garment must remain 100% identical to the uploaded reference. Do not modify, redesign, recolor, reshape, regenerate, or reinterpret the product. Preserve exactly: garment silhouette, length, neckline, sleeves, side slits, hemline, waistline if present, seams, stitching, buttons, tassels, embroidery, print, pattern, border design, fabric texture, fabric fall, colours, and natural garment shadows. Remove only the existing background and replace it with a pure white (#FFFFFF) background. Place the full garment centered in the frame. Show the front view only. The full garment must be visible from neckline to hem with no cropping. No model, no mannequin, no hanger, no props, no floor, no reflections, no extra objects, and no promotional text. Use clean commercial studio lighting with a soft natural contact shadow beneath the garment. Ultra high-resolution Amazon-ready apparel product photography. Keep the uploaded kurti/ethnic garment completely unchanged.",
    "commonMistakes": [
      "Kurti length changes",
      "Neckline changes",
      "Sleeve length changes",
      "Side slits disappear or change",
      "Embroidery gets redesigned",
      "Print or pattern changes",
      "Border design changes",
      "Fabric colour shifts",
      "Garment becomes wider or slimmer",
      "AI adds a mannequin or model",
      "Background becomes grey instead of pure white",
      "Full garment gets cropped",
      "AI creates a different ethnic outfit"
    ],
    "fixPrompts": [
      {
        "issue": "If the product changes",
        "fix": "Keep the uploaded kurti/ethnic garment completely identical. Do not redesign, reshape, recolor, or regenerate the garment. Only change the background."
      },
      {
        "issue": "If length changes",
        "fix": "Preserve the exact original garment length and hemline shown in the uploaded reference."
      },
      {
        "issue": "If neckline changes",
        "fix": "Restore the original neckline shape, depth, stitching, embroidery, border, and construction exactly."
      },
      {
        "issue": "If sleeves change",
        "fix": "Preserve the original sleeve length, width, shape, stitching, border, and fabric fall."
      },
      {
        "issue": "If side slits change",
        "fix": "Preserve the original side slit placement, length, and seam structure exactly."
      },
      {
        "issue": "If embroidery changes",
        "fix": "Preserve the embroidery exactly. Do not redraw, simplify, recolor, or invent new embroidery."
      },
      {
        "issue": "If print or pattern changes",
        "fix": "Preserve the exact original print, pattern spacing, scale, border design, and colours."
      },
      {
        "issue": "If colour changes",
        "fix": "Preserve the exact original fabric colour, embroidery colour, print colour, and border colour."
      },
      {
        "issue": "If full garment is cropped",
        "fix": "Show the complete garment from neckline to hem with enough white space around it."
      },
      {
        "issue": "If background is not pure white",
        "fix": "Replace the background with pure white (#FFFFFF) only."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-062",
    "title": "Amazon Lifestyle Model Image - Kurti / Ethnic Wear",
    "categorySlug": "clothes",
    "subcategorySlug": "kurti-ethnic-wear",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded kurti or ethnic wear image as the only product reference, create a realistic Amazon secondary lifestyle image showing the exact garment worn by a natural-looking model. Preserve the garment 100% exactly, including silhouette, length, neckline, sleeves, side slits, hemline, seams, stitching, embroidery, print, pattern, border design, buttons, tassels if present, fabric texture, fabric fall, and colours. The kurti/ethnic garment should fit naturally on the model without stretching, shrinking, shortening, lengthening, or changing the design. Show the model in a clean ethnic lifestyle setting such as a simple studio, courtyard, festive indoor setting, casual outdoor walkway, or elegant minimal home setting. The full garment must remain clearly visible from neckline to hem. No dupatta, handbag, crossed arms, jewellery, or props should cover important garment details unless specifically requested. Use realistic commercial lighting and high-resolution fashion e-commerce photography.",
    "commonMistakes": [
      "Kurti becomes a different style",
      "Length changes on the model",
      "Neckline changes",
      "Sleeve length changes",
      "Side slits disappear",
      "Embroidery changes",
      "Border design changes",
      "Print or pattern changes",
      "Model pose hides the garment",
      "Fit becomes too tight or loose",
      "Fabric colour shifts",
      "Background becomes too festive or distracting",
      "Full garment gets cropped",
      "AI adds accessories that cover the garment"
    ],
    "fixPrompts": [
      {
        "issue": "If the garment changes",
        "fix": "Keep the uploaded kurti/ethnic garment identical. Only adjust the model, pose, or background."
      },
      {
        "issue": "If length changes",
        "fix": "Preserve the exact original garment length and hemline while fitting it naturally on the model."
      },
      {
        "issue": "If neckline changes",
        "fix": "Restore the original neckline shape, depth, embroidery, border, and construction exactly."
      },
      {
        "issue": "If sleeves change",
        "fix": "Preserve the original sleeve length, width, border, embroidery, and fabric fall."
      },
      {
        "issue": "If side slits disappear",
        "fix": "Restore the original side slit placement and length exactly."
      },
      {
        "issue": "If embroidery changes",
        "fix": "Keep the embroidery exactly identical to the uploaded reference."
      },
      {
        "issue": "If print or pattern changes",
        "fix": "Preserve the exact original print, pattern, border design, and colour placement."
      },
      {
        "issue": "If the garment is hidden",
        "fix": "Use a simple standing pose where the full kurti/ethnic garment remains visible from neckline to hem."
      },
      {
        "issue": "If fit looks wrong",
        "fix": "Make the garment fit naturally without changing silhouette, length, sleeves, neckline, or side slits."
      },
      {
        "issue": "If scene distracts from product",
        "fix": "Simplify the background and keep the garment as the clear visual focus."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-063",
    "title": "Amazon Flat Lay Image - Kurti / Ethnic Wear",
    "categorySlug": "clothes",
    "subcategorySlug": "kurti-ethnic-wear",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded kurti or ethnic wear image as the only product reference, create a premium flat lay Amazon secondary image of the exact garment. Preserve the product exactly, including silhouette, neckline, sleeves, side slits, hemline, length, seams, stitching, embroidery, print, pattern, border design, buttons, tassels if present, fabric texture, fabric fall, and colours. Place the kurti/ethnic garment neatly laid flat on a clean white or light neutral surface. Show the full garment clearly from a top-down view without cropping the hem, sleeves, neckline, or side slits. Arrange the fabric naturally without changing the garment shape. Do not cover the print, embroidery, sleeve borders, neckline, buttons, tassels, or hem design. Use bright commercial lighting with realistic soft shadows. High-resolution e-commerce product photography.",
    "commonMistakes": [
      "Garment shape becomes distorted",
      "Hemline gets cropped",
      "Neckline changes",
      "Sleeves move incorrectly",
      "Side slits disappear",
      "Embroidery changes",
      "Print or pattern changes",
      "Border design changes",
      "Flat lay angle is not top-down",
      "Fabric looks too stiff or fake",
      "Background becomes decorative",
      "Garment looks shorter or wider than reference"
    ],
    "fixPrompts": [
      {
        "issue": "If flat lay is not top-down",
        "fix": "Use a clean top-down flat lay view with the full kurti/ethnic garment visible from neckline to hem."
      },
      {
        "issue": "If garment shape changes",
        "fix": "Preserve the exact original silhouette, length, side slits, hemline, and proportions."
      },
      {
        "issue": "If hemline is cropped",
        "fix": "Show the complete hemline with enough space around the garment."
      },
      {
        "issue": "If neckline changes",
        "fix": "Restore the original neckline shape, embroidery, border, and garment construction."
      },
      {
        "issue": "If sleeves look wrong",
        "fix": "Arrange sleeves naturally while preserving their original shape, length, border, and placement."
      },
      {
        "issue": "If side slits disappear",
        "fix": "Preserve the original side slit placement and seam structure."
      },
      {
        "issue": "If embroidery changes",
        "fix": "Preserve the exact original embroidery without alteration."
      },
      {
        "issue": "If print or border changes",
        "fix": "Preserve the exact original print, pattern, border design, and colours."
      },
      {
        "issue": "If background is distracting",
        "fix": "Use a clean white or light neutral surface with minimal styling."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-064",
    "title": "Amazon Back View Image - Kurti / Ethnic Wear",
    "categorySlug": "clothes",
    "subcategorySlug": "kurti-ethnic-wear",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded kurti or ethnic wear image as the only product reference, create a professional Amazon secondary image showing the back view of the same exact garment. Preserve the garment identity exactly, including fabric colour, fabric texture, silhouette, length, hemline, back neckline, sleeve structure, side slits, seams, stitching, print, pattern, embroidery, border design, tassels if present, and proportions. If the original product does not show back embroidery, print, logo, or design, do not invent any back artwork or decorative detail. Show the back side clearly on a pure white or clean light neutral background. Center the garment and keep it fully visible from top to bottom. Use commercial studio lighting with soft natural shadows. High-resolution e-commerce product photography.",
    "commonMistakes": [
      "AI invents back embroidery or design",
      "Back neckline becomes unrealistic",
      "Garment length changes",
      "Hemline changes",
      "Side slits disappear",
      "Sleeves become asymmetrical",
      "Pattern does not match the front",
      "Border design changes",
      "Fabric colour changes",
      "Full garment gets cropped",
      "Background becomes grey"
    ],
    "fixPrompts": [
      {
        "issue": "If back design is invented",
        "fix": "Remove all invented back graphics, embroidery, logos, text, motifs, or decorative details unless they exist in the original product."
      },
      {
        "issue": "If the back does not match the front garment",
        "fix": "Make the back view look like the same exact garment with matching fabric, colour, length, hemline, sleeves, side slits, print, pattern, border design, and proportions."
      },
      {
        "issue": "If back neckline changes",
        "fix": "Preserve a realistic back neckline structure consistent with the uploaded garment design."
      },
      {
        "issue": "If length changes",
        "fix": "Keep the exact original garment length and hemline."
      },
      {
        "issue": "If sleeves are asymmetrical",
        "fix": "Make both sleeves balanced and natural while preserving the garment's original structure."
      },
      {
        "issue": "If side slits disappear",
        "fix": "Restore the side slit placement and length consistent with the original garment."
      },
      {
        "issue": "If pattern changes",
        "fix": "Keep the pattern consistent with the uploaded reference and do not invent a new pattern layout."
      },
      {
        "issue": "If full garment is cropped",
        "fix": "Show the complete garment from top to hem."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-065",
    "title": "Amazon Neckline / Embroidery Detail Image - Kurti / Ethnic Wear",
    "categorySlug": "clothes",
    "subcategorySlug": "kurti-ethnic-wear",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded kurti or ethnic wear image as the only product reference, create a close-up Amazon secondary image highlighting the neckline, embroidery, and upper front detail of the exact garment. Preserve the original neckline shape, neckline depth, embroidery design, stitching, fabric texture, fabric colour, print, pattern, border design, buttons, tassels, trim, and garment construction exactly. Do not change the neckline style, embroidery placement, motif design, colour, thread appearance, button placement, or decorative details. Use clean commercial lighting and a simple white or light neutral background. High-resolution ethnic apparel detail photography.",
    "commonMistakes": [
      "Neckline shape changes",
      "Neckline becomes too deep or too high",
      "Embroidery gets redesigned",
      "Thread colours change",
      "Motifs become different",
      "Buttons or tassels are invented",
      "Pattern or border changes",
      "Fabric texture becomes fake",
      "Colour shifts",
      "Crop is too close or unclear"
    ],
    "fixPrompts": [
      {
        "issue": "If neckline changes",
        "fix": "Restore the exact original neckline shape, depth, stitching, border, and structure."
      },
      {
        "issue": "If embroidery changes",
        "fix": "Preserve the embroidery exactly, including motif shape, placement, spacing, colour, and thread appearance."
      },
      {
        "issue": "If motif design changes",
        "fix": "Do not redraw, simplify, modernize, or reinterpret the motifs. Keep them exactly as shown."
      },
      {
        "issue": "If buttons or tassels change",
        "fix": "Preserve the original buttons, tassels, trims, and decorative elements exactly. Do not invent new ones."
      },
      {
        "issue": "If pattern or border changes",
        "fix": "Preserve the original print, border design, embroidery, and colour placement without alteration."
      },
      {
        "issue": "If colour changes",
        "fix": "Preserve the exact original fabric colour and embroidery colours."
      },
      {
        "issue": "If crop is unclear",
        "fix": "Show the neckline and embroidery clearly with enough surrounding fabric for context."
      },
      {
        "issue": "If fabric texture looks fake",
        "fix": "Use realistic fabric texture and natural commercial lighting."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-066",
    "title": "Amazon Fabric / Print / Border Close-Up - Kurti / Ethnic Wear",
    "categorySlug": "clothes",
    "subcategorySlug": "kurti-ethnic-wear",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded kurti or ethnic wear image as the only product reference, create a macro close-up Amazon secondary image focusing on the exact fabric texture, print, and border design of the garment. Preserve the original material appearance, weave, fabric colour, print, pattern spacing, pattern scale, border placement, border thickness, embroidery if present, stitching if visible, and fabric feel exactly. Do not smooth, stylize, redraw, recolor, or regenerate the fabric. Show a realistic close-up section of the garment such as the sleeve border, neckline border, hem border, printed fabric area, embroidered area, or side slit seam. Use clean commercial lighting. Crisp macro detail. High-resolution product photography.",
    "commonMistakes": [
      "Fabric gets overly smooth",
      "Print changes",
      "Pattern scale changes",
      "Border design changes",
      "Border thickness changes",
      "Colour shifts",
      "Texture becomes fake",
      "AI invents new fabric",
      "Embroidery becomes redesigned",
      "Macro crop looks unrealistic",
      "Stitching changes"
    ],
    "fixPrompts": [
      {
        "issue": "If texture changes",
        "fix": "Preserve the exact original fabric texture and weave. Do not smooth or replace the material."
      },
      {
        "issue": "If print changes",
        "fix": "Keep the original print exactly unchanged, including spacing, scale, colour, and direction."
      },
      {
        "issue": "If border changes",
        "fix": "Preserve the border design, thickness, colour, motif spacing, and placement exactly."
      },
      {
        "issue": "If embroidery changes",
        "fix": "Preserve the embroidery exactly without redrawing, simplifying, or inventing new details."
      },
      {
        "issue": "If colour changes",
        "fix": "Preserve the exact original fabric colour, print colours, border colours, and embroidery colours."
      },
      {
        "issue": "If macro crop is unrealistic",
        "fix": "Show a natural, believable crop from the actual garment."
      },
      {
        "issue": "If stitching changes",
        "fix": "Keep visible stitching consistent with the uploaded reference."
      },
      {
        "issue": "If AI invents new material",
        "fix": "Remove the invented material appearance and restore the original garment fabric."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-067",
    "title": "Amazon Sleeve / Side Slit / Hem Detail Image - Kurti / Ethnic Wear",
    "categorySlug": "clothes",
    "subcategorySlug": "kurti-ethnic-wear",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded kurti or ethnic wear image as the only product reference, create a close-up Amazon secondary image highlighting the sleeve, side slit, or hem detail of the exact garment. Preserve the original sleeve shape, sleeve length, sleeve border, side slit placement, side slit length, hemline, hem border, stitching, seam structure, fabric texture, fabric colour, print, pattern, embroidery, trim, and garment construction exactly. Do not change the sleeve style, slit length, hem shape, border placement, or decorative details. Use clean commercial lighting and a simple white or light neutral background. High-resolution ethnic apparel detail photography.",
    "commonMistakes": [
      "Sleeve length changes",
      "Sleeve border changes",
      "Side slit disappears",
      "Side slit becomes too long or short",
      "Hemline changes",
      "Hem border changes",
      "Decorative trim changes",
      "Pattern or embroidery changes",
      "Fabric texture becomes fake",
      "Colour shifts",
      "Crop is too close or unclear"
    ],
    "fixPrompts": [
      {
        "issue": "If sleeve changes",
        "fix": "Restore the original sleeve shape, length, border, stitching, and construction."
      },
      {
        "issue": "If sleeve border changes",
        "fix": "Preserve the original sleeve border design, thickness, colour, pattern, and placement."
      },
      {
        "issue": "If side slit changes",
        "fix": "Restore the original side slit placement, length, seam structure, and opening shape."
      },
      {
        "issue": "If hemline changes",
        "fix": "Preserve the original hemline shape, length, stitching, and border placement."
      },
      {
        "issue": "If hem border changes",
        "fix": "Keep the hem border design, motif placement, colour, and thickness exactly as shown."
      },
      {
        "issue": "If pattern or embroidery changes",
        "fix": "Preserve the original print, pattern, embroidery, and trim without alteration."
      },
      {
        "issue": "If colour changes",
        "fix": "Preserve the exact original fabric colour and decorative colours."
      },
      {
        "issue": "If crop is unclear",
        "fix": "Show the sleeve, side slit, or hem detail clearly with enough surrounding fabric for context."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-068",
    "title": "Amazon Size Guide Image - Kurti / Ethnic Wear",
    "categorySlug": "clothes",
    "subcategorySlug": "kurti-ethnic-wear",
    "bestAI": "ChatGPT Images + Canva for final text editing",
    "difficulty": "Hard",
    "timeRequired": "2-4 minutes",
    "prompt": "Using the uploaded kurti or ethnic wear image as the only product reference, create a clean Amazon secondary size guide image for the exact garment. Preserve the product exactly, including silhouette, neckline, sleeves, side slits, hemline, garment length, seams, stitching, fabric texture, print, pattern, embroidery, border design, colours, and proportions. Place the kurti/ethnic garment clearly on one side of the layout and add clean measurement guide lines for bust/chest width, waist width if relevant, shoulder width, sleeve length, full garment length, hem width, and side slit length if relevant. Use a white or light neutral background with a clean size table area. Leave editable placeholder text for size values. Do not distort, stretch, shorten, lengthen, or reshape the garment. High-resolution e-commerce infographic style.",
    "commonMistakes": [
      "Garment stretches or distorts",
      "Measurement lines are messy",
      "Text becomes unreadable",
      "AI invents wrong size values",
      "Garment length changes",
      "Neckline or sleeves change",
      "Side slits disappear",
      "Pattern or colour changes",
      "Border design changes",
      "Layout becomes cluttered",
      "Garment becomes too small"
    ],
    "fixPrompts": [
      {
        "issue": "If the garment distorts",
        "fix": "Keep the garment proportions exactly unchanged. Do not stretch, compress, shorten, lengthen, or reshape it."
      },
      {
        "issue": "If measurement lines are messy",
        "fix": "Use clean, simple measurement lines pointing to bust/chest, shoulder width, sleeve length, full garment length, hem width, and side slit length if relevant."
      },
      {
        "issue": "If text is unreadable",
        "fix": "Use clean placeholder text areas only. Final size values will be added manually."
      },
      {
        "issue": "If AI invents size values",
        "fix": "Remove all invented measurements and leave editable placeholders."
      },
      {
        "issue": "If garment length changes",
        "fix": "Preserve the exact original garment length and hemline."
      },
      {
        "issue": "If side slits disappear",
        "fix": "Preserve the original side slit placement and length."
      },
      {
        "issue": "If product changes",
        "fix": "Keep the garment identical to the uploaded reference."
      },
      {
        "issue": "If layout is cluttered",
        "fix": "Simplify the layout and keep the size guide easy to read."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-069",
    "title": "Amazon Occasion / Festive Styling Image - Kurti / Ethnic Wear",
    "categorySlug": "clothes",
    "subcategorySlug": "kurti-ethnic-wear",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded kurti or ethnic wear image as the only product reference, create an Amazon secondary lifestyle image showing the exact garment styled for a realistic ethnic or festive occasion. Preserve the garment exactly, including colour, silhouette, neckline, sleeves, side slits, hemline, length, stitching, fabric texture, print, pattern, embroidery, border design, buttons, tassels if present, and proportions. Style the garment in a clean occasion-appropriate setting such as casual ethnic daywear, office ethnic wear, festive indoor setting, family gathering, brunch, temple visit-inspired neutral setting, or elegant home setting. Keep styling simple and do not cover the garment with dupattas, bags, heavy jewellery, scarves, or excessive accessories. The garment must remain the hero product and must be clearly visible from top to bottom. Use realistic commercial lighting and high-resolution ethnic fashion e-commerce photography.",
    "commonMistakes": [
      "Accessories cover the garment",
      "Dupatta hides neckline or print",
      "Garment changes style",
      "Length changes",
      "Embroidery changes",
      "Border design changes",
      "Pattern or colour changes",
      "Scene becomes too dramatic",
      "Model pose hides garment",
      "Occasion setting distracts from product",
      "AI adds luxury elements that misrepresent the product",
      "Full garment gets cropped"
    ],
    "fixPrompts": [
      {
        "issue": "If accessories cover the product",
        "fix": "Remove or reposition accessories so the full garment remains clearly visible."
      },
      {
        "issue": "If dupatta hides details",
        "fix": "Remove the dupatta or place it so it does not cover the neckline, embroidery, print, sleeves, or side slits."
      },
      {
        "issue": "If scene is too busy",
        "fix": "Simplify the setting and keep the garment as the main focus."
      },
      {
        "issue": "If product changes",
        "fix": "Keep the uploaded garment identical and change only styling, model pose, or background."
      },
      {
        "issue": "If length changes",
        "fix": "Preserve the exact original garment length and hemline."
      },
      {
        "issue": "If embroidery or border changes",
        "fix": "Preserve the exact original embroidery, border design, motif placement, and colours."
      },
      {
        "issue": "If pattern or colour changes",
        "fix": "Preserve the exact original pattern and colours."
      },
      {
        "issue": "If model pose hides the garment",
        "fix": "Use a simple standing pose with the full garment visible."
      },
      {
        "issue": "If occasion looks misleading",
        "fix": "Use a realistic setting that matches the garment style without exaggeration."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-070",
    "title": "Amazon Set / Dupatta / Bottom Wear Presentation - Kurti / Ethnic Wear",
    "categorySlug": "clothes",
    "subcategorySlug": "kurti-ethnic-wear",
    "bestAI": "ChatGPT Images",
    "difficulty": "Hard",
    "timeRequired": "2-4 minutes",
    "prompt": "Using the uploaded kurti or ethnic wear image as the only product reference, create a clean Amazon secondary image showing the exact garment as a set presentation only if matching pieces are provided or visible in the uploaded reference. Preserve the main garment exactly, including silhouette, neckline, sleeves, side slits, hemline, fabric texture, print, pattern, embroidery, border design, colours, and proportions. If the product includes matching bottom wear, dupatta, scarf, belt, or accessory pieces, show them neatly arranged beside the main garment without covering important details. If no matching pieces are provided, do not invent them; instead create a clean placeholder-style layout showing only the main garment with space for \"set contents\" to be added manually. Use a white or light neutral background with premium e-commerce styling. High-resolution product photography.",
    "commonMistakes": [
      "AI invents a dupatta or bottom wear",
      "Main garment changes",
      "Matching pieces have different pattern or colour",
      "Set pieces cover the kurti",
      "Embroidery or border changes",
      "Product looks like a different outfit",
      "Layout becomes cluttered",
      "AI adds fake accessories",
      "Fabric colour shifts",
      "Seller's actual set contents are misrepresented"
    ],
    "fixPrompts": [
      {
        "issue": "If AI invents extra pieces",
        "fix": "Do not create a dupatta, bottom wear, scarf, belt, or accessories unless they are provided in the uploaded reference or seller materials."
      },
      {
        "issue": "If main garment changes",
        "fix": "Keep the uploaded kurti/ethnic garment completely identical."
      },
      {
        "issue": "If matching pieces look inconsistent",
        "fix": "Make all provided set pieces match the original product's colour, fabric, border, print, and embroidery style."
      },
      {
        "issue": "If pieces cover the product",
        "fix": "Arrange set pieces beside the main garment without covering the neckline, embroidery, print, sleeves, or hem."
      },
      {
        "issue": "If embroidery or border changes",
        "fix": "Preserve the original embroidery, border design, motif placement, and colours exactly."
      },
      {
        "issue": "If layout is cluttered",
        "fix": "Use a clean organized set presentation with enough spacing."
      },
      {
        "issue": "If product is misrepresented",
        "fix": "Show only the actual product contents provided by the seller. Do not imply included items that are not included."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-071",
    "title": "Amazon Main Listing Image - Jeans / Pants",
    "categorySlug": "clothes",
    "subcategorySlug": "jeans-pants",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded jeans or pants image as the only product reference, create a professional Amazon main listing image. The jeans/pants must remain 100% identical to the uploaded reference. Do not modify, redesign, recolor, reshape, regenerate, or reinterpret the product. Preserve exactly: pant silhouette, waistline, waistband, belt loops, button, zipper fly, front pockets, coin pocket if present, stitching, seams, rivets if present, fabric texture, denim wash or fabric finish, pleats if present, taper, leg width, cuffs, hemline, length, print, pattern, logo, labels if visible, colours, and natural garment shadows. Remove only the existing background and replace it with a pure white (#FFFFFF) background. Place the full jeans/pants centered in the frame. Show the front view only. The full garment must be visible from waistband to hem with no cropping. No model, no mannequin, no hanger, no props, no floor, no reflections, no extra objects, and no promotional text. Use clean commercial studio lighting with a soft natural contact shadow beneath the garment. Ultra high-resolution Amazon-ready apparel product photography. Keep the uploaded jeans/pants completely unchanged.",
    "commonMistakes": [
      "Pant length changes",
      "Waistband changes",
      "Belt loops disappear",
      "Pocket shape changes",
      "Button or zipper changes",
      "Denim wash changes",
      "Stitching changes",
      "Leg width becomes too slim or too wide",
      "Fabric texture becomes fake",
      "Colour shifts",
      "Hemline changes",
      "Full pants get cropped",
      "AI creates a different pair of jeans/pants"
    ],
    "fixPrompts": [
      {
        "issue": "If the product changes",
        "fix": "Keep the uploaded jeans/pants completely identical. Do not redesign, reshape, recolor, or regenerate the garment. Only change the background."
      },
      {
        "issue": "If pant length changes",
        "fix": "Preserve the exact original length and hemline shown in the uploaded reference."
      },
      {
        "issue": "If waistband changes",
        "fix": "Restore the original waistband shape, height, stitching, belt loops, button, and zipper fly exactly."
      },
      {
        "issue": "If pockets change",
        "fix": "Preserve the exact original pocket shape, size, placement, stitching, and opening."
      },
      {
        "issue": "If belt loops disappear",
        "fix": "Restore the original belt loops exactly as shown in the uploaded reference."
      },
      {
        "issue": "If stitching changes",
        "fix": "Preserve the original stitching colour, seam placement, thread pattern, and construction details."
      },
      {
        "issue": "If denim wash or fabric finish changes",
        "fix": "Preserve the exact original denim wash, fade, fabric texture, colour tone, and finish."
      },
      {
        "issue": "If leg width changes",
        "fix": "Keep the original leg width, taper, silhouette, and proportions exactly."
      },
      {
        "issue": "If full garment is cropped",
        "fix": "Show the complete jeans/pants from waistband to hem with enough white space around it."
      },
      {
        "issue": "If background is not pure white",
        "fix": "Replace the background with pure white (#FFFFFF) only."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-072",
    "title": "Amazon Lifestyle Model Image - Jeans / Pants",
    "categorySlug": "clothes",
    "subcategorySlug": "jeans-pants",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded jeans or pants image as the only product reference, create a realistic Amazon secondary lifestyle image showing the exact jeans/pants worn by a natural-looking model. Preserve the garment 100% exactly, including silhouette, waistband, belt loops, button, zipper fly, pockets, stitching, seams, rivets if present, denim wash or fabric finish, fabric texture, leg width, taper, cuffs, hemline, length, print, pattern, logo, labels if visible, and colours. The jeans/pants should fit naturally on the model without stretching, shrinking, shortening, lengthening, or changing the design. Show the model in a clean casual lifestyle setting such as a studio, streetwear setting, café, simple outdoor walkway, or minimal indoor setting. The full jeans/pants must remain clearly visible from waistband to hem. No long shirt, jacket, bag, pose, or accessory should cover important waistband, pocket, or leg details. Use realistic commercial lighting and high-resolution fashion e-commerce photography.",
    "commonMistakes": [
      "Jeans/pants become a different style",
      "Length changes on the model",
      "Waistband gets covered",
      "Pocket shape changes",
      "Denim wash changes",
      "Leg fit becomes too skinny or too baggy",
      "Hemline changes",
      "Model pose hides the pants",
      "Fabric colour shifts",
      "Background becomes too editorial",
      "Full garment gets cropped",
      "AI adds belts or accessories that cover details"
    ],
    "fixPrompts": [
      {
        "issue": "If the garment changes",
        "fix": "Keep the uploaded jeans/pants identical. Only adjust the model, pose, or background."
      },
      {
        "issue": "If length changes",
        "fix": "Preserve the exact original pant length and hemline while fitting naturally on the model."
      },
      {
        "issue": "If waistband is hidden",
        "fix": "Use styling and pose that keeps the waistband, button, zipper area, and pockets visible."
      },
      {
        "issue": "If pockets change",
        "fix": "Preserve the exact original pocket shape, size, stitching, and placement."
      },
      {
        "issue": "If denim wash changes",
        "fix": "Keep the exact original denim wash, fade, fabric tone, and texture."
      },
      {
        "issue": "If fit looks wrong",
        "fix": "Make the jeans/pants fit naturally without changing the original silhouette, leg width, taper, or length."
      },
      {
        "issue": "If model pose hides the product",
        "fix": "Use a simple standing pose with the full garment visible from waistband to hem."
      },
      {
        "issue": "If scene distracts from product",
        "fix": "Simplify the background and keep the jeans/pants as the clear visual focus."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-073",
    "title": "Amazon Flat Lay Image - Jeans / Pants",
    "categorySlug": "clothes",
    "subcategorySlug": "jeans-pants",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded jeans or pants image as the only product reference, create a premium flat lay Amazon secondary image of the exact jeans/pants. Preserve the product exactly, including silhouette, waistband, belt loops, button, zipper fly, pockets, coin pocket if present, stitching, seams, rivets if present, fabric texture, denim wash or fabric finish, pleats if present, leg width, taper, cuffs, hemline, length, print, pattern, logo, labels if visible, and colours. Place the jeans/pants neatly laid flat on a clean white or light neutral surface. Show the full garment clearly from a top-down view without cropping the waistband, pockets, legs, or hemline. Arrange the fabric naturally without changing the garment shape. Do not cover the waistband, pockets, stitching, labels, or hem details. Use bright commercial lighting with realistic soft shadows. High-resolution e-commerce product photography.",
    "commonMistakes": [
      "Pant shape becomes distorted",
      "Waistband gets crooked",
      "Belt loops disappear",
      "Pockets change",
      "Leg width changes",
      "Hemline gets cropped",
      "Denim wash changes",
      "Flat lay angle is not top-down",
      "Fabric looks too stiff or fake",
      "Background becomes decorative",
      "Pants look shorter or wider than reference"
    ],
    "fixPrompts": [
      {
        "issue": "If flat lay is not top-down",
        "fix": "Use a clean top-down flat lay view with the full jeans/pants visible from waistband to hem."
      },
      {
        "issue": "If garment shape changes",
        "fix": "Preserve the exact original silhouette, leg width, taper, length, waistband, and proportions."
      },
      {
        "issue": "If waistband changes",
        "fix": "Restore the original waistband, button, zipper fly, belt loops, and stitching."
      },
      {
        "issue": "If pockets change",
        "fix": "Preserve the exact original pocket shape, placement, seam, and stitching."
      },
      {
        "issue": "If hemline is cropped",
        "fix": "Show the complete hemline with enough space around the garment."
      },
      {
        "issue": "If denim wash changes",
        "fix": "Preserve the exact original denim wash, fade, fabric texture, and colour."
      },
      {
        "issue": "If background is distracting",
        "fix": "Use a clean white or light neutral surface with minimal styling."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-074",
    "title": "Amazon Back View Image - Jeans / Pants",
    "categorySlug": "clothes",
    "subcategorySlug": "jeans-pants",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded jeans or pants image as the only product reference, create a professional Amazon secondary image showing the back view of the same exact jeans/pants. Preserve the garment identity exactly, including fabric colour, fabric texture, denim wash or finish, waistband, belt loops, back pockets, stitching, seams, yoke seam if present, rivets if present, logo patch or label if present, leg shape, taper, cuffs, hemline, length, print, pattern, and proportions. If the original product does not show back embroidery, logo, or pocket design, do not invent any back artwork or decorative detail. Show the back side clearly on a pure white or clean light neutral background. Center the garment and keep it fully visible from waistband to hem. Use commercial studio lighting with soft natural shadows. High-resolution e-commerce product photography.",
    "commonMistakes": [
      "AI invents back pocket embroidery",
      "Back pockets change shape",
      "Waistband changes",
      "Belt loops disappear",
      "Logo patch is invented or removed",
      "Denim wash does not match front",
      "Leg width changes",
      "Hemline changes",
      "Fabric colour shifts",
      "Full garment gets cropped",
      "Background becomes grey"
    ],
    "fixPrompts": [
      {
        "issue": "If back design is invented",
        "fix": "Remove all invented back embroidery, logos, patches, graphics, text, or decorative details unless they exist in the original product."
      },
      {
        "issue": "If the back does not match the front garment",
        "fix": "Make the back view look like the same exact jeans/pants with matching fabric, colour, wash, waistband, pockets, stitching, leg width, taper, and length."
      },
      {
        "issue": "If back pockets change",
        "fix": "Preserve the original back pocket shape, size, placement, stitching, and seam structure."
      },
      {
        "issue": "If waistband changes",
        "fix": "Keep the waistband, belt loops, stitching, label area, and proportions consistent with the uploaded reference."
      },
      {
        "issue": "If denim wash changes",
        "fix": "Preserve the exact original denim wash, fade, colour tone, and fabric texture."
      },
      {
        "issue": "If leg shape changes",
        "fix": "Keep the same original leg silhouette, taper, and hemline."
      },
      {
        "issue": "If full garment is cropped",
        "fix": "Show the complete jeans/pants from waistband to hem."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-075",
    "title": "Amazon Waistband / Pocket Detail Image - Jeans / Pants",
    "categorySlug": "clothes",
    "subcategorySlug": "jeans-pants",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded jeans or pants image as the only product reference, create a close-up Amazon secondary image highlighting the waistband, button, zipper fly, belt loops, and pocket area of the exact jeans/pants. Preserve the original waistband shape, button design, zipper fly structure, belt loop placement, front pocket shape, coin pocket if present, stitching, rivets if present, seams, fabric texture, denim wash or fabric finish, colour, logo patch or label if visible, and garment construction exactly. Do not change the button, pocket shape, belt loops, stitching, fabric finish, or colour. Use clean commercial lighting and a simple white or light neutral background. High-resolution apparel detail photography.",
    "commonMistakes": [
      "Button changes or disappears",
      "Zipper fly changes",
      "Belt loops disappear",
      "Pocket shape changes",
      "Coin pocket disappears",
      "Stitching changes",
      "Rivets are invented or removed",
      "Denim wash changes",
      "Fabric texture becomes fake",
      "Colour shifts",
      "Crop is too close or unclear"
    ],
    "fixPrompts": [
      {
        "issue": "If waistband changes",
        "fix": "Restore the original waistband height, shape, stitching, belt loops, button, and fly structure exactly."
      },
      {
        "issue": "If button changes",
        "fix": "Preserve the original button size, colour, shape, placement, and finish."
      },
      {
        "issue": "If zipper fly changes",
        "fix": "Keep the original zipper fly structure and seam placement consistent with the uploaded reference."
      },
      {
        "issue": "If belt loops disappear",
        "fix": "Restore the original belt loops exactly as shown."
      },
      {
        "issue": "If pockets change",
        "fix": "Preserve the pocket shape, size, placement, stitching, and coin pocket if present."
      },
      {
        "issue": "If rivets change",
        "fix": "Preserve rivets only if they exist in the original product. Do not invent extra hardware."
      },
      {
        "issue": "If denim wash changes",
        "fix": "Preserve the original denim wash, fade, colour, and fabric texture."
      },
      {
        "issue": "If crop is unclear",
        "fix": "Show the waistband and pocket area clearly with enough surrounding fabric for context."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-076",
    "title": "Amazon Fabric / Denim Wash Close-Up - Jeans / Pants",
    "categorySlug": "clothes",
    "subcategorySlug": "jeans-pants",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-2 minutes",
    "prompt": "Using the uploaded jeans or pants image as the only product reference, create a macro close-up Amazon secondary image focusing on the exact fabric texture, denim wash, weave, stitching, and finish of the jeans/pants. Preserve the original material appearance, weave, fabric colour, fade pattern, wash variation, distressing if present, stitching colour, seam detail, and fabric feel exactly. Do not smooth, stylize, redraw, recolor, or regenerate the fabric. Show a realistic close-up section of the garment such as the thigh area, pocket edge, seam, waistband, knee area, hem edge, or distressed area if present. Use clean commercial lighting. Crisp macro detail. High-resolution product photography.",
    "commonMistakes": [
      "Denim wash changes",
      "Fabric becomes too smooth",
      "Weave texture becomes fake",
      "Colour shifts",
      "Stitching changes",
      "Distressing is invented or removed",
      "AI invents new fabric material",
      "Macro crop looks unrealistic",
      "Fade pattern changes",
      "Fabric looks plastic"
    ],
    "fixPrompts": [
      {
        "issue": "If denim wash changes",
        "fix": "Preserve the exact original denim wash, fade pattern, colour tone, and texture."
      },
      {
        "issue": "If texture changes",
        "fix": "Keep the original fabric weave and material texture realistic. Do not smooth or replace the material."
      },
      {
        "issue": "If stitching changes",
        "fix": "Preserve the stitching colour, thread thickness, seam placement, and stitch pattern exactly."
      },
      {
        "issue": "If distressing changes",
        "fix": "Preserve distressing only if present in the uploaded reference. Do not add or remove rips, fades, or worn areas."
      },
      {
        "issue": "If colour changes",
        "fix": "Preserve the exact original fabric colour and wash tone."
      },
      {
        "issue": "If macro crop is unrealistic",
        "fix": "Show a natural, believable crop from the actual jeans/pants."
      },
      {
        "issue": "If AI invents new material",
        "fix": "Remove the invented material appearance and restore the original denim or fabric finish."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-077",
    "title": "Amazon Fit / Leg Shape Demonstration Image - Jeans / Pants",
    "categorySlug": "clothes",
    "subcategorySlug": "jeans-pants",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded jeans or pants image as the only product reference, create an Amazon secondary image showing the exact jeans/pants worn by a realistic model to demonstrate fit and leg shape. Preserve the garment exactly, including waistband, pockets, stitching, seams, fabric texture, denim wash or fabric finish, leg width, taper, rise, cuff, hemline, length, print, pattern, logo, labels if visible, and colours. Show the model standing straight in a clean studio or simple lifestyle setting. The full jeans/pants must be visible from waistband to hem. The image should clearly show the fit type, such as straight, slim, relaxed, wide-leg, tapered, jogger, trouser, or flared, without changing the original garment silhouette. Use natural human proportions, realistic drape, and commercial e-commerce lighting.",
    "commonMistakes": [
      "Leg shape changes",
      "Pants become too skinny or too baggy",
      "Length changes",
      "Waistband gets hidden",
      "Pockets change",
      "Denim wash changes",
      "Model pose hides fit",
      "Hemline changes",
      "Body proportions look unrealistic",
      "AI adds shoes or accessories that distract",
      "Full garment gets cropped"
    ],
    "fixPrompts": [
      {
        "issue": "If leg shape is wrong",
        "fix": "Preserve the exact original leg silhouette, width, taper, rise, and hemline."
      },
      {
        "issue": "If length changes",
        "fix": "Keep the exact original pant length and how the hem falls naturally on the model."
      },
      {
        "issue": "If waistband is hidden",
        "fix": "Use styling and pose that keeps the waistband, pockets, and upper pant structure visible."
      },
      {
        "issue": "If fit looks wrong",
        "fix": "Make the jeans/pants fit naturally without changing the garment's original silhouette or proportions."
      },
      {
        "issue": "If model pose hides the fit",
        "fix": "Use a simple standing pose with the full garment clearly visible."
      },
      {
        "issue": "If body proportions are unrealistic",
        "fix": "Use natural human proportions and realistic fashion e-commerce photography."
      },
      {
        "issue": "If product changes",
        "fix": "Keep the uploaded jeans/pants identical and only adjust the model pose or background."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-078",
    "title": "Amazon Size Guide Image - Jeans / Pants",
    "categorySlug": "clothes",
    "subcategorySlug": "jeans-pants",
    "bestAI": "ChatGPT Images + Canva for final text editing",
    "difficulty": "Hard",
    "timeRequired": "2-4 minutes",
    "prompt": "Using the uploaded jeans or pants image as the only product reference, create a clean Amazon secondary size guide image for the exact jeans/pants. Preserve the product exactly, including silhouette, waistband, belt loops, button, zipper fly, pockets, stitching, seams, fabric texture, denim wash or fabric finish, leg width, taper, hemline, colours, and proportions. Place the jeans/pants clearly on one side of the layout and add clean measurement guide lines for waist width, hip width, rise, thigh width, inseam length, outseam length, knee width if relevant, leg opening, and full pant length. Use a white or light neutral background with a clean size table area. Leave editable placeholder text for size values. Do not distort, stretch, shorten, lengthen, or reshape the garment. High-resolution e-commerce infographic style.",
    "commonMistakes": [
      "Pants stretch or distort",
      "Measurement lines are messy",
      "Text becomes unreadable",
      "AI invents wrong size values",
      "Pant length changes",
      "Waistband or pockets change",
      "Leg shape changes",
      "Denim wash changes",
      "Layout becomes cluttered",
      "Product becomes too small"
    ],
    "fixPrompts": [
      {
        "issue": "If the garment distorts",
        "fix": "Keep the jeans/pants proportions exactly unchanged. Do not stretch, compress, shorten, lengthen, or reshape the garment."
      },
      {
        "issue": "If measurement lines are messy",
        "fix": "Use clean, simple measurement lines pointing to waist, hip, rise, thigh, inseam, outseam, leg opening, and full length."
      },
      {
        "issue": "If text is unreadable",
        "fix": "Use clean placeholder text areas only. Final size values will be added manually."
      },
      {
        "issue": "If AI invents size values",
        "fix": "Remove all invented measurements and leave editable placeholders."
      },
      {
        "issue": "If pant length changes",
        "fix": "Preserve the exact original pant length and hemline."
      },
      {
        "issue": "If waistband or pockets change",
        "fix": "Keep the original waistband, pockets, stitching, and fly structure unchanged."
      },
      {
        "issue": "If product changes",
        "fix": "Keep the jeans/pants identical to the uploaded reference."
      },
      {
        "issue": "If layout is cluttered",
        "fix": "Simplify the layout and keep the size guide easy to read."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-079",
    "title": "Amazon Styling / Outfit Image - Jeans / Pants",
    "categorySlug": "clothes",
    "subcategorySlug": "jeans-pants",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded jeans or pants image as the only product reference, create an Amazon secondary lifestyle image showing the exact jeans/pants styled in a realistic outfit. Preserve the jeans/pants exactly, including colour, silhouette, waistband, pockets, stitching, fabric texture, denim wash or fabric finish, leg width, taper, hemline, length, logo, labels if visible, and proportions. Style the garment with simple neutral clothing items such as a plain T-shirt, shirt, hoodie, sweater, or minimal shoes, but do not cover the waistband, pocket area, or important garment details. The jeans/pants must remain the hero product and must be clearly visible from waist to hem. Use a clean casual, smart-casual, streetwear, or minimal studio setting with realistic commercial lighting. High-resolution fashion e-commerce photography.",
    "commonMistakes": [
      "Top clothing covers the waistband",
      "Pants change style",
      "Leg shape changes",
      "Denim wash changes",
      "Pockets change",
      "Colour shifts",
      "Too many accessories distract from product",
      "Model pose hides the garment",
      "Scene looks too editorial",
      "Full garment gets cropped"
    ],
    "fixPrompts": [
      {
        "issue": "If outfit covers the product",
        "fix": "Adjust styling so the waistband, pockets, leg shape, and hemline remain clearly visible."
      },
      {
        "issue": "If scene is too busy",
        "fix": "Simplify the outfit and background. Keep the jeans/pants as the main focus."
      },
      {
        "issue": "If product changes",
        "fix": "Keep the uploaded jeans/pants identical and change only the styling, model pose, or background."
      },
      {
        "issue": "If leg shape changes",
        "fix": "Preserve the exact original leg width, taper, silhouette, and length."
      },
      {
        "issue": "If denim wash changes",
        "fix": "Preserve the exact original wash, fade, fabric texture, and colour."
      },
      {
        "issue": "If pockets or waistband change",
        "fix": "Restore the original pocket shape, waistband, button, zipper fly, belt loops, and stitching."
      },
      {
        "issue": "If model pose hides the garment",
        "fix": "Use a simple standing pose with the full pants visible."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  },
  {
    "id": "WF-080",
    "title": "Amazon Folded / Packaging Presentation - Jeans / Pants",
    "categorySlug": "clothes",
    "subcategorySlug": "jeans-pants",
    "bestAI": "ChatGPT Images",
    "difficulty": "Medium",
    "timeRequired": "1-3 minutes",
    "prompt": "Using the uploaded jeans or pants image as the only product reference, create a clean Amazon secondary image showing the exact jeans/pants neatly folded with simple packaging or delivery presentation. Preserve the product exactly, including fabric colour, denim wash or fabric finish, texture, waistband if visible, button if visible, pockets if visible, belt loops if visible, stitching, seams, logo patch or label if visible, hem detail if visible, and visible garment construction. The folded jeans/pants must look realistic and not overly thick, stiff, or distorted. Show the folded garment beside or inside simple premium packaging such as a clean polybag, kraft box, tissue wrap, garment pouch, or folded retail presentation. Do not cover important product details. Do not invent fake brand logos or labels. Use a white or light neutral background with soft commercial lighting. High-resolution e-commerce photography.",
    "commonMistakes": [
      "Jeans/pants become too bulky when folded",
      "Denim wash changes",
      "Fabric colour shifts",
      "Fold looks unrealistic",
      "Packaging covers the product",
      "AI adds fake brand logos",
      "Product looks damaged or wrinkled",
      "Scene becomes cluttered",
      "Product identity is lost after folding",
      "Pockets or waistband disappear unnaturally"
    ],
    "fixPrompts": [
      {
        "issue": "If folded jeans/pants look too bulky",
        "fix": "Make the folded garment look realistic without exaggerated thickness or stiffness."
      },
      {
        "issue": "If packaging covers the product",
        "fix": "Reposition packaging so the jeans/pants remain clearly visible."
      },
      {
        "issue": "If denim wash changes",
        "fix": "Preserve the original wash, fade, fabric texture, and colour exactly."
      },
      {
        "issue": "If AI adds fake branding",
        "fix": "Remove all invented logos, labels, slogans, or brand marks from packaging."
      },
      {
        "issue": "If fold looks unrealistic",
        "fix": "Make the folded jeans/pants appear natural, structured, and suitable for delivery presentation."
      },
      {
        "issue": "If product looks damaged",
        "fix": "Keep the jeans/pants clean, new, premium, and e-commerce ready."
      },
      {
        "issue": "If visible details disappear",
        "fix": "Preserve visible waistband, pockets, stitching, labels, or hem details where naturally visible in the fold."
      },
      {
        "issue": "If layout is cluttered",
        "fix": "Use a clean minimal packaging presentation with the product as the hero."
      }
    ],
    "exampleNote": "",
    "compliance": [],
    "notes": ""
  }
];

const addedSubcategorySlugs = new Set(
  addedSubcategories.map((subcategory) => `${subcategory.categorySlug}/${subcategory.slug}`),
);

const addedWorkflowIds = new Set(addedWorkflows.map((workflow) => workflow.id));

export const categories: Category[] = baseCategories;

export const subcategories: Subcategory[] = [
  ...baseSubcategories.filter(
    (subcategory) =>
      !addedSubcategorySlugs.has(`${subcategory.categorySlug}/${subcategory.slug}`),
  ),
  ...addedSubcategories,
];

export const workflows: Workflow[] = [
  ...baseWorkflows.filter((workflow) => !addedWorkflowIds.has(workflow.id)),
  ...addedWorkflows,
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getSubcategoriesForCategory(categorySlug: string) {
  return subcategories.filter((subcategory) => subcategory.categorySlug === categorySlug);
}

export function getSubcategory(categorySlug: string, subcategorySlug: string) {
  return subcategories.find(
    (subcategory) =>
      subcategory.categorySlug === categorySlug &&
      subcategory.slug === subcategorySlug,
  );
}

export function getWorkflowsForSubcategory(
  categorySlug: string,
  subcategorySlug: string,
) {
  return workflows.filter(
    (workflow) =>
      workflow.categorySlug === categorySlug &&
      workflow.subcategorySlug === subcategorySlug,
  );
}

export function getWorkflow(id: string) {
  return workflows.find(
    (workflow) => workflow.id.toLowerCase() === id.toLowerCase(),
  );
}
