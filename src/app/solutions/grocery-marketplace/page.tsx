import { ArrowRight, ShoppingCart, Truck, Search, CreditCard, ShieldCheck, Zap, Server, Layout } from "lucide-react";
import Link from "next/link";

const keyFeatures = [
  {
    title: "Vendor Dashboard",
    icon: Layout,
    description: "Empower suppliers with a robust portal for inventory management, order processing, and performance analytics.",
  },
  {
    title: "Live Stock Manager",
    icon: Search,
    description: "Automatic stock updates and low-inventory alerts across multi-vendor categories to ensure customer reliability.",
  },
  {
    title: "Delivery Logic",
    icon: Truck,
    description: "Intelligent slot management, zonal delivery control, and driver tracking for large-scale grocery logistics.",
  },
  {
    title: "Secure Checkouts",
    icon: CreditCard,
    description: "PCI-compliant payment flow with support for recurring orders and subscription-based delivery models.",
  },
];

export default function GroceryMarketplacePage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56">
      <section className="container-wide mb-32 lg:mb-56">
        <div className="max-w-4xl">
          <span className="eyebrow !text-accent/60 flex items-center gap-3">
             <ShoppingCart className="w-4 h-4" /> 
             Prebuilt Solution
          </span>
          <h1 className="text-hero text-white mb-10 leading-[0.95]">
            Multi-Vendor <br />
            Grocery Platform.
          </h1>
          <p className="text-xl md:text-3xl text-brand-gray-400 font-light leading-relaxed text-balance">
            A comprehensive marketplace solution for scalable grocery and neighborhood retail delivery networks. Built for performance and reliability.
          </p>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="bg-background-light py-32 lg:py-48 relative z-10 overflow-hidden">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-24 lg:mb-32 gap-16">
             <div className="max-w-xl">
                <h2 className="text-section-title text-brand-gray-900 leading-none mb-10">
                   Scalable commerce foundations.
                </h2>
                <p className="text-lg text-brand-gray-500 font-light leading-relaxed">
                   Launch your grocery marketplace with a technical architecture that handles thousands of vendors and SKUs without slowing down. Full SEO optimization and mobile-first design.
                </p>
             </div>
             
             <div className="lg:w-1/3 flex flex-col gap-8 pt-12 border-t border-brand-gray-200">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Feature Depth</span>
                <ul className="grid grid-cols-1 gap-4">
                   {["Multi-Store Support", "Inventory Sync", "Vendor Settlement App", "Slot Management System", "Taxation Logic", "Search Aggregator"].map(t => (
                      <li key={t} className="text-sm font-bold text-brand-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {t}
                      </li>
                   ))}
                </ul>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
             {keyFeatures.map((f, i) => (
               <div key={i} className="group p-10 lg:p-14 bg-white border border-brand-gray-100 rounded-sm hover:border-accent transition-all duration-700">
                  <div className="w-14 h-14 flex items-center justify-center bg-accent/5 border border-accent/10 rounded-xl mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-700">
                     <f.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-brand-gray-900 mb-6 group-hover:text-accent transition-colors">
                     {f.title}
                  </h3>
                  <p className="text-lg text-brand-gray-500 font-light leading-relaxed group-hover:text-brand-gray-600 transition-colors">
                     {f.description}
                  </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Technical Positioning Section */}
      <section className="py-32 lg:py-64 bg-background-dark border-t border-white/5 relative z-10 overflow-hidden text-center">
         <div className="container-wide flex flex-col items-center">
            <h2 className="text-section-title text-white mb-16 max-w-4xl !leading-tight">
               Build your store network <br />
               with <span className="text-accent underline underline-offset-8">Precision</span>.
            </h2>
            
            <p className="text-xl text-brand-gray-500 font-light max-w-2xl mb-24 leading-relaxed">
               Own your technical platform. This solution comes with a modern tech-stack layout, full customization access, and a deployment roadmap.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
               <Link href="/contact" className="btn-premium w-full sm:w-[320px] py-6 text-lg group">
                  <span>Inquire Pricing</span>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
               </Link>
               
               <Link href="/solutions/prebuilt" className="btn-outline w-full sm:w-[320px] py-6 text-lg group">
                  <span className="hover-line">View All Solutions</span>
                  <ArrowRight className="w-6 h-6" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
