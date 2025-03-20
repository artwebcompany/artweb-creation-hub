
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappGeneralLink } from '@/utils/data';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMessageVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show the button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Show the message bubble after 1 more second
      const messageTimer = setTimeout(() => {
        setIsMessageVisible(true);
      }, 1000);
      
      return () => clearTimeout(messageTimer);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const closeMessage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMessageVisible(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col">
      {/* Message Bubble */}
      {isMessageVisible && (
        <div className="mb-4 bg-white rounded-xl shadow-lg p-4 max-w-xs animate-scale-in">
          <button 
            onClick={closeMessage}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close message"
          >
            <X size={16} />
          </button>
          <p className="text-gray-700 text-sm">
            Butuh bantuan? Konsultasikan kebutuhan website Anda dengan tim kami sekarang!
          </p>
        </div>
      )}
      
      {/* WhatsApp Button */}
      {isVisible && (
        <a
          href={whatsappGeneralLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center animate-scale-in"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      )}
    </div>
  );
};

export default WhatsAppButton;
