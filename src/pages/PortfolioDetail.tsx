
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ExternalLink, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { portfolioItems, whatsappGeneralLink } from '@/utils/data';

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(portfolioItems.find(item => item.id === id));
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the project based on ID
    const foundProject = portfolioItems.find(item => item.id === id);
    
    if (foundProject) {
      setProject(foundProject);
      setImagesLoaded(new Array(foundProject.images.length).fill(false));
    } else {
      // If project not found, redirect to portfolio page
      navigate('/portfolio');
    }
    
    setIsLoading(false);
  }, [id, navigate]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleNextProject = () => {
    if (!project) return;
    
    const currentIndex = portfolioItems.findIndex(item => item.id === project.id);
    const nextIndex = (currentIndex + 1) % portfolioItems.length;
    navigate(`/portfolio/${portfolioItems[nextIndex].id}`);
  };

  const handlePrevProject = () => {
    if (!project) return;
    
    const currentIndex = portfolioItems.findIndex(item => item.id === project.id);
    const prevIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    navigate(`/portfolio/${portfolioItems[prevIndex].id}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-artweb-200 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-artweb-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-artweb-200 rounded"></div>
              <div className="h-4 bg-artweb-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Button onClick={() => navigate('/portfolio')}>Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-6 bg-gradient-to-r from-artweb-50 to-blue-50">
          <div className="container-custom">
            <div className="mb-8">
              <button 
                onClick={() => navigate('/portfolio')}
                className="inline-flex items-center text-artweb-600 hover:text-artweb-700"
              >
                <ArrowLeft size={16} className="mr-2" />
                <span>Kembali ke Portfolio</span>
              </button>
            </div>
            
            <div className="max-w-4xl">
              <div className="inline-block px-3 py-1 rounded-full bg-artweb-100 text-artweb-700 text-sm font-medium mb-4">
                {project.category}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-white/70 backdrop-blur-sm text-artweb-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-gray-600">
                <span className="font-medium">Klien:</span>
                <span className="ml-2">{project.client}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Image Gallery */}
        <section className="py-12 px-6 bg-white">
          <div className="container-custom">
            {/* Main Image */}
            <div className="rounded-xl overflow-hidden shadow-card mb-4 relative aspect-video">
              <div className={`absolute inset-0 bg-artweb-100 ${imagesLoaded[activeImage] ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
              <img 
                src={project.images[activeImage]} 
                alt={`${project.title} - View ${activeImage + 1}`}
                className={`w-full h-full object-cover ${imagesLoaded[activeImage] ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                onLoad={() => handleImageLoad(activeImage)}
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {project.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-24 h-16 rounded-md overflow-hidden transition-all duration-300 ${
                    activeImage === index 
                      ? 'border-2 border-artweb-500 shadow-md' 
                      : 'border border-gray-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 px-6 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Project Info */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Tentang Proyek</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {project.fullDescription}
                </p>
                
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tantangan</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Solusi</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Hasil</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {project.results}
                    </p>
                  </div>
                </div>
                
                {/* Project testimonial if available */}
                {project.testimonial && (
                  <div className="mt-12 bg-artweb-50/50 rounded-xl p-8 relative">
                    <div className="absolute top-8 left-8 text-artweb-200/20">
                      <Quote size={60} />
                    </div>
                    <div className="relative z-10">
                      <p className="text-gray-700 italic mb-6">
                        "{project.testimonial.quote}"
                      </p>
                      <div>
                        <div className="font-bold text-gray-900">
                          {project.testimonial.author}
                        </div>
                        <div className="text-artweb-600 text-sm">
                          {project.testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Right Column - Technologies & CTA */}
              <div>
                {/* Technologies */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-8">
                  <h3 className="text-xl font-semibold mb-4">Teknologi</h3>
                  <div className="space-y-3">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-artweb-100 text-artweb-600 rounded-full p-1">
                            <Check size={12} />
                          </div>
                        </div>
                        <div className="ml-3 text-gray-700">{tech}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Live Link if available */}
                {project.link && (
                  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-8">
                    <h3 className="text-xl font-semibold mb-4">Live Preview</h3>
                    <Button asChild variant="outline" className="w-full border-artweb-300 text-artweb-700">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <span>Lihat Website</span>
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                )}
                
                {/* CTA */}
                <div className="bg-blue-gradient text-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Ingin Proyek Serupa?</h3>
                  <p className="opacity-90 mb-6">
                    Diskusikan kebutuhan website Anda dengan tim ahli kami untuk mendapatkan solusi yang tepat.
                  </p>
                  <Button asChild className="bg-white text-artweb-700 hover:bg-gray-100 w-full">
                    <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer">
                      Konsultasi Gratis
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to other projects */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Button 
                onClick={handlePrevProject}
                className="flex items-center mb-4 md:mb-0 bg-white border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-700"
              >
                <ArrowLeft size={16} className="mr-2" />
                <span>Proyek Sebelumnya</span>
              </Button>
              
              <Button 
                onClick={() => navigate('/portfolio')}
                variant="outline"
                className="mb-4 md:mb-0 md:mx-4 border-artweb-300 text-artweb-700 hover:bg-artweb-50"
              >
                Semua Proyek
              </Button>
              
              <Button 
                onClick={handleNextProject}
                className="flex items-center bg-white border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-700"
              >
                <span>Proyek Selanjutnya</span>
                <ArrowRight size={16} className="ml-2" />
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

export default PortfolioDetail;
