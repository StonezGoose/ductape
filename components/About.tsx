"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

const BAND_PHOTO =
  "https://static.wixstatic.com/media/c82d5f_199dada3d4314c83ae2f12424a508a96~mv2.jpg/v1/fill/w_1400,h_940,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/bandphoto.jpg";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="about" className="bg-black border-t border-white/8">
      {/* Full-width band photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full"
        style={{ aspectRatio: "16/9", maxHeight: "70vh" }}
      >
        <Image
          src={BAND_PHOTO}
          alt="Ductape"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </motion.div>

      {/* Text section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-white/35 text-xs tracking-[0.35em] uppercase mb-5"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              About
            </p>
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.1] tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              Born from
              <br />
              Istanbul
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 pt-2 md:pt-14"
          >
            <p className="text-white/55 text-sm leading-[1.9] font-light">
              Birthed from the underground music scene of bustling Istanbul,
              Ductape carries the torch of the seminal post-punk revolution —
              pushing the genre into unexplored territories.
            </p>
            <p className="text-white/55 text-sm leading-[1.9] font-light">
              A Turkish post-punk and darkwave duo, Ductape have built a catalog
              spanning eight releases — from{" "}
              <em className="text-white/80">Little Monsters</em> to the
              forthcoming <em className="text-white/80">Faded Flowers</em> — each
              one a darker, more disciplined version of the last.
            </p>
            <div className="flex gap-6 pt-2">
              <a
                href="/press"
                className="text-white/45 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <span>Press Kit</span>
                <span className="text-white/20">→</span>
              </a>
              <a
                href="/gallery"
                className="text-white/45 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <span>Gallery</span>
                <span className="text-white/20">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
