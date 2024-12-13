import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3
      }
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="fixed inset-0 bg-white z-50 flex flex-col"
    >
      <div className="flex justify-between items-center p-5 border-b">
        <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
          <img src="/images/logo.png" alt="Nurture Path Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold font-montserrat">
            Nurture <span className="text-purple-600">Path</span>
          </span>
        </Link>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <IoClose className="text-2xl" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-8 px-5">
        <nav className="space-y-6">
          <Link to="/" className="block text-xl font-semibold" onClick={onClose}>Home</Link>
          
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-500 uppercase">About Us</h3>
            <div className="space-y-3 pl-4">
              <Link to="/team" className="block" onClick={onClose}>Our Team</Link>
              <Link to="/mission" className="block" onClick={onClose}>Our Mission</Link>
              <Link to="/approach" className="block" onClick={onClose}>Our Approach</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-500 uppercase">Locations</h3>
            <div className="space-y-3 pl-4">
              <Link to="/new-york" className="block" onClick={onClose}>New York</Link>
              <Link to="/new-jersey" className="block" onClick={onClose}>New Jersey</Link>
            </div>
          </div>

          <Link to="/intake-form" className="block text-xl font-semibold" onClick={onClose}>Intake Form</Link>
          <Link to="/insurance" className="block text-xl font-semibold" onClick={onClose}>Insurance</Link>
        </nav>
      </div>

      <div className="p-5 border-t space-y-4">
        <Link
          to="/intake-form"
          className="block w-full py-3 px-4 bg-purple-600 text-white text-center rounded-lg font-semibold"
          onClick={onClose}
        >
          Apply For Services
        </Link>
        <a
          href="tel:201-720-8600"
          className="block w-full py-3 px-4 bg-purple-100 text-purple-600 text-center rounded-lg font-semibold"
        >
          201-720-8600
        </a>
      </div>
    </motion.div>
  );
};

export default MobileMenu; 