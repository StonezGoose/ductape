import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE, CONTACT, IMAGES } from "@/lib/content";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Press — ${SITE.name}`,
};

export default function PressPage() {
  return (
    <main className="bg-black min-h-screen">
      <Nav />
      <section className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-white/35 text-xs tracking-[0.35em] uppercase mb-4 font-mono">Press &amp; Media</p>
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.03em] text-white mb-16">
          Press Kit
        </h1>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <p className="text-white/55 text-sm leading-[1.9] font-light mb-6">
              {SITE.bioFull[0]}
            </p>
            <p className="text-white/55 text-sm leading-[1.9] font-light mb-10">
              {SITE.bioFull[1]}
            </p>
            <div className="border-t border-white/8 pt-8">
              <p className="text-white/35 text-xs tracking-[0.3em] uppercase mb-4 font-mono">Press Contact</p>
              <a href={`mailto:${CONTACT.general}`} className="text-white/60 text-sm hover:text-white transition-colors">
                {CONTACT.general}
              </a>
            </div>
          </div>

          <div className="relative aspect-square">
            <Image src={IMAGES.bandPhoto} alt="Ductape press photo" fill className="object-cover" sizes="50vw" />
          </div>
        </div>

        <div className="border-t border-white/8 pt-10">
          <p className="text-white/35 text-xs tracking-[0.3em] uppercase mb-6 font-mono">Download</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={IMAGES.bandPhoto}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white/70 px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:border-white/40 hover:text-white transition-colors duration-200"
            >
              Band Photo (High Res)
            </a>
            <a
              href={IMAGES.logo}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white/70 px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:border-white/40 hover:text-white transition-colors duration-200"
            >
              Logo (PNG)
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
