import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-spaced-lg text-muted-foreground text-sm mb-8"
        >
          A SOFTWARE AGENCY
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug font-heading font-light"
        >
          We are a software studio dedicated to building mission-critical web applications, scalable systems, and high-performance mobile products for ambitious startups and brands.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
