import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "EcoScale Analytics",
    category: "SaaS Platform",
    year: "2023",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    description: "Modern analytics dashboard for sustainable energy metrics and carbon tracking.",
    href: "/case-studies/ecoscale",
  },
  {
    title: "SwiftBase CRM",
    category: "Web Application",
    year: "2024",
    image: "/swiftbase_crm.png",
    description: "High-performance operational sales platform for series-A funded startups.",
    href: "/case-studies/swiftbase",
  },
  {
    title: "NovaHealth Portal",
    category: "Marketplace Software",
    year: "2023",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2340&auto=format&fit=crop",
    description: "Multi-tenant patient management and appointment software for large clinics.",
    href: "/case-studies/novahealth",
  },
  {
    title: "Lumina Creative",
    category: "Marketing Website",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2340&auto=format&fit=crop",
    description: "Immersive digital experience showcasing high-end architectural services.",
    href: "/case-studies/lumina",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56">
      <section className="container-wide mb-32 lg:mb-56">
        <div className="max-w-4xl">
          <span className="eyebrow">Case Studies</span>
          <h1 className="text-hero text-white mb-10 leading-[0.95]">
            Technical execution <br />
            for market-leading <br />
            <span className="text-brand-gray-700">software products.</span>
          </h1>
          <p className="text-xl md:text-3xl text-brand-gray-400 font-light leading-relaxed text-balance">
            We deliver the code that powers high-growth companies. Explore our latest launches across SaaS, Fintech, and Marketplace industries.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-background-light py-32 lg:py-56 border-t border-brand-gray-200 relative z-10">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-16">
             {caseStudies.map((caseStudy, i) => (
               <div key={i} className="group cursor-pointer flex flex-col">
                  <Link href={caseStudy.href} className="block overflow-hidden rounded-sm relative mb-10 aspect-[16/10]">
                     <img
                       src={caseStudy.image}
                       alt={caseStudy.title}
                       className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-[1.04] grayscale-[20%] group-hover:grayscale-0"
                     />
                     <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                  
                  <div className="flex justify-between items-start">
                     <div className="max-w-xl">
                        <div className="flex items-center gap-4 mb-4">
                           <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent">
                             {caseStudy.category}
                           </span>
                           <div className="w-1 h-1 bg-brand-gray-200 rounded-full" />
                           <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-300">
                             {caseStudy.year}
                           </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-gray-900 mb-6 group-hover:text-accent transition-all duration-300">
                           {caseStudy.title}
                        </h2>
                        <p className="text-xl text-brand-gray-500 font-light leading-relaxed">
                           {caseStudy.description}
                        </p>
                     </div>
                     
                     <div className="w-14 h-14 flex items-center justify-center border border-brand-gray-200 rounded-full group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500 shadow-sm">
                        <ArrowUpRight className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Trust Positioning Section */}
      <section className="py-32 lg:py-64 bg-background-dark border-t border-white/5 relative z-10 text-center flex flex-col items-center">
         <div className="container-wide">
            <h2 className="text-section-title text-white mb-16 max-w-4xl mx-auto !leading-tight">
               Want to see more technical <br />
               architecture details?
            </h2>
            
            <Link href="/contact" className="btn-premium py-6 px-16 group mx-auto w-fit">
               <span>Request Full Portfolio</span>
               <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </Link>
         </div>
      </section>
    </div>
  );
}
