"use client";

import { ArrowRight, Search, Clipboard, Code, ShieldCheck, Zap, Server, Globe, Layers } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Requirement Discussion",
    icon: Search,
    description: "We understand your business, users, goals, current problems, and expected outcome.",
    deliverables: ["Business Context", "User Needs", "Project Goals"],
  },
  {
    number: "02",
    title: "Scope Definition",
    icon: Clipboard,
    description: "We define the features, pages, workflows, integrations, milestones, timeline, and project boundaries.",
    deliverables: ["Feature List", "Project Timeline", "Scope Document"],
  },
  {
    number: "03",
    title: "Architecture Planning",
    icon: Layers,
    description: "We choose the right technology stack, database structure, user roles, deployment flow, and technical foundation.",
    deliverables: ["Tech Stack Selection", "Database Schema", "Deployment Plan"],
  },
  {
    number: "04",
    title: "Product Flow & Design",
    icon: Globe,
    description: "We map the user journey, screens, dashboard structure, forms, actions, and key product flows.",
    deliverables: ["User Flow Map", "Screen Layouts", "UX Structure"],
  },
  {
    number: "05",
    title: "Development & Testing",
    icon: Code,
    description: "We build in stages, test important flows, fix issues, and keep the project aligned with the approved scope.",
    deliverables: ["Source Code", "Testing Reports", "Sprint Demos"],
  },
  {
    number: "06",
    title: "Deployment & Launch",
    icon: Zap,
    description: "We deploy the website or application, configure hosting, set environment variables, connect domains, and prepare production access.",
    deliverables: ["Live Environment", "Domain Setup", "Production Config"],
  },
  {
    number: "07",
    title: "Documentation & Handover",
    icon: ShieldCheck,
    description: "We provide handover notes, access instructions, deployment details, and post-launch support options.",
    deliverables: ["Technical Docs", "Access Guide", "Support Options"],
  },
];

export default function ProcessPage() {
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "start 0.3"],
  });
  const ctaBgScaleX = useTransform(ctaProgress, [0, 0.6], [0, 1]);
  const ctaBgOpacity = useTransform(ctaProgress, [0, 0.3], [0, 1]);

  return (
    <div className="bg-background-light min-h-screen [overflow-x:clip] relative">

      {/* Fixed vertical side text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 text-primary-dark text-[10px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 pointer-events-none z-40"
      >
        Our Process
      </motion.span>

      {/* ─── Hero — Light ─── */}
      <section className="relative pt-36 md:pt-18 pb-24 md:pb-16 overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-24">
            <div className="lg:w-7/12">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-accent font-bold tracking-[0.25em] text-[10px] uppercase mb-8"
              >
                Our Process
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1] tracking-tighter font-display text-primary-dark"
              >
                A disciplined <br />
                process for <br />
                reliable products.
              </motion.h1>
            </div>
            <div className="lg:w-5/12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-brand-gray-500 text-base md:text-lg leading-relaxed max-w-sm"
              >
                We follow an engineering-led workflow designed to reduce confusion, control scope, and turn your idea into a working product.
              </motion.p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-12 h-[2px] bg-primary-dark/20 mt-6 origin-left"
              />
            </div>
          </div>
        </div>

        {/* Decorative dot grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-16 right-16 z-0 pointer-events-none"
        >
          <svg width="120" height="120" viewBox="0 0 120 120">
            {Array.from({ length: 100 }).map((_, i) => {
              const row = Math.floor(i / 10);
              const col = i % 10;
              return <circle key={i} cx={col * 12 + 6} cy={row * 12 + 6} r="1.5" fill="currentColor" />;
            })}
          </svg>
        </motion.div>
      </section>

      {/* ─── Steps Section — White with Sticky Heading ─── */}
      <section className="bg-white py-32 lg:py-16 border-t border-black/5 relative z-10">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

            {/* Left column: sticky heading */}
            <div className="lg:w-5/12 lg:self-start lg:sticky lg:top-40">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-accent font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-8 block"
              >
                STEP BY STEP
              </motion.span>
              <motion.h2
                variants={{
                  initial: {},
                  animate: { transition: { staggerChildren: 0.08 } }
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1] tracking-tighter text-primary-dark font-display"
              >
                {"From first call to final deployment.".split(" ").map((word, idx) => (
                  <span key={idx} className="inline-block overflow-hidden mr-[0.25em] pb-4 -mb-4 pt-2">
                    <motion.span
                      variants={{
                        initial: { y: "100%", opacity: 0 },
                        animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h2>
            </div>

            {/* Right column: steps scroll past */}
            <div className="lg:w-7/12">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="py-12 lg:py-16 border-b border-black/5 first:border-t first:border-black/5 group"
                >
                  <div className="flex items-start gap-6">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="text-accent font-bold text-sm tracking-wider mt-1 shrink-0"
                    >
                      {step.number}
                    </motion.span>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-accent/5 border border-accent/10 rounded-lg group-hover:bg-accent transition-all duration-500">
                          <step.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                        </div>
                        <motion.h3
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="text-2xl md:text-3xl font-bold font-display tracking-tight text-primary-dark group-hover:text-accent transition-colors duration-500"
                        >
                          {step.title}
                        </motion.h3>
                      </div>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="text-brand-gray-500 text-base md:text-lg leading-relaxed max-w-lg mb-6"
                      >
                        {step.description}
                      </motion.p>
                      <div className="flex flex-wrap gap-3">
                        {step.deliverables.map((d) => (
                          <span key={d} className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gray-400 border border-brand-gray-200 rounded-full px-4 py-1.5 group-hover:border-accent/20 group-hover:text-accent transition-all duration-500">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── Summary Section — Dark ─── */}
      <section className="bg-primary-dark text-white py-32 lg:py-24 relative z-30">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

            {/* Left column: sticky heading */}
            <div className="lg:w-5/12 lg:self-start lg:sticky lg:top-40">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-accent font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-8 block"
              >
                WHY THIS WORKS
              </motion.span>
              <motion.h2
                variants={{
                  initial: {},
                  animate: { transition: { staggerChildren: 0.08 } }
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1] tracking-tighter font-display"
              >
                {"Structure removes chaos from your project.".split(" ").map((word, idx) => (
                  <span key={idx} className="inline-block overflow-hidden mr-[0.25em] pb-4 -mb-4 pt-2">
                    <motion.span
                      variants={{
                        initial: { y: "100%", opacity: 0 },
                        animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h2>
            </div>

            {/* Right column: principles */}
            <div className="lg:w-7/12">
              {[
                {
                  title: "Clear Scope",
                  desc: "You know exactly what is being built, what is not being built, and when it will be delivered.",
                  bullets: ["No ambiguity", "Defined boundaries", "Written documentation"]
                },
                {
                  title: "Predictable Timeline",
                  desc: "Every phase has a fixed duration and checkpoint, so you always know where the project stands.",
                  bullets: ["Milestone tracking", "Sprint reviews", "On-time delivery"]
                },
                {
                  title: "Engineering-Led Quality",
                  desc: "Code is built to be maintained, scaled, and handed over — not just made to work.",
                  bullets: ["Clean architecture", "Performance tested", "Production ready"]
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="py-12 lg:py-16 border-b border-white/10 first:border-t first:border-white/10 group"
                >
                  <div className="flex items-start gap-6">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="text-accent font-bold text-sm tracking-wider mt-1 shrink-0"
                    >
                      0{idx + 1}
                    </motion.span>
                    <div className="flex-1">
                      <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white group-hover:text-accent transition-colors duration-500 mb-4"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="text-brand-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-6"
                      >
                        {item.desc}
                      </motion.p>
                      <div className="flex flex-wrap gap-3">
                        {item.bullets.map((bullet) => (
                          <span key={bullet} className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 border border-white/10 rounded-full px-4 py-1.5 group-hover:border-accent/30 group-hover:text-accent transition-all duration-500">
                            {bullet}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── CTA — Accent Sweep ─── */}
      <section
        ref={ctaRef}
        className="relative z-30 py-16 lg:py-16 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-accent"
          style={{
            scaleX: ctaBgScaleX,
            opacity: ctaBgOpacity,
            transformOrigin: "left center",
          }}
        />

        <div className="container-wide max-w-6xl relative z-10">
          <div className="max-w-5xl mx-auto lg:mx-0">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-eyebrow uppercase tracking-[0.25em] text-white/70 mb-8"
            >
              Get Started
            </motion.span>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-white leading-snug tracking-[-0.01em] mb-12"
            >
              Ready to turn your idea into <br className="hidden md:block" />
              a clear technical roadmap?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-bold tracking-wide uppercase overflow-hidden active:scale-[0.98] transition-transform duration-300 border border-white/20"
              >
                <span className="absolute inset-0 bg-white/[0.08] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
                <span className="relative z-10 text-white">Start Your Project</span>
                <svg className="relative z-10 w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative dot grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-8 right-8 lg:top-12 lg:right-12 z-10 pointer-events-none"
        >
          <svg width="120" height="120" viewBox="0 0 120 120">
            {Array.from({ length: 100 }).map((_, i) => {
              const row = Math.floor(i / 10);
              const col = i % 10;
              return (
                <circle key={i} cx={col * 12 + 6} cy={row * 12 + 6} r="1.5" fill="white" />
              );
            })}
          </svg>
        </motion.div>

        {/* Vertical side text */}
        {/* <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-white text-[10px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 pointer-events-none"
        >
          Our Process
        </motion.span> */}
      </section>
    </div>
  );
}
