import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserLock, FaFileAlt, FaCookies } from 'react-icons/fa';

const PrivacyPolicy = () => {
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
            <FaShieldAlt className="text-3xl text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Your privacy and data security are our top priorities
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="space-y-8 bg-white p-8 rounded-2xl shadow-lg">
          <section>
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Health information relevant to your therapy</li>
              <li>Insurance and billing information</li>
              <li>Session notes and treatment records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              <li>Provide and improve our therapy services</li>
              <li>Communicate with you about appointments and treatment</li>
              <li>Process insurance claims and payments</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. 
              All data is encrypted in transit and at rest, and access is strictly limited to authorized personnel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              <li>Access your personal information</li>
              <li>Request corrections to your information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for certain data processing</li>
            </ul>
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

export default PrivacyPolicy; 