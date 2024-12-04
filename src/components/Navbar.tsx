import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  const navLinkClasses = "relative text-gray-700 hover:text-purple-600 font-montserrat py-2 transition-colors duration-200 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left";
  
  const dropdownClasses = "absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 transform opacity-0 scale-95 transition-all duration-200 ease-in-out origin-top";
  
  const dropdownItemClasses = "block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200 relative after:content-[''] after:absolute after:w-[calc(100%-2rem)] after:h-0.5 after:bg-purple-600 after:left-4 after:bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left";

  const ctaButtonClasses = `
    bg-purple-600 
    text-white 
    px-6 
    py-2 
    rounded-full 
    font-montserrat 
    relative 
    overflow-hidden 
    transition-all 
    duration-300 
    transform 
    hover:scale-105 
    hover:bg-purple-500
    before:content-[''] 
    before:absolute 
    before:top-0 
    before:left-0 
    before:w-full 
    before:h-full 
    before:bg-gradient-to-r 
    before:from-purple-400 
    before:to-purple-600 
    before:opacity-0 
    before:transition-opacity 
    before:duration-300 
    hover:before:opacity-100
    after:content-[''] 
    after:absolute 
    after:top-1/2 
    after:left-1/2 
    after:-translate-x-1/2 
    after:-translate-y-1/2 
    after:w-0 
    after:h-0 
    after:bg-white 
    after:rounded-full 
    after:opacity-30 
    after:transition-all 
    after:duration-500 
    hover:after:w-[300px] 
    hover:after:h-[300px] 
    hover:after:opacity-0
    active:scale-95
    z-0
  `;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800 font-montserrat">Nurture Path</span>
          </Link>

          {/* Navigation Links */}
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
              <button className={navLinkClasses + " flex items-center"}>
                About Us
                <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${dropdownClasses} ${isAboutOpen ? 'opacity-100 scale-100' : ''}`}>
                <Link to="/our-team" className={dropdownItemClasses}>Our Team</Link>
                <Link to="/our-mission" className={dropdownItemClasses}>Our Mission</Link>
                <Link to="/our-approach" className={dropdownItemClasses}>Our Approach</Link>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsLocationsOpen(true)}
              onMouseLeave={() => setIsLocationsOpen(false)}
            >
              <button className={navLinkClasses + " flex items-center"}>
                Locations
                <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${dropdownClasses} ${isLocationsOpen ? 'opacity-100 scale-100' : ''}`}>
                <Link to="/new-jersey" className={dropdownItemClasses}>New Jersey</Link>
                <Link to="/texas" className={dropdownItemClasses}>Texas</Link>
                <Link to="/georgia" className={dropdownItemClasses}>Georgia</Link>
              </div>
            </div>

            <Link to="/intake-form" className={navLinkClasses}>Intake Form</Link>
            <Link to="/insurance" className={navLinkClasses}>Insurance</Link>
            <Link to="/blog" className={navLinkClasses}>Blog</Link>
          </div>

          {/* CTA Buttons with new animations */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/apply"
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
