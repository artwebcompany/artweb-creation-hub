
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = "081573635143";
  const whatsappGeneralLink = `https://wa.me/${whatsappNumber}?text=Halo%20artWeb,%20saya%20tertarik%20dengan%20layanan%20pembuatan%20website.`;

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
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="font-bold text-xl bg-clip-text text-transparent bg-blue-gradient">
              art<span className="text-artweb-500">Web</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-sm text-gray-700 hover:text-artweb-500 transition-colors font-medium"
            >
              Beranda
            </Link>
            <Link
              to="/services"
              className="text-sm text-gray-700 hover:text-artweb-500 transition-colors font-medium"
            >
              Layanan
            </Link>
            <Link
              to="/portfolio"
              className="text-sm text-gray-700 hover:text-artweb-500 transition-colors font-medium"
            >
              Portofolio
            </Link>
            <Link
              to="/about"
              className="text-sm text-gray-700 hover:text-artweb-500 transition-colors font-medium"
            >
              Tentang Kami
            </Link>
            <Link
              to="/contact"
              className="text-sm text-gray-700 hover:text-artweb-500 transition-colors font-medium"
            >
              Kontak
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="bg-blue-gradient shadow-sm hover:shadow-md">
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
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg absolute top-full left-0 right-0 border-t border-gray-100">
            <div className="flex flex-col p-4 space-y-3">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-gray-700 hover:text-artweb-500 transition-colors font-medium py-2 text-sm"
              >
                Beranda
              </Link>
              <Link
                to="/services"
                onClick={closeMenu}
                className="text-gray-700 hover:text-artweb-500 transition-colors font-medium py-2 text-sm"
              >
                Layanan
              </Link>
              <Link
                to="/portfolio"
                onClick={closeMenu}
                className="text-gray-700 hover:text-artweb-500 transition-colors font-medium py-2 text-sm"
              >
                Portofolio
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="text-gray-700 hover:text-artweb-500 transition-colors font-medium py-2 text-sm"
              >
                Tentang Kami
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-gray-700 hover:text-artweb-500 transition-colors font-medium py-2 text-sm"
              >
                Kontak
              </Link>
              <Button asChild size="sm" className="bg-blue-gradient mt-2">
                <a href={whatsappGeneralLink} target="_blank" rel="noopener noreferrer">
                  Hubungi Kami
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
