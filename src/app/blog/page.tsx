import { ArrowRight, Search, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "The Case for Distributed Monolithic Architecture for Early-Stage Startups",
    excerpt: "Why microservices might be overkill for your MVP, and how to build for scale without the complexity.",
    date: "March 24, 2024",
    author: "Niyaz Asghar",
    readTime: "8 min read",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    slug: "distributed-monolithic-mvp",
  },
  {
    title: "Optimizing Next.js for Sub-Second Load Times: A Technical Deep-Dive",
    excerpt: "Exploring Server Components, selective hydration, and edge caching for high-performance marketing sites.",
    date: "March 18, 2024",
    author: "Technical Team",
    readTime: "12 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    slug: "optimizing-nextjs-performance",
  },
  {
    title: "The Architecture of Multi-Tenant SaaS: Data Isolation Strategies",
    excerpt: "Comparing database-per-tenant vs. schema-per-tenant for scalable cloud-native software products.",
    date: "March 05, 2024",
    author: "Niyaz Asghar",
    readTime: "15 min read",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2671&auto=format&fit=crop",
    slug: "multi-tenant-data-isolation",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56">
      <section className="container-wide mb-32 lg:mb-56">
        <div className="max-w-4xl">
          <span className="eyebrow">Technical Insights</span>
          <h1 className="text-hero text-white mb-10 leading-[0.95]">
            Thought leadership <br />
            in software <br />
            <span className="text-brand-gray-700">engineering.</span>
          </h1>
          <p className="text-xl md:text-3xl text-brand-gray-400 font-light leading-relaxed text-balance">
            Deep-dives into modern web architecture, distributed systems, and the technical strategies behind high-growth software products.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-background-light py-32 lg:py-56 border-t border-brand-gray-200 relative z-10">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
             {blogPosts.map((post, i) => (
               <Link 
                 key={i} 
                 href={`/blog/${post.slug}`} 
                 className="group flex flex-col cursor-pointer"
               >
                  <div className="block overflow-hidden rounded-sm relative mb-8 aspect-[16/10]">
                     <img
                       src={post.image}
                       alt={post.title}
                       className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-[1.04] grayscale-[20%] group-hover:grayscale-0"
                     />
                     <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="flex flex-col flex-1">
                     <div className="flex items-center gap-4 mb-4">
                        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent">
                          {post.category}
                        </span>
                        <div className="w-1 h-1 bg-brand-gray-200 rounded-full" />
                        <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-300">
                           <Clock className="w-3 h-3" />
                           {post.readTime}
                        </div>
                     </div>
                     
                     <h2 className="text-2xl lg:text-3xl font-display font-bold text-brand-gray-900 mb-6 group-hover:text-accent transition-all duration-300 !leading-tight h-[3.6em] overflow-hidden">
                        {post.title}
                     </h2>
                     <p className="text-base text-brand-gray-500 font-light leading-relaxed mb-10 line-clamp-3">
                        {post.excerpt}
                     </p>
                     
                     <div className="mt-auto flex items-center justify-between pt-6 border-t border-brand-gray-100">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-brand-gray-100 flex items-center justify-center text-[10px] font-bold text-brand-gray-400">
                             NA
                           </div>
                           <div className="flex flex-col">
                              <span className="text-[10px] font-bold text-brand-gray-900 leading-none mb-1">{post.author}</span>
                              <span className="text-[9px] text-brand-gray-400 font-bold uppercase tracking-widest">{post.date}</span>
                           </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-brand-gray-300 group-hover:text-accent group-hover:translate-x-1.5 transition-all" />
                     </div>
                  </div>
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Subscription Positioning */}
      <section className="py-32 lg:py-48 bg-background-dark border-t border-white/5 text-center flex flex-col items-center">
         <div className="container-wide">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-10 mx-auto">
               Subscribe to our <br />
               technical briefings.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-xl mx-auto">
               <input 
                 type="email" 
                 placeholder="Your engineering email" 
                 className="flex-1 bg-white/5 border border-white/10 p-5 rounded-full text-white placeholder:text-brand-gray-700 focus:outline-none focus:border-accent transition-colors"
               />
               <button className="btn-premium py-5 px-10 group min-w-[180px]">
                  <span>Join Now</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
