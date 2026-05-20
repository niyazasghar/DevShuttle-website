"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Globe,
  Blocks,
  Code2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  Calendar,
  Package,
  Wrench,
  ShieldCheck,
  FileText,
  BarChart,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Business Websites",
    description: "Professional websites designed for companies and startups.",
    icon: Globe,
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Responsive design",
      "SEO optimization",
      "CMS integration",
      "Contact forms",
    ],
  },
  {
    title: "Admin Dashboards",
    description: "Business control panels used to manage data, users, and operations.",
    icon: LayoutDashboard,
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    highlights: [
      "Analytics dashboards",
      "User management",
      "Activity monitoring",
      "Data visualization",
    ],
  },
  {
    title: "CRM Systems",
    description: "Customer relationship management systems for sales pipelines and customer interactions.",
    icon: Users,
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Lead tracking",
      "Customer database",
      "Pipeline management",
      "Workflow automation",
    ],
  },
  {
    title: "Booking Platforms",
    description: "Scheduling systems for service businesses.",
    icon: Calendar,
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
    highlights: [
      "Booking interface",
      "Calendar integration",
      "Time slot management",
      "Automated notifications",
    ],
  },
  {
    title: "Inventory & Order Management",
    description: "Systems to manage products, stock, and order workflows.",
    icon: Package,
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Inventory tracking",
      "Order management",
      "Shipping workflows",
      "Analytics dashboards",
    ],
  },
  {
    title: "Internal Business Tools",
    description: "Custom tools designed to automate internal processes.",
    icon: Wrench,
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Operational dashboards",
      "Internal workflows",
      "Employee tools",
      "Automation systems",
    ],
  },
  {
    title: "SaaS MVP Platforms",
    description: "Early-stage software platforms designed to validate startup ideas.",
    icon: Blocks,
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop",
    highlights: [
      "User authentication",
      "Subscription payments",
      "Product dashboards",
      "Cloud deployment",
    ],
  },
  {
    title: "Role-Based Platforms",
    description: "Applications where different users have different permissions and dashboards.",
    icon: ShieldCheck,
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Role-based permissions",
      "Multiple dashboards",
      "Workflow segregation",
      "User management",
    ],
  },
  {
    title: "Client Portals",
    description: "Secure platforms that allow businesses to interact with their clients.",
    icon: FileText,
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Document sharing",
      "Messaging",
      "Invoices & payments",
      "Project updates",
    ],
  },
  {
    title: "Reporting & Analytics",
    description: "Systems designed to analyze business data and generate insights.",
    icon: BarChart,
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Analytics dashboards",
      "Data visualization",
      "Reporting tools",
      "Exportable data",
    ],
  },
  {
    title: "Workflow Automation",
    description: "Platforms that automate business processes using form inputs and workflows.",
    icon: Workflow,
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2074&auto=format&fit=crop",
    highlights: [
      "Data collection forms",
      "Automated workflows",
      "System integrations",
      "Approval pipelines",
    ],
  },
  {
    title: "Full Web Applications",
    description: "Complete platforms combining authentication, databases, dashboards, and workflows.",
    icon: Code2,
    href: "/custom-development",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2074&auto=format&fit=crop",
    highlights: [
      "Authentication systems",
      "Database-driven functionality",
      "User dashboards",
      "Business workflows",
    ],
  },
];

export default function FeaturedWork() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-10 bg-white border-t border-black/5">
      <div className="container-wide">
        {/* Split layout: sticky left + scrolling right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-28">

          {/* ── Left: Sticky heading ── */}
          <div className="w-full lg:w-[42%] lg:sticky lg:top-2 lg:self-start pt-24 pb-12 lg:pb-6 lg:pt-16 lg:pb-0">
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
              Types of Solutions{" "}
              <span className="text-accent">We Build</span>
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
                href="/solutions"
                className="group inline-flex items-center gap-3"
              >
                <span className="btn-premium text-sm !px-7 !py-3.5">
                  Explore Solutions
                </span>
                <span className="w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>

            {/* Arrow buttons — mobile only */}
            <div className="flex items-center gap-4 mt-8 lg:hidden">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-colors"
                aria-label="Previous"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-colors"
                aria-label="Next"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ── Right: Scrolling cards — snap carousel on mobile, vertical stack on lg+ ── */}
          <div
            ref={scrollRef}
            className="w-full lg:w-[48%] py-12 lg:py-32
                       flex gap-6 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                       lg:overflow-x-visible lg:flex-col lg:mx-0 lg:px-0"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] as const }}
                className="w-[82vw] sm:w-[400px] shrink-0 snap-start lg:w-auto lg:shrink lg:snap-align-none"
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
