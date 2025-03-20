
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial as TestimonialType } from '@/utils/data';

interface TestimonialProps {
  testimonials: TestimonialType[];
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(testimonials.length).fill(false));

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleImageLoad = (index: number) => {
    setIsLoaded((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div className="relative overflow-hidden bg-artweb-50/50 backdrop-blur-sm rounded-2xl shadow-card py-12 px-6 md:px-12">
      {/* Background accent */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-gradient rounded-full opacity-10"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-gradient rounded-full opacity-10"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                <div className={`bg-artweb-200 w-full h-full absolute ${isLoaded[currentIndex] ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}></div>
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className={`w-full h-full object-cover ${isLoaded[currentIndex] ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                  onLoad={() => handleImageLoad(currentIndex)}
                />
              </div>
              <div className="absolute top-0 -right-3 bg-artweb-500 rounded-full p-3 text-white shadow-md">
                <Quote size={20} />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-700 italic mb-6">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <div className="font-bold text-gray-900">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-artweb-600 text-sm">
                {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
              </div>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex justify-center md:justify-end space-x-2 mt-8">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-artweb-50 hover:text-artweb-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-artweb-50 hover:text-artweb-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
