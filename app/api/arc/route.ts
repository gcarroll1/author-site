// app/api/arc/route.ts
// Some pages might post to /api/arc — delegate to /api/advance-readers
export { POST } from "@/app/api/advance-readers/route";
