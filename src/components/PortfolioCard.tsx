
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PortfolioItem } from '@/utils/data';

interface PortfolioCardProps {
  project: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Link 
      to={`/portfolio/${project.id}`} 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/9]">
          <div className={`absolute inset-0 bg-artweb-100 ${isLoaded ? 'hidden' : 'block'}`}></div>
          <img
            ref={imageRef}
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            } ${isLoaded ? 'image-fade-in loaded' : 'image-fade-in'}`}
            onLoad={handleImageLoad}
          />
          <div className="absolute top-2 right-2 z-10">
            <div className="bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 px-2 py-0.5 rounded-full">
              {project.category}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="text-base font-semibold mb-1 group-hover:text-artweb-600 transition-colors duration-300">{project.title}</h3>
          <p className="text-gray-600 text-xs mb-2 line-clamp-2">{project.description}</p>
          
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1 mb-2">
            {project.technologies.slice(0, 2).map((tech, index) => (
              <span key={index} className="bg-artweb-50 text-artweb-700 text-[10px] px-2 py-0.5 rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 2 && (
              <span className="bg-artweb-50 text-artweb-700 text-[10px] px-2 py-0.5 rounded">
                +{project.technologies.length - 2}
              </span>
            )}
          </div>
          
          {/* Link */}
          <div className="flex items-center text-artweb-600 text-xs font-medium">
            <span>Lihat Detail</span>
            <ArrowRight size={12} className={`ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
