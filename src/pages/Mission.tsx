import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaHandsHelping } from 'react-icons/fa';

const MissionHero = () => (
  <div className="relative h-[60vh] w-screen -ml-[50vw] left-1/2 right-1/2 mb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/mission-hero.jpg")',
        filter: 'brightness(0.7)',
      }}
    />
    <div className="relative h-full flex items-center justify-center bg-gradient-to-b from-transparent to-black/30">
      <div className="text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-lato">
          Our Mission
        </h1>
        <p className="text-xl md:text-2xl font-lato max-w-2xl mx-auto">
          Creating positive change through understanding and support
        </p>
      </div>
    </div>
  </div>
);

const Mission = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const values = [
    {
      icon: FaHeart,
      title: "Compassionate Care",
      description: "We believe in treating every child with understanding, patience, and genuine care.",
      color: "from-red-100 to-red-200",
      iconColor: "text-red-500"
    },
    {
      icon: FaStar,
      title: "Excellence in Service",
      description: "Committed to delivering the highest quality ABA therapy through evidence-based practices.",
      color: "from-yellow-100 to-yellow-200",
      iconColor: "text-yellow-500"
    },
    {
      icon: FaHandsHelping,
      title: "Family Partnership",
      description: "Working together with families to create lasting positive changes.",
      color: "from-green-100 to-green-200",
      iconColor: "text-green-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <MissionHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-lato">
            Our Purpose & <span className="text-purple-600">Promise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Nurture Path, our mission is to empower children and families through 
            evidence-based behavioral therapy, fostering independence and creating 
            lasting positive changes in their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${value.color} p-8 rounded-3xl shadow-lg group relative overflow-hidden`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <value.icon className={`text-4xl ${value.iconColor} mb-4`} />
              <h3 className="text-2xl font-bold mb-3 font-lato">
                {value.title}
              </h3>
              <p className="text-gray-700">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-purple-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6 font-montserrat">Our Vision</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To be the leading force in transforming lives through behavioral excellence, 
            where every child has the opportunity to reach their full potential in a 
            supportive and understanding environment.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Mission; 