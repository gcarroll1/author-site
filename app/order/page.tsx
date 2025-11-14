import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Link from "next/link";
export const metadata = { title: "Order | 11 Minutes", description: "Pre-order, ARC registration, and leave a review." };
export default function Page() {
  const crumbs = [{ name: "Home", url: "https://gregorymcarroll.com/" },{ name: "Order", url: "https://gregorymcarroll.com/order" }];
  return (<>
    <BreadcrumbJsonLd items={crumbs} />
    <Breadcrumbs items={[{name:"Home", href:"/"},{name:"Order"}]} />
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-extrabold text-orange-500 mb-6">Order 11 Minutes</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/order/preorder" className="card"><div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl h-full"><h3 className="font-semibold text-lg mb-1">Pre-Order</h3><p className="text-sm text-neutral-300">Buy via Amazon (AU).</p></div></Link>
        <Link href="https://storyoriginapp.com/reviewcopies/77322a26-c0d0-11f0-a0ff-f3fa4b0f0355" className="card"><div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl h-full"><h3 className="font-semibold text-lg mb-1">Advance Reader (ARC)</h3><p className="text-sm text-neutral-300">Register for an advance copy.</p></div></Link>
        <Link href="/reviews" className="card"><div className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl h-full"><h3 className="font-semibold text-lg mb-1">Write a Review</h3><p className="text-sm text-neutral-300">Submit your review.</p></div></Link>
      </div>
    </article>
  </>);
}