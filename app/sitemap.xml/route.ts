// app/sitemap.xml/route.ts
const CANONICAL = "https://gregorymcarroll.com";

// Only include actual public pages (no /api/*, no placeholders).
const ROUTES = [
  "/", 
  "/about",
  "/advance-readers",
  "/advance-readers/success",
  "/contact",
  "/crime-novel",
  "/great-bookie-robbery",
  "/great-bookie-robbery/prologue",
  "/great-bookie-robbery/part-1",
  "/great-bookie-robbery/part-2",
  "/great-bookie-robbery/part-3",
  "/great-bookie-robbery/part-4",
  "/great-bookie-robbery/part-5",
  "/great-bookie-robbery/epilogue",
  "/order",
  "/order/arc",
  "/order/arc/success",
  "/order/preorder",
  "/order/preorder/success",
  "/reviews",
  "/reviews/success",
];

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map((path) => {
    return `
  <url>
    <loc>${CANONICAL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.7"}</priority>
  </url>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(xml, { headers: { "content-type": "application/xml" } });
}
