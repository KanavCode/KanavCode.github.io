"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

// EDIT: Contact section — main text
const CONTACT_TEXT =
  "Open to collaborations, internships, and interesting problems.";

// EDIT: Social links
const SOCIALS = {
  github: "https://github.com/KanavCode",
  linkedin: "https://www.linkedin.com/in/kanav-modi/",
};

export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{name?: string, email?: string, message?: string}>({});

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setResult("");
    setErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) newErrors.name = "> error: name is required";
    if (!email.trim()) {
      newErrors.email = "> error: email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "> error: valid email is required";
    }
    if (!message.trim()) newErrors.message = "> error: message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("idle");
      return;
    }

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setStatus("success");
        form.reset();
      } else {
        setResult(data.message || "Failed to send message.");
        setStatus("error");
      }
    } catch {
      setResult("Something went wrong. Please try again.");
      setStatus("error");
    }

    setTimeout(() => {
      setResult("");
      setStatus("idle");
    }, 5000);
  };

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

        <form
          onSubmit={onSubmit}
          noValidate
          className="w-full sm:w-auto flex flex-col gap-4 mb-8"
        >
          <input type="hidden" name="access_key" value="6348d070-6cd3-4f27-9290-919a66d5c96d" />
          <input type="hidden" name="subject" value="New Portfolio Contact Form Submission" />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={`font-mono text-sm px-4 py-3 bg-transparent border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-accent/30 focus:border-accent'} text-text-primary rounded-sm focus:outline-none transition-colors w-full`}
                onChange={() => setErrors(prev => ({ ...prev, name: undefined }))}
              />
              <span className="absolute -top-2.5 left-3 px-1 bg-background text-[10px] font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {"> enter your name"}
              </span>
              {errors.name && (
                <span className="block mt-1 text-left text-[10px] font-mono text-red-500">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="relative group w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`font-mono text-sm px-4 py-3 bg-transparent border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-accent/30 focus:border-accent'} text-text-primary rounded-sm focus:outline-none transition-colors w-full`}
                onChange={() => setErrors(prev => ({ ...prev, email: undefined }))}
              />
              <span className="absolute -top-2.5 left-3 px-1 bg-background text-[10px] font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {"> enter your email"}
              </span>
              {errors.email && (
                <span className="block mt-1 text-left text-[10px] font-mono text-red-500">
                  {errors.email}
                </span>
              )}
            </div>
          </div>
          <div className="relative group w-full mt-2">
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className={`font-mono text-sm px-4 py-3 bg-transparent border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-accent/30 focus:border-accent'} text-text-primary rounded-sm focus:outline-none transition-colors resize-none w-full`}
              onChange={() => setErrors(prev => ({ ...prev, message: undefined }))}
            ></textarea>
            <span className="absolute -top-2.5 left-3 px-1 bg-background text-[10px] font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {"> enter your message"}
            </span>
            {errors.message && (
              <span className="block mt-1 text-left text-[10px] font-mono text-red-500">
                {errors.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="group font-mono text-sm px-6 sm:px-8 py-3 w-full text-center border border-accent text-accent rounded-sm transition-all duration-300 hover:bg-accent hover:text-black cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {result && (
            <p className={`font-mono text-sm mt-2 ${status === "success" ? "text-green-500" : "text-red-500"}`}>
              {result}
            </p>
          )}
        </form>

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
        </div>
      </motion.div>
    </section>
  );
}
