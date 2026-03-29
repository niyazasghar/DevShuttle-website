import { ArrowRight, ShoppingCart, Utensils, Pill, Truck, Layout, Layers, Zap } from "lucide-react";
import Link from "next/link";

const prebuiltSolutions = [
  {
    title: "Food Delivery System",
    description: "Complete end-to-end food delivery platform for restaurants and aggregator startups. Includes driver apps and admin dashboard.",
    icon: Utensils,
    href: "/solutions/food-delivery",
    category: "Marketplace",
    features: ["Real-time Tracking", "Order Management", "Driver Management"],
  },
  {
    title: "Multi-Vendor Grocery",
    description: "Scalable grocery marketplace software with inventory management, vendor portals, and customer-facing apps.",
    icon: ShoppingCart,
    href: "/solutions/grocery-marketplace",
    category: "E-commerce",
    features: ["Stock Alerts", "Vendor Settlement", "Delivery Slots"],
  },
  {
    title: "Pharmacy Marketplace",
    description: "Secure and HIPAA-compliant pharmacy software with prescription uploads, medicine searches, and chemist dashboards.",
    icon: Pill,
    href: "/solutions/pharmacy-software",
    category: "Healthcare",
    features: ["KYC Management", "Digital Prescription", "Secure Messaging"],
  },
];

export default function PrebuiltSolutionsPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56">
      <section className="container-wide mb-32 lg:mb-56">
        <div className="max-w-4xl">
          <span className="eyebrow">Prebuilt Foundations</span>
          <h1 className="text-hero text-white mb-10 leading-[0.95]">
            Accelerated <br />
            software solutions <br />
            <span className="text-brand-gray-700">for market entry.</span>
          </h1>
          <p className="text-xl md:text-3xl text-brand-gray-400 font-light leading-relaxed text-balance">
            Don't build from scratch. Start with a battle-tested technical foundation and customize it to fit your unique business model. Launch in weeks, not months.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-background-surface py-32 lg:py-56 border-t border-white/5 relative z-10">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
             {prebuiltSolutions.map((solution, idx) => (
               <div key={idx} className="group p-12 lg:p-14 bg-white/[0.02] border border-white/5 rounded-sm hover:bg-white/[0.05] transition-all duration-700 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-xl mb-12 group-hover:bg-accent group-hover:border-accent transition-all duration-700">
                       <solution.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-600 mb-6 block">
                       {solution.category}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-8 leading-tight group-hover:text-accent transition-colors">
                       {solution.title}
                    </h2>
                    <p className="text-lg text-brand-gray-500 leading-relaxed font-light mb-12">
                       {solution.description}
                    </p>
                    <ul className="flex flex-col gap-4 mb-16 border-t border-white/5 pt-10">
                       {solution.features.map(f => (
                         <li key={f} className="flex items-center gap-3 text-sm text-brand-gray-600 font-medium">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                            {f}
                         </li>
                       ))}
                    </ul>
                  </div>
                  
                  <Link href={solution.href} className="btn-premium py-4 w-full group">
                     <span>View Solution Details</span>
                     <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Trust & Modernity Badge */}
      <section className="py-32 lg:py-48 bg-background-dark border-t border-white/5 relative z-10 overflow-hidden">
         <div className="container-wide flex flex-col items-center text-center">
            <span className="eyebrow !mb-10 text-brand-gray-700">Technical Standards</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 items-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
               {[Truck, Layout, Layers, Zap].map((Icon, i) => (
                 <div key={i} className="flex flex-col items-center gap-3">
                    <Icon className="w-10 h-10 text-white" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Standardized</span>
                 </div>
               ))}
            </div>
            
            <p className="mt-24 text-brand-gray-500 font-light max-w-2xl leading-relaxed">
               All our prebuilt solutions are built on a modern stack (Next.js/Node.js) ensuring you have full control and scalability from day one.
            </p>
         </div>
      </section>
    </div>
  );
}
