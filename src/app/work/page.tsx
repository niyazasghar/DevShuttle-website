"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const allProjects = [
  { name: "Nextera", type: "Corporate Website", tags: ["UX Design", "Development"], image: project1 },
  { name: "FinVault", type: "SaaS Platform", tags: ["Product Design", "Branding"], image: project2 },
  { name: "MediCore", type: "Corporate Website", tags: ["Strategy", "Development"], image: project3 },
  { name: "RoboSync", type: "Product Website", tags: ["Creative Direction", "UI/UX"], image: project4 },
  { name: "CloudPeak", type: "Dashboard", tags: ["Data Visualization", "UX"], image: project1 },
  { name: "TradeFlow", type: "Fintech App", tags: ["Mobile Design", "Development"], image: project2 },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background-dark pt-32 pb-16 md:pt-48 md:pb-20">
      <section className="container-wide mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow mb-6"
        >
          OUR WORK
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-hero text-white mb-8 leading-[0.95]"
        >
          Projects that <br />speak for <span className="text-brand-gray-700">themselves.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-brand-gray-400 font-light max-w-2xl leading-relaxed"
        >
          A selection of our recent work across web design, branding, and digital strategy for startups and modern businesses.
        </motion.p>
      </section>

      <section className="container-wide pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {allProjects.map((project, i) => (
            <motion.div
              key={`${project.name}-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-6 aspect-[4/5] bg-background-surface rounded-sm relative">
                <Image
                  src={project.image}
                  alt={`${project.name} project`}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-display font-black tracking-tight text-white mb-1 uppercase">
                    {project.name}
                    </h3>
                    <p className="text-sm text-brand-gray-500 font-medium mb-4">{project.type}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray-400 border border-white/10 px-3 py-1 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
