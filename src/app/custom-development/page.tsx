"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileText,
  HardDrive,
  KeyRound,
  Layers3,
  MonitorSmartphone,
  Radio,
  ServerCog,
  Shield,
} from "lucide-react";


const technicalPillars = [
  {
    num: "01",
    title: "Product-first planning",
    icon: FileText,
    body:
      "We start with the business problem, users, workflows, must-have features, and launch priorities before touching code.",
    chips: ["Scope", "User flows", "Feature priority", "Roadmap"],
  },
  {
    num: "02",
    title: "Full-stack engineering",
    icon: Code2,
    body:
      "Frontend, backend, APIs, databases, authentication, dashboards, integrations, and deployment handled by one technical team.",
    chips: ["Frontend", "Backend", "APIs", "Database"],
  },
  {
    num: "03",
    title: "Scalable architecture",
    icon: Layers3,
    body:
      "We design systems that can evolve after launch, with clean data models, modular structure, and maintainable code.",
    chips: ["Modular code", "Data models", "Cloud-ready", "Maintainable"],
  },
  {
    num: "04",
    title: "Secure launch handover",
    icon: Shield,
    body:
      "Your product is deployed with authentication, environment setup, access control, documentation, and post-launch support options.",
    chips: ["Auth", "Deployment", "Docs", "Support"],
  },
];

const coreStack = [
  {
    category: "Frontend Technologies",
    icon: MonitorSmartphone,
    outcome: "Fast, responsive interfaces that feel polished on every device.",
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    ],
    usedFor: [
      "Marketing websites and landing pages",
      "SaaS product interfaces",
      "Dashboards and admin panels",
      "Interactive customer-facing web apps",
    ],
  },
  {
    category: "Backend Technologies",
    icon: ServerCog,
    outcome: "Reliable business logic, APIs, workflows, and application services.",
    technologies: [
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.simpleicons.org/express/white" },
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
    ],
    usedFor: [
      "REST APIs and backend services",
      "Custom business workflows",
      "Application logic and integrations",
      "Scalable service architecture",
    ],
  },
  {
    category: "Databases & Search",
    icon: Database,
    outcome: "Clean data foundations for products, reports, users, and operations.",
    technologies: [
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { name: "Elasticsearch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg" },
      { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
    ],
    usedFor: [
      "Structured application data",
      "Reporting and analytics systems",
      "Caching and session management",
      "Search-heavy product experiences",
    ],
  },
  {
    category: "Authentication Systems",
    icon: KeyRound,
    outcome: "Secure access for users, teams, admins, customers, and partners.",
    technologies: [
      { name: "JWT", logo: "https://cdn.simpleicons.org/jsonwebtokens/white" },
      { name: "Clerk", logo: "https://cdn.simpleicons.org/clerk/6C47FF" },
      { name: "NextAuth", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Firebase Auth", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      { name: "OAuth", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" },
    ],
    usedFor: [
      "Login and registration flows",
      "Role-based access control",
      "SaaS platforms and admin panels",
      "Client portals and secure dashboards",
    ],
  },
  {
    category: "Deployment & Infrastructure",
    icon: Cloud,
    outcome: "Production-ready hosting, deployment, and cloud setup without chaos.",
    technologies: [
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/white" },
      { name: "Render", logo: "https://cdn.simpleicons.org/render/46E3B7" },
      { name: "Railway", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg" },
      { name: "AWS", logo: "https://img.icons8.com/?size=150&id=33039&format=png&color=000000" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions/2088FF" },
    ],
    usedFor: [
      "Frontend and backend deployment",
      "Cloud hosting and production environments",
      "CI/CD workflows and auto-deployments",
      "Containerised application delivery",
    ],
  },
  {
    category: "Storage Solutions",
    icon: HardDrive,
    outcome: "Reliable file, media, and document handling for real product use.",
    technologies: [
      { name: "AWS S3", logo: "https://img.icons8.com/?size=100&id=106501&format=png&color=000000" },
      { name: "Cloudinary", logo: "https://cdn.simpleicons.org/cloudinary/3448C5" },
      { name: "Firebase Storage", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    ],
    usedFor: [
      "Document uploads and storage",
      "Media and image management",
      "User-generated content",
      "Client portal file sharing",
    ],
  },
  {
    category: "Payment Integrations",
    icon: CreditCard,
    outcome: "Payment flows for SaaS, bookings, subscriptions, and transactions.",
    technologies: [
      { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF" },
      { name: "Razorpay", logo: "https://cdn.simpleicons.org/razorpay/3395FF" },
      { name: "PayPal", logo: "https://cdn.simpleicons.org/paypal/003087" },
    ],
    usedFor: [
      "Subscription and recurring billing",
      "SaaS payment flows",
      "Booking transactions",
      "Checkout and invoice workflows",
    ],
  },
  {
    category: "Realtime & Notifications",
    icon: Radio,
    outcome: "Live updates, alerts, and communication flows inside your product.",
    technologies: [
      { name: "WebSockets", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
      { name: "Socket.IO", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
      { name: "Firebase Realtime", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      { name: "Resend", logo: "https://cdn.simpleicons.org/resend/white" },
      { name: "Twilio", logo: "https://img.icons8.com/?size=100&id=ZhlVdE53t65r&format=png&color=000000" },
    ],
    usedFor: [
      "Live dashboards and feeds",
      "Email and SMS notifications",
      "Booking and workflow alerts",
      "Collaborative product features",
    ],
  },
  {
    category: "Testing & Security Basics",
    icon: Shield,
    outcome: "Lower launch risk with validation, testing, and secure delivery practices.",
    technologies: [
      { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
      { name: "Pytest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg" },
      { name: "Playwright", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
    ],
    usedFor: [
      "Unit and integration testing",
      "End-to-end browser testing",
      "Authentication and access control",
      "Safer production deployments",
    ],
  },
  {
    category: "Generative AI Integrations",
    icon: Bot,
    optional: true,
    outcome: "AI features added only when they improve the product experience.",
    technologies: [
      { name: "OpenAI", logo: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000" },
      { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "Hugging Face", logo: "https://cdn.simpleicons.org/huggingface/FFD21E" },
    ],
    usedFor: [
      "AI assistants and chatbots",
      "Document search and knowledge systems",
      "Internal workflow automation",
      "Custom AI-powered product features",
    ],
  },
];



const proofStats = [
  { value: "40+", label: "Digital builds delivered" },
  { value: "2-12 weeks", label: "Typical delivery window" },
  { value: "Full-stack", label: "Frontend to cloud" },
  { value: "India → Global", label: "Remote delivery" },
];

const whyDevShuttle = [
  {
    num: "01",
    title: "Clear scope before code",
    body:
      "We define what will be built, what will not be built, and what success looks like before development starts.",
  },
  {
    num: "02",
    title: "Business outcome first",
    body:
      "The goal is not to ship random features. The goal is to help you launch, automate, improve operations, or validate a product.",
  },
  {
    num: "03",
    title: "Full-stack delivery",
    body:
      "One team handles frontend, backend, database, integrations, deployment, and handover, reducing communication gaps.",
  },
  {
    num: "04",
    title: "Production-ready output",
    body:
      "We deliver deployable products with clean structure, documentation, environment setup, and post-launch support options.",
  },
  {
    num: "05",
    title: "Stack matched to the project",
    body:
      "We avoid unnecessary complexity. The tech stack is selected based on scope, timeline, budget, and long-term maintenance.",
  },
  {
    num: "06",
    title: "Built to keep improving",
    body:
      "Your product can keep evolving after launch through support, feature development, performance updates, and modernization.",
  },
];

export default function CustomDevelopmentPage() {
  const ctaRef = useRef<HTMLElement>(null);

  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "start 0.3"],
  });

  const ctaBgScaleX = useTransform(ctaProgress, [0, 0.6], [0, 1]);
  const ctaBgOpacity = useTransform(ctaProgress, [0, 0.3], [0, 1]);

  return (
    <div className="bg-background-light min-h-screen text-primary-dark [overflow-x:clip] relative">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 text-primary-dark text-[10px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 pointer-events-none z-40"
      >
        Custom Engineering
      </motion.span>

      {/* Hero */}
      <section className="relative pt-36 md:pt-20 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <svg width="100%" height="100%" className="opacity-[0.025]">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="absolute top-0 right-0 w-[620px] h-[420px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-wide relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block text-accent font-bold tracking-[0.25em] text-[10px] uppercase mb-8"
          >
            Custom Software Development
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,7vw,5.2rem)] font-bold leading-[1] tracking-tighter font-display text-primary-dark mb-8 max-w-5xl"
          >
            Build software that fits your workflow, users, and growth.
          </motion.h1>

          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20 mb-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-gray-500 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              DevShuttle helps founders and growing businesses build websites, SaaS MVPs, dashboards,
              portals, booking systems, and custom web applications from idea to deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 shrink-0"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs font-bold tracking-wide uppercase overflow-hidden active:scale-[0.98] transition-transform duration-300 bg-primary-dark"
              >
                <span className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
                <span className="relative z-10 text-white">Get a Technical Roadmap</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold tracking-wide uppercase border border-primary-dark/15 text-primary-dark hover:border-accent/40 hover:text-accent transition-colors duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-black/5 pt-10"
          >
            {proofStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-display font-bold text-primary-dark tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] font-bold text-primary-dark/40 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Pillars */}
      <section className="relative py-16 lg:py-16 bg-white border-t border-black/5 overflow-hidden">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-24 mb-14 lg:mb-20">
            <div className="lg:w-7/12">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-primary-dark/40 font-bold tracking-[0.25em] text-[10px] uppercase mb-6"
              >
                Engineering Approach
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2rem,5vw,3.7rem)] font-display font-bold leading-[1.08] tracking-tight text-primary-dark"
              >
                We build with structure, not guesswork.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-5/12 text-brand-gray-500 text-[15px] md:text-base leading-[1.85]"
            >
              Every project starts with clarity: the problem, the users, the workflows, the launch
              scope, and the technical foundation required to ship with confidence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {technicalPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-background-light border border-black/5 rounded-sm p-7 hover:border-accent/40 hover:shadow-sm transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-4 right-5 text-[3rem] font-display font-bold text-primary-dark/[0.04] leading-none select-none group-hover:text-accent/10 transition-colors duration-500">
                  {pillar.num}
                </div>

                <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-7 group-hover:bg-accent transition-all duration-500">
                  <pillar.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-lg font-display font-bold text-primary-dark mb-4">
                  {pillar.title}
                </h3>

                <p className="text-sm text-brand-gray-500 leading-relaxed mb-6">
                  {pillar.body}
                </p>

                <div className="flex flex-wrap gap-2">
                  {pillar.chips.map((chip) => (
                    <span
                      key={chip}
                      className="px-3 py-1.5 rounded-full bg-white border border-black/5 text-[10px] uppercase tracking-widest font-bold text-primary-dark/55"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technology Stack */}
      <section className="relative py-16 lg:py-16 bg-primary-dark border-t border-white/5 overflow-hidden">
        {/* Subtle dot-grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="stack-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stack-grid)" />
          </svg>
        </div>

        <div className="container-wide relative z-10">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-24 mb-14 lg:mb-16">
            <div className="lg:w-7/12">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-white/40 font-bold tracking-[0.25em] text-[10px] uppercase mb-6"
              >
                Core Stack
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(1.9rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight font-display text-white mb-6"
              >
                Technology built for real product delivery.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/50 text-[15px] md:text-base leading-[1.85] max-w-2xl"
              >
                We choose reliable, production-ready technologies based on your product goals,
                workflows, scalability needs, and long-term maintenance requirements.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-5/12"
            >
              <div className="bg-white/5 border border-white/10 rounded-sm p-6">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/30 mb-4">
                  Stack Philosophy
                </div>
                <p className="text-sm md:text-[15px] leading-[1.8] text-white/50">
                  We do not choose tools because they are trendy. We choose the stack that helps your
                  product launch faster, stay maintainable, and scale without unnecessary technical debt.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Compact stack rows */}
          <div className="divide-y divide-white/[0.06]">
            {coreStack.map((stack, i) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-5 hover:bg-white/[0.03] transition-colors duration-300 px-3 -mx-3 rounded-sm"
              >
                {/* Icon + category name */}
                <div className="flex items-center gap-4 sm:w-60 shrink-0">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-400">
                    <stack.icon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[13px] font-bold text-white/60 group-hover:text-white transition-colors duration-300 leading-tight">
                    {stack.category}
                    {stack.optional && (
                      <span className="ml-2 text-[9px] text-accent font-bold uppercase tracking-widest align-middle">
                        Optional
                      </span>
                    )}
                  </span>
                </div>

                {/* Tech pills — wraps naturally, no scroll needed */}
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-white/45 group-hover:border-white/20 group-hover:text-white/60 transition-colors duration-300"
                    >
                      <img src={tech.logo} alt={tech.name} width={14} height={14} className="shrink-0" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why DevShuttle */}
      <section className="relative py-16 md:py-16 bg-white border-t border-black/5 overflow-hidden">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-24 mb-16 lg:mb-20">
            <div className="lg:w-7/12">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-primary-dark/40 font-bold tracking-[0.25em] text-[10px] uppercase mb-6"
              >
                Why DevShuttle
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-tight font-display text-primary-dark"
              >
                Built right. Delivered with clarity.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-5/12 text-brand-gray-500 text-[15px] md:text-base leading-[1.85]"
            >
              Whether it&apos;s a legacy rewrite, SaaS product, client portal, dashboard, or workflow
              tool, we keep the project tied to your business outcome from first call to launch.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
            {whyDevShuttle.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-7 bg-background-light border border-black/5 rounded-sm hover:border-accent/40 hover:shadow-sm transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-4 right-5 text-[3rem] font-display font-bold text-primary-dark/[0.04] leading-none select-none group-hover:text-accent/10 transition-colors duration-500">
                  {item.num}
                </div>

                <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent mb-4">
                  {item.num}
                </div>

                <h3 className="text-base font-display font-bold text-primary-dark mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-brand-gray-500 leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs font-bold tracking-wide uppercase overflow-hidden active:scale-[0.98] transition-transform duration-300 bg-primary-dark"
            >
              <span className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
              <span className="relative z-10 text-white">Start Your Project</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/process"
              className="text-xs font-bold uppercase tracking-widest text-primary-dark/50 hover:text-accent transition-colors"
            >
              See how we work â†’
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Service Packages Teaser ── */}
      <section className="relative py-16 lg:py-16 bg-background-light border-t border-black/5 overflow-hidden">
        <div className="container-wide">
          {/* Section header */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-24 mb-14 lg:mb-16">
            <div className="lg:w-7/12">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-primary-dark/40 font-bold tracking-[0.25em] text-[10px] uppercase mb-6"
              >
                Service Packages
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2rem,5vw,3.7rem)] font-display font-bold leading-[1.08] tracking-tight text-primary-dark"
              >
                Structured delivery for every stage.
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-5/12 flex flex-col gap-6"
            >
              <p className="text-brand-gray-500 text-[15px] md:text-base leading-[1.85]">
                Every package has a defined scope, clear deliverables, and a predictable
                timeline. Pick the one that matches your current stage.
              </p>
              <Link
                href="/packages"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-primary-dark transition-colors duration-300"
              >
                View all packages &amp; pricing
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Package cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
            {[
              {
                num: "01", name: "Business Website",
                desc: "Designed for companies that need a professional website.",
                suitable: ["Startups", "Service businesses", "Company websites"],
              },
              {
                num: "02", name: "MVP Web Application",
                desc: "Designed for startups and businesses that need a working product quickly.",
                suitable: ["Startup MVPs", "Prototype platforms", "Product validation"],
              },
              {
                num: "03", name: "Business Dashboard / Admin Panel",
                desc: "Designed for internal business tools.",
                suitable: ["Operations teams", "Internal tools", "Reporting systems"],
              },
              {
                num: "04", name: "Booking / Workflow Application",
                desc: "Designed for service businesses that require scheduling systems.",
                suitable: ["Clinics", "Service providers", "Event management"],
              },
              {
                num: "05", name: "SaaS MVP Platform",
                desc: "Designed for founders building startup software products.",
                suitable: ["SaaS startups", "Subscription platforms", "Early launches"],
                highlight: true,
              },
              {
                num: "06", name: "Application Modernization",
                desc: "Designed for businesses with legacy systems that need upgrades.",
                suitable: ["Legacy platforms", "Outdated systems", "Performance improvements"],
              },
            ].map((pkg, i) => (
              <motion.div
                key={pkg.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative bg-white border rounded-sm p-6 hover:shadow-md transition-all duration-500 overflow-hidden ${
                  pkg.highlight
                    ? "border-accent/40 ring-1 ring-accent/15"
                    : "border-black/5 hover:border-accent/30"
                }`}
              >
                {/* Ghost number */}
                <div className="absolute top-4 right-5 text-[3.5rem] font-display font-bold text-primary-dark/[0.04] leading-none select-none group-hover:text-accent/8 transition-colors duration-500">
                  {pkg.num}
                </div>

                {pkg.highlight && (
                  <span className="absolute top-0 right-0 bg-accent text-white text-[9px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-bl-sm">
                    Popular
                  </span>
                )}

                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-accent mb-3">
                  Package {pkg.num}
                </div>

                <h3 className="text-base font-display font-bold text-primary-dark mb-3 leading-snug">
                  {pkg.name}
                </h3>

                <p className="text-sm text-brand-gray-500 leading-relaxed mb-5">
                  {pkg.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {pkg.suitable.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-background-light border border-black/5 text-[10px] font-bold text-primary-dark/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary-dark/40 group-hover:text-accent transition-colors duration-300"
                >
                  View details
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="relative z-30 overflow-hidden bg-primary-dark">
        <motion.div
          className="absolute inset-0 bg-accent"
          style={{
            scaleX: ctaBgScaleX,
            opacity: ctaBgOpacity,
            transformOrigin: "left center",
          }}
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="container-wide relative z-10 py-20 lg:py-16">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block text-white/50 font-bold tracking-[0.25em] text-[10px] uppercase mb-6"
            >
              Work With Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,6vw,4rem)] font-display font-bold text-white leading-[1.06] tracking-tight mb-6"
            >
              Ready to build something useful, scalable, and launch-ready?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-10"
            >
              Tell us what you need to build, fix, or launch. We&apos;ll help you scope it, choose
              the right stack, and deliver it with a clear technical roadmap.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs font-bold tracking-wide uppercase overflow-hidden active:scale-[0.98] transition-transform duration-300 bg-white text-primary-dark"
              >
                <span className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
                <span className="relative z-10 group-hover:text-white transition-colors">
                  Get a Technical Roadmap
                </span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs font-bold tracking-wide uppercase border border-white/20 text-white hover:border-white/50 transition-colors duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-10 right-10 lg:top-16 lg:right-16 pointer-events-none opacity-10">
          <svg width="140" height="140" viewBox="0 0 140 140">
            {Array.from({ length: 100 }).map((_, i) => {
              const row = Math.floor(i / 10);
              const col = i % 10;

              return (
                <circle
                  key={i}
                  cx={col * 14 + 7}
                  cy={row * 14 + 7}
                  r="1.5"
                  fill="white"
                />
              );
            })}
          </svg>
        </div>
      </section>
    </div>
  );
}
