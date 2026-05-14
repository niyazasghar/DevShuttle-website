"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";

const industries = [
  {
    id: 1,
    title: "Healthcare",
    subtitle: "Smarter Care, Better Outcomes",
    description: "Innovative software solutions to improve patient care.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Media & Entertainment",
    subtitle: "Engaging Digital Experiences",
    description: "Scalable platforms for streaming and digital content.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Retail & eCommerce",
    subtitle: "Seamless Online Shopping",
    description: "Modern commerce solutions to drive more sales.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "FinTech",
    subtitle: "Secure Financial Tech",
    description: "Robust applications for modern financial services.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "EdTech",
    subtitle: "Empowering Education",
    description: "Interactive platforms for online learning.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
  }
];

export default function IndustriesWeCater() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-tight font-display text-primary-dark mb-4">
              Industries We Cater to
            </h2>
            <p className="text-brand-gray-500 text-base md:text-lg leading-relaxed">
              Get what you are looking for to fulfill your software development and outsourcing needs at DevShuttle, with our expertise on all in-demand technologies & platforms.
            </p>
          </div>
          
          {/* Arrows */}
          <div className="flex items-center gap-4 shrink-0">
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

        {/* Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {industries.map((industry) => (
            <div 
              key={industry.id}
              className="group relative w-[280px] sm:w-[320px] md:w-[300px] shrink-0 h-[400px] bg-white rounded-[24px] overflow-hidden cursor-pointer snap-start"
            >
              {/* Image Container */}
              <div className="absolute top-0 inset-x-0 h-[80%] group-hover:h-[40%] transition-all duration-500 ease-in-out origin-top overflow-hidden rounded-t-[24px] group-hover:rounded-b-[24px] z-10">
                <Image 
                  src={industry.image} 
                  fill 
                  className="object-cover" 
                  alt={industry.title} 
                />
              </div>

              {/* Default Bottom Bar */}
              <div className="absolute bottom-0 inset-x-0 h-[20%] bg-[#f4f4f5] flex items-center justify-between px-6 transition-all duration-500 ease-in-out group-hover:translate-y-full group-hover:opacity-0 rounded-b-[24px] z-10">
                <span className="text-primary-dark font-medium text-lg">{industry.title}</span>
                <ArrowUpRight className="w-5 h-5 text-primary-dark" />
              </div>

              {/* Hover Dark Blue Box */}
              <div className="absolute bottom-0 inset-x-0 h-[58%] bg-[#0f172a] rounded-[24px] p-6 flex flex-col justify-between transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-20">
                <div>
                  <div className="flex justify-between items-center text-white mb-6">
                    <h3 className="font-bold text-xl">{industry.title}</h3>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="font-semibold text-lg leading-tight mb-2">{industry.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-white text-sm font-semibold underline underline-offset-4 decoration-1">Expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
