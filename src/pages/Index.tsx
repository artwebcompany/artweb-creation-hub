
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Palette, LineChart, Cpu, Check, Zap, Layout, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import Testimonial from '@/components/Testimonial';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { servicePackages, portfolioItems, testimonials, whatsappGeneralLink } from '@/utils/data';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const servicesToShow = servicePackages;
  const portfolioToShow = portfolioItems.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Services Overview */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                Layanan Kami
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solusi Website <span className="bg-clip-text text-transparent bg-blue-gradient">Premium</span> untuk Bisnis Anda
              </h2>
              <p className="text-gray-600">
                Kami menyediakan berbagai layanan pengembangan website berkualitas tinggi untuk membantu bisnis Anda tumbuh dan sukses di era digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesToShow.map((service) => (
                <div key={service.id} className="animate-slide-up" style={{ animationDelay: `${servicesToShow.indexOf(service) * 0.1}s` }}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/services')}
                variant="outline" 
                className="border-artweb-300 text-artweb-700 hover:bg-artweb-50"
              >
                <span>Lihat Semua Layanan</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left content */}
              <div className="w-full lg:w-1/2">
                <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                  Mengapa Memilih Kami
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Kami Membuat Website yang <span className="bg-clip-text text-transparent bg-blue-gradient">Menghasilkan</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  artWeb tidak hanya sekedar membuat website, kami membangun solusi digital yang membantu bisnis Anda berkembang. Dengan pendekatan yang berorientasi hasil, kami fokus pada pengalaman pengguna, konversi, dan pertumbuhan bisnis Anda.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-artweb-100 text-artweb-600 rounded-full p-1">
                        <Check size={16} />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold">Desain Kustom & Premium</h3>
                      <p className="text-gray-600 text-sm">Tampilan eksklusif yang dirancang khusus untuk brand Anda</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-artweb-100 text-artweb-600 rounded-full p-1">
                        <Check size={16} />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold">Responsif di Semua Device</h3>
                      <p className="text-gray-600 text-sm">Tampilan optimal di smartphone, tablet, dan desktop</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-artweb-100 text-artweb-600 rounded-full p-1">
                        <Check size={16} />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold">SEO Friendly</h3>
                      <p className="text-gray-600 text-sm">Dioptimasi untuk performa terbaik di mesin pencari</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-artweb-100 text-artweb-600 rounded-full p-1">
                        <Check size={16} />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold">Support & Maintenance</h3>
                      <p className="text-gray-600 text-sm">Dukungan teknis dan pemeliharaan berkelanjutan</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="bg-blue-gradient shadow-button hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Diskusikan Kebutuhan Anda
                    <ArrowRight size={18} />
                  </a>
                </Button>
              </div>

              {/* Right content - Features grid */}
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <div className="bg-artweb-50 text-artweb-600 p-3 rounded-full inline-block mb-4">
                    <Palette size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">UI/UX Premium</h3>
                  <p className="text-gray-600 text-sm">
                    Desain intuitif yang meningkatkan pengalaman pengguna
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-artweb-50 text-artweb-600 p-3 rounded-full inline-block mb-4">
                    <Code size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
                  <p className="text-gray-600 text-sm">
                    Kode terstruktur untuk performa dan maintenance optimal
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div className="bg-artweb-50 text-artweb-600 p-3 rounded-full inline-block mb-4">
                    <LineChart size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Conversion Focused</h3>
                  <p className="text-gray-600 text-sm">
                    Dirancang untuk mengubah pengunjung menjadi pelanggan
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-artweb-50 text-artweb-600 p-3 rounded-full inline-block mb-4">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Performa Tinggi</h3>
                  <p className="text-gray-600 text-sm">
                    Loading cepat dan optimasi untuk pengalaman terbaik
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Detail */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                Spesialisasi Kami
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Kami Menyediakan <span className="bg-clip-text text-transparent bg-blue-gradient">Berbagai Solusi</span> Website
              </h2>
              <p className="text-gray-600">
                Apapun kebutuhan digital bisnis Anda, kami siap memberikan solusi website terbaik dengan teknologi terkini.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="bg-blue-gradient text-white p-3 rounded-full inline-block mb-4">
                  <Layout size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Website Bisnis</h3>
                <p className="text-gray-600 mb-4">
                  Website profesional untuk meningkatkan kredibilitas dan presence online bisnis Anda.
                </p>
                <Button 
                  onClick={() => navigate('/services')}
                  variant="ghost" 
                  className="p-0 h-auto text-artweb-600 hover:bg-transparent hover:text-artweb-700"
                >
                  <span>Pelajari lebih lanjut</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="bg-blue-gradient text-white p-3 rounded-full inline-block mb-4">
                  <LineChart size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">E-Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Toko online lengkap dengan fitur pengelolaan produk, pembayaran, dan pengiriman.
                </p>
                <Button 
                  onClick={() => navigate('/services')}
                  variant="ghost" 
                  className="p-0 h-auto text-artweb-600 hover:bg-transparent hover:text-artweb-700"
                >
                  <span>Pelajari lebih lanjut</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="bg-blue-gradient text-white p-3 rounded-full inline-block mb-4">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Application</h3>
                <p className="text-gray-600 mb-4">
                  Aplikasi web custom dengan fitur khusus sesuai kebutuhan bisnis spesifik Anda.
                </p>
                <Button 
                  onClick={() => navigate('/services')}
                  variant="ghost" 
                  className="p-0 h-auto text-artweb-600 hover:bg-transparent hover:text-artweb-700"
                >
                  <span>Pelajari lebih lanjut</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="bg-blue-gradient text-white p-3 rounded-full inline-block mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Layanan pemeliharaan website untuk memastikan performa dan keamanan optimal.
                </p>
                <Button 
                  onClick={() => navigate('/services')}
                  variant="ghost" 
                  className="p-0 h-auto text-artweb-600 hover:bg-transparent hover:text-artweb-700"
                >
                  <span>Pelajari lebih lanjut</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                Portfolio Kami
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-blue-gradient">Karya Terbaik</span> Yang Telah Kami Buat
              </h2>
              <p className="text-gray-600">
                Lihat beberapa proyek terbaik yang telah kami kerjakan untuk klien dari berbagai industri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioToShow.map((project, index) => (
                <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <PortfolioCard project={project} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/portfolio')}
                className="bg-blue-gradient shadow-button hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span>Lihat Semua Proyek</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                Testimonial
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Yang Klien <span className="bg-clip-text text-transparent bg-blue-gradient">Katakan</span> Tentang Kami
              </h2>
              <p className="text-gray-600">
                Kami bangga dengan feedback positif dari klien-klien kami yang telah merasakan manfaat dari layanan kami.
              </p>
            </div>

            <Testimonial testimonials={testimonials} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-artweb-600 to-artweb-800 text-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Siap Untuk Mendigitalisasi Bisnis Anda?
                </h2>
                <p className="text-white/80 text-lg">
                  Konsultasikan kebutuhan website Anda dengan tim ahli kami dan dapatkan solusi terbaik untuk bisnis Anda.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <Button asChild className="bg-white text-artweb-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-base px-6 py-6">
                  <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Mulai Sekarang
                    <ArrowRight size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
