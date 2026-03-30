import { ArrowRight, Terminal, Award, Users, Target, Globe, Cpu } from "lucide-react";
import Link from "next/link";

const stats = [
   { label: "Founded by", value: "IIIT Graduate" },
   { label: "Technical Standard", value: "Modern Stack" },
   { label: "Deployment Speed", value: "4-12 Weeks" },
   { label: "Software Support", value: "24/7 Monitoring" },
];

export default function AboutPage() {
   return (
      <div className="bg-background-dark min-h-screen pt-40 lg:pt-56 overflow-hidden">
         {/* Hero Section */}
         <section className="container-wide mb-32 lg:mb-56 relative z-10">
            <div className="max-w-4xl">
               <span className="eyebrow">The Studio Story</span>
               <h1 className="text-hero text-white mb-10 leading-[0.95]">
                  Building premium <br />
                  websites and <br />
                  <span className="text-brand-gray-700">digital products.</span>
               </h1>
               <p className="text-xl md:text-3xl text-brand-gray-400 font-light leading-relaxed text-balance">
                  DevShuttle is a digital agency focused on designing and building high-performance websites, scalable web applications, and modern mobile apps for startups and growing businesses.
               </p>
            </div>

            {/* Background Decorative Layer */}
            <div className="absolute top-0 right-[-10%] opacity-5 pointer-events-none grayscale">
               <Terminal className="w-[600px] h-[600px] text-white" />
            </div>
         </section>

         {/* Stats / Numbers */}
         <section className="bg-background-surface py-20 lg:py-32 border-y border-white/5 relative z-10">
            <div className="container-wide">
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
                  {stats.map((stat, i) => (
                     <div key={i} className="flex flex-col gap-2 group cursor-default">
                        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-accent opacity-60 group-hover:opacity-100 transition-opacity">
                           {stat.label}
                        </span>
                        <span className="text-2xl md:text-3xl font-display font-extrabold text-white group-hover:text-accent transition-colors duration-500">
                           {stat.value}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Mission Section */}
         <section className="bg-background-light py-32 lg:py-64 relative z-10">
            <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="relative">
                  <div className="aspect-[4/5] bg-brand-gray-100 rounded-sm overflow-hidden relative group">
                     <img
                        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2669&auto=format&fit=crop"
                        className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110 opacity-90"
                        alt="Software Engineering Depth"
                     />
                     <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
               </div>

               <div className="max-w-2xl">
                  <span className="eyebrow !text-accent/60">Our Core Focus</span>
                  <h2 className="text-section-title text-brand-gray-900 mb-10 !leading-tight">
                     We build the code that <br />
                     powers your growth.
                  </h2>
                  <div className="flex flex-col gap-8 text-xl text-brand-gray-500 font-light leading-relaxed">
                     <p>
                        We provide the technical depth required for scaling startups. While many agencies focus solely on aesthetics, our team prioritizes clean architecture, secure data management, and the high-performance foundations necessary for long-term growth.
                     </p>
                     <p>
                        Founded by an <span className="text-brand-gray-900 font-medium">IIIT Graduate Engineer</span>, our studio handles the entire technical roadmap—from the first line of code to global deployment.
                     </p>
                  </div>

                  <div className="mt-16 pt-16 border-t border-brand-gray-200 grid grid-cols-2 gap-10">
                     <div className="flex flex-col gap-4">
                        <Award className="w-8 h-8 text-accent opacity-60" />
                        <h4 className="text-lg font-bold text-brand-gray-900">Elite Standards</h4>
                        <p className="text-sm text-brand-gray-500 font-light">Clean code patterns and rigorous documentation.</p>
                     </div>
                     <div className="flex flex-col gap-4">
                        <Users className="w-8 h-8 text-accent opacity-60" />
                        <h4 className="text-lg font-bold text-brand-gray-900">Partner-Led</h4>
                        <p className="text-sm text-brand-gray-500 font-light">Direct access to senior engineering leadership.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-32 lg:py-64 bg-background-dark border-t border-white/5 text-center flex flex-col items-center">
            <div className="container-wide">
               <h2 className="text-section-title text-white mb-16 max-w-4xl mx-auto">
                  Want to discuss <br />
                  your technical roadmap?
               </h2>

               <Link href="/contact" className="btn-premium py-6 px-16 group mx-auto w-fit">
                  <span>Connect with Our Team</span>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
               </Link>
            </div>
         </section>
      </div>
   );
}
