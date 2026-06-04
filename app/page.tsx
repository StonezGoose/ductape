import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import LatestRelease from "@/components/LatestRelease";
import TourDates from "@/components/TourDates";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <Ticker />
      <LatestRelease />
      <TourDates />
      <Gallery />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
}
