export const site = {
  name: "Dream Comes True",
  tagline: "Every Moment, Beautifully Planned.",
  location: "Balikpapan, Indonesia",
  // Ganti dengan nomor WhatsApp resmi dalam format internasional tanpa + atau spasi.
  whatsapp: { admin1: "", admin2: "" },
  // Isi URL video final setelah materi resmi tersedia. Kosong = placeholder.
  teamVideoUrl: "",
  teamVideoPoster:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
  // Ganti URL berikut dengan domain produksi sebelum deploy.
  siteUrl: "https://www.example.com",
  instagramUrl: "",
};

export function whatsappUrl(
  admin,
  message = "Halo Dream Comes True, saya ingin konsultasi mengenai kebutuhan event.",
) {
  const phone = site.whatsapp[admin];
  if (!phone) return null;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
