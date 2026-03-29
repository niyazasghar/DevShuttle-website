import { ArrowRight, Utensils, Smartphone, MapPin, Search, CreditCard, ShieldCheck, Zap, Server } from "lucide-react";
import Link from "next/link";

const keyFeatures = [
  {
    title: "Customer App",
    icon: Smartphone,
    description: "Intuitive, high-performance mobile application with real-time restaurant tracking, menu discovery, and quick-pay integration.",
  },
  {
    title: "Driver Dashboard",
    icon: MapPin,
    description: "Built-in GPS navigation, real-time order notifications, and route optimization for fast, efficient delivery management.",
  },
  {
    title: "Admin Control",
    icon: ShieldCheck,
    description: "Centralized dashboard for overseeing orders, managing restaurant inventory, and controlling driver assignment logic.",
  },
  {
    title: "Secure Payments",
    icon: CreditCard,
    description: "Integrated with Stripe and Razorpay for seamless, secure transactions and automated vendor settlement systems.",
  },
];

export default function FoodDeliveryPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56">
      <section className="container-wide mb-32 lg:mb-56">
        <div className="max-w-4xl">
          <span className="eyebrow !text-accent/60 flex items-center gap-3">
             <Utensils className="w-4 h-4" /> 
             Prebuilt Solution
          </span>
          <h1 className="text-hero text-white mb-10 leading-[0.95]">
            Food Delivery <br />
            Business System.
          </h1>
          <p className="text-xl md:text-3xl text-brand-gray-400 font-light leading-relaxed text-balance">
            A battle-tested technical foundation for restaurant aggregators and delivery startups. Built on Next.js and Node.js for ultimate speed and scalability.
          </p>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="bg-background-light py-32 lg:py-48 relative z-10 overflow-hidden">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-24 lg:mb-32 gap-16">
             <div className="max-w-xl">
                <h2 className="text-section-title text-brand-gray-900 leading-none mb-10">
                   Everything you need to launch.
                </h2>
                <p className="text-lg text-brand-gray-500 font-light leading-relaxed">
                   Launch your food delivery platform with a software suite that's already been tested in high-load scenarios. Fully customizable code, ready to be branded and deployed.
                </p>
             </div>
             
             <div className="lg:w-1/3 flex flex-col gap-8 pt-12 border-t border-brand-gray-200">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Tech Highlights</span>
                <ul className="grid grid-cols-2 gap-x-12 gap-y-6">
                   {["Real-time Maps", "Push Notifications", "Vendor Payouts", "Order Queues", "Analytics API", "Auth System"].map(t => (
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

      {/* Trust Positioning Section */}
      <section className="py-32 lg:py-64 bg-background-dark border-t border-white/5 relative z-10 overflow-hidden text-center">
         <div className="container-wide flex flex-col items-center">
            <h2 className="text-section-title text-white mb-16 max-w-4xl !leading-tight">
               Don't build from scratch. <br />
               Build for <span className="text-accent underline underline-offset-8">Scale</span>.
            </h2>
            
            <p className="text-xl text-brand-gray-500 font-light max-w-2xl mb-24 leading-relaxed">
               All our prebuilt solutions come with documentation, source code access, and a deployment strategy guided by our senior engineering team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
               <Link href="/contact" className="btn-premium w-full sm:w-[320px] py-6 text-lg group">
                  <span>Inquire Pricing</span>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
               </Link>
               
               <Link href="/solutions/prebuilt" className="btn-outline w-full sm:w-[320px] py-6 text-lg group">
                  <span className="hover-line">Other Solutions</span>
                  <ArrowRight className="w-6 h-6" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
