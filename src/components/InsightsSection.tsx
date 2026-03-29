import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const insights = [
  {
    category: "Web & Digital Design",
    title: "Building a Thriving Partnership with Your Digital Agency",
  },
  {
    category: "Web & Digital Design",
    title: "The Modern Web Playbook: Launching a SaaS Site That Resonates",
  },
  {
    category: "SEO & Marketing",
    title: "Where AI Meets Growth: Future-Ready Marketing for B2B Companies",
  },
  {
    category: "Web & Digital Design",
    title: "Designing High-Intent Journeys: Conversion Rate Optimization",
  },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-spaced-lg text-muted-foreground text-sm mb-4">
          LATEST INSIGHTS
        </h2>
        <p className="text-xl md:text-2xl text-foreground max-w-md">
          Our thoughts and perspectives on digital.
        </p>
      </motion.div>

      <div className="flex flex-col">
        {insights.map((insight, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group flex items-start md:items-center justify-between gap-4 py-7 border-t border-border hover:text-accent transition-colors"
          >
            <div className="flex-1">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {insight.category}
              </span>
              <h3 className="font-heading text-lg md:text-xl font-medium text-foreground mt-1 group-hover:text-accent transition-colors">
                {insight.title}
              </h3>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
          </motion.a>
        ))}
        <div className="border-t border-border" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <a href="#" className="text-spaced hover-line text-foreground pb-1">
          VIEW MORE INSIGHTS
        </a>
      </motion.div>
    </section>
  );
};

export default InsightsSection;
