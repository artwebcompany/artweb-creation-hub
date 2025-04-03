
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { whatsappGeneralLink } from '@/utils/data';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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
      {/* Background elements with more dynamic shapes */}
      <div className="hero-bg absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gray-50 bg-grain"></div>
        
        {/* Modern blob shapes using gradients */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-gradient rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-gradient-light rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-blue-gradient rounded-full filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDc3ZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiAvPjwvZz48L2c+PC9zdmc+')] bg-top opacity-50"></div>
      </div>

      {/* Content with modern layout */}
      <div className="hero-content container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left space-y-6 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-block animate-fade-in">
              <div className="bg-artweb-50 border border-artweb-200 rounded-full px-4 py-1.5 text-sm font-medium text-artweb-700 flex items-center">
                <span className="bg-artweb-500 h-2 w-2 rounded-full mr-2"></span>
                Partner Digital Terpercaya di Yogyakarta
              </div>
            </div>
            
            {/* Headline with better typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-tight lg:leading-tight tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Kami Membuat <span className="bg-clip-text text-transparent bg-blue-gradient relative inline-block">Website Premium <span className="absolute w-full h-1 bg-artweb-500 bottom-0 left-0 opacity-50"></span></span> yang Menghasilkan
            </h1>
            
            {/* Subheadline with better spacing */}
            <p className="text-xl text-gray-600 max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Tim ahli kami menghadirkan solusi website modern dengan desain eksklusif, performa tinggi, dan pengalaman pengguna terbaik untuk bisnis Anda.
            </p>
            
            {/* Feature check list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-in pt-2" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-artweb-500" />
                <span className="text-gray-700">Desain Premium</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-artweb-500" />
                <span className="text-gray-700">Responsif</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-artweb-500" />
                <span className="text-gray-700">SEO Friendly</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-artweb-500" />
                <span className="text-gray-700">Performa Tinggi</span>
              </div>
            </div>
            
            {/* CTA buttons with better styling */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild className="bg-blue-gradient shadow-button hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-base px-6 py-6 w-full sm:w-auto">
                <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Konsultasi Gratis
                  <ArrowRight size={18} />
                </a>
              </Button>
              
              <Button 
                variant="outline"
                onClick={goToServices}
                className="border-artweb-300 text-artweb-700 hover:bg-artweb-50 transition-all duration-300 hover:-translate-y-1 text-base px-6 py-6 w-full sm:w-auto"
              >
                Lihat Layanan Kami
              </Button>
            </div>
          </div>
          
          {/* Right content - Illustration or stats cards */}
          <div className="relative order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {/* Decorative elements */}
            <div className="absolute -top-5 -left-5 h-16 w-16 bg-blue-gradient rounded-lg rotate-12 opacity-20"></div>
            <div className="absolute -bottom-5 -right-5 h-16 w-16 bg-artweb-500 rounded-lg -rotate-12 opacity-20"></div>
            
            {/* Modern frame with device mockup */}
            <div className="relative bg-white rounded-2xl shadow-card p-6 md:p-8 backdrop-blur-sm bg-white/90">
              {/* Browser-like mock header */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="flex-1 h-8 bg-gray-100 rounded-md ml-2"></div>
              </div>
              
              {/* Stats with glass effect */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-artweb-600 mb-2">150+</div>
                  <div className="text-gray-600 text-sm">Klien Puas</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-artweb-600 mb-2">200+</div>
                  <div className="text-gray-600 text-sm">Proyek Selesai</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-artweb-600 mb-2">5+</div>
                  <div className="text-gray-600 text-sm">Tahun Pengalaman</div>
                </div>
              </div>
              
              {/* Mock content */}
              <div className="space-y-3">
                <div className="h-12 bg-gray-100 rounded-md w-2/3"></div>
                <div className="h-4 bg-gray-100 rounded-md w-full"></div>
                <div className="h-4 bg-gray-100 rounded-md w-5/6"></div>
                <div className="h-4 bg-gray-100 rounded-md w-4/6"></div>
                <div className="h-10 bg-blue-gradient rounded-md w-1/3 mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
