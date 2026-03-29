import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

const values = [
  { title: "Craft", description: "Every pixel matters. We obsess over details to create experiences that feel inevitable." },
  { title: "Collaboration", description: "Great work happens together. We partner closely with our clients at every step." },
  { title: "Impact", description: "Design without results is decoration. We build things that move the needle." },
  { title: "Innovation", description: "We stay ahead of the curve, bringing fresh thinking to every challenge." },
];

const team = [
  { name: "Alex Rivera", role: "Founder & Creative Director" },
  { name: "Jordan Lee", role: "Lead Developer" },
  { name: "Sam Patel", role: "UX Strategist" },
  { name: "Morgan Chen", role: "Visual Designer" },
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <ScrollToTop />

        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16 md:pt-40 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-spaced-lg text-muted-foreground text-sm mb-6"
          >
            ABOUT US
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-4xl"
          >
            We build digital experiences that matter.
          </motion.h1>
        </section>

        {/* Story */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-secondary">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-spaced-lg text-muted-foreground text-sm mb-6">OUR STORY</p>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                A team of designers and developers passionate about crafting exceptional digital products.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-6 text-muted-foreground text-base leading-relaxed"
            >
              <p>
                DevShuttle was founded with a simple belief: great design solves real problems. We combine strategic thinking with meticulous execution to create websites and digital products that drive measurable results.
              </p>
              <p>
                Based in the heart of the digital landscape, we work with ambitious brands—from funded startups to established enterprises—helping them stand out in an increasingly crowded online world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-spaced-lg text-muted-foreground text-sm mb-4">OUR VALUES</p>
            <h2 className="text-xl md:text-2xl text-foreground max-w-md">
              The principles that guide everything we do.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-t border-border py-10 pr-8"
              >
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-secondary">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-spaced-lg text-muted-foreground text-sm mb-4">THE TEAM</p>
            <h2 className="text-xl md:text-2xl text-foreground max-w-md">
              The people behind the work.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="aspect-[3/4] bg-muted mb-5" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <FooterSection />
      </div>
    </PageTransition>
  );
};

export default About;
