"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML / CSS / JS"],
  },
  {
    category: "Backend & DB",
    techs: ["FastAPI", "Spring Boot", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Infrastructure",
    techs: ["Vercel", "AWS / Docker", "Render / Railway", "S3 / Cloudinary", "CI/CD Pipelines"],
  },
  {
    category: "Integrations",
    techs: ["Stripe / Razorpay", "JWT / Auth Systems", "Clerk / Firebase", "WebSockets / Realtime"],
  },
  {
    category: "AI & Automation",
    techs: ["LLM Integrations", "RAG Systems", "AI Chatbots", "Workflow Automation"],
  },
];

export default function TechStack() {
  return (
    <section className="bg-background-dark py-32 lg:py-48 relative z-10 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/[0.03] blur-[150px] pointer-events-none" />

      <div className="container-wide">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 lg:mb-32 gap-16">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Capabilities</span>
            <h2 className="text-section-title text-white">
              A modern stack for high-performance software.
            </h2>
          </div>
          <div className="lg:w-1/3">
             <p className="text-lg text-brand-gray-500 leading-relaxed font-light">
                We use industry-leading technologies to build scalable, secure, and future-proof digital products. From reactive frontends to distributed backend systems.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
           {techStack.map((stack, idx) => (
             <motion.div
               key={stack.category}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: idx * 0.1 }}
               className="group flex flex-col gap-10 p-8 border border-white/5 rounded-sm bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
             >
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent/60 opacity-50 group-hover:opacity-100 transition-opacity">
                  {stack.category}
                </span>
                
                <ul className="flex flex-col gap-5">
                   {stack.techs.map((tech) => (
                     <li key={tech} className="flex flex-col group/item cursor-default">
                        <span className="text-base font-medium text-brand-gray-400 group-hover/item:text-white transition-colors duration-300">
                           {tech}
                        </span>
                        <div className="w-0 h-[1px] bg-accent transition-all duration-500 group-hover/item:w-full mt-1" />
                     </li>
                   ))}
                </ul>
             </motion.div>
           ))}
        </div>
        
        {/* Bottom Banner */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-16 lg:gap-32 grayscale hover:grayscale-0 transition-all duration-1000 opacity-20 hover:opacity-100">
           {["Next.js", "FastAPI", "PostgreSQL", "Tailwind", "Vercel"].map((brand) => (
             <span key={brand} className="text-2xl font-display font-extrabold tracking-tighter cursor-default">
                {brand.toUpperCase()}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
}
