
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
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-10 md:py-16 px-4 bg-gradient-to-r from-artweb-50 to-blue-50">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-block px-2 py-1 rounded-full bg-artweb-100 text-artweb-700 text-xs font-medium mb-4">
                Portfolio
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">
                Karya <span className="bg-clip-text text-transparent bg-blue-gradient">Terbaik</span> Kami
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                Lihat beberapa proyek website terbaik yang telah kami kerjakan untuk klien dari berbagai industri.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? 'default' : 'outline'}
                  onClick={() => setFilter(category)}
                  size="sm"
                  className={`
                    text-xs px-3 py-1 h-auto
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

            {/* Portfolio Grid - Now 2 columns on small screens */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
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
              <div className="text-center py-8">
                <p className="text-gray-500 text-sm mb-3">Tidak ada proyek dalam kategori ini saat ini.</p>
                <Button 
                  onClick={() => setFilter('all')}
                  variant="outline"
                  size="sm"
                  className="border-artweb-200 hover:border-artweb-300 hover:bg-artweb-50 text-xs"
                >
                  Lihat Semua Proyek
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Process Section - Simpler version */}
        <section className="py-10 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-2 py-1 rounded-full bg-artweb-50 text-artweb-600 text-xs font-medium mb-2">
                Proses Kami
              </div>
              <h2 className="text-xl font-bold mb-2">Bagaimana Kami Bekerja</h2>
              <p className="text-sm text-gray-600 max-w-lg mx-auto">
                Pendekatan kami untuk setiap proyek memastikan hasil yang berkualitas dan sesuai dengan visi Anda.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-gradient rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2">
                  1
                </div>
                <h3 className="text-sm font-semibold mb-1">Discovery</h3>
                <p className="text-gray-600 text-xs">
                  Memahami kebutuhan bisnis Anda.
                </p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 bg-blue-gradient rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2">
                  2
                </div>
                <h3 className="text-sm font-semibold mb-1">Design</h3>
                <p className="text-gray-600 text-xs">
                  Menciptakan UI/UX yang menarik.
                </p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 bg-blue-gradient rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2">
                  3
                </div>
                <h3 className="text-sm font-semibold mb-1">Development</h3>
                <p className="text-gray-600 text-xs">
                  Mengembangkan kode berkualitas tinggi.
                </p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 bg-blue-gradient rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2">
                  4
                </div>
                <h3 className="text-sm font-semibold mb-1">Delivery</h3>
                <p className="text-gray-600 text-xs">
                  Meluncurkan dan mendukung website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Simpler version */}
        <section className="py-10 px-4 bg-blue-gradient text-white">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Siap Membuat Proyek Anda Selanjutnya?
              </h2>
              <p className="text-sm md:text-base opacity-90 mb-5">
                Diskusikan ide proyek Anda dengan tim kami dan lihat bagaimana kami dapat membantu mewujudkannya.
              </p>
              <Button asChild size="sm" className="bg-white text-artweb-700 hover:bg-gray-100 shadow-sm hover:shadow-md">
                <a href="https://wa.me/081573635143?text=Halo%20artWeb,%20saya%20tertarik%20untuk%20mendiskusikan%20proyek%20website." target="_blank" rel="noopener noreferrer">
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
