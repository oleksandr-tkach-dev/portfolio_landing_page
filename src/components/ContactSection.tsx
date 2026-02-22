import { motion } from "framer-motion";
import { Phone, Mail, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "+380679319950",
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
    value: "Oleksandr Tkach",
    href: "https://www.linkedin.com/in/oleksandr-tkach",
  },
];

const ContactSection = () => (
  <section id="contact" className="section-padding bg-surface-elevated">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold mb-12"
      >
        Let's Connect
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, i) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group"
          >
            <contact.icon className="w-6 h-6 text-primary mb-3 group-hover:text-accent transition-colors" />
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{contact.label}</p>
            <p className="text-foreground font-medium text-sm">{contact.value}</p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p className="text-sm text-muted-foreground">Languages: Ukrainian (Native) · English (A2)</p>
        <p className="text-sm text-muted-foreground">Interests: Work · Gym · Fishing</p>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
