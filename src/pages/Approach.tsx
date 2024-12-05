import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaPuzzlePiece, FaUsers, FaHeart, FaBookOpen } from 'react-icons/fa';

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
      icon: FaChartLine,
      title: "Data-Driven Progress",
      description: "We track and measure progress continuously, adjusting our approach to ensure optimal outcomes.",
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-500"
    },
    {
      icon: FaPuzzlePiece,
      title: "Individualized Planning",
      description: "Every child receives a unique treatment plan tailored to their specific needs and goals.",
      color: "from-green-100 to-green-200",
      iconColor: "text-green-500"
    },
    {
      icon: FaUsers,
      title: "Collaborative Care",
      description: "We work closely with families, schools, and other providers to ensure comprehensive support.",
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-500"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "Comprehensive evaluation to understand your child's unique needs and strengths."
    },
    {
      number: "02",
      title: "Custom Plan Development",
      description: "Creating a tailored intervention strategy aligned with your family's goals."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Putting the plan into action with consistent monitoring and family involvement."
    },
    {
      number: "04",
      title: "Progress Review",
      description: "Regular evaluation and adjustment of strategies to ensure optimal outcomes."
    }
  ];

  return (
    <div className="min-h-screen">
      <ApproachHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Methodology Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            The Nurture Path <span className="text-purple-600">Way</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Our approach combines scientific methodology with compassionate care, 
            creating an environment where learning feels natural and progress is 
            consistent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {methodologies.map((method, index) => (
              <motion.div 
                key={index}
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
        </div>

        {/* Process Steps */}
        <div className="bg-purple-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-12 text-center font-montserrat">
            Our Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-purple-200 mb-4">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-2 font-montserrat">
                  {step.title}
                </h4>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Approach; 