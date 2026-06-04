export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE, LYRICS_ALBUMS } from "@/lib/content";

export const metadata: Metadata = { title: `Lyrics — ${SITE.name}` };

export default function LyricsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Nav />
      <section className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-white/35 text-xs tracking-[0.35em] uppercase mb-4 font-mono">Lyrics</p>
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.03em] text-white mb-16">
          All Albums
        </h1>

        <div className="space-y-0">
          {LYRICS_ALBUMS.map((album) => (
            <Link
              key={album.slug}
              href={`/lyrics/${album.slug}`}
              className="group flex items-center gap-6 md:gap-10 border-t border-white/8 py-6 hover:bg-white/[0.03] transition-colors px-2 -mx-2"
            >
              {/* Cover art */}
              <div className="relative w-16 h-16 shrink-0 bg-white/5 overflow-hidden">
                {album.art ? (
                  <Image src={album.art} alt={album.title} fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity" sizes="64px" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/15 text-2xl font-light">{album.year.slice(2)}</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-white text-base font-light group-hover:translate-x-1 transition-transform duration-200">
                  {album.title}
                </p>
                <p className="text-white/30 text-xs font-mono mt-1">
                  {album.year} · {album.type} · {album.tracks.length} track{album.tracks.length !== 1 ? "s" : ""}
                </p>
              </div>

              {/* Track preview */}
              <div className="hidden md:flex flex-wrap gap-x-4 gap-y-1 max-w-sm">
                {album.tracks.slice(0, 4).map((t) => (
                  <span key={t.title} className="text-white/25 text-xs truncate">{t.title}</span>
                ))}
                {album.tracks.length > 4 && (
                  <span className="text-white/20 text-xs">+{album.tracks.length - 4} more</span>
                )}
              </div>

              <span className="text-white/0 group-hover:text-white/40 text-sm transition-colors shrink-0">→</span>
            </Link>
          ))}
          <div className="border-t border-white/8" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
