
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { whatsappGeneralLink } from '@/utils/data';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const heroElement = heroRef.current;
      if (heroElement) {
        const bg = heroElement.querySelector<HTMLDivElement>('.hero-bg');
        const content = heroElement.querySelector<HTMLDivElement>('.hero-content');
        
        if (bg) {
          bg.style.transform = `translateY(${scroll * 0.1}px)`;
        }
        if (content) {
          content.style.transform = `translateY(${scroll * 0.05}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToServices = () => {
    navigate('/services');
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="hero-bg absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gray-50 bg-grain"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-artweb-100/30 via-transparent to-transparent opacity-70"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-gradient rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute left-0 top-1/3 w-64 h-64 bg-blue-gradient-light rounded-full filter blur-3xl opacity-20 animate-float"></div>
      </div>

      {/* Content */}
      <div className="hero-content container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-block animate-fade-in">
              <div className="bg-artweb-50 border border-artweb-200 rounded-full px-4 py-1.5 text-sm font-medium text-artweb-700">
                Partner Digital Terpercaya di Yogyakarta
              </div>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-tight lg:leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Kami Membuat <span className="bg-clip-text text-transparent bg-blue-gradient">Website Premium</span> yang Menghasilkan
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Tim ahli kami menghadirkan solusi website modern dengan desain eksklusif, performa tinggi, dan pengalaman pengguna terbaik untuk bisnis Anda.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button asChild className="bg-blue-gradient shadow-button hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-base px-6 py-6">
                <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Konsultasi Gratis
                  <ArrowRight size={18} />
                </a>
              </Button>
              
              <Button 
                variant="outline"
                onClick={goToServices}
                className="border-artweb-300 text-artweb-700 hover:bg-artweb-50 transition-all duration-300 hover:-translate-y-1 text-base px-6 py-6"
              >
                Lihat Layanan Kami
              </Button>
            </div>
          </div>
          
          {/* Additional decorative elements or stats */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-card">
              <div className="text-3xl font-bold text-artweb-600 mb-2">150+</div>
              <div className="text-gray-600">Klien Puas</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-card">
              <div className="text-3xl font-bold text-artweb-600 mb-2">200+</div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-card">
              <div className="text-3xl font-bold text-artweb-600 mb-2">5+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
