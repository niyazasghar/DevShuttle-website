import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import CallToActionSweep from '@/components/home/CallToActionSweep';

// Mock data for the dynamic pages
const servicesData: Record<string, { title: string; description: string; features: string[] }> = {
  "website-design-development": {
    title: "Website Design & Development",
    description: "We build premium, high-conversion websites that establish trust and clearly communicate your value proposition. From custom design to SEO-ready architecture, we handle everything.",
    features: ["Custom UI/UX Design", "Responsive Layouts", "SEO Optimization", "Performance Tuning"]
  },
  "startup-landing-pages": {
    title: "Startup Landing Pages",
    description: "Launch quickly and start collecting leads with high-converting landing pages designed specifically for startups testing the market.",
    features: ["Rapid Prototyping", "A/B Testing Ready", "Lead Capture Integration", "Analytics Setup"]
  },
  "saas-mvp-development": {
    title: "SaaS MVP Development",
    description: "Validate your software idea with a fully functional Minimum Viable Product. We focus on core features to get you to market faster.",
    features: ["User Authentication", "Payment Gateway Integration", "Database Architecture", "Scalable Cloud Hosting"]
  },
  "custom-web-applications": {
    title: "Custom Web Applications",
    description: "Replace manual processes with tailored web applications. We build systems that fit your exact business workflows.",
    features: ["Complex Workflows", "API Integrations", "Role-based Access", "Data Security"]
  },
  "admin-dashboards": {
    title: "Admin Dashboards",
    description: "Gain control over your data with custom admin panels that give you insights at a glance and simplify operations.",
    features: ["Real-time Data Visualization", "Custom Reporting", "Data Export/Import", "User Management"]
  },
  "client-portals": {
    title: "Client Portals",
    description: "Enhance your customer experience with secure, dedicated portals where clients can access their information, documents, and services.",
    features: ["Secure Document Sharing", "Messaging Systems", "Account Management", "White-labeling"]
  },
  "booking-workflow-systems": {
    title: "Booking & Workflow Systems",
    description: "Automate your scheduling and operational workflows to save time and reduce administrative overhead.",
    features: ["Calendar Integration", "Automated Reminders", "Payment Processing", "Resource Allocation"]
  },
  "app-modernization": {
    title: "App Modernization",
    description: "Upgrade your legacy applications with modern technologies for better performance, security, and scalability.",
    features: ["Code Refactoring", "Cloud Migration", "UI/UX Refresh", "Performance Audits"]
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background-light min-h-screen text-primary-dark pt-32 ">
      <div className="container-wide">
        <Link href="/services" className="inline-flex items-center gap-2 text-brand-gray-500 hover:text-accent transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide">Back to Services</span>
        </Link>

        <div className="max-w-4xl">
          <span className="text-accent font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6 block">
            SERVICE DETAILS
          </span>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] text-accent font-extrabold leading-[1.05] tracking-tighter mb-8 font-display">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-brand-gray-600 leading-relaxed font-light mb-12 max-w-2xl">
            {service.description}
          </p>

          <div className="bg-white p-8 md:p-12 rounded-2xl border border-black/5 shadow-sm">
            <h2 className="text-2xl font-bold font-display tracking-tight mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-brand-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CallToActionSweep />
    </div>
  );
}
