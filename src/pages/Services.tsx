
import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, XCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { servicePackages, whatsappGeneralLink } from '@/utils/data';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Feature comparison data
  const features = [
    {
      name: 'Desain Responsif',
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      name: 'SEO Dasar',
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Form Kontak',
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Integrasi WhatsApp',
      basic: true,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Jumlah Halaman Website',
      basic: 'Hingga 5',
      professional: 'Hingga 10',
      enterprise: 'Unlimited',
    },
    {
      name: 'Content Management System',
      basic: false,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Integrasi Sosial Media',
      basic: false,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Desain Custom Premium',
      basic: false,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Support',
      basic: '1 Bulan',
      professional: '3 Bulan',
      enterprise: '6 Bulan',
    },
    {
      name: 'Revisi',
      basic: '2 Kali',
      professional: '5 Kali',
      enterprise: 'Unlimited',
    },
    {
      name: 'Training Website',
      basic: false,
      professional: true,
      enterprise: true,
    },
    {
      name: 'Dashboard Admin',
      basic: false,
      professional: false,
      enterprise: true,
    },
    {
      name: 'Integrasi E-commerce',
      basic: false,
      professional: false,
      enterprise: true,
    },
    {
      name: 'SEO & Marketing Strategy',
      basic: false,
      professional: false,
      enterprise: true,
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Konsultasi & Discovery',
      description: 'Kami mendengarkan kebutuhan Anda dan menganalisis bisnis, target audience, dan kompetitor.',
    },
    {
      number: '02',
      title: 'Planning & Wireframing',
      description: 'Merencanakan arsitektur website dan membuat wireframe untuk validasi struktur dan alur.',
    },
    {
      number: '03',
      title: 'UI/UX Design',
      description: 'Mendesain tampilan visual yang menarik dan user experience yang optimal.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Mengembangkan website dengan kode bersih, responsif, dan performa tinggi.',
    },
    {
      number: '05',
      title: 'Testing & QA',
      description: 'Menguji seluruh fitur, kompatibilitas, dan performa untuk memastikan kualitas.',
    },
    {
      number: '06',
      title: 'Launch & Deployment',
      description: 'Meluncurkan website ke server live dan melakukan pengaturan akhir.',
    },
    {
      number: '07',
      title: 'Training & Handover',
      description: 'Memberikan pelatihan penggunaan dan dokumentasi lengkap untuk tim Anda.',
    },
    {
      number: '08',
      title: 'Support & Maintenance',
      description: 'Menyediakan dukungan teknis dan pemeliharaan sesuai paket yang dipilih.',
    },
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
                Layanan Kami
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pilih <span className="bg-clip-text text-transparent bg-blue-gradient">Paket Website</span> Yang Sesuai Kebutuhan Anda
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Kami menyediakan berbagai paket layanan pembuatan website dengan fitur yang dapat disesuaikan dengan kebutuhan dan anggaran Anda.
              </p>
              <Button asChild className="bg-blue-gradient shadow-button hover:shadow-lg transition-all duration-300 hover:-translate-y-1 px-6 py-6 text-base">
                <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle size={20} />
                  <span>Konsultasi Gratis</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 px-6 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Paket Layanan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket mencakup desain responsif, SEO dasar, dan domain gratis selama 1 tahun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicePackages.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            <div className="text-center mt-10 text-gray-600">
              <p>Butuh solusi khusus? <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer" className="text-artweb-600 font-medium hover:underline">Hubungi kami</a> untuk paket custom sesuai kebutuhan spesifik Anda.</p>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perbandingan Fitur</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Bandingkan fitur dari setiap paket untuk memilih solusi yang paling sesuai dengan kebutuhan Anda.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left bg-gray-100 rounded-tl-lg">Fitur</th>
                    <th className="p-4 text-center bg-gray-100">Basic</th>
                    <th className="p-4 text-center bg-artweb-100">Professional</th>
                    <th className="p-4 text-center bg-gray-100 rounded-tr-lg">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, idx) => (
                    <tr key={idx} className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="p-4 font-medium">{feature.name}</td>
                      <td className="p-4 text-center">
                        {typeof feature.basic === 'boolean' ? (
                          feature.basic ? (
                            <CheckCircle2 className="mx-auto text-green-500" size={20} />
                          ) : (
                            <XCircle className="mx-auto text-gray-300" size={20} />
                          )
                        ) : (
                          <span>{feature.basic}</span>
                        )}
                      </td>
                      <td className="p-4 text-center bg-artweb-50/50">
                        {typeof feature.professional === 'boolean' ? (
                          feature.professional ? (
                            <CheckCircle2 className="mx-auto text-green-500" size={20} />
                          ) : (
                            <XCircle className="mx-auto text-gray-300" size={20} />
                          )
                        ) : (
                          <span>{feature.professional}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <CheckCircle2 className="mx-auto text-green-500" size={20} />
                          ) : (
                            <XCircle className="mx-auto text-gray-300" size={20} />
                          )
                        ) : (
                          <span>{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                Proses Kerja Kami
              </div>
              <h2 className="text-3xl font-bold mb-4">Bagaimana Kami Bekerja</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Proses pengembangan website kami dirancang untuk memastikan hasil yang berkualitas tinggi dan sesuai dengan kebutuhan Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.slice(0, 4).map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-card relative">
                  <div className="absolute -top-4 -left-4 bg-blue-gradient text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 mt-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {processSteps.slice(4).map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-card relative">
                  <div className="absolute -top-4 -left-4 bg-blue-gradient text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 mt-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                FAQ
              </div>
              <h2 className="text-3xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Temukan jawaban untuk pertanyaan umum tentang layanan pembuatan website kami.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Berapa lama waktu yang dibutuhkan untuk membuat website?</h3>
                  <p className="text-gray-600">
                    Waktu pengembangan website bervariasi tergantung pada kompleksitas dan fitur yang dibutuhkan. Website sederhana biasanya membutuhkan waktu 2-4 minggu, sedangkan website yang lebih kompleks atau e-commerce dapat membutuhkan 4-8 minggu atau lebih.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Apakah saya perlu menyediakan konten untuk website?</h3>
                  <p className="text-gray-600">
                    Idealnya, Anda menyediakan konten (teks, gambar, video) untuk website Anda karena Anda memahami bisnis Anda dengan baik. Namun, kami juga dapat membantu dengan penulisan konten dasar dan penggunaan gambar stock jika diperlukan, dengan biaya tambahan.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Apakah website saya akan responsif di mobile?</h3>
                  <p className="text-gray-600">
                    Ya, semua website yang kami kembangkan bersifat responsif dan akan tampil dengan baik di semua perangkat, termasuk desktop, tablet, dan smartphone. Kami menguji website di berbagai perangkat dan browser untuk memastikan kompatibilitas.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Apa yang dimaksud dengan CMS?</h3>
                  <p className="text-gray-600">
                    CMS (Content Management System) adalah sistem yang memungkinkan Anda mengelola konten website tanpa perlu pengetahuan teknis. Dengan CMS, Anda dapat dengan mudah memperbarui teks, gambar, produk, dan konten lainnya melalui dashboard yang user-friendly.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Bagaimana cara memulai proyek dengan artWeb?</h3>
                  <p className="text-gray-600">
                    Untuk memulai, Anda dapat menghubungi kami melalui WhatsApp atau form kontak. Tim kami akan mengadakan konsultasi awal untuk memahami kebutuhan Anda, kemudian menyiapkan proposal dan timeline proyek. Setelah persetujuan dan pembayaran uang muka, kami akan mulai bekerja pada proyek Anda.
                  </p>
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
                Siap Memulai Proyek Website Anda?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Konsultasikan kebutuhan digital Anda dengan tim ahli kami untuk mendapatkan solusi terbaik.
              </p>
              <Button asChild className="bg-white text-artweb-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-6 py-6 text-base">
                <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Konsultasi Gratis
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

export default Services;
