"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Muktesh Narula",
    company: "CEO, Dovesoft",
    quote:
      "They understood exactly what our business needed. DevShuttle didn't just write code; they helped us reduce manual work and automate our core operations.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Shriya Sadneni",
    company: "Founder, Murzban",
    quote:
      "Our new website launched much faster than we expected. It's clean, fast, and has already improved our lead flow and customer experience.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Yash Goswami",
    company: "CEO, Bitebee",
    quote:
      "Building our MVP with them was the best technical decision we made. We avoided months of wasted time and launched a product our users actually want.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Ajay Agarwal",
    company: "Co-Founder, Aveena",
    quote:
      "Their engineering discipline is incredible. The dashboard they built completely replaced our messy spreadsheets with a clean, scalable system.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="py-24 lg:py-10 relative z-10 bg-brand-gray-50">
      <div className="container-wide flex flex-col items-center">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full max-w-[60%] mx-auto text-center lg:text-left mb-4"
        >
          <span className="eyebrow !text-accent/70">Client Feedback</span>
          <h2 className="text-[3rem] font-display font-bold text-primary-dark leading-[1.1] tracking-tight">
            What Our Clients Have to Say About Us
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full max-w-[70%] mx-auto"
        >
          <div className="flex flex-col md:flex-row items-stretch gap-0 bg-white rounded-3xl shadow-lg shadow-black/[0.04] border border-brand-gray-100 overflow-hidden min-h-[420px]">

            {/* Left: Photo with slanted right edge */}
            <div className="relative w-full md:w-[44%] min-h-[300px] md:min-h-0 shrink-0" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 44vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Quote content */}
            <div className="flex-1 flex flex-col justify-center px-8 py-10 md:px-10 md:py-12 lg:px-14 relative md:-ml-6">

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote icon */}
              <div className="text-accent text-5xl font-serif leading-none mb-4 select-none">
                &ldquo;&ldquo;
              </div>

              {/* Quote text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-lg lg:text-xl text-primary-dark/85 leading-relaxed font-light mb-8">
                    {current.quote}
                  </p>
                  <div>
                    <h4 className="font-display font-bold text-primary-dark text-base tracking-tight">
                      {current.name}
                    </h4>
                    <p className="text-sm text-brand-gray-400 mt-1">
                      {current.company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Avatar navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex items-center gap-3 mt-10"
        >
          {testimonials.map((t, idx) => (
            <button
              key={t.name}
              onClick={() => setActive(idx)}
              className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 cursor-pointer ${idx === active
                  ? "border-accent scale-110 shadow-lg shadow-accent/20"
                  : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              aria-label={`View testimonial from ${t.name}`}
            >
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
