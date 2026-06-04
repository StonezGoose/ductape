"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV, IMAGES } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-70 transition-opacity">
          <span className="text-white font-light text-lg tracking-widest">DUCTAPE</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/45 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Image src={IMAGES.logo} alt="Ductape" width={120} height={12} />
          <Link
            href="/subscribe"
            className="border border-white/25 text-white/75 px-5 py-2 text-xs font-medium tracking-[0.2em] uppercase hover:border-white/50 hover:text-white transition-colors duration-200"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
}
