import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
      <div className="relative h-screen w-screen -ml-[50vw] left-1/2 right-1/2">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/hero.jpg")',
            filter: 'brightness(0.85)',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
        
        {/* Content Container */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4 text-purple-300 font-lato font-semibold tracking-wider uppercase"
              >
                Professional Marriage & Family Therapy
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-lato text-white mb-6 leading-tight"
              >
                Begin Your Journey to Stronger Relationships
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl font-lato"
              >
                Our experienced therapists provide compassionate guidance to help you build deeper connections, improve communication, and create lasting positive change.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to="/contact-us" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white rounded-lg font-lato font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  to="/approach" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg font-lato font-semibold hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
                >
                  Learn Our Approach
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Hero;