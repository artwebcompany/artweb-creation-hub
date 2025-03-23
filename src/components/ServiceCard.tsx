
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServicePackage } from '@/utils/data';

interface ServiceCardProps {
  service: ServicePackage;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = "081573635143";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Halo%20artWeb,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(service.name)}.`;

  return (
    <div
      className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
        service.popular 
          ? 'border border-artweb-300 bg-white shadow-sm' 
          : 'border border-gray-100 bg-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {service.popular && (
        <div className="absolute top-3 right-3">
          <div className="bg-artweb-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
            POPULAR
          </div>
        </div>
      )}
      
      {/* Card content */}
      <div className="p-4">
        <h3 className="text-base font-semibold mb-1">{service.name}</h3>
        <div className="text-xl font-bold mb-2">{service.price}</div>
        <p className="text-gray-600 text-xs mb-3 line-clamp-2">{service.description}</p>
        
        {/* Features list */}
        <div className="space-y-1.5 mb-4">
          {service.features.slice(0, 5).map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <div className={`rounded-full p-0.5 ${service.popular ? 'bg-artweb-100 text-artweb-600' : 'bg-gray-100 text-gray-600'}`}>
                  <Check size={10} />
                </div>
              </div>
              <div className="ml-2 text-gray-600 text-xs">{feature}</div>
            </div>
          ))}
          {service.features.length > 5 && (
            <div className="text-xs text-artweb-500 font-medium mt-1">
              +{service.features.length - 5} fitur lainnya
            </div>
          )}
        </div>
        
        {/* CTA */}
        <div>
          <Button 
            asChild 
            size="sm"
            className={`w-full group text-xs py-1.5 ${
              service.popular 
                ? 'bg-blue-gradient' 
                : 'bg-white border border-artweb-300 hover:bg-artweb-50 text-artweb-600'
            }`}
          >
            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1"
            >
              <span>Pilih Paket</span>
              <ArrowRight size={12} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
