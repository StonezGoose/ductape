"use client";
// eslint-disable-next-line @typescript-eslint/no-explicit-any

import { useState } from "react";
import Image from "next/image";
import { TOUR_DATES, RELEASES, SOCIAL, CONTACT, SITE, TICKER_ITEMS, GALLERY_PHOTOS } from "@/lib/content";

type Tab = "tour" | "releases" | "gallery" | "social" | "contact" | "site";

const TABS: { id: Tab; label: string }[] = [
  { id: "tour",     label: "Tour Dates" },
  { id: "releases", label: "Releases" },
  { id: "gallery",  label: "Gallery" },
  { id: "social",   label: "Social Links" },
  { id: "contact",  label: "Contact" },
  { id: "site",     label: "Site Info" },
];

/* ── Shared field styles ── */
const inputCls =
  "w-full bg-black border border-white/15 text-white text-sm px-4 py-2.5 placeholder:text-white/25 focus:outline-none focus:border-white/40 transition-colors";
const labelCls = "text-white/40 text-xs tracking-[0.2em] uppercase font-mono mb-1.5 block";

interface AdminState {
  tourDates: typeof TOUR_DATES;
  releases: typeof RELEASES;
  gallery: typeof GALLERY_PHOTOS;
  social: typeof SOCIAL;
  contact: typeof CONTACT;
  site: {
    tagline: string;
    genre: string;
    origin: string;
    upcomingAlbum: string;
  };
  ticker: string[];
}

export default function AdminPanel() {
  const [tab, setTab] = useState<Tab>("tour");
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [adminState, setAdminState] = useState<AdminState>({
    tourDates: TOUR_DATES.map((d: typeof TOUR_DATES[0]) => ({ ...d })),
    releases: RELEASES.map((r: typeof RELEASES[0]) => ({ ...r })),
    gallery: GALLERY_PHOTOS.map((p: typeof GALLERY_PHOTOS[0]) => ({ ...p })),
    social: { ...SOCIAL },
    contact: { ...CONTACT },
    site: { tagline: SITE.tagline, genre: SITE.genre, origin: SITE.origin, upcomingAlbum: SITE.upcomingAlbum },
    ticker: [],
  });

  const saveAllData = async () => {
    setSaving(true);
    try {
      const response = await fetch("/api/admin/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: "ductape2026",
          data: adminState,
        }),
      });

      if (response.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        alert("Failed to save changes");
      }
    } catch (error) {
      alert("Error saving: " + error);
    } finally {
      setSaving(false);
    }
  };

  const showSaved = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Top bar */}
      <header className="border-b border-white/8 px-6 md:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-white/50 text-xs tracking-[0.3em] uppercase font-mono">
            Ductape Admin
          </span>
        </div>
        <div className="flex items-center gap-4">
          {saved && (
            <span className="text-green-400 text-xs font-mono animate-pulse">
              ✓ Saved
            </span>
          )}
          <button
            onClick={saveAllData}
            disabled={saving}
            className="bg-white text-black px-6 py-2 text-xs font-medium tracking-[0.15em] uppercase hover:bg-white/90 disabled:opacity-50 transition-colors"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
          <a
            href="/"
            className="text-white/35 text-xs tracking-widest uppercase hover:text-white transition-colors font-mono"
          >
            ← View Site
          </a>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className="w-48 border-r border-white/8 p-6 shrink-0 hidden md:block">
          <nav className="flex flex-col gap-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`text-left px-4 py-2.5 text-xs tracking-[0.15em] uppercase transition-colors font-mono ${
                  tab === t.id
                    ? "text-white bg-white/8"
                    : "text-white/35 hover:text-white hover:bg-white/4"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile tab bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-white/8 flex z-50">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 py-3 text-xs font-mono tracking-wide transition-colors ${
                tab === t.id ? "text-white" : "text-white/30"
              }`}
            >
              {t.label.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-10 pb-24 md:pb-10 overflow-auto">
          {tab === "tour"     && <TourTab     state={adminState.tourDates} onChange={(dates) => setAdminState(s => ({...s, tourDates: dates}))} onSave={showSaved} />}
          {tab === "releases" && <ReleasesTab  state={adminState.releases} onChange={(releases) => setAdminState(s => ({...s, releases}))} onSave={showSaved} />}
          {tab === "gallery"  && <GalleryTab   state={adminState.gallery} onChange={(gallery) => setAdminState(s => ({...s, gallery}))} onSave={showSaved} />}
          {tab === "social"   && <SocialTab    state={adminState.social} onChange={(social) => setAdminState(s => ({...s, social}))} onSave={showSaved} />}
          {tab === "contact"  && <ContactTab   state={adminState.contact} onChange={(contact) => setAdminState(s => ({...s, contact}))} onSave={showSaved} />}
          {tab === "site"     && <SiteTab      state={adminState.site} ticker={adminState.ticker} onSiteSave={(site) => setAdminState(s => ({...s, site}))} onTickerSave={(ticker) => setAdminState(s => ({...s, ticker}))} onSave={showSaved} />}
        </div>
      </div>
    </main>
  );
}

/* ──────────────── Tour Dates ──────────────── */
function TourTab({ state, onChange, onSave }: { state: typeof TOUR_DATES; onChange: (dates: typeof TOUR_DATES) => void; onSave: () => void }) {
  const update = (i: number, key: string, val: string | boolean) => {
    const updated = state.map((d: typeof TOUR_DATES[0], j: number) => (j === i ? { ...d, [key]: val } : d));
    onChange(updated);
  };

  const addRow = () => {
    onChange([
      ...state,
      { date: "", flag: "🏳️", city: "", venue: "", ticketUrl: "", sold: false },
    ]);
  };

  const remove = (i: number) => {
    onChange(state.filter((_: typeof TOUR_DATES[0], j: number) => j !== i));
  };

  return (
    <div>
      <SectionHeader
        title="Tour Dates"
        subtitle="Add, edit or remove shows. Toggle 'Sold Out' to mark a date as sold."
      />
      <div className="space-y-2">
        {state.map((d: typeof TOUR_DATES[0], i: number) => (
          <div key={i} className="border border-white/8 p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <label className={labelCls}>Date</label>
              <input className={inputCls} value={d.date} placeholder="21 FEB" onChange={(e) => update(i, "date", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Flag emoji</label>
              <input className={inputCls} value={d.flag} onChange={(e) => update(i, "flag", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>City</label>
              <input className={inputCls} value={d.city} placeholder="Berlin" onChange={(e) => update(i, "city", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Venue</label>
              <input className={inputCls} value={d.venue} placeholder="Lido" onChange={(e) => update(i, "venue", e.target.value)} />
            </div>
            <div className="md:col-span-2">
              <label className={labelCls}>Ticket URL</label>
              <input className={inputCls} value={d.ticketUrl} placeholder="https://..." onChange={(e) => update(i, "ticketUrl", e.target.value)} />
            </div>
            <div className="flex items-end gap-4">
              <label className="flex items-center gap-2 cursor-pointer pb-1">
                <input
                  type="checkbox"
                  checked={d.sold}
                  onChange={(e) => update(i, "sold", e.target.checked)}
                  className="accent-white w-4 h-4"
                />
                <span className="text-white/50 text-xs font-mono">Sold Out</span>
              </label>
            </div>
            <div className="flex items-end">
              <button onClick={() => remove(i)} className="text-white/25 text-xs hover:text-red-400 transition-colors font-mono pb-1">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={addRow} className="mt-4 border border-white/15 text-white/50 px-6 py-2.5 text-xs font-mono tracking-widest uppercase hover:border-white/35 hover:text-white transition-colors">
        + Add Date
      </button>
    </div>
  );
}

/* ──────────────── Releases ──────────────── */
function ReleasesTab({ state, onChange, onSave }: { state: typeof RELEASES; onChange: (releases: typeof RELEASES) => void; onSave: () => void }) {
  const update = (i: number, key: string, val: string) =>
    onChange(state.map((r: typeof RELEASES[0], j: number) => (j === i ? { ...r, [key]: val } : r)));

  return (
    <div>
      <SectionHeader
        title="Releases"
        subtitle="Edit album and single information. Art URLs point to the cover image."
      />
      <div className="space-y-2">
        {state.map((r: typeof RELEASES[0], i: number) => (
          <div key={i} className="border border-white/8 p-4 grid grid-cols-2 md:grid-cols-3 gap-3">
            <div>
              <label className={labelCls}>Title</label>
              <input className={inputCls} value={r.title} onChange={(e) => update(i, "title", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Year</label>
              <input className={inputCls} value={r.year} onChange={(e) => update(i, "year", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Type</label>
              <select
                className={inputCls}
                value={r.type}
                onChange={(e) => update(i, "type", e.target.value)}
                style={{ appearance: "none" }}
              >
                <option value="Single">Single</option>
                <option value="Album">Album</option>
                <option value="EP">EP</option>
                <option value="Deluxe">Deluxe</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className={labelCls}>Stream URL (Spotify etc.)</label>
              <input className={inputCls} value={r.streamUrl} onChange={(e) => update(i, "streamUrl", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Buy URL (Bandcamp)</label>
              <input className={inputCls} value={r.buyUrl} onChange={(e) => update(i, "buyUrl", e.target.value)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────── Social ──────────────── */
function SocialTab({ state, onChange, onSave }: { state: typeof SOCIAL; onChange: (social: typeof SOCIAL) => void; onSave: () => void }) {
  const update = (key: string, val: string) =>
    onChange({ ...state, [key]: val });

  return (
    <div>
      <SectionHeader title="Social Links" subtitle="Update any streaming or social platform URL." />
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(state).map(([key, val]: [string, unknown]) => (
          <div key={key}>
            <label className={labelCls}>{key}</label>
            <input className={inputCls} value={val as string} onChange={(e) => update(key, e.target.value)} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────── Contact ──────────────── */
function ContactTab({ state, onChange, onSave }: { state: typeof CONTACT; onChange: (contact: typeof CONTACT) => void; onSave: () => void }) {
  return (
    <div>
      <SectionHeader title="Contact" subtitle="Update booking and general contact emails." />
      <div className="grid md:grid-cols-2 gap-4 max-w-xl">
        {Object.entries(state).map(([key, val]: [string, unknown]) => (
          <div key={key}>
            <label className={labelCls}>{key}</label>
            <input className={inputCls} value={val as string} onChange={(e) => onChange({ ...state, [key]: e.target.value })} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────── Site Info ──────────────── */
function SiteTab({ state, ticker, onSiteSave, onTickerSave, onSave }: { state: { tagline: string; genre: string; origin: string; upcomingAlbum: string }; ticker: string[]; onSiteSave: (site: typeof state) => void; onTickerSave: (ticker: string[]) => void; onSave: () => void }) {
  const [tickerText, setTickerText] = useState(ticker.join("\n"));

  return (
    <div>
      <SectionHeader title="Site Info" subtitle="Band tagline, genre, and homepage ticker text." />
      <div className="grid md:grid-cols-2 gap-4 max-w-xl mb-8">
        {Object.entries(state).map(([key, val]: [string, unknown]) => (
          <div key={key}>
            <label className={labelCls}>{key}</label>
            <input className={inputCls} value={val as string} onChange={(e) => onSiteSave({ ...state, [key]: e.target.value })} />
          </div>
        ))}
      </div>
      <div className="max-w-xl">
        <label className={labelCls}>Ticker items (one per line)</label>
        <textarea
          className={`${inputCls} min-h-[160px] resize-y`}
          value={tickerText}
          onChange={(e) => setTickerText(e.target.value)}
          onBlur={() => onTickerSave(tickerText.split("\n").filter(Boolean))}
        />
      </div>
    </div>
  );
}

/* ──────────────── Gallery ──────────────── */
function GalleryTab({ state, onChange, onSave }: { state: typeof GALLERY_PHOTOS; onChange: (photos: typeof GALLERY_PHOTOS) => void; onSave: () => void }) {
  const [pendingPhoto, setPendingPhoto] = useState<{ url: string; label: string } | null>(null);
  const [pendingLabel, setPendingLabel] = useState("");
  const [uploading, setUploading] = useState(false);

  const remove = (i: number) => {
    onChange(state.filter((_: typeof GALLERY_PHOTOS[0], j: number) => j !== i));
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget?.files?.[0];
    if (!file) return;

    setUploading(true);
    const inputElement = e.currentTarget;

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("password", "ductape2026");

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setPendingPhoto({ url: data.url, label: "" });
        setPendingLabel("");
        if (inputElement) {
          inputElement.value = "";
        }
      } else {
        alert("Upload failed: " + data.error);
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading: " + error);
    } finally {
      setUploading(false);
    }
  };

  const approvePhoto = () => {
    if (!pendingPhoto) return;
    onChange([
      ...state,
      { src: pendingPhoto.url, alt: pendingLabel || "Ductape", label: pendingLabel, category: "promo" },
    ]);
    setPendingPhoto(null);
    setPendingLabel("");
  };

  const rejectPhoto = () => {
    setPendingPhoto(null);
    setPendingLabel("");
  };

  const moveUp = (i: number) => {
    if (i === 0) return;
    const next = [...state];
    [next[i - 1], next[i]] = [next[i], next[i - 1]];
    onChange(next);
  };

  const moveDown = (i: number) => {
    if (i === state.length - 1) return;
    const next = [...state];
    [next[i], next[i + 1]] = [next[i + 1], next[i]];
    onChange(next);
  };

  return (
    <div>
      <SectionHeader
        title="Gallery"
        subtitle="Upload photos and add optional labels."
      />

      {/* Pending photo approval */}
      {pendingPhoto && (
        <div className="border-2 border-white/20 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
            {/* Preview */}
            <div className="relative aspect-square bg-white/5 border border-white/8 overflow-hidden">
              <Image
                src={pendingPhoto.url}
                alt="Preview"
                fill
                className="object-cover"
                sizes="200px"
                unoptimized
              />
            </div>

            {/* Approval form */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-sm font-medium">Review & Approve</h3>
              <div>
                <label className={labelCls}>Label (optional)</label>
                <input
                  className={inputCls}
                  value={pendingLabel}
                  onChange={(e) => setPendingLabel(e.target.value)}
                  placeholder="DARK MALTA 2026"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={approvePhoto}
                  className="bg-white text-black px-6 py-2 text-xs font-medium tracking-[0.15em] uppercase hover:bg-white/90 transition-colors"
                >
                  Approve
                </button>
                <button
                  onClick={rejectPhoto}
                  className="border border-white/20 text-white/50 px-6 py-2 text-xs font-medium tracking-[0.15em] uppercase hover:border-white/50 hover:text-white transition-colors"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload input */}
      <div className="border border-white/8 p-4 mb-6">
        <label className={labelCls}>Upload Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading || !!pendingPhoto}
          className="bg-black border border-white/15 text-white text-sm px-4 py-2.5 w-full file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-medium file:bg-white file:text-black file:cursor-pointer hover:file:bg-white/90 disabled:opacity-50"
        />
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {state.map((p: typeof GALLERY_PHOTOS[0], i: number) => (
          <div key={i} className="group relative border border-white/8 overflow-hidden">
            {/* Preview */}
            <div className="relative aspect-square bg-white/5">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover opacity-80"
                sizes="25vw"
                unoptimized
              />
            </div>

            {/* Label */}
            {p.label && (
              <p className="text-white/40 text-xs font-mono px-2 py-1.5 truncate border-t border-white/8">
                {p.label}
              </p>
            )}

            {/* Controls overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
              <div className="flex gap-2">
                <button
                  onClick={() => moveUp(i)}
                  className="text-white/60 text-xs border border-white/20 px-3 py-1.5 hover:text-white hover:border-white/50 transition-colors font-mono"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveDown(i)}
                  className="text-white/60 text-xs border border-white/20 px-3 py-1.5 hover:text-white hover:border-white/50 transition-colors font-mono"
                >
                  ↓
                </button>
              </div>
              <button
                onClick={() => remove(i)}
                className="text-red-400/70 text-xs border border-red-400/20 px-4 py-1.5 hover:text-red-300 hover:border-red-400/50 transition-colors font-mono"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {state.length === 0 && (
        <p className="text-white/25 text-sm font-mono py-8 text-center">
          No photos yet. Paste an image URL above to add one.
        </p>
      )}
    </div>
  );
}

/* ──────────────── Shared header ──────────────── */
function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-light text-white mb-1">{title}</h1>
      <p className="text-white/35 text-sm">{subtitle}</p>
    </div>
  );
}
