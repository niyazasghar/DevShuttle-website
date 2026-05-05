"use client";

import { motion } from "framer-motion";
import { Handshake, Rocket, Building2, CheckCircle2 } from "lucide-react";

const models = [
  {
    tag: "Defined Scope",
    title: "Fixed-Scope Projects",
    description:
      "Best for websites, landing pages, MVPs, dashboards, and clearly defined builds.",
    icon: Handshake,
    bullets: [
      "Clear scope & deliverables",
      "Fixed timeline & budget",
      "Milestone checkpoints",
    ],
    bestFor: "Startups launching their first product, businesses needing a website or dashboard.",
    featured: false,
  },
  {
    tag: "DevShuttle-Led",
    title: "Milestone-Based Development",
    description:
      "A fully managed engineering engagement — tech lead, engineers, QA, and delivery ops.",
    icon: Rocket,
    bullets: [
      "Phased delivery approach",
      "Controlled sprint progress",
      "Reduced project risk",
    ],
    bestFor: "Products needing speed, cross-team coordination.",
    featured: true,
  },
  {
    tag: "Long-Term Partner",
    title: "Technical Partnership",
    description:
      "Ongoing product development, feature builds, and post-launch engineering support.",
    icon: Building2,
    bullets: [
      "Continuous feature development",
      "Performance & security updates",
      "Full post-launch support",
    ],
    bestFor: "Enterprises needing sustained large-scale capacity, cost optimization.",
    featured: false,
  },
];

export default function EngagementModels() {
  return (
    <section className="py-24 lg:py-6 relative z-10 bg-white border-t border-black/5">
      <div className="container-wide">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-6 lg:mb-6"
        >
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-display font-bold text-primary-dark leading-[1.1] tracking-tight mb-2">
            Three models. One delivery standard.
          </h2>
          <p className="text-base md:text-lg text-brand-gray-500 max-w-2xl mx-auto leading-[1.8] font-light">
            Engagement structure follows your situation, not a fixed service catalogue.
            Choose the model that fits your team, timeline, and governance requirements.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {models.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className={`relative rounded-2xl p-8 lg:p-10 flex flex-col transition-all duration-500 ${
                model.featured
                  ? "bg-primary-dark text-white  shadow-black/15 scale-[1.02] lg:scale-105 z-10"
                  : "bg-white border border-brand-gray-200 shadow-sm hover:shadow-xl hover:shadow-black/5"
              }`}
            >
              {/* Icon + Tag row */}
              <div className="flex items-center justify-between mb-8">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    model.featured
                      ? "bg-accent/20 border border-accent/30"
                      : "bg-brand-gray-50 border border-brand-gray-100"
                  }`}
                >
                  <model.icon
                    className={`w-5 h-5 ${
                      model.featured ? "text-accent" : "text-brand-gray-500"
                    }`}
                  />
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full ${
                    model.featured
                      ? "bg-accent/20 text-accent border border-accent/30"
                      : "bg-accent/5 text-accent border border-accent/15"
                  }`}
                >
                  {model.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`text-xl lg:text-2xl font-display font-bold tracking-tight mb-3 ${
                  model.featured ? "text-white" : "text-primary-dark"
                }`}
              >
                {model.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-8 ${
                  model.featured
                    ? "text-white/70"
                    : "text-brand-gray-500"
                }`}
              >
                {model.description}
              </p>

              {/* Bullet points */}
              <div className="flex flex-col gap-3 mb-8 flex-1">
                {model.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-3">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${
                        model.featured ? "text-accent" : "text-accent/60"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        model.featured
                          ? "text-white/80"
                          : "text-brand-gray-600"
                      }`}
                    >
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Best for */}
              <div
                className={`pt-6 border-t ${
                  model.featured ? "border-white/10" : "border-brand-gray-100"
                }`}
              >
                <p
                  className={`text-xs leading-relaxed ${
                    model.featured ? "text-white/50" : "text-brand-gray-400"
                  }`}
                >
                  <span
                    className={`font-bold ${
                      model.featured ? "text-white/70" : "text-primary-dark"
                    }`}
                  >
                    Best for:
                  </span>{" "}
                  {model.bestFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
