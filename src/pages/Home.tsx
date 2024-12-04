import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBrain, FaGraduationCap, FaHandHoldingHeart } from 'react-icons/fa';
import { BsCheckCircleFill, BsStarFill, BsLightningFill, BsHeartFill } from 'react-icons/bs';
import { HiArrowRight } from 'react-icons/hi';
import Footer from '../components/Footer';

function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const serviceCards = [
    {
      title: "Early Intervention",
      description: "Specialized programs for children aged 2-6 years to build essential skills.",
      Icon: FaBrain,
      color: "bg-lavender-50",
      iconColor: "text-purple-600"
    },
    {
      title: "School Support",
      description: "Collaboration with educational teams to ensure academic success.",
      Icon: FaGraduationCap,
      color: "bg-lavender-100",
      iconColor: "text-purple-700"
    },
    {
      title: "Parent Training",
      description: "Empowering families with effective strategies and ongoing support.",
      Icon: FaHandHoldingHeart,
      color: "bg-lavender-50",
      iconColor: "text-purple-600"
    }
  ];

  const features = [
    {
      title: "Evidence-Based Practices",
      description: "Our methods are backed by research and proven results",
      Icon: BsCheckCircleFill
    },
    {
      title: "Individualized Programs",
      description: "Tailored approaches meeting each child's unique needs",
      Icon: BsStarFill
    },
    {
      title: "Experienced Team",
      description: "Board Certified Behavior Analysts with extensive experience",
      Icon: BsLightningFill
    },
    {
      title: "Family-Centered",
      description: "Supporting the entire family throughout the journey",
      Icon: BsHeartFill
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Welcome Section - White */}
      <section className="py-32 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-lavender-50/30 to-white pointer-events-none" />
        <motion.div {...fadeIn} className="container mx-auto px-4 max-w-6xl relative">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Welcome to Nurture Path
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-gray-900 tracking-tight leading-tight">
              Transforming Lives Through <br />
              <span className="text-purple-600">Behavioral Excellence</span>
            </h2>
            <p className="text-xl md:text-2xl font-montserrat text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in Applied Behavioral Analysis services, 
              creating positive changes that last a lifetime.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {serviceCards.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className={`
                  ${service.color}
                  p-10 
                  rounded-3xl 
                  transition-all 
                  duration-300
                  shadow-lg
                  shadow-purple-100
                  hover:shadow-purple-200
                  group
                  relative
                  overflow-hidden
                `}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className={`${service.iconColor} text-5xl mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <service.Icon />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-montserrat text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us - Dark */}
      <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent" />
        <motion.div {...fadeIn} className="container mx-auto px-4 max-w-6xl relative">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="bg-purple-900/30 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Why Choose Us
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Experience the Nurture Path <span className="text-purple-400">Difference</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-6 group"
              >
                <div className="bg-purple-500/20 p-4 rounded-2xl group-hover:bg-purple-500/30 transition-colors duration-300">
                  <feature.Icon className="text-2xl text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 font-montserrat text-purple-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-montserrat leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Journey Section - White */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lavender-50 to-white opacity-50" />
        <motion.div {...fadeIn} className="container mx-auto px-4 max-w-6xl relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-montserrat text-gray-900">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-montserrat leading-relaxed">
              Take the first step towards positive behavioral change. 
              Our team is here to support you every step of the way.
            </p>
            <Link
              to="/contact-us"
              className="
                group
                inline-flex
                items-center
                bg-purple-600
                text-white
                px-10
                py-5
                rounded-full
                font-montserrat
                font-semibold
                text-lg
                transition-all
                duration-300
                hover:bg-purple-700
                focus:outline-none
                focus:ring-4
                focus:ring-purple-300
                relative
                overflow-hidden
              "
            >
              <span className="relative z-10 mr-2">Begin Your Journey</span>
              <HiArrowRight className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
