const photo = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
export const scopes = [
  {
    id: "wedding",
    title: "Wedding",
    eyebrow: "YOUR DAY, YOUR STORY",
    description:
      "Perencanaan pernikahan yang terasa personal, tertata, dan berkesan—dari momen sakral hingga perayaan bersama orang terdekat.",
    image: photo("photo-1519741497674-611481863552"),
    featured: true,
  },
  {
    id: "corporate",
    title: "Corporate Events",
    eyebrow: "BRING PEOPLE TOGETHER",
    description:
      "Dukungan penyelenggaraan acara perusahaan yang membantu pesan, agenda, dan pengalaman peserta tersampaikan dengan baik.",
    image: photo("photo-1511795409834-ef04bbd61622"),
  },
  {
    id: "government",
    title: "Government Events",
    eyebrow: "PURPOSEFUL GATHERINGS",
    description:
      "Pendekatan terstruktur untuk mendukung acara institusi dan kegiatan pemerintahan sesuai kebutuhan penyelenggara.",
    image: photo("photo-1511578314322-379afb476865"),
  },
];
export const services = [
  {
    id: "wo-only",
    title: "WO Only",
    description:
      "Dukungan wedding organizer untuk membantu perencanaan, koordinasi, dan pelaksanaan acara sesuai kebutuhan yang disepakati.",
    icon: "calendar-heart",
  },
  {
    id: "mc",
    title: "MC",
    description:
      "Layanan pembawa acara untuk menjaga alur acara tetap komunikatif, tertata, dan sesuai suasana yang diharapkan.",
    icon: "mic-2",
  },
  {
    id: "bundling",
    title: "Bundling",
    description:
      "Pilihan layanan terkoordinasi yang menggabungkan kebutuhan wedding organizer dan MC dalam satu diskusi perencanaan.",
    icon: "sparkles",
  },
];
export const events = [
  {
    slug: "wedding-story-01",
    title: "A Celebration of Two Stories",
    category: "Wedding",
    date: "",
    excerpt:
      "Sebuah perayaan hangat yang berpusat pada cerita pasangan dan orang-orang terdekat.",
    image: photo("photo-1519741497674-611481863552"),
    status: "Sample layout — ganti dengan portofolio resmi.",
    location: "Balikpapan",
    featured: true,
  },
  {
    slug: "wedding-story-02",
    title: "An Elegant Day to Remember",
    category: "Wedding",
    date: "",
    excerpt:
      "Momen pernikahan dengan detail yang tenang, personal, dan penuh makna.",
    image: photo("photo-1511285560929-80b456fea0bc"),
    status: "Sample layout — ganti dengan portofolio resmi.",
    location: "Balikpapan",
    featured: true,
  },
  {
    slug: "corporate-gathering-01",
    title: "Together, Towards What’s Next",
    category: "Corporate",
    date: "",
    excerpt:
      "Ruang untuk terhubung, berbagi arah, dan merayakan pencapaian bersama.",
    image: photo("photo-1511795409834-ef04bbd61622"),
    status: "Sample layout — ganti dengan portofolio resmi.",
    location: "Balikpapan",
  },
  {
    slug: "institutional-event-01",
    title: "A Purposeful Gathering",
    category: "Government",
    date: "",
    excerpt:
      "Kegiatan formal yang membutuhkan koordinasi dan alur acara yang jelas.",
    image: photo("photo-1511578314322-379afb476865"),
    status: "Sample layout — ganti dengan portofolio resmi.",
    location: "Balikpapan",
  },
  {
    slug: "wedding-story-03",
    title: "The Beauty of Intimate Moments",
    category: "Wedding",
    date: "",
    excerpt:
      "Mengutamakan kedekatan, kehangatan, dan momen yang benar-benar berarti.",
    image: photo("photo-1465495976277-4387d4b0e4a6"),
    status: "Sample layout — ganti dengan portofolio resmi.",
    location: "Balikpapan",
  },
  {
    slug: "corporate-gathering-02",
    title: "An Evening to Connect",
    category: "Corporate",
    date: "",
    excerpt:
      "Sebuah kesempatan untuk mempererat relasi dalam suasana yang lebih santai.",
    image: photo("photo-1519167758481-83f550bb49b3"),
    status: "Sample layout — ganti dengan portofolio resmi.",
    location: "Balikpapan",
  },
];
export const articles = [
  {
    slug: "merencanakan-pernikahan-dengan-lebih-tenang",
    category: "Wedding Guide",
    title: "Merencanakan Pernikahan dengan Lebih Tenang",
    excerpt:
      "Mulai dari prioritas, komunikasi, hingga memilih tim yang tepat: perencanaan yang baik membantu Anda menikmati prosesnya.",
    date: "",
    image: photo("photo-1523438885200-e635ba2c371e"),
    body: [
      "Setiap pasangan memiliki cerita, prioritas, dan gambaran perayaan yang berbeda. Karena itu, proses perencanaan sebaiknya dimulai dari percakapan tentang hal yang paling berarti bagi Anda.",
      "Susun kebutuhan berdasarkan prioritas, tetapkan alur komunikasi dengan vendor, dan dokumentasikan keputusan penting. Dengan begitu, detail acara lebih mudah dipantau tanpa kehilangan makna personalnya.",
      "Gunakan artikel ini sebagai titik awal diskusi. Kebutuhan, anggaran, dan cakupan layanan perlu dikonfirmasi secara langsung sebelum keputusan dibuat.",
    ],
  },
  {
    slug: "checklist-awal-memilih-wedding-organizer",
    category: "Planning Tips",
    title: "Checklist Awal Memilih Wedding Organizer",
    excerpt:
      "Pertanyaan yang dapat membantu pasangan memahami cara kerja, cakupan layanan, dan komunikasi dengan wedding organizer.",
    date: "",
    image: photo("photo-1519225421980-715cb0215aed"),
    body: [
      "Sebelum memilih wedding organizer, kenali terlebih dahulu kebutuhan acara dan bagian mana yang ingin Anda dukung dengan bantuan profesional.",
      "Tanyakan proses kerja, bentuk koordinasi, batas tanggung jawab, cara menangani perubahan, serta bagaimana keputusan dan detail acara didokumentasikan.",
      "Pastikan ruang lingkup, jadwal, dan kesepakatan tertulis dipahami bersama. Detail layanan dapat berbeda sesuai kebutuhan setiap acara.",
    ],
  },
  {
    slug: "membuat-acara-korporat-lebih-terarah",
    category: "Event Insights",
    title: "Membuat Acara Korporat Lebih Terarah",
    excerpt:
      "Tujuan acara, pengalaman peserta, dan alur yang jelas menjadi dasar perencanaan event yang efektif.",
    date: "",
    image: photo("photo-1511578314322-379afb476865"),
    body: [
      "Perencanaan acara korporat dimulai dari tujuan yang jelas. Tentukan hasil yang ingin dicapai dan siapa peserta utama yang akan hadir.",
      "Setelah tujuan disepakati, susun agenda, kebutuhan teknis, pembagian tanggung jawab, serta jalur komunikasi untuk perubahan mendadak.",
      "Evaluasi setelah acara dapat membantu tim memahami hal yang berjalan baik dan hal yang perlu diperbaiki pada kegiatan berikutnya.",
    ],
  },
];
// Tidak ada review klien yang dikarang. Tambahkan materi testimoni yang telah disetujui sebelum publikasi.
export const testimonials = [
  {
    id: "testimonial-placeholder-1",
    title: "Wedding testimonial",
    image: "",
    type: "Wedding",
    placeholder: true,
  },
  {
    id: "testimonial-placeholder-2",
    title: "Event testimonial",
    image: "",
    type: "Event",
    placeholder: true,
  },
  {
    id: "testimonial-placeholder-3",
    title: "Client feedback",
    image: "",
    type: "Client",
    placeholder: true,
  },
];
export const clients = []; // Tambahkan hanya nama/logo klien yang telah diverifikasi dan disetujui.
export const panca = {
  name: "Panca Bakri",
  role: "MC & Event Host",
  portrait: photo("photo-1500648767791-00dcc994a43e"),
};
