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
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-montserrat">Nurture Path</h2>
            <p className="text-gray-300 leading-relaxed">
              Transforming lives through evidence-based ABA therapy and compassionate care.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-purple-300 hover:text-purple-400 transition-colors">
                <FaFacebookSquare size={24} />
              </a>
              <a href="https://linkedin.com" className="text-purple-300 hover:text-purple-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" className="text-purple-300 hover:text-purple-400 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat text-purple-300">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { text: 'About Us', path: '/about-us' },
                { text: 'Our Services', path: '/services' },
                { text: 'Resources', path: '/resources' },
                { text: 'Careers', path: '/careers' },
                { text: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 flex items-center group"
                  >
                    <BsArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat text-purple-300">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Early Intervention',
                'School Support',
                'Parent Training',
                'Behavioral Consultation',
                'Social Skills Groups'
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat text-purple-300">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Therapy Lane<br />Suite 100<br />Edison, NJ 08837</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-purple-400 flex-shrink-0" />
                <a href="tel:201-720-8600" className="text-gray-300 hover:text-purple-300 transition-colors">
                  201-720-8600
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-400 flex-shrink-0" />
                <a href="mailto:info@nurturepath.com" className="text-gray-300 hover:text-purple-300 transition-colors">
                  info@nurturepath.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nurture Path. All rights reserved.
            </p>
            <div className="flex space-x-6 md:justify-end text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-purple-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-purple-300 transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="hover:text-purple-300 transition-colors">
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