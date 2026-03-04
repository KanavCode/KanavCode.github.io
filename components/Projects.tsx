"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

// EDIT: Projects — update name, description, tech stack, and GitHub URLs here
const PROJECTS = [
  {
    name: "AuraMesh 2.0",
    description:
      "Offline-capable mobile communication via Bluetooth Mesh, with AI voice assistance and real-time mapping.",
    tech: ["React Native", "TypeScript", "Bluetooth Mesh API", "IBM Watson"],
    github: "https://github.com/kanavcode/auramesh_2.0",
  },
  {
    name: "StockSense",
    description:
      "AI-powered financial dashboard with ML stock predictions and real-time social media sentiment analysis.",
    tech: ["React", "TypeScript", "Python", "TensorFlow", "NLP", "REST APIs"],
    github: "https://github.com/kanavcode/stocksense",
  },
  {
    name: "Smart Campus Utility Hub",
    description:
      "Full-stack academic platform with automated timetable generation, club management, and an AI chatbot.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "SQL"],
    github: "https://github.com/kanavcode/smart-campus-utility-hub",
  },
  {
    name: "Bank Management System",
    description:
      "Desktop banking simulation with account management, secure transactions, and multi-category loan processing.",
    tech: ["Java", "Java Swing/AWT", "JDBC", "MySQL"],
    github: "https://github.com/kanavcode/bank_management_system",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      {/* EDIT: Section heading */}
      <p className="section-heading">{"// projects.exe"}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-surface border border-border rounded-sm p-4 sm:p-6 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(255,165,0,0.08)]"
          >
            {/* Project name */}
            <h3 className="font-mono font-bold text-accent text-base mb-2">
              {project.name}
            </h3>

            {/* Description */}
            <p className="font-sans text-text-secondary text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech + GitHub */}
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] sm:text-xs px-2 py-0.5 border border-border text-text-muted rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors shrink-0 ml-4"
                aria-label={`GitHub repo for ${project.name}`}
              >
                <Github size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Task 9: View all on GitHub link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-10 text-center"
      >
        {/* EDIT: GitHub profile URL */}
        <a
          href="https://github.com/KanavCode"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-text-secondary hover:text-accent transition-colors border-b border-text-muted hover:border-accent pb-0.5"
        >
          → view all on github
        </a>
      </motion.div>
    </section>
  );
}
