"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { TOUR_DATES } from "@/lib/content";

// Group dates by month
const MONTHS: Record<string, typeof TOUR_DATES> = {};
TOUR_DATES.forEach((d: typeof TOUR_DATES[0]) => {
  const month = d.date.split(" ")[1];
  if (!MONTHS[month]) MONTHS[month] = [];
  MONTHS[month].push(d);
});

const MONTH_LABELS: Record<string, string> = {
  JAN: "January", FEB: "February", MAR: "March",    APR: "April",
  MAY: "May",     JUN: "June",     JUL: "July",     AUG: "August",
  SEP: "September",OCT: "October", NOV: "November", DEC: "December",
};

export default function TourDates() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="tour" className="bg-black border-t border-white/8 py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-[clamp(1.6rem,3.5vw,3rem)] font-light leading-tight tracking-[-0.02em] text-white/60 mb-2">
            Faded Flowers Tour
          </h2>
          <h3 className="text-[clamp(1.2rem,2vw,1.8rem)] font-light leading-none tracking-[-0.01em] text-white">
            Europe 2026
          </h3>
        </motion.div>

        {/* Month groups */}
        <div className="space-y-0">
          {Object.entries(MONTHS).map(([month, dates], groupIdx) => (
            <motion.div
              key={month}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + groupIdx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Month label */}
              <div className="flex items-center gap-4 pt-8 pb-3 border-t border-white/8">
                <span className="text-white/25 text-xs tracking-[0.3em] uppercase font-mono w-24 shrink-0">
                  {MONTH_LABELS[month] ?? month}
                </span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              {/* Dates in this month */}
              {dates.map((d: typeof TOUR_DATES[0], i: number) => (
                <div
                  key={`${d.date}-${d.city}`}
                  className="grid grid-cols-[3rem_2rem_1fr_auto] md:grid-cols-[4rem_2rem_1fr_1fr_auto] items-center gap-4 md:gap-6 py-4 border-b border-white/5 hover:bg-white/[0.03] transition-colors duration-200 px-3 -mx-3"
                >
                  {/* Day number */}
                  <span className="text-white/50 text-2xl md:text-3xl font-light tabular-nums leading-none">
                    {d.date.split(" ")[0]}
                  </span>

                  {/* Flag */}
                  <span className="text-xl leading-none">{d.flag}</span>

                  {/* City — large */}
                  <span className="text-white text-lg md:text-xl font-light">
                    {d.city}
                  </span>

                  {/* Venue — hidden on mobile */}
                  <span className="text-white/40 text-sm hidden md:block truncate">
                    {d.venue}
                  </span>

                  {/* Buy Tickets button */}
                  {d.sold ? (
                    <span className="text-white/25 text-xs tracking-widest font-mono whitespace-nowrap">
                      Sold Out
                    </span>
                  ) : (
                    <a
                      href={d.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-4 py-2 text-xs md:text-xs font-medium tracking-[0.12em] uppercase hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
                    >
                      Buy Tickets
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
