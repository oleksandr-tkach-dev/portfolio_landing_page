import { motion } from "framer-motion";

const experiences = [
  {
    period: "Apr 2024 – Present",
    role: "Senior Flutter Developer",
    company: "Carma Taxi s. r. o.",
    location: "Slovakia",
    description: "Two standalone taxi applications — a client app that allows users to create ride requests, and a driver app for accepting and completing those rides.",
    tech: ["Dart/Flutter", "Clean Architecture", "BLoC", "REST", "Socket.IO", "Firebase", "Google Pay", "Apple Pay"],
  },
  {
    period: "Oct 2022 – Feb 2024",
    role: "Middle Unity Developer",
    company: "Cryptomeria Labs LTD",
    location: "Singapore",
    description: "A game that allows players to collect graphical crypto coins and withdraw them directly to their MetaMask wallet.",
    tech: ["Unity/C#", "WebSocket", "Zenject", "UniRx", "MVVM", "Addressables", "Firebase", "Telegram API"],
  },
  {
    period: "Feb 2021 – Aug 2022",
    role: "Junior Flutter Developer",
    company: "GIDD LLC",
    location: "Poland",
    description: "A startup application for scanning business cards, storing data in local and external databases, and sharing contact details.",
    tech: ["Dart/Flutter", "BLoC", "Sqflite", "Firebase Auth", "Swagger", "Postman"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold mb-12"
      >
        Work Experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8"
          >
            <div className="text-sm text-muted-foreground font-mono">{exp.period}</div>
            <div>
              <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
              <p className="text-primary text-sm mt-1">@ {exp.company} · {exp.location}</p>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="font-display text-2xl font-bold mb-6">Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8">
          <div className="text-sm text-muted-foreground font-mono">2024 – Present</div>
          <div>
            <h4 className="font-display text-lg font-semibold">Bachelor of Science</h4>
            <p className="text-primary text-sm mt-1">Kryvyi Rih State Pedagogical University</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
