import { motion, useReducedMotion } from "framer-motion";
import {
  Smartphone,
  Cpu,
  Database,
  Code2,
  Globe,
  Layers,
  TestTube2,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    icon: Smartphone,
    title: "Flutter at scale",
    desc: "Cross-platform apps with disciplined layering, navigation, and platform-aware behavior where iOS and Android differ.",
  },
  {
    icon: Code2,
    title: "Architecture & patterns",
    desc: "Clean Architecture, feature-first modules, and SOLID-minded boundaries—primarily BLoC in production, plus Riverpod/Provider where they fit best.",
  },
  {
    icon: Globe,
    title: "APIs & real-time",
    desc: "REST and WebSocket integrations with pragmatic error handling, retries where appropriate, and clear client contracts.",
  },
  {
    icon: Database,
    title: "Firebase & persistence",
    desc: "Auth, cloud-backed workflows, and local persistence (e.g. Sqflite) when offline or performance requires it.",
  },
  {
    icon: Layers,
    title: "State & composition",
    desc: "Composable UIs with predictable state: streams and cubits, Riverpod/notifier patterns, dependency injection (e.g. get_it + injectable), and disciplined side effects.",
  },
  {
    icon: TestTube2,
    title: "Quality mindset",
    desc: "Unit and widget tests, integration_test flows, and mocktail—focused on domain and use-case coverage where it prevents regressions.",
  },
  {
    icon: GitBranch,
    title: "Delivery hygiene",
    desc: "Git with CI on GitHub Actions or Codemagic, Fastlane for builds and signing, and PRs kept focused for review.",
  },
  {
    icon: Cpu,
    title: "Platform & native bridges",
    desc: "MethodChannel and native hooks, background work (WorkManager, FCM), geolocation pipelines, and AOSP-facing Android customization when products sit below pure UI-level Flutter.",
  },
];

const techCategories: { title: string; items: string[] }[] = [
  {
    title: "Flutter & Dart",
    items: ["Dart 3", "Flutter", "Material Design", "Cupertino", "Responsive layouts", "Accessibility basics"],
  },
  {
    title: "State, DI & architecture",
    items: [
      "BLoC / Cubit",
      "Riverpod",
      "Provider",
      "Clean Architecture",
      "Get It",
      "SOLID & Layering",
    ],
  },
  {
    title: "Navigation & app shell",
    items: ["Go Router", "Deep linking", "Route guards", "App lifecycle"],
  },
  {
    title: "Networking & serialization",
    items: ["Dio", "Http", "REST", "WebSocket", "Socket.IO", "Retrofit (Dart)", "Json Serializable", "Equatable"],
  },
  {
    title: "Persistence & offline",
    items: ["Sqflite", "Drift", "SharedPreferences", "SecureStorage", "Local caching strategies"],
  },
  {
    title: "Firebase & backends",
    items: [
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Storage",
      "Cloud Functions",
      "FCM",
      "Crashlytics",
      "Remote Config",
    ],
  },
  {
    title: "Payments & platform channels",
    items: ["Google Pay", "Apple Pay", "Platform channels"],
  },
  {
    title: "Quality & testing",
    items: ["flutter_test", "integration_test", "Static analysis (lints)"],
  },
  {
    title: "Tooling, CI/CD & release",
    items: ["Git", "GitHub Actions", "App Store Connect", "Google Play Console"],
  },
  {
    title: "API design & collaboration",
    items: ["Swagger / OpenAPI", "Postman", "Contract-driven iteration"],
  },
  {
    title: "Android platform & native integration",
    items: [
      "AOSP",
      "WorkManager",
      "FCM",
      "Geolocation",
      "MethodChannel / EventChannel",
      "iOS Shortcuts",
      "Webhooks",
    ],
  },
];

const SkillsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-padding bg-surface-elevated" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="skills-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="font-display text-3xl md:text-4xl font-bold mb-4"
        >
          Core expertise
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.05 }}
          className="text-muted-foreground mb-12 max-w-2xl leading-relaxed"
        >
          Most of my recent work is in <strong className="text-foreground font-medium">mobility and on-demand</strong>,{" "}
          <strong className="text-foreground font-medium">payments and integrations</strong>, and{" "}
          <strong className="text-foreground font-medium">real-time client systems</strong>, and{" "}
          <strong className="text-foreground font-medium">native bridges and Android platform work</strong> where the product needs
          more than screen-level Flutter alone.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : i * 0.05 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <skill.icon
                className="w-8 h-8 text-primary mb-4 group-hover:text-accent transition-colors"
                aria-hidden
              />
              <h3 className="font-display font-semibold text-lg mb-1">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="font-display text-2xl md:text-3xl font-bold mb-6"
        >
          Tech stack & tools
        </motion.h3>
        <p className="text-sm text-muted-foreground mb-10 max-w-3xl leading-relaxed">
          Recent production work is built around <strong className="text-foreground font-medium">BLoC</strong>,{" "}
          <strong className="text-foreground font-medium">Clean Architecture</strong>,{" "}
          <strong className="text-foreground font-medium">Firebase</strong>,{" "}
          <strong className="text-foreground font-medium">REST</strong>, and{" "}
          <strong className="text-foreground font-medium">WebSockets</strong>. I also use{" "}
          <strong className="text-foreground font-medium">Riverpod</strong>,{" "}
          <strong className="text-foreground font-medium">Go Router</strong>, codegen.
        </p>
        <div className="space-y-8">
          {techCategories.map((category, ci) => {
            let badgeIndex = 0;
            for (let j = 0; j < ci; j++) badgeIndex += techCategories[j].items.length;
            return (
              <div key={category.title}>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{category.title}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((tool, ti) => {
                    const i = badgeIndex + ti;
                    return (
                      <motion.span
                        key={tool}
                        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : i * 0.015 }}
                        className="px-3.5 py-1.5 rounded-lg bg-card border border-border text-sm text-secondary-foreground hover:border-primary/40 transition-colors"
                      >
                        {tool}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
