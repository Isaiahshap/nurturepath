import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaFileContract, FaHandshake } from 'react-icons/fa';

const TermsOfService = () => {
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
            <FaGavel className="text-3xl text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our services
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="space-y-8 bg-white p-8 rounded-2xl shadow-lg">
          <section>
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">Service Agreement</h2>
            <p className="text-gray-600 leading-relaxed">
              By scheduling appointments and using our services, you agree to these terms and conditions. 
              Our services are provided "as is" and we reserve the right to modify or discontinue services 
              with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">Appointment Policies</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>24-hour cancellation notice required</li>
              <li>Late arrivals may result in shortened sessions</li>
              <li>No-shows may be subject to cancellation fees</li>
              <li>Emergency services are not provided</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">Payment Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Payment is required at the time of service unless other arrangements have been made. 
              We accept most major insurance plans and will bill your insurance company directly 
              when applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">Confidentiality</h2>
            <p className="text-gray-600 leading-relaxed">
              We maintain strict confidentiality in accordance with HIPAA regulations and professional 
              ethical standards. Exceptions to confidentiality include risk of harm to self or others, 
              abuse of vulnerable populations, and legal requirements.
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

export default TermsOfService; 