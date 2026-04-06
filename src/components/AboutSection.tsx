import { motion, useReducedMotion } from "framer-motion";
import { Compass, ShieldCheck, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Architecture & ownership",
    desc: "Clean Architecture, feature-first structure, BLoC in production, Riverpod or Provider when they suit the project.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & reliability",
    desc: "Thoughtful state boundaries, error handling, and performance-aware UI—especially around real-time data and payments.",
  },
  {
    icon: Rocket,
    title: "End-to-end delivery",
    desc: "From API contracts and integrations (REST, WebSockets, Firebase) through to store-ready builds and maintainable releases.",
  },
];

const AboutSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-padding border-t border-border/60" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="about-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="font-display text-3xl md:text-4xl font-bold mb-4"
        >
          Professional profile
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.05 }}
          className="text-muted-foreground text-base md:text-lg max-w-3xl leading-relaxed mb-12"
        >
          I am a <strong className="text-foreground font-medium">full-stack mobile developer</strong> with several years of production experience. I build Flutter apps used by real users, integrate with backends and third-party services, and ensure they run reliably. I take ownership of complex features, keep code maintainable, and work closely with backend and product teams to deliver solutions with clear architecture and solid integrations.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : i * 0.06 }}
              className="p-6 rounded-xl bg-card/80 border border-border hover:border-primary/25 transition-colors"
            >
              <item.icon className="w-7 h-7 text-primary mb-4" aria-hidden />
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
