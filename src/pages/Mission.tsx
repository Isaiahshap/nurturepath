import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHandsHelping, FaBalanceScale, FaLightbulb } from 'react-icons/fa';

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
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 text-purple-300 font-montserrat font-semibold tracking-wider uppercase"
        >
          Our Purpose
        </motion.span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Our Mission
        </h1>
        <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
          Strengthening relationships, empowering families, transforming lives
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
      description: "We believe every relationship deserves understanding, empathy, and dedicated support for growth.",
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: FaHandsHelping,
      title: "Collaborative Healing",
      description: "Working together with couples and families to create lasting positive changes in their relationships.",
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: FaBalanceScale,
      title: "Ethical Practice",
      description: "Committed to the highest standards of professional therapy through evidence-based approaches.",
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: FaLightbulb,
      title: "Continuous Growth",
      description: "Dedicated to ongoing learning and development to better serve our diverse community.",
      color: "from-yellow-100 to-yellow-200",
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <MissionHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Our Vision & <span className="text-purple-600">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Nurture Path, we envision a world where every relationship has the opportunity 
            to thrive through understanding, communication, and mutual growth. Our mission is 
            to provide exceptional therapy services that empower couples and families to build 
            stronger, more fulfilling connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${value.color} p-8 rounded-3xl shadow-lg relative overflow-hidden group`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <value.icon className={`text-4xl ${value.iconColor} mb-4`} />
              <h3 className="text-2xl font-bold mb-3 font-montserrat">
                {value.title}
              </h3>
              <p className="text-gray-700">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-purple-900 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative text-center">
            <h3 className="text-3xl font-bold mb-6 font-montserrat text-white">
              Our Commitment to You
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              We are dedicated to providing a safe, supportive environment where couples 
              and families can explore, heal, and grow together. Through evidence-based 
              practices and compassionate care, we help you build the relationships you deserve.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/approach"
                className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-purple-100 transition-all duration-300 hover:scale-105"
              >
                Learn Our Approach
              </a>
              <a
                href="/team"
                className="inline-flex items-center bg-purple-800 text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105"
              >
                Meet Our Team
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Mission; 