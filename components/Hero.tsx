"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";

// EDIT: Your name displayed in the hero
const NAME = "Kanav";

// EDIT: Hero tagline
const TAGLINE =
  "CSE student. Software intern. I build full-stack systems by day — and spend the rest of my time wondering why the brain runs on 20 watts.";

// EDIT: Tech stack tags shown below the tagline
const TECH_TAGS = ["React", "TypeScript", "Laravel", "Next.js", "Python"];

// EDIT: Social links — update URLs here
const SOCIALS = {
  github: "https://github.com/KanavCode",
  linkedin: "https://www.linkedin.com/in/kanav-modi/",
};

function useTypewriter(text: string, speed = 50, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

export default function Hero() {
  const greeting = useTypewriter("> Hello, World_", 60, 300);
  const name = useTypewriter(NAME, 80, 800);
  const tagline = useTypewriter(TAGLINE, 25, 1400);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      {/* Top-left greeting */}
      <div className="absolute top-32 md:top-36 left-6 md:left-16 lg:left-24">
        <span className="font-mono text-accent text-xs sm:text-sm">
          {greeting.displayed}
          {!greeting.done && <span className="blink">_</span>}
        </span>
      </div>

      {/* Center content */}
      <div className="mt-16">
        <h1 className="font-mono font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary mb-6 min-h-[1.2em]">
          <span className="glitch" data-text={NAME}>
            {name.displayed}
          </span>
          {name.done && <span className="blink text-accent">_</span>}
        </h1>

        <p className="font-mono text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8 px-2 md:px-0">
          &quot;{tagline.displayed}&quot;
          {tagline.done && <span className="blink text-accent">_</span>}
        </p>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: tagline.done ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {TECH_TAGS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-sm px-3 py-1.5 border border-border text-text-secondary rounded-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom-left: Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 sm:bottom-12 left-6 md:left-16 lg:left-24 flex gap-5"
      >
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
      </motion.div>

      {/* Bottom-right: Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 sm:bottom-12 right-6 md:right-16 lg:right-24 hidden sm:flex items-center gap-2 text-text-muted"
      >
        <span className="font-mono text-xs blink">↓ scroll</span>
        <ChevronDown size={14} className="blink" />
      </motion.div>
    </section>
  );
}
