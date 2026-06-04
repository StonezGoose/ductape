export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE, PRESS_QUOTES, FESTIVALS, CONTACT, IMAGES, RELEASES } from "@/lib/content";

export const metadata: Metadata = { title: `About — ${SITE.name}` };

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-0 max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-white/35 text-xs tracking-[0.35em] uppercase mb-4 font-mono">About</p>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end mb-16">
          <div>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-light tracking-[-0.04em] text-white leading-none">
              DUCTAPE
            </h1>
            <p className="text-white/40 text-sm mt-3 font-mono tracking-widest">
              {SITE.genre} · {SITE.origin}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {SITE.bioFull.map((p: string, i: number) => (
              <p key={i} className="text-white/55 text-sm leading-[1.9] font-light">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Band photo */}
      <div className="relative w-full" style={{ maxHeight: "60vh", overflow: "hidden" }}>
        <Image src={IMAGES.bandPhoto} alt="Ductape" fill className="object-cover object-top" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
      </div>

      {/* Members */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 border-b border-white/8">
        <p className="text-white/25 text-xs tracking-[0.35em] uppercase mb-8 font-mono">Members</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-xl">
          {[
            { name: "Çağla Güleray",  role: "Vocals · Synthesizer" },
            { name: "Furkan Güleray", role: "Guitar · Bass · Drum Programming" },
          ].map((m) => (
            <div key={m.name}>
              <p className="text-white text-base font-light">{m.name}</p>
              <p className="text-white/35 text-xs font-mono tracking-widest mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Press quotes */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 border-b border-white/8">
        <p className="text-white/25 text-xs tracking-[0.35em] uppercase mb-10 font-mono">Press</p>
        <div className="grid md:grid-cols-3 gap-8">
          {PRESS_QUOTES.map((q) => (
            <div key={q.source} className="border border-white/8 p-6">
              <p className="text-white/70 text-sm leading-relaxed italic mb-6">
                &ldquo;{q.quote}&rdquo;
              </p>
              <div>
                <p className="text-white/50 text-xs font-mono tracking-widest">{q.source} {q.country && `(${q.country})`}</p>
                {q.author && <p className="text-white/30 text-xs mt-0.5">{q.author} · {q.date}</p>}
                {!q.author && q.date && <p className="text-white/30 text-xs mt-0.5">{q.date}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discography summary */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 border-b border-white/8">
        <p className="text-white/25 text-xs tracking-[0.35em] uppercase mb-8 font-mono">Discography</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {RELEASES.filter((r: typeof RELEASES[0]) => r.art).map((r: typeof RELEASES[0]) => (
            <a key={r.title} href={r.streamUrl} target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden">
              <Image src={r.art!} alt={r.title} fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300" sizes="25vw" />
              <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-light">{r.title}</p>
                <p className="text-white/40 text-xs font-mono">{r.year}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Festivals */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 border-b border-white/8">
        <p className="text-white/25 text-xs tracking-[0.35em] uppercase mb-8 font-mono">Festival Appearances</p>
        <div className="flex flex-wrap gap-3">
          {FESTIVALS.map((f) => (
            <span key={f} className="border border-white/10 text-white/45 text-xs font-mono tracking-wide px-3 py-1.5">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <p className="text-white/25 text-xs tracking-[0.35em] uppercase mb-8 font-mono">Contact & Booking</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "General",      email: CONTACT.general },
            { label: "EU/DE Booking",email: CONTACT.bookingEU },
            { label: "Worldwide",    email: CONTACT.bookingWorldwide },
          ].map((c) => (
            <div key={c.label}>
              <p className="text-white/30 text-xs font-mono mb-2">{c.label}</p>
              <a href={`mailto:${c.email}`} className="text-white/60 text-sm hover:text-white transition-colors">{c.email}</a>
            </div>
          ))}
        </div>
        <div className="mt-10 flex gap-4">
          <a href={IMAGES.bandPhoto} target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white/60 px-6 py-3 text-xs font-mono tracking-widest uppercase hover:border-white/40 hover:text-white transition-colors">
            Download Band Photo
          </a>
          <a href={IMAGES.logo} target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white/60 px-6 py-3 text-xs font-mono tracking-widest uppercase hover:border-white/40 hover:text-white transition-colors">
            Download Logo
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
