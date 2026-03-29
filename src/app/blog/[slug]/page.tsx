import { ArrowLeft, Clock, Calendar, User, Share2, Twitter, Linkedin, Link as LinkIcon, Terminal } from "lucide-react";
import Link from "next/link";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you'd fetch data based on params.slug
  const post = {
    title: "The Case for Distributed Monolithic Architecture for Early-Stage Startups",
    category: "Architecture",
    date: "March 24, 2024",
    author: "Niyaz Asghar",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
  };

  return (
    <article className="bg-background-dark min-h-screen pt-40 lg:pt-56 pb-32">
      {/* Article Header */}
      <header className="container-wide mb-24 lg:mb-32">
        <div className="max-w-5xl mx-auto">
           <Link href="/blog" className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.3em] text-accent/60 hover:text-accent transition-colors mb-16 w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
           </Link>
           
           <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent">
                {post.category}
              </span>
              <div className="w-1 h-1 bg-brand-gray-700 rounded-full" />
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-500">
                 <Clock className="w-3.5 h-3.5" />
                 {post.readTime}
              </div>
           </div>

           <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-12 leading-[1.05] tracking-tighter">
              {post.title}
           </h1>
           
           <div className="flex flex-wrap items-center justify-between gap-10 py-10 border-y border-white/5">
              <div className="flex items-center gap-5">
                 <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-brand-gray-500">
                   NA
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-white leading-none">{post.author}</span>
                    <span className="text-[10px] text-brand-gray-600 font-bold uppercase tracking-widest">{post.date}</span>
                 </div>
              </div>
              
              <div className="flex items-center gap-6 text-brand-gray-500">
                 <Share2 className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
                 <Twitter className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
                 <Linkedin className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
                 <LinkIcon className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
              </div>
           </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container-wide mb-24 lg:mb-32">
         <div className="aspect-[21/9] w-full bg-white/5 rounded-sm overflow-hidden border border-white/10 grayscale-[10%] group">
            <img 
              src={post.image} 
              className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
              alt="Article Cover"
            />
         </div>
      </div>

      {/* Content Body */}
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
           <div className="prose prose-invert prose-lg max-w-none text-brand-gray-400 font-light leading-relaxed mb-32">
              <p className="text-xl md:text-2xl text-white font-medium mb-12 leading-relaxed font-display">
                In the modern landscape of high-growth software, the debate between monoliths and microservices often misses a crucial middle ground: the distributed monolith.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-16 mb-8 uppercase tracking-widest text-[14px]">The Problem with Early-Stage Microservices</h2>
              <p>
                As an engineering-led studio, we often see startups jumping too early into complex microservice architectures. While microservices offer undeniable benefits for large-scale operations, they introduce a significant "distributed systems tax" that can drown a small team in operational overhead.
              </p>
              
              <blockquote className="border-l-4 border-accent pl-8 my-16 py-4 italic text-2xl text-white font-display font-light">
                "Premature optimization in architecture is just as dangerous as premature optimization in code. Build for clarity first."
              </blockquote>
              
              <h2 className="text-2xl font-bold text-white mt-16 mb-8 uppercase tracking-widest text-[14px]">The Distributed Monolith Strategy</h2>
              <p>
                A distributed monolith (or a modular monolith) allows you to maintain a single repository and deployment pipeline while strictly enforcing domain boundaries. This ensures that when you *are* ready to split into services, the technical debt is already managed.
              </p>
              
              <div className="my-16 p-8 bg-white/5 border border-white/5 rounded-xl font-mono text-sm group">
                 <div className="flex items-center gap-3 mb-6 text-accent">
                    <Terminal className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">Architectural Pattern</span>
                 </div>
                 <pre className="text-brand-gray-500 overflow-x-auto">
{`// Modular Domain Boundary Example
import { OrderService } from './domains/orders';
import { PaymentService } from './domains/payments';

// These services are technically in the same codebase
// but communicate via strict internal interfaces 
// that can be swapped for RPC/HTTP later.
`}
                 </pre>
              </div>

              <h2 className="text-2xl font-bold text-white mt-16 mb-8 uppercase tracking-widest text-[14px]">Conclusion</h2>
              <p>
                For MVPs, speed of delivery and ease of debugging are paramount. A well-architected modular monolith provides the best of both worlds: productivity today and a path to scale tomorrow.
              </p>
           </div>
           
           {/* Author Sign-off */}
           <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
              <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent/20 flex items-center justify-center text-xl font-bold text-accent">
                 NA
              </div>
              <div className="flex flex-col gap-3 max-w-lg">
                 <h4 className="text-xl font-bold text-white">Written by Niyaz Asghar</h4>
                 <p className="text-sm text-brand-gray-500 leading-relaxed font-light">
                    Senior Software Architect and Founder at DevShuttle. Previously led engineering teams for multiple high-growth startups and built distributed systems to scale.
                 </p>
                 <Link href="/about" className="text-xs font-bold text-accent uppercase tracking-[0.2em] hover:text-white transition-colors mt-2">
                    Learn More About Us
                 </Link>
              </div>
           </footer>
        </div>
      </div>
    </article>
  );
}
