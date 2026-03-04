"use client";

import { motion } from "framer-motion";

// EDIT: Work experience entries
const WORK = [
  {
    company: "Adeptstation",
    role: "Software Developer Intern",
    period: "October 2025 – Present · Vadodara, Gujarat",
    bullets: [
      "Delivered scalable full-stack features using Laravel, React.js, and PostgreSQL, supporting active client deployments.",
      "Containerized dev environments with Docker, improving onboarding and deployment consistency.",
    ],
  },
];

// EDIT: Education entries
const EDUCATION = [
  {
    institution: "B.Tech — Computer Science Engineering",
    detail: "3rd Year · India",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      {/* EDIT: Section heading */}
      <p className="section-heading">{"// experience.log"}</p>

      <div className="relative pl-8 border-l border-accent/30">
        {/* Work */}
        {WORK.map((job, i) => (
          <motion.div
            key={job.company}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-12 relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />

            <h3 className="font-mono font-bold text-text-primary text-base">
              {job.company}
            </h3>
            <p className="font-mono text-accent text-sm mb-1">{job.role}</p>
            <p className="font-mono text-text-muted text-xs mb-3">
              {job.period}
            </p>
            <ul className="space-y-2">
              {job.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="font-sans text-text-secondary text-sm leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-text-muted"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Education */}
        <motion.div
          custom={WORK.length}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-accent/50" />
          {EDUCATION.map((edu) => (
            <div key={edu.institution}>
              <h3 className="font-mono font-bold text-text-primary text-base">
                {edu.institution}
              </h3>
              <p className="font-mono text-text-muted text-xs">{edu.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
