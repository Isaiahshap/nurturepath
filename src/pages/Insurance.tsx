import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaFileAlt, FaPhoneAlt, FaCheckCircle, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InsuranceHero = () => (
  <div className="relative h-[60vh] w-screen -ml-[50vw] left-1/2 right-1/2 mb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/insurance-hero.jpg")',
        filter: 'brightness(0.7)',
      }}
    />
    <div className="relative h-full flex items-center justify-center bg-gradient-to-b from-transparent to-black/30">
      <div className="text-center text-white px-4 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 text-purple-300 font-montserrat font-semibold tracking-wider uppercase"
        >
          Making Therapy Accessible
        </motion.span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Insurance & Coverage
        </h1>
        <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
          We believe quality therapy should be accessible to all families
        </p>
      </div>
    </div>
  </div>
);

const Insurance = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const insuranceProviders = [
    "Aetna", "Blue Cross Blue Shield", "Cigna", "UnitedHealthcare",
    "Humana", "Kaiser Permanente", "Anthem", "Oxford"
  ];

  const coverageTypes = [
    {
      icon: FaHeart,
      title: "Couples Therapy",
      description: "Coverage for relationship counseling and marriage therapy sessions.",
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: FaShieldAlt,
      title: "Family Sessions",
      description: "Insurance support for family counseling and group therapy sessions.",
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: FaFileAlt,
      title: "Individual Growth",
      description: "Coverage options for personal therapy focused on relationship dynamics.",
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <InsuranceHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Simplified <span className="text-purple-600">Coverage</span> Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We handle the insurance details so you can focus on what matters most - 
            your relationships and emotional well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {coverageTypes.map((type, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${type.color} p-8 rounded-3xl shadow-lg group relative overflow-hidden`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <type.icon className={`text-4xl ${type.iconColor} mb-4`} />
              <h3 className="text-2xl font-bold mb-3 font-montserrat">
                {type.title}
              </h3>
              <p className="text-gray-700">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...fadeIn} 
          className="bg-white rounded-3xl shadow-lg p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative">
            <h3 className="text-3xl font-bold mb-8 font-montserrat text-center">
              Insurance Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {insuranceProviders.map((provider, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-gray-700 bg-purple-50 p-4 rounded-xl"
                >
                  <FaCheckCircle className="text-purple-600" />
                  <span className="font-montserrat">{provider}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="text-center bg-purple-900 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-6 font-montserrat text-white">
              Don't see your insurance provider?
            </h3>
            <Link
              to="/contact-us"
              className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-purple-100 transition-all duration-300 hover:scale-105"
            >
              Contact Us Today
            </Link>
            <p className="mt-4 text-purple-100">
              We'll help verify your coverage and explore all available options.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Insurance; 