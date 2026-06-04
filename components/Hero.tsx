"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

const BAND_PHOTO =
  "https://static.wixstatic.com/media/c82d5f_4e38fe6c23d74597a5b96187be7f665d~mv2.png/v1/fill/w_1920,h_1280,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ductape2026_edited.png";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Band photo background */}
      <div className="absolute inset-0">
        <Image
          src={BAND_PHOTO}
          alt="Ductape 2026"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.65 }}
        />
      </div>

      {/* Three.js scene — z-index above photo */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <ThreeScene />
      </div>

      {/* Gradient vignettes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.45) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 25%, transparent 65%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          className="text-white/40 text-xs tracking-[0.45em] uppercase mb-8"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Post-Punk · Darkwave · Istanbul / Berlin
        </p>

        <div className="mb-8">
          <Image
            src="https://static.wixstatic.com/media/c82d5f_79d0e9f57c0b43118b6c685392317826~mv2.png/v1/fill/w_674,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%202.png"
            alt="Ductape"
            width={337}
            height={34}
            priority
            className="mx-auto w-[clamp(220px,40vw,420px)] h-auto"
          />
        </div>

        <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto mb-14 leading-relaxed font-light tracking-[0.15em] uppercase">
          Sound of then, now and what&apos;s to come
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://open.spotify.com/artist/2Qte1S9njYjLMRDYlbRFny"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-9 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-200"
          >
            Stream Now
          </a>
          <a
            href="#tour"
            className="border border-white/25 text-white/80 px-9 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:border-white/50 hover:text-white transition-colors duration-200"
          >
            Tour Dates
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-25">
        <div className="w-px h-10 bg-white animate-pulse mx-auto" />
      </div>
    </section>
  );
}
