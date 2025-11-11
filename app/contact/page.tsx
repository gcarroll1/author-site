export const metadata = { title: "Contact | 11 Minutes", description: "Get in touch." };
export default function Page() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-orange-500 mb-4">Contact</h1>
      <p>Email: <a className="underline" href="mailto:gregory@gregorymcarroll.com">gregory@gregorymcarroll.com</a></p>
    </article>
  );
}