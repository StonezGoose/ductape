export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE, TOUR_DATES } from "@/lib/content";

export const metadata: Metadata = { title: `Tickets — ${SITE.name}` };

const MONTH_LABELS: Record<string, string> = {
  JAN: "January", FEB: "February", MAR: "March",    APR: "April",
  MAY: "May",     JUN: "June",     JUL: "July",     AUG: "August",
  SEP: "September",OCT: "October", NOV: "November", DEC: "December",
};

// Group by month
const months: Record<string, typeof TOUR_DATES> = {};
TOUR_DATES.forEach((d: typeof TOUR_DATES[0]) => {
  const m = d.date.split(" ")[1];
  if (!months[m]) months[m] = [];
  months[m].push(d);
});

export default function TicketsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Nav />
      <section className="pt-28 pb-24 max-w-4xl mx-auto px-6 md:px-10">


        {/* Events by month */}
        <div id="events" className="space-y-8">
          {Object.entries(months).map(([month, dates]) => (
            <div key={month}>
              {/* Month header */}
              <h3 className="text-white/25 text-xs tracking-[0.25em] uppercase font-mono mb-4">
                {MONTH_LABELS[month] ?? month}
              </h3>

              {/* Event cards */}
              <div className="space-y-3">
                {dates.map((d: typeof TOUR_DATES[0]) => (
                  <div
                    key={`${d.date}-${d.city}`}
                    className="bg-white/[0.03] border border-white/8 p-5 md:p-6 hover:bg-white/[0.06] transition-colors duration-200 group"
                  >
                    {/* Date row */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        {/* Day and flag */}
                        <div className="flex items-center gap-3">
                          <span className="text-white text-lg md:text-xl font-light">{d.date}</span>
                          <span className="text-2xl">{d.flag}</span>
                        </div>

                        {/* Event info */}
                        <div className="flex-1">
                          <h4 className="text-white text-base md:text-lg font-light leading-tight mb-1">
                            {d.city}
                          </h4>
                          <p className="text-white/35 text-sm">{d.venue}</p>
                        </div>
                      </div>

                      {/* Ticket button */}
                      {d.sold ? (
                        <span className="text-white/25 text-xs tracking-widest font-mono whitespace-nowrap py-2 md:py-0">
                          Sold Out
                        </span>
                      ) : (
                        <a
                          href={d.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-black px-6 py-2 text-xs md:text-sm font-medium tracking-[0.15em] uppercase hover:bg-white/90 transition-all duration-200 inline-block whitespace-nowrap"
                        >
                          Buy Tickets
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-white/20 text-xs font-mono mt-12 pt-8 border-t border-white/8">
          More dates may be added. Follow on social media for announcements.
        </p>
      </section>
      <Footer />
    </main>
  );
}
