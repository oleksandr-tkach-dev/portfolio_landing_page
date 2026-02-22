import { motion } from "framer-motion";
import { Smartphone, Gamepad2, Database, Code2, Globe, Layers } from "lucide-react";

const skills = [
  { icon: Smartphone, title: "Flutter Development", desc: "Cross-platform mobile apps" },
  { icon: Gamepad2, title: "Unity / C#", desc: "Game & interactive development" },
  { icon: Database, title: "Firebase & Backend", desc: "Auth, Database, Cloud" },
  { icon: Code2, title: "Clean Architecture", desc: "SOLID, BLoC, MVVM patterns" },
  { icon: Globe, title: "REST & WebSockets", desc: "Real-time communication" },
  { icon: Layers, title: "State Management", desc: "BLoC, Provider, UniRx" },
];

const techTools = [
  "Dart", "Flutter", "Unity", "C#", "Firebase", "REST API", "Socket.IO",
  "BLoC", "Provider", "MVVM", "Zenject", "Google Pay", "Apple Pay",
  "Sqflite", "Addressables", "Git", "Swagger", "Postman",
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-surface-elevated">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold mb-2"
      >
        What Can I Do?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-12"
      >
        Industries: Mobile · FinTech · Gaming · Crypto
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
          >
            <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:text-accent transition-colors" />
            <h3 className="font-display font-semibold text-lg mb-1">{skill.title}</h3>
            <p className="text-sm text-muted-foreground">{skill.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold mb-8"
      >
        Tech Stack
      </motion.h2>
      <div className="flex flex-wrap gap-3">
        {techTools.map((tool, i) => (
          <motion.span
            key={tool}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="px-4 py-2 rounded-lg bg-card border border-border text-sm text-secondary-foreground hover:border-primary/40 transition-colors"
          >
            {tool}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
