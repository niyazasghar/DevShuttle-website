import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import servicesWeb from "@/assets/services-web.jpg";
import servicesCreative from "@/assets/services-creative.jpg";
import servicesStrategy from "@/assets/services-strategy.jpg";

const services = [
  {
    title: "Websites",
    description: "We build impactful experiences through great UX, design, and development.",
    image: servicesWeb,
  },
  {
    title: "Creative",
    description: "We design visually-engaging marketing assets to help drive your brand forward.",
    image: servicesCreative,
  },
  {
    title: "Strategy",
    description: "We identify business challenges and develop solutions to achieve your goals.",
    image: servicesStrategy,
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-spaced-lg text-muted-foreground text-sm mb-4">
          WHAT WE DO
        </h2>
        <p className="text-xl md:text-2xl text-foreground max-w-md">
          What we know and do best.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-0">
          {services.map((service, i) => (
            <motion.button
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActive(i)}
              className={`text-left border-t border-border py-8 transition-colors ${
                active === i ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-2">
                {service.title}
              </h3>
              <AnimatePresence>
                {active === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground text-base max-w-sm overflow-hidden"
                  >
                    {service.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
          <div className="border-t border-border" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={services[active].image}
              alt={services[active].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full aspect-[3/2] object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
