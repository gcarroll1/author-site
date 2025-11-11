// app/robots.txt/route.ts
export function GET() {
  return new Response(
`User-agent: *
Allow: /

# Keep crawlers out of server actions / API endpoints
Disallow: /api/

Sitemap: https://gregorymcarroll.com/sitemap.xml
`,
    { headers: { "content-type": "text/plain" } }
  );
}
