"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

import { GALLERY_PHOTOS } from "@/lib/content";
// Homepage preview: mix of 3 promo + 3 live
const photos = [
  ...GALLERY_PHOTOS.filter((p: typeof GALLERY_PHOTOS[0]) => p.category === "promo").slice(0, 3),
  ...GALLERY_PHOTOS.filter((p: typeof GALLERY_PHOTOS[0]) => p.category === "live").slice(0, 3),
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-black border-t border-white/8 py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p
              className="text-white/35 text-xs tracking-[0.35em] uppercase mb-3"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Gallery
            </p>
            <h2
              className="text-[clamp(2rem,5vw,4rem)] font-light leading-tight tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              On stage
            </h2>
          </div>
          <a
            href="/gallery"
            className="text-white/40 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors duration-200 hidden md:flex items-center gap-2"
          >
            <span>Full Gallery</span>
            <span className="text-white/20">→</span>
          </a>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="relative overflow-hidden group"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"
              />
              {photo.label && (
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p
                    className="text-white/80 text-xs tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {photo.label}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex md:hidden">
          <a
            href="/gallery"
            className="text-white/40 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            <span>Full Gallery</span>
            <span className="text-white/20">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
