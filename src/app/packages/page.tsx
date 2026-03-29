import { ArrowRight, Check, Zap, Globe, Server, Laptop, Layers, Shield, Settings, RefreshCw, Calendar, CreditCard } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Business Website",
    price: "Custom Inquire",
    icon: Globe,
    description: "Designed for companies that need a professional, high-performance presence.",
    features: [
      "Responsive Design",
      "5–10 Pages Premium Layout",
      "SEO-Friendly Structure",
      "Contact forms",
      "CMS Integration",
      "Deployment Setup"
    ],
  },
  {
    name: "MVP Web Application",
    price: "Custom Inquire",
    icon: Zap,
    description: "Designed for startups and businesses that need a working product quickly.",
    features: [
      "Authentication System",
      "User Roles & Permissions",
      "Dashboard Interface",
      "Core CRUD Functionality",
      "Database Architecture",
      "Basic Admin Panel"
    ],
  },
  {
    name: "Business Dashboard",
    price: "Custom Inquire",
    icon: Settings,
    description: "Designed for internal business tools and operational control panels.",
    features: [
      "Analytics Dashboards",
      "Staff Login System",
      "Task/Order Management",
      "Reporting Features",
      "Data Import & Export",
      "Role-Based Permissions"
    ],
  },
  {
    name: "Booking / Workflow App",
    price: "Custom Inquire",
    icon: Calendar,
    description: "Designed for service businesses that require scheduling systems.",
    features: [
      "Booking Interface",
      "Time Slot Management",
      "Customer Records",
      "Auto Notifications",
      "Payment Integration",
      "Admin Management Panel"
    ],
  },
  {
    name: "SaaS MVP Platform",
    price: "Custom Inquire",
    icon: CreditCard,
    isPopular: true,
    description: "Designed for founders building subscription-based software products.",
    features: [
      "Landing Page",
      "User Authentication",
      "Subscription Payments",
      "Core Product Workflow",
      "Advanced Dashboard",
      "Cloud Deployment"
    ],
  },
  {
    name: "App Modernization",
    price: "Custom Inquire",
    icon: RefreshCw,
    description: "Designed for businesses with legacy systems that need technical upgrades.",
    features: [
      "System Architecture Audit",
      "Modernization Strategy",
      "UI Improvements",
      "Backend Refactoring",
      "Database Optimization",
      "Cloud Migration"
    ],
  },
];

export default function PackagesPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56">
      <section className="container-wide mb-32 lg:mb-56 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="eyebrow">Service Packages</span>
          <h1 className="text-hero text-white mb-10 leading-[0.95] text-balance">
            Technical packages <br />
            built for growth.
          </h1>
          <p className="text-xl md:text-3xl text-brand-gray-400 font-light leading-relaxed text-balance mx-auto">
            Standardized technical delivery for every stage of your business. From early-stage startup websites to full-scale SaaS platforms.
          </p>
        </div>
      </section>

      {/* Package Grid */}
      <section className="bg-background-surface py-32 lg:py-56 border-t border-white/5 relative z-10 overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
             {packages.map((pkg, i) => (
                <div key={i} className={`group relative p-12 lg:p-14 bg-white/[0.02] border border-white/5 rounded-sm flex flex-col justify-between hover:bg-white/[0.05] transition-all duration-700 ${pkg.isPopular ? '!bg-white/[0.04] !border-accent/40 lg:scale-105 z-20' : ''}`}>
                  {pkg.isPopular && (
                    <div className="absolute top-0 right-0 py-2 px-6 bg-accent rounded-bl-sm font-bold text-[10px] uppercase tracking-widest">
                       Recommended
                    </div>
                  )}
                  
                  <div>
                    <div className="w-14 h-14 flex items-center justify-center bg-accent/5 border border-accent/10 rounded-xl mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-700">
                       <pkg.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6 leading-tight">
                       {pkg.name}
                    </h2>
                    <p className="text-lg text-brand-gray-500 font-light mb-12 h-20 line-clamp-3">
                       {pkg.description}
                    </p>
                    <ul className="flex flex-col gap-5 mb-16 border-t border-white/5 pt-10">
                       {pkg.features.map(f => (
                         <li key={f} className="flex items-center gap-4 text-xs font-bold text-brand-gray-600 uppercase tracking-widest">
                            <Check className="w-4 h-4 text-accent opacity-60" />
                            {f}
                         </li>
                       ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-8">
                     <div className="flex items-baseline gap-2">
                        <span className="text-accent text-3xl font-display font-bold">{pkg.price}</span>
                     </div>
                     <Link href="/contact" className="btn-premium w-full group">
                        <span>Get Started</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                     </Link>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Engagement & Process */}
      <section className="py-32 lg:py-64 bg-background-dark border-t border-white/5 relative z-10 overflow-hidden">
         <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
               <div>
                  <span className="eyebrow">Engagement Model</span>
                  <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mt-10 mb-12">
                     How we <br />
                     work together.
                  </h2>
                  <p className="text-xl text-brand-gray-500 font-light leading-relaxed mb-16">
                     Projects are typically delivered through fixed-scope development or milestone-based delivery with optional maintenance contracts.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <div className="p-8 border border-white/5 bg-white/[0.01]">
                        <h4 className="text-lg font-bold text-white mb-4">Fixed-Scope</h4>
                        <p className="text-sm text-brand-gray-600 leading-relaxed font-light">
                           Clearly defined scope with transparent delivery and predictable timelines.
                        </p>
                     </div>
                     <div className="p-8 border border-white/5 bg-white/[0.01]">
                        <h4 className="text-lg font-bold text-white mb-4">Milestone-Based</h4>
                        <p className="text-sm text-brand-gray-600 leading-relaxed font-light">
                           Payments and deliverables tied to specific project milestones and technical goals.
                        </p>
                     </div>
                  </div>
               </div>
               
               <div className="bg-white/[0.02] border border-white/5 p-12 lg:p-20 rounded-sm">
                  <h3 className="text-3xl font-display font-bold text-white mb-10">Custom Solutions</h3>
                  <p className="text-lg text-brand-gray-500 font-light leading-relaxed mb-12">
                     For enterprise-level applications, specialized engineering, and large-scale migrations, we provide custom technical roadmaps and dedicated team models.
                  </p>
                  <ul className="flex flex-col gap-6 mb-16">
                     {["Third-Party API Integrations", "Analytics Dashboards", "Maintenance & Support Contracts", "Technical Audits"].map(item => (
                       <li key={item} className="flex items-center gap-4 text-sm text-white font-medium uppercase tracking-widest">
                          <Check className="w-5 h-5 text-accent" />
                          {item}
                       </li>
                     ))}
                  </ul>
                  <Link href="/contact" className="btn-premium w-full text-center">
                     <span>Request Custom Quote</span>
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
