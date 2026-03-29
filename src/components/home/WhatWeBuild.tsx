"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Business Websites",
    description: "High-performance marketing websites and landing pages designed to convert.",
    category: "Web Presence",
  },
  {
    title: "SaaS MVP Platforms",
    description: "Full-scale product development from concept to scalable MVP.",
    category: "Product Development",
  },
  {
    title: "Admin Dashboards",
    description: "Custom internal tools and reporting systems for business intelligence.",
    category: "Internal Systems",
  },
  {
    title: "Custom Web Applications",
    description: "Scalable, secure, and modern web applications for business automation.",
    category: "Software Development",
  },
  {
    title: "CRM Systems",
    description: "Tailored customer relationship management tools for startup growth.",
    category: "Operations",
  },
  {
    title: "Client Portals",
    description: "Secure, role-based platforms for customer management and communication.",
    category: "User Experience",
  },
];

export default function WhatWeBuild() {
  return (
    <section className="bg-background-surface py-32 lg:py-56 relative z-10 overflow-hidden">
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-1/4 -right-[20%] w-[60%] h-[60%] border border-white/20 rounded-full" />
      </div>

      <div className="container-wide">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 lg:mb-40 gap-16">
          <div className="max-w-3xl">
             <span className="eyebrow">What We Build</span>
             <h2 className="text-section-title text-white !leading-[1.1] mb-10">
                Engineering custom software solutions for startups.
             </h2>
             <p className="text-xl text-brand-gray-500 leading-relaxed font-light text-balance mb-12">
                We specialize in building the technical infrastructure that high-growth businesses depend on. From customer-facing marketing sites to complex internal platforms.
             </p>
             
             <Link href="/services" className="btn-premium w-fit py-5 px-12 group">
                <span>Explore All Services</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
             </Link>
          </div>
          
          <div className="lg:w-1/3 flex flex-col gap-8 pt-12 border-t border-white/10">
             <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Core Focus</span>
             <ul className="flex flex-col gap-6">
                {["Performance-First Approach", "Scalable Architecture", "Modern Tech Stack", "Security by Design"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-white font-medium text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {services.map((service, idx) => (
             <motion.div
               key={service.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: idx * 0.1 }}
               className="group relative h-[420px] bg-white/5 border border-white/5 rounded-sm p-12 flex flex-col justify-between overflow-hidden cursor-pointer hover:bg-white/[0.08] transition-all duration-500"
             >
                {/* Background Accent Indicator */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-[40px] transition-all duration-700 group-hover:bg-accent/20" />
                
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent/60 block mb-6 px-3 py-1 bg-white/5 border border-white/5 rounded-full w-fit">
                    {service.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white mb-6 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray-500 leading-relaxed font-light text-balance group-hover:text-brand-gray-400 transition-colors">
                    {service.description}
                  </p>
                </div>

                <Link href="/services" className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white/40 group-hover:text-white transition-all">
                  <span className="hover-line">Learn More</span>
                  <ArrowUpRight className="w-4 h-4 text-accent transform group-hover:-translate-y-0.5" />
                </Link>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
