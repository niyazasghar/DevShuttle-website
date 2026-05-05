"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Globe, Blocks, Code2, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Launch Websites",
    description:
      "For startups and service businesses that need credibility, clarity, and better lead conversion.",
    icon: Globe,
    href: "/services",
    image: "/images/launch-websites.png",
    highlights: [
      "Conversion-optimized design",
      "SEO-ready architecture",
      "Mobile-first responsive",
    ],
  },
  {
    title: "SaaS MVPs",
    description:
      "For founders who need to validate an idea, onboard users, and launch a working product.",
    icon: Blocks,
    href: "/services",
    image: "/images/saas-mvps.png",
    highlights: [
      "Rapid prototyping",
      "User authentication & billing",
      "Scalable infrastructure",
    ],
  },
  {
    title: "Dashboards & Portals",
    description:
      "For growing businesses that need better control over users, data, workflows, and operations.",
    icon: LayoutDashboard,
    href: "/services",
    image: "/images/dashboards-portals.png",
    highlights: [
      "Real-time data visualization",
      "Role-based access control",
      "Custom reporting",
    ],
  },
  {
    title: "Custom Web Applications",
    description:
      "For teams that have outgrown spreadsheets, manual processes, and disconnected tools.",
    icon: Code2,
    href: "/custom-development",
    image: "/images/custom-web-apps.png",
    highlights: [
      "API-first architecture",
      "Workflow automation",
      "Third-party integrations",
    ],
  },
];

export default function FeaturedWork() {
  return (
    <section className="relative z-10 bg-white border-t border-black/5">
      <div className="container-wide">
        {/* Split layout: sticky left + scrolling right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* ── Left: Sticky heading ── */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-2 lg:self-start pt-24 pb-12 lg:pb-6 lg:pt-16 lg:pb-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="eyebrow !text-accent/60"
            >
              Our Engineering Capabilities
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-[clamp(2.25rem,4.5vw,4rem)] font-display font-bold text-primary-dark leading-[1.08] tracking-tight mb-6"
            >
              Digital Products Built Around{" "}
              <span className="text-accent">Real Business Problems</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-base md:text-lg text-brand-gray-500 max-w-md leading-[1.8] font-light mb-10"
            >
              From startup launch websites to SaaS MVPs, dashboards, portals,
              and workflow systems — each operating inside the same sprint
              cadence, QA gates, and delivery framework.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-3"
              >
                <span className="btn-premium text-sm !px-7 !py-3.5">
                  Talk to Us
                </span>
                <span className="w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Scrolling cards ── */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 py-24 lg:py-32">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <Link href={feature.href} className="group block">
                  <div className="relative bg-white border border-brand-gray-200 rounded-2xl p-5 lg:p-6 transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-black/5 overflow-hidden flex flex-col">
                    {/* Top accent bar on hover */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent via-accent/60 to-transparent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600 ease-out z-20" />

                    {/* Subtle glow */}
                    <div className="absolute -top-20 -right-20 w-32 h-32 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                    {/* Image */}
                    <div className="relative w-full h-40 sm:h-48 mb-6 rounded-xl overflow-hidden border border-brand-gray-100 z-10 bg-brand-gray-50">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Icon + Title row */}
                    <div className="flex items-start gap-4 mb-4 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-400">
                        <feature.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg lg:text-xl font-display font-bold text-primary-dark mb-1.5 group-hover:text-accent transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-brand-gray-500 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 pl-[56px] relative z-10">
                      {feature.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs sm:text-sm text-brand-gray-500"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent/60 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Explore link */}
                    <div className="flex items-center gap-2 mt-5 pl-[56px] relative z-10">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gray-400 group-hover:text-primary-dark transition-colors duration-300 relative">
                        Explore
                        <span className="absolute left-0 bottom-[-2px] w-full h-px bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
                      </span>
                      <ArrowRight className="w-3 h-3 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
