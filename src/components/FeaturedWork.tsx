import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { name: "Nextera", type: "Corporate Website", image: project1 },
  { name: "FinVault", type: "SaaS Platform", image: project2 },
  { name: "MediCore", type: "Corporate Website", image: project3 },
  { name: "RoboSync", type: "Product Website", image: project4 },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-spaced-lg text-muted-foreground mb-4 text-sm">
          FEATURED WORK
        </h2>
        <p className="text-xl md:text-2xl text-foreground max-w-md">
          Explore some of our latest website projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href="#"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group block"
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
            <p className="text-sm text-muted-foreground">{project.type}</p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a href="#" className="text-spaced hover-line text-foreground pb-1">
          VIEW MORE WORK
        </a>
      </motion.div>
    </section>
  );
};

export default FeaturedWork;
