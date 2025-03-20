
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { whatsappGeneralLink } from '@/utils/data';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="font-bold text-2xl bg-clip-text text-transparent bg-blue-gradient">
              art<span className="text-artweb-500">Web</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-artweb-500 transition-colors font-medium link-underline"
            >
              Beranda
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-artweb-500 transition-colors font-medium link-underline"
            >
              Layanan
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-700 hover:text-artweb-500 transition-colors font-medium link-underline"
            >
              Portofolio
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-artweb-500 transition-colors font-medium link-underline"
            >
              Tentang Kami
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-artweb-500 transition-colors font-medium link-underline"
            >
              Kontak
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-blue-gradient shadow-button hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer">
                Hubungi Kami
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-artweb-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}
        >
          <div className="flex flex-col py-4 space-y-4 mt-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-gray-700 hover:text-artweb-500 transition-colors font-medium py-2"
            >
              Beranda
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className="text-gray-700 hover:text-artweb-500 transition-colors font-medium py-2"
            >
              Layanan
            </Link>
            <Link
              to="/portfolio"
              onClick={closeMenu}
              className="text-gray-700 hover:text-artweb-500 transition-colors font-medium py-2"
            >
              Portofolio
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="text-gray-700 hover:text-artweb-500 transition-colors font-medium py-2"
            >
              Tentang Kami
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-gray-700 hover:text-artweb-500 transition-colors font-medium py-2"
            >
              Kontak
            </Link>
            <Button asChild className="bg-blue-gradient">
              <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer">
                Hubungi Kami
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
