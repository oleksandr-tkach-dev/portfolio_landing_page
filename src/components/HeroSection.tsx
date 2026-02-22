import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full section-padding pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4"
        >
          FullStack Mobile Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
        >
          OLEKSANDR
          <br />
          <span className="text-gradient-warm">TKACH</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-lg text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          I have over 3 years of experience in designing and developing mobile applications. Focused on cross-platform mobile development using Flutter and Unity, with an accent on performance, scalability, and maintainable architecture.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3 rounded-lg bg-gradient-warm text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="inline-flex items-center px-7 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-colors"
          >
            View Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
