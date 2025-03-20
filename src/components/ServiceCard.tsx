
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServicePackage } from '@/utils/data';

interface ServiceCardProps {
  service: ServicePackage;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-500 card-hover ${
        service.popular 
          ? 'border-2 border-artweb-500 bg-white' 
          : 'border border-gray-200 bg-white/80'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {service.popular && (
        <div className="absolute top-5 right-5">
          <div className="bg-artweb-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            POPULAR
          </div>
        </div>
      )}
      
      {/* Card content */}
      <div className={`p-6 sm:p-8 ${service.popular ? 'pb-8' : 'pb-8'}`}>
        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
        <div className="text-3xl font-bold mb-4">{service.price}</div>
        <p className="text-gray-600 mb-6">{service.description}</p>
        
        {/* Features list */}
        <div className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className={`rounded-full p-1 ${service.popular ? 'bg-artweb-100 text-artweb-600' : 'bg-gray-100 text-gray-600'}`}>
                  <Check size={12} />
                </div>
              </div>
              <div className="ml-3 text-gray-600">{feature}</div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="pt-2">
          <Button 
            asChild 
            className={`w-full group ${
              service.popular 
                ? 'bg-blue-gradient hover:shadow-lg' 
                : 'bg-white border border-artweb-300 hover:bg-artweb-50 text-artweb-600'
            }`}
          >
            <a 
              href={service.whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2"
            >
              <span>Pilih Paket</span>
              <ArrowRight size={16} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
