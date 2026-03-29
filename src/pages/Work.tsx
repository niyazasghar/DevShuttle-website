import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const allProjects = [
  { name: "Nextera", type: "Corporate Website", tags: ["UX Design", "Development"], image: project1 },
  { name: "FinVault", type: "SaaS Platform", tags: ["Product Design", "Branding"], image: project2 },
  { name: "MediCore", type: "Corporate Website", tags: ["Strategy", "Development"], image: project3 },
  { name: "RoboSync", type: "Product Website", tags: ["Creative Direction", "UI/UX"], image: project4 },
  { name: "CloudPeak", type: "Dashboard", tags: ["Data Visualization", "UX"], image: project1 },
  { name: "TradeFlow", type: "Fintech App", tags: ["Mobile Design", "Development"], image: project2 },
];

const Work = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <ScrollToTop />

        <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16 md:pt-40 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-spaced-lg text-muted-foreground text-sm mb-6"
          >
            OUR WORK
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-3xl"
          >
            Projects that speak for themselves.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            A selection of our recent work across web design, branding, and digital strategy.
          </motion.p>
        </section>

        <section className="px-6 md:px-12 lg:px-24 pb-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {allProjects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-5">
                  <img
                    src={project.image}
                    alt={`${project.name} project`}
                    loading="lazy"
                    width={840}
                    height={1120}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-spaced-lg text-foreground text-base font-heading font-semibold mb-1">
                  {project.name.split("").join("  ").toUpperCase()}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{project.type}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <FooterSection />
      </div>
    </PageTransition>
  );
};

export default Work;
