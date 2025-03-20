
import React, { useEffect } from 'react';
import { CheckCircle, Users, Award, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { whatsappGeneralLink } from '@/utils/data';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Budi Santoso',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Budi memiliki pengalaman lebih dari 10 tahun dalam pengembangan web dan strategi digital. Dia mendirikan artWeb dengan visi menciptakan solusi digital berkualitas tinggi untuk bisnis Indonesia.'
    },
    {
      name: 'Siti Nurhayati',
      position: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      bio: 'Siti adalah seorang desainer UI/UX berpengalaman dengan latar belakang seni visual. Pendekatan desainnya yang berorientasi pengguna telah mendorong kesuksesan banyak proyek artWeb.'
    },
    {
      name: 'Rahmat Hidayat',
      position: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      bio: 'Rahmat adalah full-stack developer dengan keahlian dalam berbagai teknologi web modern. Komitmennya terhadap kode berkualitas dan performa tinggi menjadi standar bagi semua proyek pengembangan.'
    },
    {
      name: 'Dewi Anggraini',
      position: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
      bio: 'Dewi mengkoordinasikan tim dan proyek artWeb dengan efisiensi tinggi. Pengalamannya dalam manajemen proyek memastikan setiap proyek selesai tepat waktu dan sesuai ekspektasi klien.'
    }
  ];

  const values = [
    {
      title: 'Kualitas',
      description: 'Kami berkomitmen untuk menghasilkan produk digital dengan standar tertinggi, baik dari segi desain maupun kode.'
    },
    {
      title: 'Inovasi',
      description: 'Kami terus mengikuti teknologi terbaru untuk memberikan solusi inovatif yang memenuhi kebutuhan modern.'
    },
    {
      title: 'Integritas',
      description: 'Kami menjunjung tinggi kejujuran, transparansi, dan etika dalam setiap aspek bisnis dan hubungan dengan klien.'
    },
    {
      title: 'Kolaborasi',
      description: 'Kami percaya bahwa hasil terbaik datang dari kerja sama yang erat dengan klien dan antar tim.'
    }
  ];

  const milestones = [
    {
      year: '2018',
      event: 'Pendirian artWeb di Yogyakarta sebagai studio web design dengan 3 anggota tim.'
    },
    {
      year: '2019',
      event: 'Ekspansi layanan ke pengembangan aplikasi web dan mobile dengan penambahan 5 developer.'
    },
    {
      year: '2020',
      event: 'Mencapai 50+ proyek website sukses dan mendapatkan penghargaan "Digital Agency of the Year".'
    },
    {
      year: '2021',
      event: 'Membuka kantor baru di Jakarta untuk memperluas jangkauan layanan ke klien nasional.'
    },
    {
      year: '2022',
      event: 'Mendapatkan sertifikasi ISO 9001 untuk standar kualitas manajemen dan layanan.'
    },
    {
      year: '2023',
      event: 'Meluncurkan divisi khusus untuk solusi e-commerce dan mencapai 150+ proyek sukses.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-r from-artweb-50 to-blue-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-100 text-artweb-700 text-sm font-medium mb-6">
                Tentang Kami
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Agency <span className="bg-clip-text text-transparent bg-blue-gradient">Premium</span> di Yogyakarta
              </h1>
              <p className="text-xl text-gray-600">
                Kami adalah tim ahli pengembangan web yang berdedikasi untuk menciptakan solusi digital berkualitas tinggi untuk bisnis Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-6 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                  Cerita Kami
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Perjalanan artWeb Dimulai dari <span className="bg-clip-text text-transparent bg-blue-gradient">Passion</span>
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  artWeb didirikan pada tahun 2018 oleh sekelompok profesional web dengan visi untuk membantu bisnis di Indonesia mendapatkan kehadiran digital yang kuat dan profesional.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Kami memulai sebagai studio web design kecil di Yogyakarta, dan dalam beberapa tahun telah berkembang menjadi digital agency full-service yang telah membantu ratusan bisnis dari berbagai industri untuk tumbuh melalui solusi digital yang efektif.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Dengan kombinasi teknologi terkini, desain premium, dan strategi bisnis yang fokus pada hasil, kami membantu klien kami tidak hanya memiliki kehadiran online yang menarik, tetapi juga menghasilkan pertumbuhan nyata untuk bisnis mereka.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-artweb-50/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-artweb-600 mb-1">5+</div>
                    <div className="text-gray-600 text-sm">Tahun Pengalaman</div>
                  </div>
                  <div className="bg-artweb-50/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-artweb-600 mb-1">150+</div>
                    <div className="text-gray-600 text-sm">Proyek Selesai</div>
                  </div>
                  <div className="bg-artweb-50/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-artweb-600 mb-1">15+</div>
                    <div className="text-gray-600 text-sm">Profesional</div>
                  </div>
                  <div className="bg-artweb-50/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-artweb-600 mb-1">100+</div>
                    <div className="text-gray-600 text-sm">Klien Puas</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="artWeb Office"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-md max-w-xs">
                  <div className="text-sm font-medium text-artweb-600 mb-1">Kantor Pusat</div>
                  <div className="text-gray-700">Jl. Kaliurang KM 10, Ngaglik, Sleman, Yogyakarta</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                Nilai-Nilai Kami
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Prinsip yang <span className="bg-clip-text text-transparent bg-blue-gradient">Memandu</span> Kami
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nilai-nilai inti kami membentuk dasar dari segala yang kami lakukan, dari pengembangan produk hingga layanan pelanggan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-card">
                  <div className="bg-blue-gradient text-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 px-6 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                Tim Kami
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Bertemu dengan <span className="bg-clip-text text-transparent bg-blue-gradient">Talenta</span> di Balik artWeb
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                artWeb didukung oleh tim profesional berbakat yang berdedikasi untuk menciptakan solusi digital terbaik untuk klien kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-card card-hover group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <div className="text-artweb-600 mb-4">{member.position}</div>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Tertarik untuk bergabung dengan tim kami?
              </p>
              <Button
                variant="outline"
                className="border-artweb-300 text-artweb-700 hover:bg-artweb-50"
              >
                <span>Lihat Karir</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                Milestone
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Perjalanan <span className="bg-clip-text text-transparent bg-blue-gradient">Pertumbuhan</span> Kami
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Melihat kembali pencapaian penting dalam perjalanan artWeb menjadi digital agency terkemuka.
              </p>
            </div>

            <div className="relative border-l-2 border-artweb-200 ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-6 pb-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-12 relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute -left-10 top-0 bg-artweb-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <Calendar size={16} />
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-lg font-bold text-artweb-600 mb-2">{milestone.year}</div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                  Mengapa Memilih Kami
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Apa yang Membuat Kami <span className="bg-clip-text text-transparent bg-blue-gradient">Berbeda</span>
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Di artWeb, kami menggabungkan desain visual yang menarik dengan pengembangan teknis yang solid untuk menciptakan pengalaman digital yang tidak hanya indah, tetapi juga berfungsi dengan sempurna.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-artweb-100 text-artweb-600 rounded-full p-2">
                        <Users size={20} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-2">Tim Ahli</h3>
                      <p className="text-gray-600">
                        Dipimpin oleh profesional berpengalaman dengan keahlian di bidang desain, pengembangan, dan strategi digital.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-artweb-100 text-artweb-600 rounded-full p-2">
                        <Award size={20} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-2">Hasil Terbukti</h3>
                      <p className="text-gray-600">
                        Lebih dari 150 proyek sukses dengan klien dari berbagai industri menunjukkan track record keberhasilan kami.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-artweb-100 text-artweb-600 rounded-full p-2">
                        <CheckCircle size={20} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-2">Pendekatan Komprehensif</h3>
                      <p className="text-gray-600">
                        Kami tidak hanya membangun website, tetapi juga membantu klien merumuskan strategi digital yang efektif untuk pertumbuhan bisnis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild className="bg-blue-gradient shadow-button hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Mulai Proyek Anda
                      <ArrowRight size={18} />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Team meeting"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Collaboration"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Team discussion"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      alt="Office space"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-blue-gradient text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mari Wujudkan Visi Digital Anda Bersama Kami
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Jadwalkan konsultasi gratis dengan tim ahli kami untuk membahas kebutuhan dan tujuan website Anda.
              </p>
              <Button asChild className="bg-white text-artweb-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-6 py-6 text-base">
                <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Hubungi Kami Sekarang
                  <ArrowRight size={18} />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
