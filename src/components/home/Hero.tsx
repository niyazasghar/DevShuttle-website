"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background-dark">
      {/* Art-Directed Background Layers */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Deep Radiating Glows */}
        <div className="absolute top-1/4 -left-[10%] w-[80%] h-[80%] bg-accent/5 rounded-full blur-[180px] animate-pulse duration-[10s]" />
        <div className="absolute bottom-[10%] -right-[5%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[160px]" />
        
        {/* Subtle Geometric Texture Overlay */}
        <div className="absolute inset-0 bg-grid-white opacity-20 mix-blend-overlay" />
        
        {/* Oversized Abstract Background Letterform */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <span className="text-[55vw] font-display font-extrabold tracking-tighter leading-none select-none select-none">
            DS
          </span>
        </div>
      </div>

      <div className="container-wide relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl"
        >
          {/* Eyebrow Label */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="eyebrow">
              ENGINEERING-LED SOFTWARE STUDIO
            </span>
          </motion.div>

          {/* Elite Editorial Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-hero mb-10 text-white leading-tight"
          >
            Engineering high-performance <br />
            software for <br />
            <span className="text-brand-gray-700">ambitious startups.</span>
          </motion.h1>

          {/* Refined Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl text-brand-gray-400 max-w-4xl mb-14 leading-[1.6] font-light text-balance"
          >
            We design and build scalable digital products with foundational depth—from mission-critical web applications to high-performance business systems and modern SaaS platforms.
          </motion.p>

          {/* Premium Interactions (Buttons) */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <Link href="/contact" className="btn-premium group min-w-[240px]">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </Link>
            
            <Link href="/services" className="btn-outline group min-w-[240px]">
              <span className="hover-line">Explore Services</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
          
          {/* Credibility Indicator */}
          <motion.div 
            variants={itemVariants} 
            className="mt-28 py-10 border-t border-white/5 flex flex-wrap items-center gap-x-16 gap-y-10"
          >
             <div className="flex items-center gap-5">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group hover:border-accent/40 transition-colors">
                   <Terminal className="w-6 h-6 text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-brand-gray-600 mb-1">Foundational Depth</span>
                  <span className="text-sm text-white uppercase tracking-wider font-bold">IIIT Graduate Software Engineer</span>
                </div>
             </div>
             
             <div className="hidden lg:block w-px h-12 bg-white/5" />
             
             <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-brand-gray-600 mb-1">Core Tech Focus</span>
                <span className="text-sm text-white uppercase tracking-wider font-bold">Performance · Reliability · Scale</span>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
