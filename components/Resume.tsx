"use client";

import { motion } from "framer-motion";

// RESUME: Place your resume PDF at /public/resume.pdf — this button will auto-download it

// EDIT: Resume section subtitle
const SUBTITLE = "A snapshot of what I've built and where I've been.";

// EDIT: Last updated date for resume
const LAST_UPDATED = "March 2026";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      {/* EDIT: Section heading */}
      <p className="section-heading">{"// resume.pdf"}</p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <p className="font-sans text-text-secondary text-sm mb-8">
          {SUBTITLE}
        </p>

        <a
          href="/resume.pdf"
          download
          className="group font-mono text-sm px-6 sm:px-8 py-3 w-full sm:w-auto text-center border border-accent text-accent rounded-sm transition-all duration-300 hover:bg-accent hover:text-black"
        >
          → Download Resume
        </a>

        <p className="font-mono text-text-muted text-xs mt-4">
          Last updated: {LAST_UPDATED}
        </p>
      </motion.div>
    </section>
  );
}
