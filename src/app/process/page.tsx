import { ArrowRight, Search, Clipboard, Code, ShieldCheck, Zap, Server, Globe, Layers } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Requirement Discussion",
    icon: Search,
    description: "In-depth consultation to understand your business goals, target audience, and technical vision. We align on the core problems we are solving.",
    deliverables: ["Project Vision", "Success Metrics", "Technical Goals"],
  },
  {
    number: "02",
    title: "Project Scope Definition",
    icon: Clipboard,
    description: "Detailed mapping of features, user stories, and functional requirements. We define the 'what' and 'how' of the entire build.",
    deliverables: ["Functional Specs", "User Stories", "Project Timeline"],
  },
  {
    number: "03",
    title: "Architecture Planning",
    icon: Layers,
    description: "Designing the technical foundation. We select the right stack and architect the database, API structure, and infrastructure for scale.",
    deliverables: ["Database Schema", "API Documentation", "Cloud Infrastructure Plan"],
  },
  {
    number: "04",
    title: "Development & Testing",
    icon: Code,
    description: "Iterative engineering cycles with integrated testing. We build the features, ensuring every line of code is performance-optimized and secure.",
    deliverables: ["Source Code Access", "Unit & Integration Tests", "Sprint Demos"],
  },
  {
    number: "05",
    title: "Deployment & Launch",
    icon: Zap,
    description: "Systematic deployment to production-ready environments. We ensure a smooth transition from development to a live, stable product.",
    deliverables: ["Live Environment", "Performance Audit", "SSL & Security Setup"],
  },
  {
    number: "06",
    title: "Documentation & Handover",
    icon: ShieldCheck,
    description: "Complete project walkthrough and documentation transfer. We ensure your team is equipped to manage and scale the platform.",
    deliverables: ["Technical Docs", "User Guides", "Handover Report"],
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56 overflow-hidden">
      <section className="container-wide mb-32 lg:mb-56 relative z-10">
        <div className="max-w-4xl">
          <span className="eyebrow">The Engineering Way</span>
          <h1 className="text-hero text-white mb-10 leading-[0.95]">
            A disciplined <br />
            workflow for <br />
            <span className="text-brand-gray-700">elite software.</span>
          </h1>
          <p className="text-xl md:text-3xl text-brand-gray-400 font-light leading-relaxed text-balance">
            We follow an engineering-led process designed to eliminate risk and ensure every line of code adds value to your business. Transparency and technical depth are our standards.
          </p>
        </div>
      </section>

      {/* Steps List */}
      <section className="bg-background-surface py-32 lg:py-56 border-t border-white/5 relative z-10">
        <div className="container-wide flex flex-col gap-32">
           {steps.map((step, i) => (
             <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                <div className="lg:col-span-2 flex flex-col">
                   <span className="text-[120px] font-display font-extrabold text-accent leading-none opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                     {step.number}
                   </span>
                </div>
                
                <div className="lg:col-span-6">
                   <div className="max-w-2xl">
                     <div className="w-16 h-16 flex items-center justify-center bg-accent/5 border border-accent/10 rounded-xl mb-12 group-hover:bg-accent group-hover:text-white transition-opacity duration-700">
                        <step.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                     </div>
                     <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 group-hover:text-accent transition-colors">
                        {step.title}
                     </h2>
                     <p className="text-xl text-brand-gray-400 leading-relaxed font-light mb-12">
                        {step.description}
                     </p>
                   </div>
                </div>

                <div className="lg:col-span-4 lg:pt-24 border-l border-white/5 pl-12 lg:pl-16">
                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gray-600 block mb-10">Deliverables</span>
                   <ul className="flex flex-col gap-6">
                      {step.deliverables.map(d => (
                        <li key={d} className="flex items-center gap-4 text-white font-medium text-sm group-hover:text-accent transition-colors">
                           <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-40" />
                           {d}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="py-32 lg:py-64 bg-background-dark border-t border-white/5 text-center flex flex-col items-center">
         <div className="container-wide">
            <h2 className="text-section-title text-white mb-16 max-w-4xl mx-auto">
               Ready to begin <br />
               your technical roadmap?
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
