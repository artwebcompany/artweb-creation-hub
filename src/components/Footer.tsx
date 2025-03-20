
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { whatsappGeneralLink } from '@/utils/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="font-bold text-2xl bg-clip-text text-transparent bg-blue-gradient">
              art<span className="text-artweb-100">Web</span>
            </div>
            <p className="text-gray-300">
              Kami membantu bisnis Anda tumbuh dengan solusi website modern yang
              efektif, menarik, dan profesional. Dengan fokus pada hasil dan pengalaman pengguna.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-300 hover:text-artweb-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-artweb-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-artweb-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-artweb-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-artweb-300 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-artweb-300 transition-colors"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-300 hover:text-artweb-300 transition-colors"
                >
                  Portofolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-artweb-300 transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-artweb-300 transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-artweb-300 transition-colors"
                >
                  Website Bisnis
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-artweb-300 transition-colors"
                >
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-artweb-300 transition-colors"
                >
                  Web Application
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-artweb-300 transition-colors"
                >
                  Website Kustom
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-artweb-300 transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-artweb-300 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Jl. Kaliurang KM 10, Ngaglik, Sleman, Yogyakarta, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-artweb-300 flex-shrink-0" />
                <a
                  href={whatsappGeneralLink}
                  className="text-gray-300 hover:text-artweb-300 transition-colors"
                >
                  +62 815-7363-5143
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-artweb-300 flex-shrink-0" />
                <a
                  href="mailto:hello@artweb.id"
                  className="text-gray-300 hover:text-artweb-300 transition-colors"
                >
                  hello@artweb.id
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={20} className="text-artweb-300 flex-shrink-0" />
                <span className="text-gray-300">Sen - Jum: 09:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© {currentYear} artWeb. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
