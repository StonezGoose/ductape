import Link from "next/link";
import Image from "next/image";
import { SOCIAL, CONTACT, NAV, IMAGES } from "@/lib/content";

const socialList = [
  { label: "Spotify",      href: SOCIAL.spotify },
  { label: "Instagram",    href: SOCIAL.instagram },
  { label: "YouTube",      href: SOCIAL.youtube },
  { label: "Bandcamp",     href: SOCIAL.bandcamp },
  { label: "TikTok",       href: SOCIAL.tiktok },
  { label: "Facebook",     href: SOCIAL.facebook },
  { label: "Apple Music",  href: SOCIAL.appleMusic },
  { label: "SoundCloud",   href: SOCIAL.soundcloud },
  { label: "Amazon Music", href: SOCIAL.amazonMusic },
  { label: "X / Twitter",  href: SOCIAL.twitter },
];

const contactList = [
  { label: "General",     href: `mailto:${CONTACT.general}`,          value: CONTACT.general },
  { label: "EU/DE Booking",href: `mailto:${CONTACT.bookingEU}`,        value: CONTACT.bookingEU },
  { label: "Worldwide",   href: `mailto:${CONTACT.bookingWorldwide}`,  value: CONTACT.bookingWorldwide },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/8 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <Image src={IMAGES.logo} alt="Ductape" width={140} height={14} className="mb-4" />
            <p className="text-white/30 text-xs leading-relaxed">
              Post-punk · Darkwave
              <br />Istanbul / Berlin
              <br />Sound of then, now and what&apos;s to come.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <p className="text-white/25 text-xs tracking-[0.3em] uppercase mb-1 font-mono">Pages</p>
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/40 text-xs tracking-[0.15em] uppercase hover:text-white transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/press" className="text-white/40 text-xs tracking-[0.15em] uppercase hover:text-white transition-colors duration-200">Press</Link>
            <Link href="/subscribe" className="text-white/40 text-xs tracking-[0.15em] uppercase hover:text-white transition-colors duration-200">Subscribe</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-white/25 text-xs tracking-[0.3em] uppercase mb-1 font-mono">Contact</p>
            {contactList.map((c) => (
              <div key={c.label}>
                <p className="text-white/25 text-xs mb-0.5">{c.label}</p>
                <a href={c.href} className="text-white/40 text-xs hover:text-white transition-colors duration-200">{c.value}</a>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-2.5">
            <p className="text-white/25 text-xs tracking-[0.3em] uppercase mb-1 font-mono">Follow</p>
            {socialList.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 text-xs tracking-[0.1em] uppercase hover:text-white transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-widest font-mono">
            © {new Date().getFullYear()} Ductape. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/press" className="text-white/20 text-xs tracking-widest hover:text-white/40 transition-colors">Press</Link>
            <a href={`mailto:${CONTACT.general}`} className="text-white/20 text-xs tracking-widest hover:text-white/40 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
