import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24">
      <div className="max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-spaced text-muted-foreground mb-6"
        >
          WE ARE DEVSHUTTLE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-[5.5rem] font-heading font-bold leading-[1.05] tracking-tight text-foreground mb-8"
        >
          A digital agency
          <br />
          focused on web.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          We are a creative team of designers, developers, and strategists building
          elevated websites, scalable web applications, and mobile applications for ambitious brands.
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="inline-block text-spaced hover-line text-foreground pb-1"
        >
          GET TO KNOW US
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <p className="text-spaced text-muted-foreground [writing-mode:vertical-rl]">
          SCROLL TO EXPLORE
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
