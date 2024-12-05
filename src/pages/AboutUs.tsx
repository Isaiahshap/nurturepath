import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaHeart, FaLightbulb } from 'react-icons/fa';

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
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Our Story
        </h1>
        <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
          Building brighter futures through understanding and support
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
      description: "Meet our dedicated professionals who bring expertise and compassion to every interaction.",
      icon: FaUsers,
      link: "/team",
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-500"
    },
    {
      title: "Our Mission",
      description: "Discover our purpose and the values that drive our commitment to excellence.",
      icon: FaHeart,
      link: "/mission",
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-500"
    },
    {
      title: "Our Approach",
      description: "Learn about our unique methodology and evidence-based practices.",
      icon: FaLightbulb,
      link: "/approach",
      color: "from-yellow-100 to-yellow-200",
      iconColor: "text-yellow-600"
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
            At Nurture Path, we believe in the unique potential within every child. 
            Our approach combines clinical excellence with genuine care, creating an 
            environment where growth and learning flourish naturally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
      </motion.div>
    </div>
  );
};

export default AboutUs;
