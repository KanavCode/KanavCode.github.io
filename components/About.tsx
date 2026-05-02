"use client";

import { motion } from "framer-motion";

// EDIT: About section — bio paragraphs (each string is one paragraph)
const BIO = [
  "3rd year Computer Science student, currently interning as a Software Developer at Adeptstation.",
  "I work across the full stack — React, TypeScript, Laravel, and whatever the problem demands.",
  "Outside of code: Badminton. Table Tennis. And an unhealthy interest in how the brain actually works.",
  "Based in India. Open to remote.",
];

// EDIT: Skills list — grouped by category
const SKILLS = [
  { label: "Languages", items: "JavaScript, TypeScript, C/C++, PHP, Python" },
  { label: "Frontend", items: "React, Next.js, Tailwind CSS, React Native" },
  { label: "Backend", items: "Laravel, Node.js, Express.js" },
  { label: "Database", items: "PostgreSQL, MySQL, MongoDB" },
  { label: "Tools", items: "Docker, Git, REST APIs" },
  { label: "Learning", items: "TensorFlow, NLP, ML" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto overflow-x-hidden">
      {/* EDIT: Section heading */}
      <p className="section-heading">{"// about.me"}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Bio */}
        <div className="space-y-5">
          {BIO.map((paragraph, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="font-sans text-text-secondary text-sm sm:text-base leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Skills */}
        <div className="space-y-4">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex gap-3 text-sm font-mono"
            >
              <span className="text-accent shrink-0 w-20 sm:w-24 text-right">
                {skill.label}
              </span>
              <span className="text-text-muted">→</span>
              <span className="text-text-secondary">{skill.items}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
