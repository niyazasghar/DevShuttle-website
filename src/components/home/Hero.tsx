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
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-1/4 -left-[10%] w-[80%] h-[80%] bg-accent/5 rounded-full blur-[180px] animate-pulse duration-[10s]" />
        <div className="absolute bottom-[10%] -right-[5%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-grid-white opacity-20 mix-blend-overlay" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <span className="text-[55vw] font-display font-extrabold tracking-tighter leading-none select-none">
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
          <motion.div variants={itemVariants} className="mb-8">
            <span className="eyebrow">
              ENGINEERING-LED SOFTWARE STUDIO
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-hero mb-10 text-white leading-tight"
          >
            Designing and building <br />
            modern websites <br />
            <span className="text-brand-gray-700">
              and scalable web applications.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl text-brand-gray-400 max-w-4xl mb-14 leading-[1.6] font-light text-balance"
          >
            We help startups and growing businesses launch high-performance
            websites, SaaS MVPs, dashboards, and client-facing platforms with
            clean design, reliable architecture, and production-ready
            development.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
          >
            <Link href="/contact" className="btn-premium group min-w-[240px]">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </Link>

            <Link href="/services" className="btn-outline group min-w-[240px]">
              <span className="hover-line">View Services</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-28 py-10 border-t border-white/5 flex flex-wrap items-center gap-x-16 gap-y-10"
          >
            <div className="flex items-center gap-5">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group hover:border-accent/40 transition-colors">
                <Terminal className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-brand-gray-600 mb-1">
                  Technical foundation
                </span>
                <span className="text-sm text-white uppercase tracking-wider font-bold">
                  Computer Science Background · IIIT Guwahati
                </span>
              </div>
            </div>

            <div className="hidden lg:block w-px h-12 bg-white/5" />

            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-brand-gray-600 mb-1">
                Core offerings
              </span>
              <span className="text-sm text-white uppercase tracking-wider font-bold">
                Websites · Web Apps · SaaS MVPs
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
