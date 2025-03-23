
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const whatsappNumber = "081573635143";
  const whatsappGeneralLink = `https://wa.me/${whatsappNumber}?text=Halo%20artWeb,%20saya%20tertarik%20dengan%20layanan%20pembuatan%20website.`;

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
    <div className="fixed bottom-4 right-4 z-50 flex items-end flex-col">
      {/* Message Bubble */}
      {isMessageVisible && (
        <div className="mb-3 bg-white rounded-lg shadow-md p-3 max-w-[220px] animate-scale-in">
          <button 
            onClick={closeMessage}
            className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
            aria-label="Close message"
          >
            <X size={14} />
          </button>
          <p className="text-gray-700 text-xs pr-3">
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
          className="whatsapp-btn bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md flex items-center justify-center animate-scale-in"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={22} />
        </a>
      )}
    </div>
  );
};

export default WhatsAppButton;
