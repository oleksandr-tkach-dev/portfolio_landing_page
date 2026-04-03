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
      "Owned substantial feature work across both apps while keeping a consistent architectural style (Clean Architecture + BLoC) for long-term maintainability.",
      "Integrated real-time ride lifecycle updates using Socket.IO alongside REST, with careful attention to connection state and failure modes.",
      "Delivered native in-app payments with Apple Pay and Google Pay, working through platform configuration and payment-flow edge cases.",
      "Firebase for authentication and related cloud services; monitoring and releases in line with team practice.",
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
      "WebSocket-driven features for near-real-time updates, aligned with backend expectations and defensive handling of connection and sync edge cases.",
      "iOS SMS logger: Flutter with MethodChannel into native code; Shortcuts-style automation could call into the app, with local persistence and configurable outbound webhooks and payload shapes.",
      "Android platform layer: work on AOSP-based images and firmware, plus system UI and framework adjustments when off-the-shelf app APIs were not enough.",
      "Firebase and third-party APIs (including Telegram) for engagement, notifications, and operational workflows.",
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
      "Implemented Flutter UI and domain flows with BLoC, growing from feature tasks toward broader module ownership.",
      "Device tracker: one handset could initiate tracking of another via Firebase Cloud Messaging; on the target device, WorkManager and a background service ran geolocation, wrote positions to Firebase, and the client showed live movement and route history.",
      "Persisted structured data locally with Sqflite and synchronized concepts with backend contracts (Swagger, Postman).",
      "Integrated Firebase Authentication and related services to support secure access patterns for a young product.",
    ],
    tech: [
      "Dart/Flutter",
      "BLoC",
      "Sqflite",
      "Firebase Auth",
      "FCM",
      "WorkManager",
      "Geolocation",
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
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">Part-time, alongside full-time engineering work.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
