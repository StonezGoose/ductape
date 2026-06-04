"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { RELEASES, IMAGES } from "@/lib/content";

const OBSCURE_COVER = IMAGES.obscureCover;

const releases = RELEASES.map((r: typeof RELEASES[0]) => ({
  title: r.title,
  year: r.year,
  type: r.type,
  href: r.buyUrl,
  art: r.art,
}));

export default function LatestRelease() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="release" className="bg-black py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Featured single ── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-white/35 text-xs tracking-[0.35em] uppercase mb-5"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              New Single — Faded Flowers
            </p>
            <h2
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-white mb-6"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              Obscure
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
              The third and final preview of the upcoming album{" "}
              <em className="text-white/80">FADED FLOWERS</em>, following
              &ldquo;Fine&rdquo; and &ldquo;Gölgesiz&rdquo;. Includes a live
              video recorded in Berlin.
            </p>
            <div className="flex gap-4">
              <a
                href="https://open.spotify.com/artist/2Qte1S9njYjLMRDYlbRFny"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-200"
              >
                Stream
              </a>
              <a
                href="https://ductape.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white/70 px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:border-white/40 hover:text-white transition-colors duration-200"
              >
                Bandcamp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
            style={{ paddingBottom: "100%", position: "relative" }}
          >
            <Image
              src={OBSCURE_COVER}
              alt="Obscure — Ductape"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 45vw"
              style={{ position: "absolute", inset: 0 }}
            />
          </motion.div>
        </div>

        {/* ── Discography grid ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-white/25 text-xs tracking-[0.35em] uppercase mb-8"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Discography
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {releases.map((r: typeof releases[0], i: number) => (
            <motion.a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.4 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square overflow-hidden"
            >
              {r.art ? (
                <Image
                  src={r.art}
                  alt={r.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              ) : (
                /* Styled text tile for releases without art */
                <div className="absolute inset-0 bg-white/5 border border-white/8 flex flex-col justify-end p-4">
                  <span
                    className="text-white/15 text-5xl font-light leading-none mb-2 tracking-[-0.04em] select-none"
                    style={{ fontFamily: "var(--font-geist-sans)" }}
                  >
                    {r.year.slice(2)}
                  </span>
                </div>
              )}

              {/* Hover overlay with info */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-300 flex flex-col justify-end p-3">
                <div className="translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-medium tracking-wide truncate">
                    {r.title}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span
                      className="text-white/50 text-xs"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                      {r.year}
                    </span>
                    <span className="text-white/25 text-xs">·</span>
                    <span
                      className="text-white/40 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                      {r.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Always-visible title for text tiles */}
              {!r.art && (
                <div className="absolute inset-0 flex flex-col justify-start p-4">
                  <p className="text-white/70 text-sm font-light leading-tight">
                    {r.title}
                  </p>
                  <p
                    className="text-white/30 text-xs mt-1 tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {r.type}
                  </p>
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
