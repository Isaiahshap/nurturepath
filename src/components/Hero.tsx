import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-screen -ml-[50vw] left-1/2 right-1/2">
      {/* Background Image with Gentle Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{
          backgroundImage: 'url("/images/hero.jpg")',
          filter: 'brightness(0.7)',
        }}
      />
      
      {/* Content Container with Smooth Fade */}
      <div className="relative h-full flex items-center justify-center bg-gradient-to-b from-transparent to-black/30">
        <div className="text-center text-white px-4 max-w-4xl animate-fadeIn">
          {/* Main Heading with Balanced Spacing */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 font-montserrat leading-tight tracking-normal">
            <span className="block mb-2">Where High Quality</span>
            <span className="block">ABA & Comfort Meet</span>
          </h1>

          {/* Subheading with Clear Typography */}
          <p className="text-lg sm:text-xl md:text-2xl mb-12 font-montserrat max-w-2xl mx-auto leading-relaxed">
            Services available in the clinic, daycare,
            <br className="hidden sm:block" /> 
            community, and in-home settings
          </p>

          {/* Accessible Button Group */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/contact-us" 
              className="
                group
                relative
                w-64 sm:w-auto
                px-8 py-4
                bg-[#9747FF]
                text-white
                rounded-full
                font-montserrat
                font-semibold
                transition-all
                duration-300
                hover:bg-[#8A35FF]
                focus:outline-none
                focus:ring-4
                focus:ring-purple-300
                transform
                hover:scale-102
                active:scale-98
              "
              role="button"
              aria-label="Contact Us Today"
            >
              <span className="relative z-10">Contact Us Today</span>
            </Link>
            
            <Link 
              to="/intake-form" 
              className="
                group
                relative
                w-64 sm:w-auto
                px-8 py-4
                bg-transparent
                text-white
                rounded-full
                font-montserrat
                font-semibold
                transition-all
                duration-300
                border-2
                border-white
                hover:bg-white
                hover:text-[#9747FF]
                focus:outline-none
                focus:ring-4
                focus:ring-purple-300
                transform
                hover:scale-102
                active:scale-98
              "
              role="button"
              aria-label="Fill Intake Form"
            >
              <span className="relative z-10">Intake Form</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;