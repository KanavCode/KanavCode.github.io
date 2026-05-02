"use client";

import { motion } from "framer-motion";

const RESUME_DRIVE_LINK = "https://drive.google.com/drive/folders/1X5rtSQW-pOIRFMCqA8MvUBvwUZ5R8zAx?usp=drive_link";

// EDIT: Resume section subtitle
const SUBTITLE = "A snapshot of what I've built and where I've been.";

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
          href={RESUME_DRIVE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group font-mono text-sm px-6 sm:px-8 py-3 w-full sm:w-auto text-center border border-accent text-accent rounded-sm transition-all duration-300 hover:bg-accent hover:text-black"
        >
          → View / Download Resume
        </a>
      </motion.div>
    </section>
  );
}
