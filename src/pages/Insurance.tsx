import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaFileAlt, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
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
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-lato">
          Insurance Coverage
        </h1>
        <p className="text-xl md:text-2xl font-lato max-w-2xl mx-auto">
          We make getting coverage simple and straightforward
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

  return (
    <div className="min-h-screen">
      <InsuranceHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-lato">
            We Take Care of <span className="text-purple-600">Everything</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Nurture Path, we handle insurance verification and coverage details daily, 
            ensuring your child can begin receiving services as quickly as possible.
          </p>
        </div>

        {/* Insurance Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-lg"
          >
            <FaShieldAlt className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 font-lato">Coverage Verification</h3>
            <p className="text-gray-700">
              We work with all insurance types: self-funded, group, individual, in-state, 
              out of state, and private plans.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-lg"
          >
            <FaFileAlt className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 font-lato">Benefit Analysis</h3>
            <p className="text-gray-700">
              We'll outline your coverage details, including potential coverage up to 100% 
              or co-payments with annual deductibles.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-lg"
          >
            <FaPhoneAlt className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 font-lato">Direct Coordination</h3>
            <p className="text-gray-700">
              Our insurance team works directly with providers to obtain approval for 
              ABA therapy on your behalf.
            </p>
          </motion.div>
        </div>

        {/* Insurance Providers Section */}
        <div className="bg-white rounded-3xl shadow-lg p-12 mb-20">
          <h3 className="text-3xl font-bold mb-8 font-lato text-center">
            Insurance Providers We Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {insuranceProviders.map((provider, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-gray-700"
              >
                <FaCheckCircle className="text-purple-600" />
                <span>{provider}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 font-lato">
            Don't see your insurance provider?
          </h3>
          <Link
            to="/contact-us"
            className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors duration-300 font-lato"
          >
            Contact Us Today
          </Link>
          <p className="mt-4 text-gray-600">
            We'll help verify your coverage and explore all available options.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Insurance; 