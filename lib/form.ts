// lib/form.ts
export function getTxt(form: FormData, key: string, fallback: string = ""): string {
  const v = form.get(key);
  return (typeof v === "string" ? v : fallback).toString().trim();
}

/** Return first non-empty among aliases */
export function first(form: FormData, keys: string[], fallback: string = ""): string {
  for (const k of keys) {
    const v = getTxt(form, k, "");
    if (v) return v;
  }
  return fallback;
}

/** Redirect back to Referer or to fallback */
export function redirectBackUrl(req: Request, fallbackPath: string): URL {
  const ref = req.headers.get("referer");
  try {
    if (ref) return new URL(ref);
  } catch {}
  return new URL(fallbackPath, req.url);
}
