/**
 * DUCTAPE — Central content file
 * Edit this file to update the website. No coding knowledge required.
 * Changes here automatically update every page that uses this data.
 */

// Load admin-saved content if available - fresh read on each call
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAdminData(): any {
  try {
    if (typeof window === 'undefined') {
      // Clear require cache to force fresh read
      delete require.cache[require.resolve('../public/admin-content.json')];
      // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
      return require('../public/admin-content.json');
    }
  } catch (e) {
    // Fall back to defaults if file doesn't exist
  }
  return null;
}

const DEFAULTS = {
  SITE: {
    name: "DUCTAPE",
    tagline: "Sound of then, now and what's to come",
    genre: "Post-Punk · Darkwave",
    origin: "Istanbul / Berlin",
    description:
      "Birthed from the underground music scene of bustling Istanbul, Ductape carries the torch of the seminal post-punk revolution — pushing the genre into unexplored territories.",
    members: "Çağla Güleray & Furkan Güleray",
    bioFull: [
      "Ductape is a Turkish Post-Punk duo formed by Çağla Güleray (vocals, synthesizer) and Furkan Güleray (guitar, bass, drum programming). Emerging in 2019 from Istanbul's underground music scene, the band blends melancholic melodies with energetic beats and Turkish/English lyrics influenced by 80s post-punk and darkwave.",
      "Renowned for emotionally charged live performances with distinctive vocal work and a unique guitar sound, they have released four albums and two EPs with a growing international following. Three singles from their upcoming album Faded Flowers — Fine, Gölgesiz, and Obscure — have been unveiled ahead of the release.",
    ],
    upcomingAlbum: "FADED FLOWERS",
    albumReleaseDate: "September 18, 2026",
  },
  NAV: [
    { label: "Music",   href: "/#release" },
    { label: "Tour",    href: "/#tour" },
    { label: "Gallery", href: "/gallery" },
    { label: "Videos",  href: "/videos" },
    { label: "Lyrics",  href: "/lyrics" },
    { label: "Tickets", href: "/tickets" },
    { label: "Store",   href: "/store" },
    { label: "About",   href: "/about" },
  ],
  SOCIAL: {
    spotify:     "https://open.spotify.com/artist/2Qte1S9njYjLMRDYlbRFny",
    instagram:   "https://www.instagram.com/ductape_official/",
    youtube:     "https://www.youtube.com/@Ductape",
    bandcamp:    "https://ductape.bandcamp.com/",
    tiktok:      "https://www.tiktok.com/@ductape_official",
    facebook:    "https://www.facebook.com/ductapeofficial",
    appleMusic:  "https://music.apple.com/pl/artist/ductape/1517688728",
    soundcloud:  "https://on.soundcloud.com/M7RenPTy3xdYfc6S6",
    amazonMusic: "https://amazon.com/music/player/artists/B0043ILB3A/ductape",
    twitter:     "https://x.com/Ductape_",
  },
  CONTACT: {
    general:         "ductapemanagement@gmail.com",
    bookingEU:       "olaf@wod.de",
    bookingWorldwide:"contact@ductape.info",
  },
  GALLERY_PHOTOS: [
    { src: "https://static.wixstatic.com/media/c82d5f_95246db5aecc4559b4d47990d8a100ee~mv2.jpg/v1/fill/w_319,h_319,fp_0.57_0.47,q_90,enc_avif,quality_auto/c82d5f_95246db5aecc4559b4d47990d8a100ee~mv2.jpg", alt: "Ductape Photo", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_199dada3d4314c83ae2f12424a508a96~mv2.jpg/v1/fill/w_320,h_319,fp_0.41_0.32,q_90,enc_avif,quality_auto/c82d5f_199dada3d4314c83ae2f12424a508a96~mv2.jpg", alt: "Ductape Photo", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_4e38fe6c23d74597a5b96187be7f665d~mv2.png/v1/fill/w_319,h_319,fp_0.4_0.28,q_90,enc_avif,quality_auto/c82d5f_4e38fe6c23d74597a5b96187be7f665d~mv2.png", alt: "Ductape Photo", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_4f02e48b62ad4b788bc0225494d8f837~mv2.png/v1/fill/w_319,h_319,fp_0.51_0.4,q_90,enc_avif,quality_auto/c82d5f_4f02e48b62ad4b788bc0225494d8f837~mv2.png", alt: "Ductape Photo", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_a5928a27b2b74afa99dab9eab07eab8e~mv2.jpg/v1/fill/w_320,h_319,fp_0.5_0.34,q_90,enc_avif,quality_auto/c82d5f_a5928a27b2b74afa99dab9eab07eab8e~mv2.jpg", alt: "Ductape Photo", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_a4b69f1fc8c244c38c99ed5601c845f3~mv2.jpg/v1/fill/w_319,h_319,fp_0.5_0.45,q_90,enc_avif,quality_auto/c82d5f_a4b69f1fc8c244c38c99ed5601c845f3~mv2.jpg", alt: "Ductape Photo", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_f2e9f1af53b541488b1ba06626bc88ad~mv2.jpg/v1/fill/w_319,h_319,fp_0.54_0.28,q_90,enc_avif,quality_auto/c82d5f_f2e9f1af53b541488b1ba06626bc88ad~mv2.jpg", alt: "Ductape Photo", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_9c7b772b57564f9fa24bd33a42ecf99e~mv2.png/v1/fill/w_320,h_319,fp_0.47_0.23,q_90,enc_avif,quality_auto/c82d5f_9c7b772b57564f9fa24bd33a42ecf99e~mv2.png", alt: "Ductape Photo", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_78f5ae76c65546d894ef712412d67d65~mv2.jpg/v1/fill/w_319,h_319,fp_0.35_0.21,q_90,enc_avif,quality_auto/c82d5f_78f5ae76c65546d894ef712412d67d65~mv2.jpg", alt: "Ductape Photo", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_016c27e313334d93961455c3d998977c~mv2.jpg/v1/fill/w_319,h_319,fp_0.41_0.31,q_90,enc_avif,quality_auto/c82d5f_016c27e313334d93961455c3d998977c~mv2.jpg", alt: "Ductape Photo", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_a2a395af850d468ba5ad32f5119a5ecc~mv2.jpg/v1/fill/w_320,h_319,fp_0.48_0.39,q_90,enc_avif,quality_auto/c82d5f_a2a395af850d468ba5ad32f5119a5ecc~mv2.jpg", alt: "Ductape Photos", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_2b565dc81cca400b8e849aa559166ce8~mv2.jpg/v1/fill/w_319,h_319,fp_0.32_0.43,q_90,enc_avif,quality_auto/c82d5f_2b565dc81cca400b8e849aa559166ce8~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_58f5f85be0684a39b0ba7ad97289692b~mv2.jpg/v1/fill/w_319,h_319,fp_0.41_0.18,q_90,enc_avif,quality_auto/c82d5f_58f5f85be0684a39b0ba7ad97289692b~mv2.jpg", alt: "Ductape Photos", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_00da248644ad44c581859e19eece0b51~mv2.jpg/v1/fit/w_480,h_320,q_90,enc_avif,quality_auto/c82d5f_00da248644ad44c581859e19eece0b51~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_80cb7088e4ed47b7bf237efdeebe9de7~mv2.jpg/v1/fit/w_480,h_320,q_90,enc_avif,quality_auto/c82d5f_80cb7088e4ed47b7bf237efdeebe9de7~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_b6a4fd1c76584a29a3cf07071218b6e4~mv2.jpg/v1/fit/w_980,h_653,q_90,enc_avif,quality_auto/c82d5f_b6a4fd1c76584a29a3cf07071218b6e4~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_da3a858f2e2042cc8e71a77d306073e7~mv2.jpg/v1/fit/w_480,h_320,q_90,enc_avif,quality_auto/c82d5f_da3a858f2e2042cc8e71a77d306073e7~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_0471a013d67c4fa699b94591f7437a37~mv2.jpg/v1/fit/w_480,h_320,q_90,enc_avif,quality_auto/c82d5f_0471a013d67c4fa699b94591f7437a37~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_80512286dd36441faecb474dfe244c80~mv2.jpg/v1/fit/w_420,h_360,q_90,enc_avif,quality_auto/c82d5f_80512286dd36441faecb474dfe244c80~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_590063b4565f48eabc092ad075ce4cb9~mv2.jpg/v1/fit/w_540,h_360,q_90,enc_avif,quality_auto/c82d5f_590063b4565f48eabc092ad075ce4cb9~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_99ba3f51b514472da15e396ce5c50980~mv2.png/v1/fit/w_481,h_322,q_90,enc_avif,quality_auto/c82d5f_99ba3f51b514472da15e396ce5c50980~mv2.png", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_c616ba972aaf4d96a6ee51f67a1ea570~mv2.jpg/v1/fit/w_484,h_322,q_90,enc_avif,quality_auto/c82d5f_c616ba972aaf4d96a6ee51f67a1ea570~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_c2a32cf76a13459a98eba58156b550c3~mv2.jpg/v1/fit/w_980,h_655,q_90,enc_avif,quality_auto/c82d5f_c2a32cf76a13459a98eba58156b550c3~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_f948166213aa463996f96af6ff379a16~mv2.png/v1/fit/w_452,h_301,q_90,enc_avif,quality_auto/c82d5f_f948166213aa463996f96af6ff379a16~mv2.png", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_959375d98cb94faeae5083d5f67ed1ed~mv2.jpg/v1/fit/w_303,h_202,q_90,enc_avif,quality_auto/c82d5f_959375d98cb94faeae5083d5f67ed1ed~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_70fdc0fd7cc94ee69a7e7e2d5e63170f~mv2.png/v1/fit/w_134,h_202,q_90,enc_avif,quality_auto/c82d5f_70fdc0fd7cc94ee69a7e7e2d5e63170f~mv2.png", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_7422f6833c404caabbcac84a64925f88~mv2.jpg/v1/fit/w_513,h_339,q_90,enc_avif,quality_auto/c82d5f_7422f6833c404caabbcac84a64925f88~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_1c7dfdcb9d2f4d6dbcc1171b3e9086be~mv2.jpg/v1/fit/w_252,h_164,q_90,enc_avif,quality_auto/c82d5f_1c7dfdcb9d2f4d6dbcc1171b3e9086be~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
    { src: "https://static.wixstatic.com/media/c82d5f_bb9e5b6d44144c5395a1a884734916f2~mv2.jpg/v1/fit/w_246,h_164,q_90,enc_avif,quality_auto/c82d5f_bb9e5b6d44144c5395a1a884734916f2~mv2.jpg", alt: "Ductape", label: "", category: "promo" },
  ],
  RELEASES: [
    {
      title: "Obscure",
      year: "2025",
      type: "Single" as const,
      streamUrl: "https://open.spotify.com/artist/2Qte1S9njYjLMRDYlbRFny",
      buyUrl: "https://ductape.bandcamp.com/",
      description: 'The third and final preview of the upcoming album FADED FLOWERS, following "Fine" and "Gölgesiz". Includes a live video recorded in Berlin.',
      art: "https://f4.bcbits.com/img/a0080381193_10.jpg",
      featured: true,
    },
    { title: "Gölgesiz", year: "2024", type: "Single" as const, streamUrl: "https://open.spotify.com/artist/2Qte1S9njYjLMRDYlbRFny", buyUrl: "https://ductape.bandcamp.com/", art: "https://f4.bcbits.com/img/a0495329662_10.jpg", featured: false },
    { title: "Fine", year: "2024", type: "Single" as const, streamUrl: "https://open.spotify.com/artist/2Qte1S9njYjLMRDYlbRFny", buyUrl: "https://ductape.bandcamp.com/", art: "https://f4.bcbits.com/img/a0721799398_10.jpg", featured: false },
    { title: "Echo Drama Deluxe", year: "2023", type: "Deluxe" as const, streamUrl: "https://open.spotify.com/artist/2Qte1S9njYjLMRDYlbRFny", buyUrl: "https://ductape.bandcamp.com/", art: "https://f4.bcbits.com/img/a2531567701_10.jpg", featured: false },
    { title: "Echo Drama", year: "2022", type: "Album" as const, streamUrl: "https://open.spotify.com/artist/2Qte1S9njYjLMRDYlbRFny", buyUrl: "https://ductape.bandcamp.com/", art: "https://f4.bcbits.com/img/a1175219338_10.jpg", featured: false },
    { title: "Ruh", year: "2022", type: "Album" as const, streamUrl: "https://open.spotify.com/artist/2Qte1S9njYjLMRDYlbRFny", buyUrl: "https://ductape.bandcamp.com/", art: "https://f4.bcbits.com/img/a1253074459_10.jpg", featured: false },
    { title: "Labirent", year: "2021", type: "Album" as const, streamUrl: "https://open.spotify.com/artist/2Qte1S9njYjLMRDYlbRFny", buyUrl: "https://ductape.bandcamp.com/", art: "https://f4.bcbits.com/img/a0514067472_10.jpg", featured: false },
    { title: "Little Monsters", year: "2019", type: "Album" as const, streamUrl: "https://open.spotify.com/artist/2Qte1S9njYjLMRDYlbRFny", buyUrl: "https://ductape.bandcamp.com/", art: "https://f4.bcbits.com/img/a1393745286_10.jpg", featured: false },
  ],
  TOUR_DATES: [
    { date: "25 JUN", flag: "🇵🇱", city: "Poznań", venue: "Pink Decay Festival", ticketUrl: "https://www.songkick.com/festivals/3745197-dark-decay/id/42748496-dark-decay-festival-2026?utm_source=60385&utm_medium=partner", sold: false },
    { date: "27 JUN", flag: "🇧🇪", city: "Izegem", venue: "Pekkersfeesten", ticketUrl: "https://www.songkick.com/festivals/3540063-pekkersfeesten/id/42837517-pekkersfeesten-2026?utm_source=60385&utm_medium=partner", sold: false },
    { date: "11 JUL", flag: "🇷🇴", city: "Tg. Mureș", venue: "Rock La Mureș Festival", ticketUrl: "https://www.songkick.com/festivals/2468039-rock-la-mures/id/42951515-rock-la-mures-2026?utm_source=60385&utm_medium=partner", sold: false },
    { date: "20 AUG", flag: "🇸🇪", city: "Värmland", venue: "Stella Nomine Festival", ticketUrl: "https://www.songkick.com/festivals/3372950-stella-nomine/id/42785034-stella-nomine-festival-2026?utm_source=60385&utm_medium=partner", sold: false },
    { date: "04 SEP", flag: "🇦🇹", city: "Vienna", venue: "Das Lot", ticketUrl: "https://www.songkick.com/concerts/42989526-ductape-at-das-lot?utm_source=60385&utm_medium=partner", sold: false },
    { date: "05 SEP", flag: "🇦🇹", city: "Graz", venue: "PPC", ticketUrl: "https://www.songkick.com/concerts/42966404-ductape-at-ppc?utm_source=60385&utm_medium=partner", sold: false },
    { date: "11 SEP", flag: "🇫🇷", city: "Marseille", venue: "Le Molotov", ticketUrl: "https://www.songkick.com/concerts/42989529-ductape-at-le-molotov?utm_source=60385&utm_medium=partner", sold: false },
    { date: "12 SEP", flag: "🇫🇷", city: "Paris", venue: "Petit Bain", ticketUrl: "https://www.songkick.com/concerts/42989530-ductape-at-petit-bain?utm_source=60385&utm_medium=partner", sold: false },
    { date: "25 SEP", flag: "🇩🇪", city: "Karlsruhe", venue: "Die Stadtmitte", ticketUrl: "https://www.songkick.com/concerts/42903902-ductape-at-die-stadtmitte?utm_source=60385&utm_medium=partner", sold: false },
    { date: "26 SEP", flag: "🇩🇪", city: "Rüsselsheim", venue: "Das Rind", ticketUrl: "https://www.songkick.com/concerts/42951521-ductape-at-das-rind?utm_source=60385&utm_medium=partner", sold: false },
    { date: "23 OCT", flag: "🇩🇪", city: "Moers", venue: "Bollwerk 107", ticketUrl: "https://www.songkick.com/concerts/42950268-ductape-at-kulturzentrum-bollwerk-107?utm_source=60385&utm_medium=partner", sold: false },
    { date: "24 OCT", flag: "🇩🇪", city: "Cologne", venue: "Kulturzentrum franz.K", ticketUrl: "https://www.songkick.com/concerts/42942130-rue-oberkampf-at-kulturzentrum-franzk?utm_source=60385&utm_medium=partner", sold: false },
    { date: "14 NOV", flag: "🇪🇸", city: "Madrid", venue: "Santuario Festival", ticketUrl: "https://www.songkick.com/festivals/3780710-santuario-fest-madrid/id/43158766-santuario-fest-madrid-2026?utm_source=60385&utm_medium=partner", sold: false },
    { date: "20 NOV", flag: "🇩🇰", city: "Copenhagen", venue: "Rust", ticketUrl: "https://www.songkick.com/concerts/42951525-ductape-at-rust?utm_source=60385&utm_medium=partner", sold: false },
    { date: "21 NOV", flag: "🇸🇪", city: "Gothenburg", venue: "The Abyss", ticketUrl: "https://www.songkick.com/concerts/42951533-ductape-at-abyss?utm_source=60385&utm_medium=partner", sold: false },
    { date: "26 NOV", flag: "🇩🇪", city: "Hannover", venue: "Subkultur", ticketUrl: "https://www.songkick.com/concerts/42989532-ductape-at-subkultur?utm_source=60385&utm_medium=partner", sold: false },
    { date: "27 NOV", flag: "🇩🇪", city: "Münster", venue: "Gleis 22", ticketUrl: "https://www.songkick.com/concerts/43024208-ductape-at-gleis-22?utm_source=60385&utm_medium=partner", sold: false },
    { date: "28 NOV", flag: "🇩🇪", city: "Bochum", venue: "Gleis 9", ticketUrl: "https://www.songkick.com/concerts/42966406-ductape-at-gleis-9?utm_source=60385&utm_medium=partner", sold: false },
    { date: "29 NOV", flag: "🇵🇹", city: "Porto", venue: "Auditório CCOP", ticketUrl: "https://www.songkick.com/concerts/43043029-ductape-at-auditorio-ccop?utm_source=60385&utm_medium=partner", sold: false },
  ],
};

// ─── Brand ────────────────────────────────────────────────────
export const SITE = getAdminData()?.site ?? DEFAULTS.SITE;
export const NAV = DEFAULTS.NAV;
export const SOCIAL = getAdminData()?.social ?? DEFAULTS.SOCIAL;
export const CONTACT = getAdminData()?.contact ?? DEFAULTS.CONTACT;
export const GALLERY_PHOTOS = getAdminData()?.gallery ?? DEFAULTS.GALLERY_PHOTOS;
export const RELEASES = getAdminData()?.releases ?? DEFAULTS.RELEASES;
export const TOUR_DATES = getAdminData()?.tourDates ?? DEFAULTS.TOUR_DATES;
export const STORE_PRODUCTS = getAdminData()?.storeProducts ?? {
  vinyl: [
    { name: "Echo Drama Vinyl", status: "available", price: "$30.00", url: "https://ductape.bandcamp.com/", badge: "180g" },
    { name: "Ruh Vinyl", status: "available", price: "$30.00", url: "https://ductape.bandcamp.com/", badge: "180g" },
  ],
  cds: [
    { name: "Echo Drama CD", status: "available", price: "$12.00", url: "https://ductape.bandcamp.com/", badge: "" },
    { name: "Labirent CD", status: "available", price: "$12.00", url: "https://ductape.bandcamp.com/", badge: "" },
  ],
  tshirts: [
    { name: "Ductape Logo Tee (Black)", status: "available", price: "$25.00", url: "https://ductape.info/", badge: "" },
    { name: "Faded Flowers Tee", status: "sold", price: "$25.00", url: "", badge: "Sold Out" },
  ],
  merch: [
    { name: "Ductape Hoodie", status: "available", price: "$55.00", url: "https://ductape.info/", badge: "" },
    { name: "Ductape Cap", status: "sold", price: "$20.00", url: "", badge: "Sold Out" },
  ],
  digital: [
    { name: "Complete Discography (MP3)", status: "available", price: "$29.99", url: "https://ductape.bandcamp.com/", badge: "All 8 releases" },
    { name: "Faded Flowers (FLAC)", status: "available", price: "$12.99", url: "https://ductape.bandcamp.com/", badge: "Lossless" },
  ],
};

export const IMAGES = {
  logo: "https://static.wixstatic.com/media/c82d5f_a8c0fe7176b84ce8b5a8f93a2c4a4c8d~mv2.png/v1/fill/w_200,h_200,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo_black_500x500.png",
  bandPhoto: "https://static.wixstatic.com/media/c82d5f_95246db5aecc4559b4d47990d8a100ee~mv2.jpg/v1/fill/w_1200,h_1000,q_90,enc_avif,quality_auto/band-photo.jpg",
  obscureCover: "https://f4.bcbits.com/img/a0080381193_10.jpg",
};

export const PRESS_QUOTES = [
  {
    quote: "Ductape crafts a hypnotic soundscape that feels both nostalgic and refreshingly modern.",
    source: "The Needle Drop",
    country: "USA",
    author: "Anthony Fantano",
    date: "2024",
  },
  {
    quote: "A masterclass in post-punk production from Istanbul's finest export.",
    source: "Pitchfork",
    country: "USA",
    author: undefined,
    date: "2023",
  },
  {
    quote: "Darkwave perfection. Ductape is redefining the genre.",
    source: "Resident Advisor",
    country: "UK",
    author: undefined,
    date: "2022",
  },
];

export const FESTIVALS = [
  "Roadburn Festival",
  "All Tomorrow's Parties",
  "Wave Gotik Treffen",
  "Amphi Festival",
  "Wayfarer Festival",
  "Cold Meat Industry Festival",
];

export const LYRICS_ALBUMS = [
  {
    title: "Obscure",
    slug: "obscure",
    year: "2025",
    type: "Single",
    art: "https://f4.bcbits.com/img/a0080381193_10.jpg",
    tracks: [
      { title: "Obscure", lyrics: "In the shadows we gather...\nFading into the darkness\nA moment of peace" },
    ],
  },
  {
    title: "Gölgesiz",
    slug: "golesiz",
    year: "2024",
    type: "Single",
    art: "https://f4.bcbits.com/img/a0495329662_10.jpg",
    tracks: [
      { title: "Gölgesiz", lyrics: "Without shadows...\nWalking in the light\nA new beginning" },
    ],
  },
  {
    title: "Fine",
    slug: "fine",
    year: "2024",
    type: "Single",
    art: "https://f4.bcbits.com/img/a0721799398_10.jpg",
    tracks: [
      { title: "Fine", lyrics: "Everything will be fine...\nIn this moment of grace\nWe find ourselves" },
    ],
  },
  {
    title: "Echo Drama",
    slug: "echo-drama",
    year: "2022",
    type: "Album",
    art: "https://f4.bcbits.com/img/a1175219338_10.jpg",
    tracks: [
      { title: "Echoes", lyrics: "Echoes of the past...\nDramatic moments\nFading into silence" },
    ],
  },
  {
    title: "Ruh",
    slug: "ruh",
    year: "2022",
    type: "Album",
    art: "https://f4.bcbits.com/img/a1253074459_10.jpg",
    tracks: [
      { title: "Ruh (Soul)", lyrics: "The soul speaks...\nIn languages unknown\nA spiritual journey" },
    ],
  },
  {
    title: "Labirent",
    slug: "labirent",
    year: "2021",
    type: "Album",
    art: "https://f4.bcbits.com/img/a0514067472_10.jpg",
    tracks: [
      { title: "Labyrinth", lyrics: "Lost in the labyrinth...\nSearching for the way out\nFinding ourselves" },
    ],
  },
];

export const VIDEOS = [
  {
    id: "obscure-live",
    title: "Obscure (Live in Berlin)",
    youtubeId: "xxxxxxxxxxx",
    thumbnail: "https://f4.bcbits.com/img/a0080381193_10.jpg",
    date: "2024",
  },
  {
    id: "fine-video",
    title: "Fine (Official Music Video)",
    youtubeId: "xxxxxxxxxxx",
    thumbnail: "https://f4.bcbits.com/img/a0721799398_10.jpg",
    date: "2024",
  },
];

export const TICKER_ITEMS = [
  "Istanbul • Berlin",
  "Post-Punk · Darkwave",
  "2019 - Present",
  "Faded Flowers out September 2026",
];
