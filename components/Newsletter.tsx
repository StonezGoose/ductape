"use client";

import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export default function Newsletter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("success");
    setEmail("");
  };

  return (
    <section ref={ref} className="bg-black py-24 md:py-36 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <p
            className="text-white/35 text-xs tracking-[0.35em] uppercase mb-5"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Join to the Unknown
          </p>
          <h2
            className="text-[clamp(2rem,5vw,4rem)] font-light leading-tight tracking-[-0.03em] text-white mb-4"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Subscribe for updates
            <br />
            and special offers.
          </h2>
          <p className="text-white/35 text-sm mb-8">
            New music, tour dates, and special offers. Nothing else.
          </p>

          {status === "success" ? (
            <p
              className="text-white/50 text-sm tracking-wide"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              You&apos;re in. Welcome to the unknown.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-0">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-white/20 border-r-0 text-white text-sm px-5 py-3.5 placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-white text-black px-7 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-200 shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
