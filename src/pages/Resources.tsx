import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBook, 
  FaHeart, 
  FaHandHoldingHeart, 
  FaUserFriends, 
  FaDownload,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResourcesHero = () => (
  <div className="relative h-[60vh] w-screen -ml-[50vw] left-1/2 right-1/2 mb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/resources-hero.jpg")',
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
          Relationship Resources
        </motion.span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Tools for Growth
        </h1>
        <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
          Expert guidance and resources for building stronger relationships
        </p>
      </div>
    </div>
  </div>
);

const Resources = () => {
  const [showModal, setShowModal] = useState(false);
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const resources = [
    {
      icon: FaBook,
      title: "Recommended Reading",
      description: "Curated books and articles on relationships, communication, and personal growth.",
      items: [
        { title: "The Seven Principles for Making Marriage Work", author: "John Gottman" },
        { title: "Attached", author: "Amir Levine & Rachel Heller" },
        { title: "Hold Me Tight", author: "Dr. Sue Johnson" },
        { title: "The 5 Love Languages", author: "Gary Chapman" }
      ],
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: FaHeart,
      title: "Relationship Exercises",
      description: "Practical exercises and activities for couples to strengthen their bond.",
      items: [
        "Daily Appreciation Practice",
        "Active Listening Exercise",
        "Emotional Awareness Check-in",
        "Conflict Resolution Worksheet"
      ],
      color: "from-pink-100 to-pink-200",
      iconColor: "text-pink-600"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Self-Care Resources",
      description: "Tools and guidance for maintaining emotional well-being in relationships.",
      items: [
        "Stress Management Guide",
        "Boundary Setting Worksheet",
        "Self-Care Assessment",
        "Mindfulness Practices"
      ],
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: FaUserFriends,
      title: "Communication Tools",
      description: "Resources to improve dialogue and understanding between partners.",
      items: [
        "Non-Violent Communication Guide",
        "Emotion Wheel Exercise",
        "Conflict Resolution Steps",
        "Active Listening Techniques"
      ],
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <ResourcesHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Relationship <span className="text-purple-600">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our collection of therapeutic resources designed to support your relationship journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${resource.color} p-8 rounded-3xl shadow-lg relative overflow-hidden group`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <resource.icon className={`text-4xl ${resource.iconColor} mb-4`} />
              <h3 className="text-2xl font-bold mb-3 font-montserrat">
                {resource.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {resource.description}
              </p>
              <ul className="space-y-2">
                {resource.items.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    <span className="text-gray-700">
                      {typeof item === 'string' ? item : `${item.title} by ${item.author}`}
                    </span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setShowModal(true)} 
                className="mt-6 inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:translate-x-2 transition-transform duration-300"
              >
                Access Resource <FaExternalLinkAlt className="ml-2 text-sm" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Download Section */}
        <motion.div 
          {...fadeIn}
          className="bg-purple-900 rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative text-center">
            <FaDownload className="text-4xl text-purple-300 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6 font-montserrat text-white">
              Free Relationship Workbook
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Download our comprehensive guide to building and maintaining healthy relationships.
              Includes exercises, worksheets, and practical tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-purple-100 transition-all duration-300 hover:scale-105"
              >
                Download Free Workbook
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center bg-purple-800 text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full relative"
          >
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 font-montserrat text-gray-900">Demo Website Notice</h3>
              <p className="text-gray-600 leading-relaxed">
                This website is a demonstration project created by{' '}
                <a 
                  href="https://yeshaya.dev" 
                  className="text-purple-600 hover:text-purple-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  yeshaya.dev
                </a>
                . All components, designs, and functionality were developed as a portfolio piece. 
                This is not a real therapy practice, and no actual services are provided through this website.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Resources;
