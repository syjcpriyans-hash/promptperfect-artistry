import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://listingsready.com";
const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const workflowSourcePath = join(projectRoot, "src", "data", "all-workflows.ts");
const sitemapPath = join(projectRoot, "public", "sitemap.xml");

const staticPaths = [
  "/",
  "/categories",
  "/workflows",
  "/guides",
  "/guides/how-to-stop-ai-changing-product-colours-logos-details",
  "/case-studies",
  "/about",
  "/faq",
  "/methodology",
  "/privacy",
  "/terms",
  "/case-studies/tshirt-amazon-main-image",
  "/case-studies/jeans-ai-lifestyle-model",
  "/case-studies/kurti-embroidery-detail-ai",
  "/case-studies/shirt-smart-casual-ai-lifestyle",
  "/case-studies/dress-ai-flat-lay",
];

function workflowSlug(title) {
  return title
    .replace(/^Amazon\s+/i, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const urls = new Set(staticPaths);
const source = readFileSync(workflowSourcePath, "utf8");

const workflowPattern =
  /"id":\s*"([^"]+)"[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"categorySlug":\s*"([^"]+)"[\s\S]*?"subcategorySlug":\s*"([^"]+)"/g;

for (const match of source.matchAll(workflowPattern)) {
  const [, , title, categorySlug, subcategorySlug] = match;

  // Size-guide workflows are deliberately hidden from the public website.
  if (/size\s*guide/i.test(title)) continue;

  urls.add(`/categories/${categorySlug}`);
  urls.add(`/categories/${categorySlug}/${subcategorySlug}`);
  urls.add(`/workflows/${workflowSlug(title)}`);
}

const sortedUrls = [...urls].sort((a, b) => {
  if (a === "/") return -1;
  if (b === "/") return 1;
  return a.localeCompare(b);
});

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sortedUrls.map(
    (path) =>
      `  <url><loc>${escapeXml(`${SITE_URL}${path === "/" ? "/" : path}`)}</loc></url>`,
  ),
  "</urlset>",
  "",
].join("\n");

mkdirSync(dirname(sitemapPath), { recursive: true });
writeFileSync(sitemapPath, xml, "utf8");

console.log(`Generated sitemap with ${sortedUrls.length} public URLs.`);
