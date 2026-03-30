import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-dark px-6">
      <div className="text-center max-w-xl">
        <h1 className="mb-6 text-9xl font-display font-black text-white/5 tracking-tighter">404</h1>
        <h2 className="mb-4 text-3xl font-display font-bold text-white uppercase tracking-widest">Page not found</h2>
        <p className="mb-10 text-xl text-brand-gray-400 font-light leading-relaxed">
          The project you're looking for doesn't exist yet, or the route has been re-architected.
        </p>
        <Link href="/" className="btn-premium py-4 px-10 group mx-auto w-fit">
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
          <span>Return to Headquarters</span>
        </Link>
      </div>
    </div>
  );
}
