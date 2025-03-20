
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioCard from '@/components/PortfolioCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { portfolioItems } from '@/utils/data';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (filter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category.toLowerCase().includes(filter.toLowerCase()))
      );
    }
  }, [filter]);

  // Get unique categories
  const categories = ['all', ...new Set(portfolioItems.map((item) => item.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-r from-artweb-50 to-blue-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-100 text-artweb-700 text-sm font-medium mb-6">
                Portfolio
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Karya <span className="bg-clip-text text-transparent bg-blue-gradient">Terbaik</span> Kami
              </h1>
              <p className="text-xl text-gray-600">
                Lihat beberapa proyek website terbaik yang telah kami kerjakan untuk klien dari berbagai industri.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 px-6 bg-white">
          <div className="container-custom">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? 'default' : 'outline'}
                  onClick={() => setFilter(category)}
                  className={`
                    ${filter === category 
                      ? 'bg-artweb-600 hover:bg-artweb-700' 
                      : 'border-artweb-200 hover:border-artweb-300 hover:bg-artweb-50'
                    } 
                    rounded-full transition-all duration-300
                  `}
                >
                  {category === 'all' ? 'Semua' : category}
                </Button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((project, index) => (
                <div 
                  key={project.id} 
                  className="animate-slide-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PortfolioCard project={project} />
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Tidak ada proyek dalam kategori ini saat ini.</p>
                <Button 
                  onClick={() => setFilter('all')}
                  variant="outline"
                  className="border-artweb-200 hover:border-artweb-300 hover:bg-artweb-50"
                >
                  Lihat Semua Proyek
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-50 text-artweb-600 text-sm font-medium mb-4">
                Proses Kami
              </div>
              <h2 className="text-3xl font-bold mb-4">Bagaimana Kami Bekerja</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Pendekatan kami untuk setiap proyek memastikan hasil yang berkualitas dan sesuai dengan visi Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
              <div className="text-center">
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-blue-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                    1
                  </div>
                  <div className="absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-artweb-500 to-transparent -translate-y-1/2 hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-gray-600">
                  Memahami bisnis, tujuan, dan kebutuhan spesifik Anda.
                </p>
              </div>

              <div className="text-center">
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-blue-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                    2
                  </div>
                  <div className="absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-artweb-500 to-transparent -translate-y-1/2 hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <p className="text-gray-600">
                  Menciptakan UI/UX yang menarik dan sesuai dengan brand Anda.
                </p>
              </div>

              <div className="text-center">
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-blue-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                    3
                  </div>
                  <div className="absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-artweb-500 to-transparent -translate-y-1/2 hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Development</h3>
                <p className="text-gray-600">
                  Mengembangkan website dengan kode berkualitas tinggi.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6">
                  <div className="w-20 h-20 bg-blue-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Delivery</h3>
                <p className="text-gray-600">
                  Meluncurkan website dan memberikan support berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-blue-gradient text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Siap Membuat Proyek Anda Selanjutnya?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Diskusikan ide proyek Anda dengan tim kami dan lihat bagaimana kami dapat membantu mewujudkannya.
              </p>
              <Button asChild className="bg-white text-artweb-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-6 py-6 text-base">
                <a href="https://wa.me/6281573635143?text=Halo%20artWeb,%20saya%20tertarik%20untuk%20mendiskusikan%20proyek%20website." target="_blank" rel="noopener noreferrer">
                  Mulai Proyek Anda
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

export default Portfolio;
