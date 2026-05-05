"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function CallToActionSweep() {
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress: ctaScrollProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "start 0.3"],
  });
  const ctaBgScaleX = useTransform(ctaScrollProgress, [0, 0.6], [0, 1]);
  const ctaBgOpacity = useTransform(ctaScrollProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={ctaRef}
      className="relative z-30 py-16 lg:py-16 overflow-hidden"
    >
      {/* Animated accent background — sweeps left to right */}
      <motion.div
        className="absolute inset-0 bg-accent"
        style={{
          scaleX: ctaBgScaleX,
          opacity: ctaBgOpacity,
          transformOrigin: "left center",
        }}
      />

      {/* Content */}
      <div className="container-wide max-w-6xl relative z-10">
        <div className="max-w-5xl mx-auto lg:mx-0">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block text-eyebrow uppercase tracking-[0.25em] text-white/70 mb-8"
          >
            Work With Us
          </motion.span>

          {/* Main text */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-white leading-snug tracking-[-0.01em] mb-12"
          >
            Have a website, MVP, dashboard, <br className="hidden md:block" />
            or platform idea?
          </motion.p>

          {/* CTA Button */}
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
              <span className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
              <span className="relative z-10 text-white group-hover:text-accent transition-colors duration-300 delay-75">Let&apos;s Build It Right</span>
              <svg className="relative z-10 w-4 h-4 text-white group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 delay-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            return <circle key={i} cx={col * 12 + 6} cy={row * 12 + 6} r="1.5" fill="white" />;
          })}
        </svg>
      </motion.div>

      {/* Decorative arc */}
      <div className="absolute -bottom-32 right-16 w-[400px] h-[400px] pointer-events-none opacity-10">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <circle cx="200" cy="200" r="190" stroke="white" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
