import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookSquare, 
  FaLinkedin, 
  FaInstagram 
} from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative Background Element */}      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-montserrat">Nurture Path</h2>
            <p className="text-gray-300 leading-relaxed">
              Empowering relationships through expert therapy and compassionate guidance. Your journey to stronger connections starts here.
            </p>
            <div className="flex space-x-5">
              <a href="https://facebook.com" className="text-white/70 hover:text-purple-400 transition-colors duration-300">
                <FaFacebookSquare size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white/70 hover:text-purple-400 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" className="text-white/70 hover:text-purple-400 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 font-montserrat text-white/90">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { text: 'About Us', path: '/about-us' },
                { text: 'Our Services', path: '/services' },
                { text: 'Relationship Resources', path: '/resources' },
                { text: 'Join Our Team', path: '/careers' },
                { text: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-purple-300 transition-all duration-300 flex items-center group"
                  >
                    <BsArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-8 font-montserrat text-white/90">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Couples Therapy',
                'Family Counseling',
                'Individual Growth',
                'Relationship Workshops',
                'Premarital Counseling'
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-gray-400 hover:text-purple-300 transition-all duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <Link to="/contact">
              <h3 className="text-lg font-bold mb-8 font-montserrat text-white/90 hover:text-purple-300 transition-all duration-300">
                Contact Us
              </h3>
            </Link>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                <Link to="/contact" className="text-gray-400 hover:text-purple-300 transition-all duration-300">
                  <span>
                    123 Therapy Lane<br />
                    Suite 100<br />
                    Edison, NJ 08837
                  </span>
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-purple-400 flex-shrink-0" />
                <Link to="/contact" className="text-gray-400 hover:text-purple-300 transition-all duration-300">
                  201-720-8600
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-400 flex-shrink-0" />
                <Link to="/contact" className="text-gray-400 hover:text-purple-300 transition-all duration-300">
                  info@nurturepath.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Nurture Path. All rights reserved.
            </p>
            <div className="flex space-x-8 md:justify-end text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-purple-300 transition-all duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-purple-300 transition-all duration-300">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="hover:text-purple-300 transition-all duration-300">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 