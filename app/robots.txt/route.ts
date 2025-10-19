export function GET(){return new Response(`User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
`,{headers:{'content-type':'text/plain'}});}