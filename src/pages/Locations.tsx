import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const LocationHero = () => (
  <div className="relative h-[60vh] w-screen -ml-[50vw] left-1/2 right-1/2 mb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/locations-hero.jpg")',
        filter: 'brightness(0.7)',
      }}
    />
    <div className="relative h-full flex items-center justify-center bg-gradient-to-b from-transparent to-black/30">
      <div className="text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Our Locations
        </h1>
        <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
          Bringing care and support to communities across the country
        </p>
      </div>
    </div>
  </div>
);

const Locations = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const locations = [
    {
      state: "New Jersey",
      description: "Our founding location, serving the Garden State with comprehensive ABA therapy services.",
      image: "/images/nj-location.jpg",
      link: "/new-jersey",
      color: "from-blue-100 to-blue-200"
    },
    {
      state: "Texas",
      description: "Bringing innovative behavioral therapy to the Lone Star State.",
      image: "/images/texas-location.jpg",
      link: "/texas",
      color: "from-red-100 to-red-200"
    },
    {
      state: "Georgia",
      description: "Serving families throughout the Peach State with compassionate care.",
      image: "/images/georgia-location.jpg",
      link: "/georgia",
      color: "from-green-100 to-green-200"
    }
  ];

  return (
    <div className="min-h-screen">
      <LocationHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Find Us <span className="text-purple-600">Near You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With multiple locations across the United States, we're here to serve 
            your family with the highest quality ABA therapy services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <Link to={location.link} key={index}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative group rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={location.image} 
                    alt={`${location.state} Location`}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end`}>
                  <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">
                    {location.state}
                  </h3>
                  <p className="text-white/90">
                    {location.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Locations; 