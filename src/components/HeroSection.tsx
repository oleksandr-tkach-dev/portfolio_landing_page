import { motion, useReducedMotion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full section-padding pt-32">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4"
        >
          Fullstack Mobile Developer
        </motion.p>
        <motion.h1
          id="hero-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
        >
          OLEKSANDR
          <br />
          <span className="text-gradient-warm">TKACH</span>
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.25 }}
          className="mt-6 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          Production-oriented mobile engineer with <strong className="text-foreground font-medium">4+ years</strong> delivering Flutter
          apps in live environments. I combine <strong className="text-foreground font-medium">Clean Architecture</strong>,{" "}
          <strong className="text-foreground font-medium">BLoC</strong>, and solid integration work—REST, WebSockets, Firebase, and
          native payments—so the client stays aligned with real services, auth, and real-time data. I own the mobile side end to end:
          API contracts and error handling, performance-aware UI, store-ready releases, and close collaboration with backend and
          product so what ships stays maintainable after launch.
        </motion.p>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3 rounded-lg bg-gradient-warm text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="inline-flex items-center px-7 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View experience
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-7 py-3 rounded-lg border border-transparent text-muted-foreground font-medium text-sm hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
