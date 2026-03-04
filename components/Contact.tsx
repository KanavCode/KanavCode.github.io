"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

// EDIT: Contact section — main text
const CONTACT_TEXT =
  "Open to collaborations, internships, and interesting problems.";

// EDIT: Email address for the CTA button
const EMAIL = "modikanav9@gmail.com";

// EDIT: Social links
const SOCIALS = {
  github: "https://github.com/KanavCode",
  linkedin: "https://www.linkedin.com/in/kanav-modi/",
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto relative overflow-hidden">
      {/* EDIT: Section heading */}
      <p className="section-heading">{"// contact.sh"}</p>

      {/* Ambient background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-mono text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-text-muted/10 whitespace-nowrap">
          let&apos;s_build_something
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center text-center"
      >
        <p className="font-sans text-text-secondary text-sm mb-8">
          {CONTACT_TEXT}
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="group font-mono text-sm px-6 sm:px-8 py-3 w-full sm:w-auto text-center border border-accent text-accent rounded-sm transition-all duration-300 hover:bg-accent hover:text-black mb-8"
        >
          → {EMAIL}
        </a>

        <div className="flex gap-4 sm:gap-5">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
