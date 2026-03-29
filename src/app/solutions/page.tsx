import { ArrowRight, Code, Database, Layout, LineChart, Lock, Settings, Smartphone, Users, Zap, Calendar, Briefcase, BarChart, Workflow } from "lucide-react";
import Link from "next/link";

const solutionCategories = [
  {
    group: "Business & Marketing",
    solutions: [
      {
        title: "Business Websites",
        icon: Layout,
        description: "Professional websites designed for companies and startups to build authority and drive conversions.",
        features: ["Responsive Design", "SEO Optimized", "CMS Integration"]
      },
      {
        title: "Client Portals",
        icon: Users,
        description: "Secure, professional platforms for interacting with your clients and managing relationships.",
        features: ["Document Sharing", "Secure Messaging", "Invoice Management"]
      }
    ]
  },
  {
    group: "Internal Operations",
    solutions: [
      {
        title: "Admin Dashboards",
        icon: Settings,
        description: "Technical control panels used to manage complex business data, users, and day-to-day operations.",
        features: ["User Management", "Activity Monitoring", "Data Visualization"]
      },
      {
        title: "CRM & Inventory Systems",
        icon: Database,
        description: "Custom systems to manage sales pipelines, customer interactions, and stock workflows.",
        features: ["Lead Tracking", "Order Management", "Inventory Control"]
      },
      {
        title: "Internal Business Tools",
        icon: Briefcase,
        description: "Bespoke tools designed to automate internal processes and improve team efficiency.",
        features: ["Custom Workflows", "Internal Dashboards", "Operational Automation"]
      }
    ]
  },
  {
    group: "Startups & SaaS",
    solutions: [
      {
        title: "SaaS MVP Platforms",
        icon: Zap,
        description: "Early-stage software platforms designed to validate startup ideas and launch quickly.",
        features: ["Auth & Payments", "Product Dashboards", "Admin Controls"]
      },
      {
        title: "Full Web Applications",
        icon: Code,
        description: "Complete, scalable platforms combining authentication, databases, and complex business workflows.",
        features: ["Scalable Architecture", "Advanced Security", "Custom Logic"]
      },
      {
        title: "Role-Based Platforms",
        icon: Lock,
        description: "Applications where different users have specific permissions and tailored dashboard views.",
        features: ["Permission Logic", "User Segregation", "Multi-dashboard Views"]
      }
    ]
  },
  {
    group: "Specialized Systems",
    solutions: [
      {
        title: "Booking & Workflows",
        icon: Calendar,
        description: "Scheduling systems for service businesses with integrated notifications and payments.",
        features: ["Time Slot Management", "Calendar Sync", "Auto Notifications"]
      },
      {
        title: "Reporting & Analytics",
        icon: BarChart,
        description: "Systems designed to analyze business data and generate actionable strategic insights.",
        features: ["Data Visualization", "Exportable Reports", "Live Tracking"]
      },
      {
        title: "Workflow Automation",
        icon: Workflow,
        description: "Platforms that automate business processes using form inputs and automated pipelines.",
        features: ["Pipeline Automation", "Data Collection", "Third-party Sync"]
      }
    ]
  }
];

export default function SolutionsPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56">
      <section className="container-wide mb-32 lg:mb-56">
        <div className="max-w-4xl">
          <span className="eyebrow">Types of Solutions Built</span>
          <h1 className="text-hero text-white mb-10 leading-[0.95]">
            Engineering solutions <br />
            for every <br />
            <span className="text-brand-gray-700">business need.</span>
          </h1>
          <p className="text-xl md:text-3xl text-brand-gray-400 font-light leading-relaxed text-balance">
            From high-performance startup landing pages to complex internal business platforms, we design solutions that help you scale.
          </p>
        </div>
      </section>

      {/* Solutions Groups */}
      {solutionCategories.map((category, catIdx) => (
        <section key={catIdx} className={`py-32 lg:py-48 border-t border-white/5 ${catIdx % 2 === 0 ? 'bg-background-surface' : 'bg-background-dark'}`}>
          <div className="container-wide">
             <div className="mb-24 lg:mb-32">
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-accent/60 mb-6 block">
                   {category.group}
                </span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white">
                   Specialized Engineering.
                </h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {category.solutions.map((solution, i) => (
                  <div key={i} className="group p-10 lg:p-14 bg-white/[0.01] border border-white/5 rounded-sm hover:bg-white/[0.03] transition-all duration-500">
                     <div className="w-14 h-14 flex items-center justify-center bg-accent/5 border border-accent/10 rounded-xl mb-12 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <solution.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                     </div>
                     <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-6">
                        {solution.title}
                     </h3>
                     <p className="text-brand-gray-500 font-light leading-relaxed mb-12 h-24 line-clamp-3">
                        {solution.description}
                     </p>
                     <ul className="flex flex-col gap-4 mb-4 border-t border-white/5 pt-10">
                        {solution.features.map(f => (
                          <li key={f} className="flex items-center gap-4 text-xs font-bold text-brand-gray-600 uppercase tracking-widest">
                             <div className="w-1 h-1 bg-accent rounded-full" />
                             {f}
                          </li>
                        ))}
                     </ul>
                  </div>
                ))}
             </div>
          </div>
        </section>
      ))}

      {/* Pre-built Solution Entry Point */}
      <section className="py-32 lg:py-56 bg-background-dark border-t border-white/5 relative z-10 text-center">
         <div className="container-wide">
            <h2 className="text-section-title text-white mb-16 !leading-tight max-w-4xl mx-auto">
               Need a custom technical <br />
               roadmap for your business?
            </h2>
            
            <Link href="/contact" className="btn-premium py-6 px-16 group mx-auto w-fit">
               <span>Start Now</span>
               <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </Link>
         </div>
      </section>
    </div>
  );
}
