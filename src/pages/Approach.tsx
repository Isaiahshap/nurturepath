import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaBrain, FaUsers, FaHandHoldingHeart, FaChartLine } from 'react-icons/fa';

const ApproachHero = () => (
  <div className="relative h-[60vh] w-screen -ml-[50vw] left-1/2 right-1/2 mb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/approach-hero.jpg")',
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
          Our Therapeutic Methods
        </motion.span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Our Approach
        </h1>
        <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
          Evidence-based therapy with a heart-centered focus
        </p>
      </div>
    </div>
  </div>
);

const Approach = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const methodologies = [
    {
      icon: FaHeart,
      title: "Emotionally Focused Therapy",
      description: "Creating secure bonds and deeper emotional connections between partners and family members.",
      color: "from-red-100 to-red-200",
      iconColor: "text-red-600"
    },
    {
      icon: FaBrain,
      title: "Cognitive Behavioral",
      description: "Identifying and transforming patterns that impact relationship dynamics.",
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: FaUsers,
      title: "Family Systems",
      description: "Understanding and improving family dynamics through a holistic approach.",
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    }
  ];

  const features = [
    {
      icon: FaHandHoldingHeart,
      title: "Personalized Care",
      description: "Every relationship is unique. We tailor our approach to your specific needs and goals.",
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: FaChartLine,
      title: "Measurable Progress",
      description: "Track your growth with concrete goals and regular progress assessments.",
      color: "from-yellow-100 to-yellow-200",
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <ApproachHero />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            The Nurture Path <span className="text-purple-600">Way</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Our approach combines proven therapeutic methods with compassionate care, 
            creating a safe space where healing and growth flourish naturally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {methodologies.map((method, index) => (
            <motion.div 
              key={index}
              {...fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${method.color} p-8 rounded-3xl shadow-lg group relative overflow-hidden`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <method.icon className={`text-4xl ${method.iconColor} mb-4`} />
              <h3 className="text-2xl font-bold mb-3 font-montserrat">
                {method.title}
              </h3>
              <p className="text-gray-700">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${feature.color} p-8 rounded-3xl shadow-lg relative overflow-hidden group`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <feature.icon className={`text-4xl ${feature.iconColor} mb-4`} />
              <h3 className="text-2xl font-bold mb-3 font-montserrat">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...fadeIn}
          className="bg-purple-900 rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative text-center">
            <h3 className="text-3xl font-bold mb-6 font-montserrat text-white">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Take the first step towards stronger, healthier relationships.
              Our experienced therapists are here to support you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-purple-100 transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
              </a>
              <a
                href="/team"
                className="inline-flex items-center bg-purple-800 text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Approach; 