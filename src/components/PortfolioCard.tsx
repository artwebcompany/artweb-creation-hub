
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
      <div className="overflow-hidden rounded-xl bg-white shadow-card card-hover">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <div className={`absolute inset-0 bg-artweb-200 ${isLoaded ? 'hidden' : 'block'}`}></div>
          <img
            ref={imageRef}
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${isLoaded ? 'image-fade-in loaded' : 'image-fade-in'}`}
            onLoad={handleImageLoad}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4 z-10">
            <div className="bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {project.category}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-artweb-600 transition-colors duration-300">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
          
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="bg-artweb-50 text-artweb-700 text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="bg-artweb-50 text-artweb-700 text-xs px-2 py-1 rounded">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          {/* Link */}
          <div className="flex items-center text-artweb-600 text-sm font-medium">
            <span>Lihat Detail</span>
            <ArrowRight size={14} className={`ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
