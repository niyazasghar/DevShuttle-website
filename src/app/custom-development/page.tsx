import { ArrowRight, Code, Terminal, Cpu, Database, Cloud, Shield, Zap } from "lucide-react";
import Link from "next/link";

const techPillars = [
  {
    title: "Core Engineering",
    icon: Terminal,
    description: "Distributed systems and high-throughput backend architecture using modern languages.",
    techs: ["FastAPI", "Go", "Node.js", "Spring Boot"],
  },
  {
    title: "Database Strategy",
    icon: Database,
    description: "Highly available, low-latency data stores for mission-critical business data.",
    techs: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch"],
  },
  {
    title: "Cloud Native",
    icon: Cloud,
    description: "Modern infrastructure with automated CI/CD pipelines and containerization.",
    techs: ["Docker", "Kubernetes", "AWS", "Vercel"],
  },
  {
    title: "Security & QA",
    icon: Shield,
    description: "Automated testing, security audits, and penetration testing for risk-free deployments.",
    techs: ["Unit Testing", "E2E Testing", "JWT/Auth", "Encryption"],
  },
];

export default function CustomDevelopmentPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56 overflow-hidden">
      <section className="container-wide mb-32 lg:mb-56 relative z-10">
        <div className="max-w-4xl">
          <span className="eyebrow">Custom Engineering</span>
          <h1 className="text-hero text-white mb-10 leading-[0.95]">
            Technical depth <br />
            for unique <br />
            <span className="text-brand-gray-700">software challenges.</span>
          </h1>
          <p className="text-xl md:text-3xl text-brand-gray-400 font-light leading-relaxed text-balance">
            We don't do templates. We engineer custom software solutions from the ground up, designed to meet your specific business logic and performance requirements.
          </p>
        </div>
        
        {/* Subtle Background Art */}
        <div className="absolute top-0 right-[-10%] opacity-10 pointer-events-none">
           <Cpu className="w-[500px] h-[500px] text-white" />
        </div>
      </section>

      {/* Pillars of Engineering */}
      <section className="bg-background-surface py-32 lg:py-56 relative z-10 border-t border-white/5">
        <div className="container-wide">
          <div className="text-center mb-24 lg:mb-40">
             <h2 className="text-section-title text-white mb-8">Our Technical Pillars</h2>
             <p className="text-brand-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto">
                Built by software architects with Computer Science backgrounds from top institutes. We bring academic precision to commercial software.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {techPillars.map((pillar, i) => (
               <div key={i} className="group p-10 bg-white/[0.02] border border-white/5 rounded-sm hover:border-accent/40 transition-all duration-700">
                  <div className="w-14 h-14 flex items-center justify-center bg-accent/5 border border-accent/10 rounded-xl mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-700">
                     <pillar.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-6">
                    {pillar.title}
                  </h3>
                  <p className="text-brand-gray-500 leading-relaxed font-light mb-10 text-sm">
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                     {pillar.techs.map(t => (
                       <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-widest text-brand-gray-600 font-bold border border-white/5">
                         {t}
                       </span>
                     ))}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Case Specific Positioning */}
      <section className="bg-background-dark py-32 lg:py-48 flex flex-col items-center text-center">
         <div className="container-wide">
            <span className="eyebrow !mb-10 text-accent/50">Tailored Solutions</span>
            <h2 className="text-section-title text-white mb-16 max-w-4xl mx-auto !leading-tight">
               Built for performance, <br />
               Architected for <span className="text-accent underline underline-offset-8">Growth</span>.
            </h2>
            
            <p className="text-xl text-brand-gray-500 font-light max-w-3xl mx-auto mb-24 leading-relaxed">
               Whether it's a legacy rewrite, a custom API platform, or a complex dashboard, we bring senior engineering expertise to every line of code.
            </p>
            
            <Link href="/contact" className="btn-premium py-6 px-16 group mx-auto w-fit">
               <span>Discuss Your Vision</span>
               <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </Link>
         </div>
      </section>
    </div>
  );
}
