"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-background-dark py-32 lg:py-64 relative z-20 overflow-hidden text-center">
      {/* Immersive Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 blur-[200px] pointer-events-none opacity-50" />
      
      {/* Art-Directed Letterform Layer */}
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none flex items-center justify-center">
        <span className="text-[60vw] font-display font-bold leading-none select-none tracking-tighter">
          DS
        </span>
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="flex flex-col items-center"
           >
              <h2 className="text-section-title text-white mb-10 !leading-[1.05] max-w-4xl">
                 Ready to build the technical foundation of your business?
              </h2>
              <p className="text-xl md:text-3xl text-brand-gray-400 mb-16 max-w-2xl leading-relaxed font-light font-display">
                Partner with an engineering-led software studio to build performant, scalable digital platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-10 items-center justify-center w-full max-w-2xl">
                 <Link href="/contact" className="btn-premium w-full sm:w-[320px] py-6 text-lg group">
                    <span>Start Your Project</span>
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                 </Link>
                 
                 <a href="mailto:hello@devshuttle.com" className="flex items-center gap-4 text-xl font-bold hover:text-accent transition-all duration-500 group">
                    <Mail className="w-6 h-6 text-brand-gray-500 group-hover:text-accent group-hover:scale-110 transition-all duration-500" />
                    <span className="hover-line after:bg-accent after:h-[2px]">hello@devshuttle.com</span>
                 </a>
              </div>
              
              <div className="mt-32 pt-16 border-t border-white/5 w-full flex flex-col items-center gap-10">
                 <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-600">
                    Trusted Technical Partners
                 </span>
                 <p className="text-xs text-brand-gray-700 uppercase tracking-widest leading-loose">
                    Expertise in <span className="text-white/40">Next.js</span> · <span className="text-white/40">FastAPI</span> · <span className="text-white/40">SaaS Growth</span> · <span className="text-white/40">Cloud Architecture</span>
                 </p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
