
// Types
export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  whatsappLink: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  link?: string;
  images: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

// Data
export const servicePackages: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Paket Basic',
    price: 'Rp 3.500.000',
    description: 'Solusi website sederhana untuk bisnis kecil atau personal.',
    features: [
      'Desain responsif untuk semua device',
      'Hingga 5 halaman website',
      'Form kontak & integrasi WhatsApp',
      'SEO dasar',
      'Support teknis 1 bulan',
      'Revisi hingga 2 kali',
      'Domain & hosting 1 tahun'
    ],
    whatsappLink: 'https://wa.me/6281573635143?text=Halo%20artWeb,%20saya%20tertarik%20dengan%20Paket%20Basic.'
  },
  {
    id: 'professional',
    name: 'Paket Professional',
    price: 'Rp 7.500.000',
    description: 'Website profesional untuk bisnis yang ingin berkembang.',
    features: [
      'Desain premium custom responsif',
      'Hingga 10 halaman website',
      'CMS untuk manajemen konten',
      'Integrasi sosial media & analitik',
      'SEO optimized',
      'Support teknis 3 bulan',
      'Revisi hingga 5 kali',
      'Domain & hosting 1 tahun',
      'Training penggunaan website'
    ],
    popular: true,
    whatsappLink: 'https://wa.me/6281573635143?text=Halo%20artWeb,%20saya%20tertarik%20dengan%20Paket%20Professional.'
  },
  {
    id: 'enterprise',
    name: 'Paket Enterprise',
    price: 'Rp 15.000.000',
    description: 'Solusi website komprehensif untuk perusahaan besar.',
    features: [
      'Desain premium custom dengan animasi',
      'Unlimited halaman website',
      'CMS lengkap dengan dashboard admin',
      'E-commerce integration (jika dibutuhkan)',
      'SEO & marketing strategy',
      'Integrasi dengan sistem bisnis',
      'Support teknis 6 bulan',
      'Revisi unlimited',
      'Domain & hosting 2 tahun',
      'Training & dokumentasi lengkap'
    ],
    whatsappLink: 'https://wa.me/6281573635143?text=Halo%20artWeb,%20saya%20tertarik%20dengan%20Paket%20Enterprise.'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'jogja-culinary',
    title: 'Jogja Culinary Tour',
    client: 'Jogja Food Tours',
    category: 'Website Pariwisata',
    image: 'https://images.unsplash.com/photo-1582559934242-63e8600d9c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1489&q=80',
    description: 'Website wisata kuliner yang menampilkan berbagai tur kuliner di Yogyakarta dengan fitur booking online.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe Payment'],
    fullDescription: 'Jogja Culinary Tour adalah platform digital yang memperkenalkan kekayaan kuliner Yogyakarta kepada wisatawan lokal dan mancanegara. Website ini dirancang untuk memberikan pengalaman pengguna yang intuitif dalam menjelajahi dan memesan tur kuliner di berbagai lokasi ikonik di Yogyakarta.',
    challenge: 'Klien membutuhkan platform digital yang tidak hanya informatif tetapi juga fungsional dengan sistem booking yang terintegrasi. Tantangan utama adalah mengembangkan antarmuka yang menampilkan visual makanan tradisional dengan cara yang menarik sambil menyediakan sistem reservasi yang mudah digunakan.',
    solution: 'Kami mengembangkan website responsif dengan galeri foto berkualitas tinggi dan deskripsi mendetail untuk setiap tur kuliner. Sistem booking online diintegrasikan dengan pembayaran digital melalui Stripe, serta notifikasi email otomatis untuk konfirmasi pesanan. Fitur peta interaktif menunjukkan lokasi setiap tempat kuliner beserta informasi transportasi.',
    results: 'Sejak diluncurkan, website telah meningkatkan pemesanan tur kuliner sebesar 150% dalam 3 bulan. Pengunjung website menghabiskan rata-rata 5 menit per kunjungan, menunjukkan tingkat engagement yang tinggi. Sistem booking online telah mengotomatisasi 80% proses reservasi, mengurangi beban administrasi klien secara signifikan.',
    testimonial: {
      quote: 'artWeb tidak hanya menciptakan website yang indah, tapi juga fungsional dan meningkatkan bisnis kami secara nyata. Sistem booking online sangat memudahkan operasional kami dan feedback dari pelanggan sangat positif.',
      author: 'Raden Wijaya',
      position: 'CEO Jogja Food Tours'
    },
    images: [
      'https://images.unsplash.com/photo-1565964850582-419f6ba950cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1436&q=80',
      'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80',
      'https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80'
    ]
  },
  {
    id: 'batik-modern',
    title: 'Batik Modern E-Commerce',
    client: 'Batik Sekar Jagad',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1567855354833-ac2c4f967b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Platform e-commerce untuk penjualan batik kontemporer dengan fitur custom order dan sistem pembayaran terintegrasi.',
    technologies: ['WordPress', 'WooCommerce', 'MySQL', 'PayPal', 'DANA Integration'],
    fullDescription: 'Batik Modern adalah platform e-commerce yang menggabungkan keindahan tradisional batik dengan kebutuhan pasar modern. Website ini memungkinkan pelanggan untuk membeli berbagai produk batik kontemporer serta memesan desain kustom sesuai kebutuhan.',
    challenge: 'Industri batik tradisional membutuhkan platform digital yang dapat menjangkau pasar global tanpa kehilangan esensi kultural produk. Tantangan utama adalah mengembangkan toko online yang menampilkan detail batik dengan akurat, sistem inventaris yang efisien, dan opsi kustomisasi yang fleksibel.',
    solution: 'Kami membangun platform e-commerce komprehensif menggunakan WordPress dan WooCommerce dengan fitur katalog produk yang terorganisir berdasarkan motif, teknik, dan harga. Fitur kustomisasi online memungkinkan pelanggan mendesain batik mereka sendiri dengan preview real-time. Integrasi multi-payment gateway (termasuk PayPal dan DANA) memfasilitasi transaksi dari pelanggan lokal dan internasional.',
    results: 'Dalam 6 bulan sejak peluncuran, toko online mencetak peningkatan penjualan 200% dengan 35% dari total adalah pembelian internasional. Fitur kustomisasi telah menghasilkan 25% dari total revenue dengan margin profit yang lebih tinggi dibandingkan produk ready-made. Basis data pelanggan tumbuh menjadi 5000+ dalam setahun dengan tingkat repeat purchase mencapai 40%.',
    testimonial: {
      quote: 'artWeb berhasil menerjemahkan visi kami untuk membawa batik tradisional ke dunia digital. Platform yang mereka kembangkan tidak hanya estetis tapi juga sangat fungsional, membantu kami menjangkau pelanggan dari berbagai negara.',
      author: 'Ratna Kartini',
      position: 'Founder Batik Sekar Jagad'
    },
    images: [
      'https://images.unsplash.com/photo-1530568054762-95658b0263a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1569053141171-05e112a47eac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1532453288350-4a8c10228b53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80'
    ],
    link: 'https://batikmodern.id'
  },
  {
    id: 'villa-management',
    title: 'Sistem Manajemen Villa',
    client: 'Santika Villas',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
    description: 'Aplikasi web untuk manajemen properti villa di Bali dengan dashboard admin komprehensif dan portal pelanggan.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS', 'Google Maps API'],
    fullDescription: 'Sistem Manajemen Villa adalah aplikasi web all-in-one yang dirancang untuk memudahkan pengelolaan properti villa. Aplikasi ini mencakup fitur booking, manajemen tamu, laporan keuangan, dan pemeliharaan properti dalam satu platform terintegrasi.',
    challenge: 'Manajemen villa tradisional menghadapi kesulitan dalam mengelola multiple properti secara efisien, tracking maintenance, dan mengintegrasikan berbagai channel booking. Klien membutuhkan solusi terpusat yang dapat mengelola semua aspek operasional villa sambil menyediakan data analitik real-time.',
    solution: 'Kami mengembangkan aplikasi web custom dengan dashboard admin komprehensif yang mencakup kalender booking visual, sistem invoice otomatis, dan manajemen task untuk staf. Portal pelanggan menyediakan interface untuk melihat reservasi, history pembayaran, dan mengajukan special request. Sistem notifikasi otomatis memberi alert untuk check-in/check-out, pembayaran, dan jadwal maintenance.',
    results: 'Implementasi sistem telah meningkatkan efisiensi operasional sebesar 65% dengan mengurangi kesalahan administratif secara drastis. Tingkat okupansi villa meningkat 40% berkat kemudahan manajemen multi-channel booking. Feedback pelanggan menunjukkan peningkatan kepuasan sebesar 4.8/5 berkat responsivitas sistem dan kemudahan penggunaan portal pelanggan.',
    testimonial: {
      quote: 'Sistem yang dikembangkan artWeb telah mentransformasi cara kami mengelola villa. Proses yang dulunya memakan waktu berjam-jam kini dapat diselesaikan dalam hitungan menit. Dashboard analitik memberikan insight berharga untuk keputusan bisnis kami.',
      author: 'I Wayan Sudira',
      position: 'Operations Manager Santika Villas'
    },
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
    ]
  },
  {
    id: 'hospital-management',
    title: 'Sistem Informasi Rumah Sakit',
    client: 'RS Medika Yogyakarta',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    description: 'Sistem informasi terintegrasi untuk manajemen rumah sakit, termasuk rekam medis elektronik dan manajemen apotek.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
    fullDescription: 'Sistem Informasi Rumah Sakit adalah platform digital komprehensif yang mendukung berbagai aspek operasional rumah sakit, mulai dari manajemen pasien hingga administrasi. Sistem ini dirancang untuk meningkatkan efisiensi, mengurangi kesalahan, dan meningkatkan kualitas pelayanan kesehatan.',
    challenge: 'Rumah sakit menghadapi kompleksitas dalam mengelola volume besar data pasien, koordinasi antar departemen, dan tracking inventaris obat. Tantangan utama termasuk keamanan data medis sensitif, integrasi dengan peralatan medis existing, dan memastikan sistem dapat berfungsi 24/7 tanpa downtime.',
    solution: 'Kami mengembangkan sistem modular yang mencakup Electronic Medical Record (EMR), Laboratory Information System (LIS), sistem manajemen apotek, dan modul administrasi. Arsitektur microservice memungkinkan skalabilitas dan pemeliharaan lebih mudah. Enkripsi end-to-end dan audit trail komprehensif memastikan keamanan dan kepatuhan terhadap regulasi data medis.',
    results: 'Implementasi sistem telah mengurangi waktu administrasi sebesar 70%, menurunkan kesalahan medis hingga 85%, dan meningkatkan efisiensi manajemen inventaris apotek sebesar 60%. Sistem appointment online telah mengurangi waktu tunggu pasien rata-rata dari 45 menit menjadi 15 menit. Staff medis melaporkan peningkatan kepuasan kerja berkat kemudahan akses informasi pasien dan pengurangan paperwork.',
    testimonial: {
      quote: 'artWeb tidak hanya membangun sistem yang memenuhi kebutuhan teknis kami, tapi juga benar-benar memahami konteks kesehatan. Solusi yang mereka kembangkan telah meningkatkan baik pengalaman pasien maupun efisiensi operasional kami secara dramatis.',
      author: 'dr. Hendra Wijaya, Sp.PD',
      position: 'Direktur RS Medika Yogyakarta'
    },
    images: [
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 'educational-platform',
    title: 'Platform Belajar Online',
    client: 'Cerdas Indonesia',
    category: 'Learning Management System',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Platform pembelajaran online dengan fitur kursus interaktif, ujian online, dan sertifikasi untuk berbagai subjek pendidikan.',
    technologies: ['Next.js', 'Django', 'PostgreSQL', 'AWS S3', 'WebRTC'],
    fullDescription: 'Platform Belajar Online adalah Learning Management System (LMS) komprehensif yang memungkinkan siswa untuk mengakses materi pendidikan berkualitas dari mana saja. Platform ini menyediakan pengalaman belajar interaktif dengan berbagai format konten dan alat penilaian.',
    challenge: 'Lembaga pendidikan tradisional membutuhkan solusi digital untuk menjangkau lebih banyak siswa dan menyediakan pendidikan berkualitas tinggi secara online. Tantangan utama termasuk mengembangkan platform yang dapat mensimulasikan pengalaman belajar interaktif, menyediakan metode penilaian yang akurat, dan memastikan aksesibilitas bagi pengguna dengan koneksi internet terbatas.',
    solution: 'Kami mengembangkan LMS komprehensif dengan fitur kursus video interaktif, materi downloadable, forum diskusi, dan sistem ujian online. Fitur pembelajaran adaptif menggunakan algoritma untuk menyesuaikan jalur belajar berdasarkan performa siswa. Konten dapat diakses offline melalui aplikasi mobile companion, memastikan siswa dapat belajar bahkan dengan koneksi internet terbatas.',
    results: 'Dalam tahun pertama, platform telah menarik lebih dari 25,000 pengguna aktif dengan tingkat penyelesaian kursus 78%, jauh di atas rata-rata industri. Skor kepuasan pengguna mencapai 4.7/5 berdasarkan survey internal. Partner institusi melaporkan peningkatan keterlibatan siswa sebesar 65% dibandingkan metode pengajaran tradisional.',
    testimonial: {
      quote: 'artWeb telah membantu kami mewujudkan visi untuk pendidikan berkualitas yang dapat diakses oleh semua. Platform yang mereka kembangkan tidak hanya teknis superior tapi juga benar-benar memahami prinsip pedagogis dan pengalaman belajar yang efektif.',
      author: 'Prof. Bambang Sutrisno',
      position: 'Founder Cerdas Indonesia'
    },
    images: [
      'https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80'
    ],
    link: 'https://cerdasindonesia.edu'
  },
  {
    id: 'interior-design',
    title: 'Interior Design Studio',
    client: 'Ruang Kreasi',
    category: 'Website Portfolio',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1392&q=80',
    description: 'Website portofolio untuk studio desain interior dengan showcase proyek interaktif dan fitur konsultasi online.',
    technologies: ['HTML5', 'SCSS', 'JavaScript', 'Three.js', 'PHP'],
    fullDescription: 'Interior Design Studio adalah website showcase yang menampilkan karya-karya studio desain interior premium. Website ini dirancang untuk memberikan pengalaman visual yang menarik sambil menyediakan informasi komprehensif tentang layanan dan proses desain.',
    challenge: 'Studio desain interior membutuhkan platform digital yang dapat menampilkan karya mereka dengan cara yang mempertahankan detail visual dan estetika desain. Tantangan utama adalah mengembangkan showcase yang tidak hanya visually stunning tapi juga dapat menampilkan ruang 3D secara efektif pada media 2D.',
    solution: 'Kami mengembangkan website dengan pendekatan visual-first, menggunakan galeri high-resolution dengan zoom capability. Fitur 3D virtual tour memungkinkan pengunjung mengalami desain secara immersive. Section case study mendetail membahas proses desain, inspirasi, dan implementasi. Sistem booking konsultasi online terintegrasi untuk memudahkan prospek menghubungi studio.',
    results: 'Website telah menjadi showcase efektif yang menghasilkan peningkatan inquiry sebesar 200% dalam 4 bulan pertama. Rata-rata waktu yang dihabiskan pengunjung di website mencapai 7 menit, dengan tingkat bounce rate rendah sebesar 25%. Fitur virtual tour menjadi yang paling populer dengan 65% pengunjung mengeksplorasi fitur ini.',
    testimonial: {
      quote: 'Website yang dikembangkan artWeb telah menjadi aset tak ternilai bagi studio kami. Kemampuan mereka menerjemahkan estetika desain kami ke platform digital sangat mengesankan. Klien sering menyebutkan bahwa mereka terkesan dengan website sebelum bertemu kami secara langsung.',
      author: 'Anindya Prasetyo',
      position: 'Creative Director Ruang Kreasi'
    },
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
      'https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'artWeb mengubah bisnis kami dengan website yang tidak hanya indah tapi juga sangat fungsional. Proses pengembangan sangat kolaboratif dan tim mereka benar-benar memahami kebutuhan kami.',
    author: 'Irfan Hakim',
    position: 'CEO',
    company: 'Wahana Tours',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
  },
  {
    id: '2',
    quote: 'Kami sangat puas dengan hasil kerja artWeb. Mereka tidak hanya membangun website yang menarik tapi juga memberikan solusi yang meningkatkan konversi kami sebesar 150%.',
    author: 'Sarah Wijaya',
    position: 'Marketing Director',
    company: 'Nusantara Craft',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80'
  },
  {
    id: '3',
    quote: 'Profesionalisme artWeb tidak diragukan lagi. Dari konsep hingga implementasi, mereka selalu memberikan yang terbaik. Website yang mereka buat telah menjadi aset berharga bagi bisnis kami.',
    author: 'Budi Santoso',
    position: 'Founder',
    company: 'Djava Coffee',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

// Format WA number for links
export const formatWhatsAppLink = (phone: string, message: string) => {
  const formattedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${formattedMessage}`;
};

// General WhatsApp contact
export const whatsappContact = "6281573635143";
export const whatsappGeneralLink = formatWhatsAppLink(whatsappContact, "Halo artWeb, saya tertarik dengan layanan pembuatan website Anda.");
