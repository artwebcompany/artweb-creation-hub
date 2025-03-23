
import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, XCircle, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { servicePackages } from '@/utils/data';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  const whatsappNumber = "081573635143";
  const whatsappGeneralLink = `https://wa.me/${whatsappNumber}?text=Halo%20artWeb,%20saya%20tertarik%20dengan%20layanan%20pembuatan%20website.`;

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
  ];

  // Process steps - simplified
  const processSteps = [
    {
      number: '01',
      title: 'Konsultasi',
      description: 'Memahami kebutuhan bisnis Anda secara menyeluruh.',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Merencanakan struktur dan alur website yang optimal.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Mendesain tampilan visual dan user experience.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Mengembangkan website dengan kode berkualitas.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section - Minimalist */}
        <section className="py-10 md:py-16 px-4 bg-gradient-to-r from-artweb-50 to-blue-50">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-block px-2 py-1 rounded-full bg-artweb-100 text-artweb-700 text-xs font-medium mb-4">
                Layanan Kami
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">
                Pilih <span className="bg-clip-text text-transparent bg-blue-gradient">Paket Website</span> Untuk Anda
              </h1>
              <p className="text-sm md:text-base text-gray-600 mb-5">
                Berbagai paket layanan pembuatan website dengan fitur yang dapat disesuaikan dengan kebutuhan Anda.
              </p>
              <Button asChild size="sm" className="bg-blue-gradient shadow-sm hover:shadow-md">
                <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  <span>Konsultasi Gratis</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Packages - Now with slider on mobile */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold mb-2">Paket Layanan</h2>
              <p className="text-sm text-gray-600 max-w-lg mx-auto">
                Pilih paket yang sesuai dengan kebutuhan bisnis Anda.
              </p>
            </div>

            {/* Mobile Slider Controls */}
            <div className="md:hidden flex justify-between items-center mb-4">
              <button 
                onClick={scrollLeft} 
                className="bg-white border border-gray-200 rounded-full p-1 shadow-sm hover:bg-gray-50"
                aria-label="Previous package"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <p className="text-xs text-gray-500">Geser untuk melihat semua</p>
              <button 
                onClick={scrollRight} 
                className="bg-white border border-gray-200 rounded-full p-1 shadow-sm hover:bg-gray-50"
                aria-label="Next package"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Mobile slider for service packages */}
            <div 
              ref={sliderRef}
              className="md:hidden flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {servicePackages.map((service) => (
                <div key={service.id} className="min-w-[280px] snap-start">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>

            {/* Desktop grid view */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {servicePackages.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            <div className="text-center mt-6 text-gray-600 text-xs">
              <p>Butuh solusi khusus? <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer" className="text-artweb-600 font-medium hover:underline">Hubungi kami</a> untuk paket custom.</p>
            </div>
          </div>
        </section>

        {/* Feature Comparison - Simplified */}
        <section className="py-10 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold mb-2">Perbandingan Fitur</h2>
              <p className="text-sm text-gray-600 max-w-lg mx-auto">
                Bandingkan fitur dari setiap paket untuk memilih solusi yang tepat.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="p-2 text-left bg-gray-100 rounded-tl-lg">Fitur</th>
                    <th className="p-2 text-center bg-gray-100">Basic</th>
                    <th className="p-2 text-center bg-artweb-100">Professional</th>
                    <th className="p-2 text-center bg-gray-100 rounded-tr-lg">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, idx) => (
                    <tr key={idx} className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="p-2 font-medium text-xs">{feature.name}</td>
                      <td className="p-2 text-center">
                        {typeof feature.basic === 'boolean' ? (
                          feature.basic ? (
                            <CheckCircle2 className="mx-auto text-green-500" size={16} />
                          ) : (
                            <XCircle className="mx-auto text-gray-300" size={16} />
                          )
                        ) : (
                          <span className="text-xs">{feature.basic}</span>
                        )}
                      </td>
                      <td className="p-2 text-center bg-artweb-50/50">
                        {typeof feature.professional === 'boolean' ? (
                          feature.professional ? (
                            <CheckCircle2 className="mx-auto text-green-500" size={16} />
                          ) : (
                            <XCircle className="mx-auto text-gray-300" size={16} />
                          )
                        ) : (
                          <span className="text-xs">{feature.professional}</span>
                        )}
                      </td>
                      <td className="p-2 text-center">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <CheckCircle2 className="mx-auto text-green-500" size={16} />
                          ) : (
                            <XCircle className="mx-auto text-gray-300" size={16} />
                          )
                        ) : (
                          <span className="text-xs">{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process Section - Simplified */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-2 py-1 rounded-full bg-artweb-50 text-artweb-600 text-xs font-medium mb-2">
                Proses Kerja
              </div>
              <h2 className="text-xl font-bold mb-2">Bagaimana Kami Bekerja</h2>
              <p className="text-sm text-gray-600 max-w-lg mx-auto">
                Proses kami dirancang untuk memastikan hasil yang berkualitas tinggi.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm relative">
                  <div className="absolute -top-3 -left-3 bg-blue-gradient text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">
                    {step.number}
                  </div>
                  <h3 className="text-sm font-semibold mb-1 mt-2">{step.title}</h3>
                  <p className="text-gray-600 text-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Simplified */}
        <section className="py-10 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-2 py-1 rounded-full bg-artweb-50 text-artweb-600 text-xs font-medium mb-2">
                FAQ
              </div>
              <h2 className="text-xl font-bold mb-2">Pertanyaan yang Sering Diajukan</h2>
              <p className="text-sm text-gray-600 max-w-lg mx-auto">
                Temukan jawaban untuk pertanyaan umum tentang layanan kami.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-semibold mb-1">Berapa lama waktu yang dibutuhkan untuk membuat website?</h3>
                  <p className="text-gray-600 text-xs">
                    Website sederhana membutuhkan waktu 2-4 minggu, sedangkan website yang lebih kompleks dapat membutuhkan 4-8 minggu atau lebih.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-semibold mb-1">Apakah saya perlu menyediakan konten untuk website?</h3>
                  <p className="text-gray-600 text-xs">
                    Idealnya, Anda menyediakan konten. Namun, kami juga dapat membantu dengan penulisan konten dasar dengan biaya tambahan.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-semibold mb-1">Apakah website saya akan responsif di mobile?</h3>
                  <p className="text-gray-600 text-xs">
                    Ya, semua website yang kami kembangkan bersifat responsif dan akan tampil dengan baik di semua perangkat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Simplified */}
        <section className="py-10 px-4 bg-blue-gradient text-white">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Siap Memulai Proyek Website Anda?
              </h2>
              <p className="text-sm md:text-base opacity-90 mb-5">
                Konsultasikan kebutuhan digital Anda dengan tim ahli kami untuk mendapatkan solusi terbaik.
              </p>
              <Button asChild size="sm" className="bg-white text-artweb-700 hover:bg-gray-100 shadow-sm hover:shadow-md">
                <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Konsultasi Gratis
                  <ArrowRight size={16} />
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
