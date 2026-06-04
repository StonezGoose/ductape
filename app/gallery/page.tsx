import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GALLERY_PHOTOS, SITE } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Gallery — ${SITE.name}`,
};

const promoPhotos = GALLERY_PHOTOS.filter((p: typeof GALLERY_PHOTOS[0]) => p.category === "promo");
const livePhotos  = GALLERY_PHOTOS.filter((p: typeof GALLERY_PHOTOS[0]) => p.category === "live");

export default function GalleryPage() {
  return (
    <main className="bg-black min-h-screen">
      <Nav />

      {/* ── Image Gallery ── */}
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-white/35 text-xs tracking-[0.35em] uppercase mb-2 font-mono">Gallery</p>
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-light tracking-[-0.03em] text-white mb-10">
          Image Gallery
        </h1>

        {/* 3-column masonry via CSS columns */}
        <div className="columns-2 md:columns-3 gap-1">
          {promoPhotos.map((photo: typeof GALLERY_PHOTOS[0], i: number) => (
            <div key={i} className="group relative overflow-hidden mb-1 break-inside-avoid">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={900}
                height={1100}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Live Photos ── */}
      <section className="pb-24 max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-white/35 text-xs tracking-[0.35em] uppercase mb-2 font-mono mt-16">Live</p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-light tracking-[-0.03em] text-white mb-10">
          Live Photos
        </h2>

        <div className="columns-2 md:columns-3 gap-1">
          {livePhotos.map((photo: typeof GALLERY_PHOTOS[0], i: number) => (
            <div key={i} className="group relative overflow-hidden mb-1 break-inside-avoid">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={800}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              {photo.label && (
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/75 text-xs tracking-[0.2em] uppercase font-mono">
                    {photo.label}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
