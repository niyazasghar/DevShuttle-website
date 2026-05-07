"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Check,
  CreditCard,
  Globe,
  RefreshCw,
  Settings,
  Zap,
} from "lucide-react";
import Link from "next/link";

const packages = [
  {
    num: "01",
    name: "Business Website",
    icon: Globe,
    description: "Designed for companies that need a professional website.",
    includes: [
      "Responsive website design",
      "5–10 pages",
      "SEO-friendly structure",
      "Contact forms",
      "Optional CMS integration",
      "Deployment setup",
    ],
    suitable: ["Startups", "Service businesses", "Company websites"],
  },
  {
    num: "02",
    name: "MVP Web Application",
    icon: Zap,
    description:
      "Designed for startups and businesses that need a working product quickly.",
    includes: [
      "Authentication system",
      "User roles and permissions",
      "Dashboard interface",
      "Core CRUD functionality",
      "Database architecture",
      "Deployment setup",
      "Basic admin panel",
    ],
    suitable: ["Startup MVPs", "Prototype platforms", "Product validation"],
  },
  {
    num: "03",
    name: "Business Dashboard / Admin Panel",
    icon: Settings,
    description: "Designed for internal business tools.",
    includes: [
      "Analytics dashboards",
      "Staff login system",
      "Task / customer / order management",
      "Reporting features",
      "Data import and export",
      "Role-based permissions",
    ],
    suitable: ["Operations teams", "Internal business tools", "Reporting systems"],
  },
  {
    num: "04",
    name: "Booking / Workflow Application",
    icon: Calendar,
    description:
      "Designed for service businesses that require scheduling systems.",
    includes: [
      "Booking interface",
      "Time slot management",
      "Customer records",
      "Automated notifications",
      "Payment integration",
      "Admin management panel",
    ],
    suitable: [
      "Clinics",
      "Service providers",
      "Consultants",
      "Event management",
    ],
  },
  {
    num: "05",
    name: "SaaS MVP Platform",
    icon: CreditCard,
    isPopular: true,
    description:
      "Designed for founders building startup software products.",
    includes: [
      "Landing page",
      "User authentication",
      "Subscription payment integration",
      "Core product workflow",
      "Dashboard",
      "Cloud deployment",
    ],
    suitable: [
      "SaaS startups",
      "Subscription platforms",
      "Early product launches",
    ],
  },
  {
    num: "06",
    name: "Application Modernization",
    icon: RefreshCw,
    description:
      "Designed for businesses with legacy systems that need upgrades.",
    includes: [
      "System architecture audit",
      "Modernization strategy",
      "UI improvements",
      "Backend refactoring",
      "Database optimization",
      "Cloud migration",
    ],
    suitable: [
      "Outdated software systems",
      "Legacy platforms",
      "Performance improvements",
    ],
  },
];

export default function PackagesPage() {
  return (
    <div className="bg-background-light min-h-screen text-primary-dark [overflow-x:clip]">

      {/* ── Hero ── */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 bg-background-light overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <svg width="100%" height="100%" className="opacity-[0.025]">
            <defs>
              <pattern id="pkg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pkg-grid)" />
          </svg>
        </div>

        <div className="container-wide relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block text-accent font-bold tracking-[0.25em] text-[10px] uppercase mb-8"
          >
            Service Packages
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1] tracking-tighter font-display text-primary-dark mb-8 max-w-4xl"
          >
            Technical packages built for every stage of growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-gray-500 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Standardized technical delivery for every stage of your business. From early-stage
            startup websites to full-scale SaaS platforms — each package has a clear scope,
            defined output, and predictable timeline.
          </motion.p>
        </div>
      </section>

      {/* ── Package Grid ── */}
      <section className="relative py-16 lg:py-24 bg-white border-t border-black/5 overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col bg-background-light border rounded-sm overflow-hidden transition-all duration-500 hover:shadow-lg ${
                  pkg.isPopular
                    ? "border-accent/40 ring-1 ring-accent/20"
                    : "border-black/5 hover:border-accent/30"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 bg-accent text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-bl-sm">
                    Recommended
                  </div>
                )}

                {/* Card top */}
                <div className="p-7 md:p-8 border-b border-black/5">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                      <pkg.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1 block">
                        Package {pkg.num}
                      </span>
                      <h2 className="text-lg md:text-xl font-display font-bold text-primary-dark leading-tight">
                        {pkg.name}
                      </h2>
                    </div>
                  </div>
                  <p className="text-sm text-brand-gray-500 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Includes */}
                <div className="p-7 md:p-8 flex-1">
                  <h3 className="text-[10px] font-bold text-primary-dark/40 uppercase tracking-[0.2em] mb-4">
                    Includes
                  </h3>
                  <ul className="space-y-2.5 mb-8">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-brand-gray-500 leading-relaxed"
                      >
                        <Check className="w-3.5 h-3.5 text-accent/70 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Suitable for */}
                  <h3 className="text-[10px] font-bold text-primary-dark/40 uppercase tracking-[0.2em] mb-3">
                    Suitable for
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {pkg.suitable.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white border border-black/5 text-[11px] font-bold text-primary-dark/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-7 md:px-8 pb-7 md:pb-8">
                  <Link
                    href="/contact"
                    className="group/btn relative inline-flex w-full items-center justify-center gap-3 px-6 py-3 rounded-full text-xs font-bold tracking-wide uppercase overflow-hidden transition-transform duration-300 active:scale-[0.98] bg-primary-dark"
                  >
                    <span className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
                    <span className="relative z-10 text-white">Get Started</span>
                    <ArrowRight className="relative z-10 w-3.5 h-3.5 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement & Custom Solutions ── */}
      <section className="relative py-16 lg:py-24 bg-primary-dark border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="eng-dots" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#eng-dots)" />
          </svg>
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Engagement model */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-white/40 font-bold tracking-[0.25em] text-[10px] uppercase mb-6">
                Engagement Model
              </span>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight font-display text-white mb-6">
                How we work together.
              </h2>
              <p className="text-white/50 text-base leading-[1.85] mb-10 max-w-md">
                Projects are delivered through fixed-scope development or milestone-based
                delivery with optional maintenance contracts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Fixed-Scope",
                    body: "Clearly defined scope with transparent delivery and predictable timelines.",
                  },
                  {
                    title: "Milestone-Based",
                    body: "Payments and deliverables tied to specific project milestones and technical goals.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-sm p-6"
                  >
                    <h4 className="text-sm font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-xs text-white/45 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Custom solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.03] border border-white/10 rounded-sm p-8 md:p-10"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Custom Solutions
              </h3>
              <p className="text-white/50 text-[15px] leading-[1.85] mb-8">
                For enterprise-level applications, specialized engineering, and large-scale
                migrations, we provide custom technical roadmaps and dedicated team models.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Third-party API integrations",
                  "Analytics dashboards",
                  "Maintenance & support contracts",
                  "Technical audits",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-sm text-white/60">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="group relative inline-flex w-full items-center justify-center gap-3 px-8 py-3.5 rounded-full text-xs font-bold tracking-wide uppercase overflow-hidden active:scale-[0.98] transition-transform duration-300 bg-white text-primary-dark"
              >
                <span className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
                <span className="relative z-10 group-hover:text-white transition-colors">
                  Request Custom Quote
                </span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
