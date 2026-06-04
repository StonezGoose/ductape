"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface Stat {
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: Stat[] = [
  { target: 8, suffix: "", label: "Releases" },
  { target: 2026, suffix: "", label: "European Tour" },
  { target: 9, suffix: "+", label: "Years Active" },
];

function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(stat.target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, stat.target]);

  const formatted =
    stat.decimals != null
      ? value.toFixed(stat.decimals)
      : Math.round(value).toString();

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <span
        className="text-[clamp(3rem,7vw,5rem)] font-light text-white leading-none tracking-[-0.03em]"
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        {formatted}
        {stat.suffix}
      </span>
      <span
        className="text-white/35 text-xs tracking-[0.25em] uppercase"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {stat.label}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-t border-white/8 bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat) => (
            <CountUp key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
