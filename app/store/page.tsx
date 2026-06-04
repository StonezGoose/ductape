export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE, STORE_PRODUCTS } from "@/lib/content";

export const metadata: Metadata = { title: `Store — ${SITE.name}` };

type Product = { name: string; price: string; status: string; url: string; badge: string };

function ProductRow({ p }: { p: Product }) {
  const available = p.status === "available";
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between py-5 border-b border-white/8 px-2 -mx-2 transition-colors duration-200 ${available ? "hover:bg-white/[0.03] cursor-pointer" : "cursor-default"}`}
    >
      <div className="flex items-center gap-4">
        <span className="text-white/80 text-sm font-light group-hover:translate-x-1 transition-transform duration-200">
          {p.name}
        </span>
        {p.badge && (
          <span className="text-white/30 text-xs font-mono tracking-widest border border-white/10 px-2 py-0.5">
            {p.badge}
          </span>
        )}
      </div>
      <div className="flex items-center gap-6 shrink-0">
        {available ? (
          <>
            <span className="text-white/60 text-sm font-mono">{p.price}</span>
            <span className="text-white/0 group-hover:text-white/40 text-xs transition-colors">→</span>
          </>
        ) : (
          <span className="text-white/25 text-xs font-mono tracking-widest">Sold Out</span>
        )}
      </div>
    </a>
  );
}

function Section({ title, products }: { title: string; products: Product[] }) {
  return (
    <div className="mb-14">
      <p className="text-white/25 text-xs tracking-[0.35em] uppercase mb-6 font-mono border-t border-white/8 pt-6">
        {title}
      </p>
      {products.map((p) => <ProductRow key={p.name} p={p} />)}
    </div>
  );
}

export default function StorePage() {
  return (
    <main className="bg-black min-h-screen">
      <Nav />
      <section className="pt-32 pb-24 max-w-4xl mx-auto px-6 md:px-10">
        <p className="text-white/35 text-xs tracking-[0.35em] uppercase mb-4 font-mono">Merch & Music</p>
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.03em] text-white mb-16">
          Store
        </h1>
        <Section title="Vinyl"   products={STORE_PRODUCTS.vinyl} />
        <Section title="CDs"     products={STORE_PRODUCTS.cds} />
        <Section title="T-Shirts" products={STORE_PRODUCTS.tshirts} />
        <Section title="Merch"   products={STORE_PRODUCTS.merch} />
        <Section title="Digital" products={STORE_PRODUCTS.digital} />
      </section>
      <Footer />
    </main>
  );
}
