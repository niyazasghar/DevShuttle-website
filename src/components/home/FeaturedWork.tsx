"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    category: "SaaS Platform",
    title: "EcoScale Analytics",
    description: "Modern analytics dashboard for sustainable energy metrics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    href: "/case-studies",
  },
  {
    category: "Web Application",
    title: "SwiftBase CRM",
    description: "A high-performance CRM built for high-growth startups.",
    image: "/swiftbase_crm.png",
    href: "/case-studies",
  },
  {
    category: "Custom Website",
    title: "Lumina Studio",
    description: "Multi-page immersive experience for a creative agency.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2340&auto=format&fit=crop",
    href: "/case-studies",
  },
  {
    category: "Booking System",
    title: "NovaHealth Portal",
    description: "Patient appointment and workflow automation system.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2340&auto=format&fit=crop",
    href: "/case-studies",
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-background-light py-32 lg:py-56 relative z-10">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 lg:mb-32 gap-10">
          <div className="max-w-3xl">
            <span className="eyebrow !text-accent/60">Selected Work</span>
            <h2 className="text-section-title text-brand-gray-900 !leading-none text-balance">
              Building the next generation of digital products.
            </h2>
          </div>
          
          <Link href="/case-studies" className="btn-outline !text-brand-gray-900 !border-brand-gray-200 hover:!bg-brand-gray-100 group">
             <span className="hover-line after:bg-brand-gray-900">View All Projects</span>
             <ArrowUpRight className="w-4 h-4 text-brand-gray-400 group-hover:text-accent transform group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as any, // Baunfire Easing
              }}
              className="group cursor-pointer"
            >
              <Link href={project.href} className="block overflow-hidden relative mb-8 rounded-sm">
                <motion.div 
                  initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
                  className="aspect-[4/3] w-full overflow-hidden transition-all duration-700 ease-in-out group-hover:scale-[1.03]"
                >
                   <img
                     src={project.image}
                     alt={project.title}
                     className="w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100 group-hover:grayscale-0"
                   />
                </motion.div>
                
                {/* Subtle Hover Overlay Indicator */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              
              <div className="flex justify-between items-start">
                 <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-accent/80 block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-display font-bold text-brand-gray-900 hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-base text-brand-gray-500 max-w-sm mt-3 leading-relaxed">
                      {project.description}
                    </p>
                 </div>
                 
                 <div className="w-12 h-12 flex items-center justify-center border border-brand-gray-200 rounded-full group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-brand-gray-300 group-hover:text-white transition-colors" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
