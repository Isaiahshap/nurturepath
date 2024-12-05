import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaHeart, FaLightbulb, FaHandsHelping } from 'react-icons/fa';

const AboutHero = () => (
  <div className="relative h-[60vh] w-screen -ml-[50vw] left-1/2 right-1/2 mb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/about.jpg")',
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
          Our Journey of Healing
        </motion.span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Our Story
        </h1>
        <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
          Building stronger relationships through understanding and compassion
        </p>
      </div>
    </div>
  </div>
);

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const sections = [
    {
      title: "Our Team",
      description: "Meet our dedicated therapists who bring expertise and compassion to every session.",
      icon: FaUsers,
      link: "/team",
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-500"
    },
    {
      title: "Our Mission",
      description: "Discover our purpose and the values that drive our commitment to healing relationships.",
      icon: FaHeart,
      link: "/mission",
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-500"
    },
    {
      title: "Our Approach",
      description: "Learn about our therapeutic methods and evidence-based practices for lasting change.",
      icon: FaLightbulb,
      link: "/approach",
      color: "from-yellow-100 to-yellow-200",
      iconColor: "text-yellow-600"
    }
  ];

  const values = [
    {
      icon: FaHeart,
      title: "Compassionate Care",
      description: "Every relationship deserves understanding, patience, and genuine support.",
      color: "from-red-100 to-red-200",
      iconColor: "text-red-500"
    },
    {
      icon: FaHandsHelping,
      title: "Collaborative Healing",
      description: "Working together to create positive change in relationships and families.",
      color: "from-green-100 to-green-200",
      iconColor: "text-green-500"
    },
    {
      icon: FaUsers,
      title: "Family Focus",
      description: "Strengthening bonds and fostering deeper connections within families.",
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <AboutHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Empowering Growth Through 
            <span className="text-purple-600"> Understanding</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Nurture Path, we believe in the transformative power of healthy relationships. 
            Our approach combines clinical expertise with genuine compassion, creating a 
            safe space where healing and growth flourish naturally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sections.map((section, index) => (
            <Link to={section.link} key={index}>
              <motion.div 
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${section.color} p-8 rounded-3xl shadow-lg group relative overflow-hidden`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <section.icon className={`text-4xl ${section.iconColor} mb-4`} />
                <h3 className="text-2xl font-bold mb-3 font-montserrat">
                  {section.title}
                </h3>
                <p className="text-gray-700">
                  {section.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-12 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 font-montserrat">
                Our Core Values
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide our therapeutic approach
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-br ${value.color} p-8 rounded-3xl shadow-md`}
                >
                  <value.icon className={`text-4xl ${value.iconColor} mb-4`} />
                  <h4 className="text-xl font-bold mb-3 font-montserrat">
                    {value.title}
                  </h4>
                  <p className="text-gray-700">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
