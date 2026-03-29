import { ArrowRight, Code, Layout, Server, Globe, Layers, Shield, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Applications",
    icon: Layout,
    description: "Complete platforms that combine authentication, databases, dashboards, and workflows. We focus on role-based access, complex logic, and seamless UX.",
    features: ["User Auth Systems", "Database-Driven Apps", "Dashboards & Workflows", "Business Logic"],
  },
  {
    title: "SaaS MVP Platforms",
    icon: Globe,
    description: "End-to-end product development for software startups. We help you launch faster with subscription management, multi-tenancy, and cloud architecture.",
    features: ["Subscription Payments", "Product Dashboards", "Admin Controls", "Cloud Deployment"],
  },
  {
    title: "Custom Development",
    icon: Code,
    description: "Tailored software solutions for unique business problems. From high-performance marketing sites to complex internal automation systems.",
    features: ["Workflow Automation", "API Integrations", "Legacy Rewrites", "System Audits"],
  },
  {
    title: "Backend Architecture",
    icon: Server,
    description: "Robust, secure, and scalable server-side systems using FastAPI or Spring Boot. We design architectures that power modern business growth.",
    features: ["REST APIs", "Backend Services", "Business Workflows", "Scalable Data Storage"],
  },
  {
    title: "Infrastructure & DevOps",
    icon: Layers,
    description: "Scalable hosting and production deployment strategies. We manage your cloud infrastructure so you can focus on your product.",
    features: ["Vercel/AWS Hosting", "Docker Containers", "CI/CD Pipelines", "System Monitoring"],
  },
  {
    title: "Role-Based Platforms",
    icon: Shield,
    description: "Applications where different users have different permissions. We build secure internal tools and client interaction portals.",
    features: ["Permission Logic", "Multiple Dashboards", "Workflow Segregation", "User Management"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56">
      {/* Header Section */}
      <section className="container-wide mb-32 lg:mb-56">
        <div className="max-w-4xl">
          <span className="eyebrow">Expertise Built for Scale</span>
          <h1 className="text-hero text-white mb-10 leading-[0.95]">
             Software <br />
             engineering for <br />
             <span className="text-brand-gray-700">modern businesses.</span>
          </h1>
          <p className="text-xl md:text-3xl text-brand-gray-400 font-light leading-relaxed text-balance">
            From high-performance marketing websites to complex SaaS platforms, we architect the core systems that power startups and growing companies.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background-surface py-32 lg:py-48 border-t border-white/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {services.map((service, idx) => (
              <div 
                key={service.title}
                className="group p-10 lg:p-14 bg-white/[0.02] border border-white/5 rounded-sm hover:bg-white/[0.05] transition-all duration-500 flex flex-col justify-between h-full"
              >
                 <div>
                    <div className="w-14 h-14 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-xl mb-10 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                       <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-6">
                      {service.title}
                    </h3>
                    <p className="text-brand-gray-500 leading-relaxed font-light mb-10">
                      {service.description}
                    </p>
                    
                    <ul className="flex flex-col gap-4 mb-12">
                       {service.features.map((feature) => (
                         <li key={feature} className="flex items-center gap-3 text-sm text-brand-gray-600 font-medium">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-40" />
                            {feature}
                         </li>
                       ))}
                    </ul>
                 </div>
                 
                 <Link href="/contact" className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white/40 group-hover:text-white transition-all">
                    <span className="hover-line">Start Project</span>
                    <ArrowRight className="w-4 h-4 text-accent transform group-hover:translate-x-1" />
                 </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services Section */}
      <section className="bg-background-dark py-32 lg:py-56 border-t border-white/5 relative z-10">
         <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
               <div className="lg:col-span-1">
                  <span className="eyebrow">Add-On Services</span>
                  <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-8 mb-10">
                     Technical <br />
                     Enhancements.
                  </h2>
                  <p className="text-lg text-brand-gray-500 font-light leading-relaxed">
                     Specialized technical integrations to supercharge your platform and automate your business operations.
                  </p>
               </div>
               
               <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
                  {[
                    { title: "Generative AI Integrations", items: ["AI Chatbots", "RAG Document Assistants", "LLM Implementation"] },
                    { title: "Workflow Automation", items: ["Custom Scripts", "API Pipelines", "Approval Workflows"] },
                    { title: "Third-Party APIs", items: ["Payment Gateways", "CRM Syncing", "Analytics Engines"] },
                    { title: "Client Portals", items: ["Document Sharing", "Invoice Management", "Secure Messaging"] }
                  ].map((group, i) => (
                    <div key={i} className="p-8 border border-white/5 bg-white/[0.01] rounded-sm">
                       <h4 className="text-xl font-bold text-white mb-6">{group.title}</h4>
                       <ul className="flex flex-col gap-4">
                          {group.items.map(item => (
                            <li key={item} className="text-sm text-brand-gray-500 flex items-center gap-3">
                               <div className="w-1 h-1 bg-accent rounded-full" />
                               {item}
                            </li>
                          ))}
                       </ul>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Call to Action Positioning */}
      <section className="py-32 lg:py-64 border-t border-white/5 overflow-hidden relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/[0.05] blur-[150px] pointer-events-none" />
         
         <div className="container-wide relative z-10 text-center flex flex-col items-center">
            <span className="eyebrow !mb-10">Scale with Confidence</span>
            <h2 className="text-section-title text-white mb-16 max-w-4xl !leading-tight">
               Build your technical foundation <br />
               with DevShuttle.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
               <Link href="/contact" className="btn-premium w-full sm:w-[280px]">
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-5 h-5" />
               </Link>
               <Link href="/packages" className="btn-outline w-full sm:w-[280px]">
                  <span>View Packages</span>
                  <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
