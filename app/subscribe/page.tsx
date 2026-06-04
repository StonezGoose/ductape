import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Subscribe — ${SITE.name}`,
};

export default function SubscribePage() {
  return (
    <main className="bg-black min-h-screen">
      <Nav />
      <div className="pt-24">
        <Newsletter />
      </div>
      <Footer />
    </main>
  );
}
