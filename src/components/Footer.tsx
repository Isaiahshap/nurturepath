import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookSquare, 
  FaLinkedin, 
  FaInstagram 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="ml-3 text-2xl font-montserrat text-white">Nurture Path</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering relationships through expert therapy and compassionate guidance. 
              Your journey to stronger connections starts here.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <FaFacebookSquare className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-montserrat font-semibold text-white">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Services', 'Relationship Resources', 'Join Our Team', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-montserrat font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start space-x-3 text-sm">
                <FaMapMarkerAlt className="text-purple-400 mt-1 text-lg" />
                <span className="text-gray-400">123 Therapy Lane<br />Suite 100<br />Edison, NJ 08837</span>
              </p>
              <p className="flex items-center space-x-3 text-sm">
                <FaPhone className="text-purple-400 text-lg" />
                <a href="tel:201-720-8600" className="text-gray-400 hover:text-purple-400 transition-colors">
                  201-720-8600
                </a>
              </p>
              <p className="flex items-center space-x-3 text-sm">
                <FaEnvelope className="text-purple-400 text-lg" />
                <a href="mailto:info@nurturepath.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  info@nurturepath.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-montserrat font-semibold text-white">Hours</h3>
            <div className="space-y-4 text-sm">
              <p className="flex justify-between text-gray-400">
                <span>Monday - Friday</span>
                <span>9 AM - 5 PM</span>
              </p>
              <p className="flex justify-between text-gray-400">
                <span>Saturday</span>
                <span>10 AM - 4 PM</span>
              </p>
              <p className="flex justify-between text-gray-400">
                <span>Sunday</span>
                <span>Closed</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © 2024 Nurture Path. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-gray-500 hover:text-purple-400 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 