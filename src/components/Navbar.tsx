import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import MobileMenu from './MobileMenu';

function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClasses = "relative text-gray-700 hover:text-purple-600 font-lato py-2 transition-colors duration-200 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left";
  
  const dropdownClasses = "absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 transform opacity-0 scale-95 transition-all duration-200 ease-in-out origin-top";
  
  const dropdownItemClasses = "block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200 relative after:content-[''] after:absolute after:w-[calc(100%-2rem)] after:h-0.5 after:bg-purple-600 after:left-4 after:bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left";

  const ctaButtonClasses = `
    relative
    inline-flex
    items-center
    px-6
    py-3
    text-sm
    font-semibold
    text-white
    bg-purple-500
    rounded-lg
    overflow-hidden
    transition-all
    duration-300
    hover:bg-purple-700
    hover:shadow-lg
    before:absolute
    before:inset-0
    before:bg-white/20
    before:translate-x-[-100%]
    hover:before:translate-x-[100%]
    before:transition-transform
    before:duration-500
  `;

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/images/logo.png" 
                alt="Nurture Path Logo" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold font-montserrat">
                Nurture <span className="text-purple-600">Path</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={navLinkClasses}>
                Home
              </Link>
              
              {/* About Us Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <Link to="/about-us" className={navLinkClasses + " flex items-center"}>
                  About Us
                  <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className={`${dropdownClasses} ${isAboutOpen ? 'opacity-100 scale-100' : ''}`}>
                  <Link to="/team" className={dropdownItemClasses}>Our Team</Link>
                  <Link to="/mission" className={dropdownItemClasses}>Our Mission</Link>
                  <Link to="/approach" className={dropdownItemClasses}>Our Approach</Link>
                </div>
              </div>

              {/* Locations Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsLocationsOpen(true)}
                onMouseLeave={() => setIsLocationsOpen(false)}
              >
                <Link to="/locations" className={navLinkClasses + " flex items-center"}>
                  Locations
                  <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className={`${dropdownClasses} ${isLocationsOpen ? 'opacity-100 scale-100' : ''}`}>
                  <Link to="/new-york" className={dropdownItemClasses}>New York</Link>
                  <Link to="/new-jersey" className={dropdownItemClasses}>New Jersey</Link>
                </div>
              </div>

              <Link to="/intake-form" className={navLinkClasses}>Intake Form</Link>
              <Link to="/insurance" className={navLinkClasses}>Insurance</Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/intake-form"
                className={ctaButtonClasses}
              >
                <span className="relative z-10">Apply For Services</span>
              </Link>
              <a
                href="tel:201-720-8600"
                className={ctaButtonClasses}
              >
                <span className="relative z-10">201-720-8600</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <HiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}

export default Navbar;
