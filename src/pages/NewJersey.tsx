import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewJerseyHero = () => (
  <div className="relative h-[60vh] w-screen -ml-[50vw] left-1/2 right-1/2 mb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/nj-hero.jpg")',
        filter: 'brightness(0.7)',
      }}
    />
    <div className="relative h-full flex items-center justify-center bg-gradient-to-b from-transparent to-black/30">
      <div className="text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-lato">
          New Jersey Locations
        </h1>
        <p className="text-xl md:text-2xl font-lato max-w-2xl mx-auto">
          Serving families across the Garden State
        </p>
      </div>
    </div>
  </div>
);

const NewJersey = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const locations = [
    {
      name: "Princeton Center",
      address: "123 Princeton Way, Princeton, NJ 08540",
      phone: "(609) 555-0123",
      email: "princeton@nurturepath.com",
      features: ["Early Intervention", "School Age Programs", "Parent Training"],
      image: "/images/locations/princeton.jpg"
    },
    {
      name: "Cherry Hill Clinic",
      address: "456 Cherry Avenue, Cherry Hill, NJ 08002",
      phone: "(856) 555-0456",
      email: "cherryhill@nurturepath.com",
      features: ["Autism Services", "Social Skills Groups", "Teen Programs"],
      image: "/images/locations/cherryhill.jpg"
    },
    {
      name: "Morristown Center",
      address: "789 Morris Street, Morristown, NJ 07960",
      phone: "(973) 555-0789",
      email: "morristown@nurturepath.com",
      features: ["Behavioral Therapy", "Family Support", "Assessment Services"],
      image: "/images/locations/morristown.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <NewJerseyHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Our New Jersey <span className="text-purple-600">Centers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With multiple locations throughout New Jersey, we're here to provide 
            convenient access to quality ABA therapy services for your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 font-montserrat">{location.name}</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start">
                    <FaMapMarkerAlt className="text-purple-600 mt-1 mr-3" />
                    {location.address}
                  </p>
                  <p className="flex items-center">
                    <FaPhone className="text-purple-600 mr-3" />
                    {location.phone}
                  </p>
                  <p className="flex items-center">
                    <FaEnvelope className="text-purple-600 mr-3" />
                    {location.email}
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Services Available:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact-us"
                  className="mt-6 inline-flex items-center justify-center w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition-colors duration-300"
                >
                  <FaCalendar className="mr-2" />
                  Schedule a Visit
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NewJersey; 