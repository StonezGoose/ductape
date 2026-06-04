"use client";

import { TICKER_ITEMS } from "@/lib/content";
const items = TICKER_ITEMS;

// Duplicate for seamless loop
const ITEMS = [...items, ...items];

export default function Ticker() {
  return (
    <div className="border-t border-b border-white/8 py-4 overflow-hidden bg-black">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: "ticker 30s linear infinite",
          width: "max-content",
        }}
      >
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className="text-white/35 text-xs tracking-[0.3em] uppercase shrink-0 flex items-center gap-12"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {item}
            <span className="text-white/15">·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
