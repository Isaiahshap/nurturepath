import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversalAccess, FaKeyboard, FaDesktop, FaMobile } from 'react-icons/fa';

const Accessibility = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <motion.div {...fadeIn} className="text-center mb-12">
          <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
            <FaUniversalAccess className="text-3xl text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Accessibility Statement
          </h1>
          <p className="text-xl text-gray-600">
            Our commitment to digital accessibility for all
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="space-y-8 bg-white p-8 rounded-2xl shadow-lg">
          <section>
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">Our Commitment</h2>
            <p className="text-gray-600 leading-relaxed">
              Nurture Path is committed to ensuring digital accessibility for people with disabilities. 
              We continually improve the user experience for everyone and apply the relevant 
              accessibility standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">Standards</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website strives to conform to level AA of the World Wide Web Consortium (W3C) 
              Web Content Accessibility Guidelines 2.1. These guidelines explain how to make web 
              content accessible to people with disabilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>Text alternatives for images</li>
              <li>Consistent navigation structure</li>
              <li>Color contrast compliance</li>
              <li>Resizable text support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you encounter any accessibility barriers or have suggestions for improvement, 
              please contact us. We value your feedback and are committed to providing an 
              accessible experience for all users.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">Website Disclaimer</h2>
            <div className="bg-purple-50 p-6 rounded-xl text-gray-600 leading-relaxed">
              <p>
                This website is a demonstration project created by{' '}
                <a href="https://yeshaya.dev" className="text-purple-600 hover:text-purple-700 underline">
                  yeshaya.dev
                </a>
                . All components, designs, and functionality were developed as a portfolio piece. This is not a real therapy practice, and no actual services are provided through this website. The content is for demonstration purposes only.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Accessibility; 