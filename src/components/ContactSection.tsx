import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "+380 67 931 99 50",
    href: "tel:+380679319950",
  },
  {
    icon: Mail,
    label: "Email",
    value: "tkacholeksandr.dev@gmail.com",
    href: "mailto:tkacholeksandr.dev@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/oleksandr-tkach",
    href: "https://www.linkedin.com/in/oleksandr-tkach",
  },
];

const ContactSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="section-padding bg-surface-elevated border-t border-border/60" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="contact-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="font-display text-3xl md:text-4xl font-bold mb-4"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.05 }}
          className="text-muted-foreground mb-12 max-w-2xl leading-relaxed"
        >
          LinkedIn or email are best. I usually reply within a business day.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : i * 0.06 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <contact.icon className="w-6 h-6 text-primary mb-3 group-hover:text-accent transition-colors" aria-hidden />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{contact.label}</p>
              <p className="text-foreground font-medium text-sm break-all">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mt-16 pt-8 border-t border-border flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10"
        >
          <div className="text-sm text-muted-foreground leading-relaxed space-y-1.5 max-w-2xl">
            <p className="text-foreground/80 font-medium">Languages:</p>
            <p>Ukrainian (native).</p>
            <p>
              English — comfortable with reading and technical documentation; spoken{" "}
              <abbr title="Common European Framework of Reference">CEFR</abbr> A2, improving.
            </p>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-1.5 shrink-0 sm:text-right">
            <p className="text-foreground/80 font-medium">Outside work:</p>
            <p>Gym, Fishing,</p>
            <p>Soldering—microcircuit/small electronics.</p>
          </div>
        </motion.div>

        <p className="mt-2 md:mt-32 w-full text-center text-xs text-muted-foreground pb-2">
          © {new Date().getFullYear()} Oleksandr Tkach · Fullstack Mobile Developer
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
