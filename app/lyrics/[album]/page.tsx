import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE, LYRICS_ALBUMS, SOCIAL } from "@/lib/content";

export async function generateStaticParams() {
  return LYRICS_ALBUMS.map((a) => ({ album: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ album: string }> }): Promise<Metadata> {
  const { album } = await params;
  const a = LYRICS_ALBUMS.find((x) => x.slug === album);
  if (!a) return {};
  return { title: `${a.title} Lyrics — ${SITE.name}` };
}

export default async function AlbumLyricsPage({ params }: { params: Promise<{ album: string }> }) {
  const { album } = await params;
  const albumData = LYRICS_ALBUMS.find((a) => a.slug === album);
  if (!albumData) notFound();

  const prevAlbum = LYRICS_ALBUMS[LYRICS_ALBUMS.indexOf(albumData) - 1];
  const nextAlbum = LYRICS_ALBUMS[LYRICS_ALBUMS.indexOf(albumData) + 1];

  return (
    <main className="bg-black min-h-screen">
      <Nav />
      <section className="pt-32 pb-24 max-w-4xl mx-auto px-6 md:px-10">

        {/* Back */}
        <Link href="/lyrics" className="text-white/30 text-xs font-mono tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 mb-12">
          <span>←</span> All Albums
        </Link>

        {/* Header */}
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start mb-16">
          {albumData.art && (
            <div className="relative w-32 h-32 shrink-0">
              <Image src={albumData.art} alt={albumData.title} fill className="object-cover" sizes="128px" />
            </div>
          )}
          <div>
            <p className="text-white/35 text-xs tracking-[0.35em] uppercase mb-2 font-mono">
              {albumData.year} · {albumData.type}
            </p>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-light tracking-[-0.03em] text-white">
              {albumData.title}
            </h1>
            <div className="flex gap-4 mt-4">
              <a href={SOCIAL.spotify} target="_blank" rel="noopener noreferrer" className="text-white/40 text-xs font-mono tracking-widest uppercase hover:text-white transition-colors">
                Stream on Spotify →
              </a>
              <a href={SOCIAL.bandcamp} target="_blank" rel="noopener noreferrer" className="text-white/40 text-xs font-mono tracking-widest uppercase hover:text-white transition-colors">
                Bandcamp →
              </a>
            </div>
          </div>
        </div>

        {/* Track listing */}
        <div className="border-t border-white/8">
          {albumData.tracks.map((track: typeof albumData.tracks[0]) => (
            <div key={track.title} className="border-b border-white/8 py-8">
              {/* Track header */}
              <div className="flex items-baseline gap-4 mb-4">
                <div className="flex items-baseline gap-3 flex-1">
                  <h2 className="text-white text-lg font-light">{track.title}</h2>
                </div>
              </div>

              {/* Lyrics or placeholder */}
              {track.lyrics ? (
                <div className="ml-9">
                  <p className="text-white/60 text-sm leading-[2] font-light whitespace-pre-line">
                    {track.lyrics}
                  </p>
                </div>
              ) : (
                <div className="ml-9">
                  <p className="text-white/20 text-xs font-mono">Lyrics not yet added</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Prev / Next navigation */}
        <div className="flex justify-between mt-12 pt-8 border-t border-white/8">
          {prevAlbum ? (
            <Link href={`/lyrics/${prevAlbum.slug}`} className="text-white/35 text-xs font-mono hover:text-white transition-colors flex items-center gap-2">
              ← {prevAlbum.title}
            </Link>
          ) : <div />}
          {nextAlbum ? (
            <Link href={`/lyrics/${nextAlbum.slug}`} className="text-white/35 text-xs font-mono hover:text-white transition-colors flex items-center gap-2">
              {nextAlbum.title} →
            </Link>
          ) : <div />}
        </div>
      </section>
      <Footer />
    </main>
  );
}
