"use client";

import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const teamMembers = [
  {
    name: "Tushar Rawat",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Aastha Negi",
    role: "Co-founder",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Aditya Agarwal",
    role: "Chief Operations Head",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Utkarsh Rajoriya",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Yatendra Sharma",
    role: "Flutter Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Mansingh",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Deepak Kumar",
    role: "Flutter Developer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Manish Das Sharma",
    role: "Chief Technical Officer",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=600&auto=format&fit=crop",
  },
];

/* ─── 3D Carousel Card ─── */
function CarouselCard({
  member,
  offset,
}: {
  member: (typeof teamMembers)[0];
  offset: number; // -2, -1, 0, 1, 2 etc.
}) {
  const isCenter = offset === 0;
  const absOffset = Math.abs(offset);

  // Invert rotation so side cards angle INWARD toward center:
  // Left card (offset -1): rotateY = +50° → right edge comes toward viewer
  // Right card (offset +1): rotateY = -50° → left edge comes toward viewer
  const rotateY = -offset * 50;

  // Push side cards out horizontally — percentage of viewport for responsiveness
  const translateXPercent = offset * 72; // % of container

  // Depth & scale
  const translateZ = isCenter ? 60 : -80;
  const scale = isCenter ? 1.05 : absOffset === 1 ? 0.9 : 0.75;
  const cardOpacity = absOffset > 2 ? 0 : absOffset === 2 ? 0.3 : absOffset === 1 ? 0.85 : 1;
  const zIndex = isCenter ? 20 : absOffset === 1 ? 10 : 5;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[58vw] max-w-[240px] aspect-[3/4] rounded-2xl overflow-hidden"
      animate={{
        rotateY,
        x: `calc(-50% + ${translateXPercent}%)`,
        y: "-50%",
        z: translateZ,
        scale,
        opacity: cardOpacity,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 28,
        mass: 0.9,
      }}
      style={{
        zIndex,
        transformStyle: "preserve-3d",
        boxShadow: isCenter
          ? "0 25px 50px -12px rgba(0,0,0,0.35)"
          : "0 10px 30px -8px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        draggable={false}
      />

      {/* Gradient overlay for side cards */}
      {!isCenter && (
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      )}

      {/* Floating Info Pill — only on center card */}
      {isCenter && (
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <div className="bg-white/90 backdrop-blur-md rounded-xl py-2.5 px-3 text-center shadow-sm">
            <h3 className="text-brand-gray-900 font-display font-bold text-[13px] mb-0.5">
              {member.name}
            </h3>
            <p className="text-brand-gray-500 text-[10px] font-semibold tracking-wide">
              {member.role}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ─── Mobile Carousel ─── */
function MobileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragX = useMotionValue(0);
  const total = teamMembers.length;

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const threshold = 50;
      const velocity = info.velocity.x;
      const offset = info.offset.x;

      if (offset < -threshold || velocity < -500) {
        // Swiped left → next
        setActiveIndex((prev) => (prev + 1) % total);
      } else if (offset > threshold || velocity > 500) {
        // Swiped right → prev
        setActiveIndex((prev) => (prev - 1 + total) % total);
      }

      animate(dragX, 0, { type: "spring", stiffness: 300, damping: 30 });
    },
    [total, dragX]
  );

  // Dot indicator progress
  const dotProgress = useTransform(dragX, [-200, 0, 200], [1, 0, -1]);

  return (
    <div className="w-full flex flex-col items-center -mx-[clamp(24px,5vw,80px)]">
      {/* Carousel viewport */}
      <motion.div
        className="relative w-screen h-[340px] cursor-grab active:cursor-grabbing overflow-hidden"
        style={{ perspective: 1000 }}
      >
        {/* Invisible drag surface */}
        <motion.div
          className="absolute inset-0 z-20"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          style={{ x: dragX }}
        />

        {/* Cards */}
        <div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {teamMembers.map((member, idx) => {
            // Calculate circular offset
            let offset = idx - activeIndex;
            // Wrap around for circular navigation
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            // Only render cards within visible range
            if (Math.abs(offset) > 2) return null;

            return (
              <CarouselCard
                key={member.name}
                member={member}
                offset={offset}
              />
            );
          })}
        </div>
      </motion.div>

      {/* Dot Indicators */}
      <div className="flex gap-2 mt-6">
        {teamMembers.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "bg-accent w-6"
                : "bg-brand-gray-300"
            }`}
            aria-label={`Go to team member ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function OurTeam() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="py-16 lg:py-16 relative z-10 bg-white">
      <div className="container-wide flex flex-col items-center">

        {/* Section heading */}
        <div className="mb-16 sm:mb-24 w-full max-w-6xl text-center lg:text-left transition-all">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="eyebrow !text-accent/60"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-[clamp(2rem,5vw,4.5rem)] font-display font-bold text-primary-dark leading-[1.05] tracking-tight mb-6 sm:mb-8"
          >
            The team behind your <br className="hidden lg:block" /> product build.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-base sm:text-lg md:text-xl text-brand-gray-500 max-w-3xl leading-[1.8] font-light mb-4"
          >
            DevShuttle brings together software engineering, product thinking, and modern design to build digital products that are practical, scalable, and ready for business use.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-base sm:text-lg md:text-xl text-brand-gray-500 max-w-3xl leading-[1.8] font-light"
          >
            We are not here to just write code. We help you clarify the product, plan the right features, build the technical foundation, and launch with confidence.
          </motion.p>
        </div>

        {/* Mobile: 3D Carousel  |  Desktop: Grid */}
        {isMobile ? (
          <MobileCarousel />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="relative aspect-square sm:aspect-[4/5] overflow-hidden group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Info Pill */}
                <div className="absolute bottom-4 left-4 right-4 z-10 mx-auto max-w-[90%]">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl py-3 px-4 text-center shadow-sm">
                    <h3 className="text-brand-gray-900 font-display font-bold text-sm mb-0.5">
                      {member.name}
                    </h3>
                    <p className="text-brand-gray-500 text-[11px] font-semibold tracking-wide">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
