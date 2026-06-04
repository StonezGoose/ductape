export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { VIDEOS, SITE, SOCIAL } from "@/lib/content";

export const metadata: Metadata = { title: `Videos — ${SITE.name}` };

export default function VideosPage() {
  return (
    <main className="bg-black min-h-screen">
      <Nav />
      <section className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-white/35 text-xs tracking-[0.35em] uppercase mb-4 font-mono">Videos</p>
        <div className="flex items-end justify-between mb-16">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.03em] text-white">Watch</h1>
          <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer"
            className="text-white/40 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors hidden md:flex items-center gap-2 font-mono">
            YouTube Channel <span className="text-white/20">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {VIDEOS.map((v: typeof VIDEOS[0]) => (
            <div key={v.id}>
              <div className="relative w-full bg-white/5" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-white/70 text-sm font-light">{v.title}</p>
                <span className="text-white/30 text-xs font-mono">{v.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/8 pt-10 text-center">
          <p className="text-white/35 text-sm mb-6">More videos on YouTube</p>
          <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer"
            className="bg-white text-black px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:bg-white/90 transition-colors inline-block">
            YouTube Channel
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
