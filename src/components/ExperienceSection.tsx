import { motion, useReducedMotion } from "framer-motion";

const experiences = [
  {
    period: "Apr 2024 – Present",
    role: "Senior Flutter Developer",
    company: "Carma Taxi s. r. o.",
    location: "Slovakia",
    summary:
      "Dual-product mobility platform: a passenger app for requesting rides and a driver app for accepting and completing trips—connected through live dispatch-style workflows.",
    highlights: [
      "Led development of real-time ride lifecycle system (Socket.IO + REST) ensuring stable synchronization between client and backend under unstable network conditions",
      "Implemented in-app payments (Apple Pay / Google Pay), handling edge cases in payment flows and platform configuration",
      "Owned feature development across two apps, enforcing consistent architecture (Clean Architecture + BLoC)",
      "Improved app reliability by handling connection state and failure scenarios in real-time features",
    ],
    tech: ["Dart/Flutter", "Clean Architecture", "BLoC", "REST", "Socket.IO", "Firebase", "Google Pay", "Apple Pay"],
  },
  {
    period: "Oct 2022 – Feb 2024",
    role: "Middle Mobile Developer",
    company: "Cryptomeria Labs LTD",
    location: "Singapore",
    summary:
      "Crypto-adjacent product with live reward flows and wallet-oriented withdrawals. Scope included WebSocket-heavy client work, an iOS SMS logging pipeline with native bridges and webhooks, and Android customization on AOSP-oriented builds.",
    highlights: [
      "Developed real-time features using WebSockets, ensuring reliable data sync and graceful handling of connection edge cases",
      "Built iOS SMS logging feature via MethodChannel with native integration and automation triggers",
      "Worked on Android platform layer (AOSP-based systems), extending system capabilities beyond standard APIs",
      "Integrated Firebase and third-party APIs (including Telegram) for notifications and operational workflows",
    ],
    tech: [
      "Dart/Flutter",
      "WebSocket",
      "MethodChannel",
      "iOS / Shortcuts",
      "Webhooks",
      "Firebase",
      "Telegram API",
      "AOSP",
      "Sqflite",
    ],
  },
  {
    period: "Feb 2021 – Aug 2022",
    role: "Junior Flutter Developer",
    company: "GIDD LLC",
    location: "Poland",
    summary:
      "Early-stage business-card product: scanning, structured local and remote storage, and sharing contact data. Also built a paired-device location tracker on top of the same stack—FCM-triggered wake, background geolocation, and Firebase-backed position history with route playback.",
    highlights: [
      "Developed UI and domain features using BLoC, growing into ownership of larger modules",
      "Implemented local data persistence (SQLite) with synchronization to backend APIs",
      "Built device tracking system with Firebase Cloud Messaging and background services (WorkManager) enabling real-time location sharing",
      "Integrated Firebase Authentication to provide secure user access, authentication flows, and account management",
    ],
    tech: [
      "Dart/Flutter",
      "BLoC",
      "Sqflite",
      "Firebase Auth",
      "FCM",
      "WorkManager",
      "Geolocation",
      "WebRTC",
      "Swagger",
      "Postman",
    ],
  },
];

const ExperienceSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section-padding" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="experience-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8"
            >
              <div className="text-sm text-muted-foreground font-mono shrink-0">{exp.period}</div>
              <div>
                <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                <p className="text-primary text-sm mt-1">
                  {exp.location ? `${exp.company} · ${exp.location}` : exp.company}
                </p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{exp.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/90 leading-relaxed list-disc pl-5 marker:text-primary/80">
                  {exp.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4" aria-label="Technologies">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mt-20"
          aria-labelledby="education-heading"
        >
          <h3 id="education-heading" className="font-display text-2xl font-bold mb-6">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8">
            <div className="text-sm text-muted-foreground font-mono shrink-0">2024 – Present</div>
            <div>
              <h4 className="font-display text-lg font-semibold">Bachelor of Science (in progress)</h4>
              <p className="text-primary text-sm mt-1">Kryvyi Rih State Pedagogical University</p>
              <h4 className="font-display text-lg font-semibold">Physics & Math Faculty</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
