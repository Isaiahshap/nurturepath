import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBrain, FaGraduationCap, FaHandHoldingHeart, FaCertificate, FaQuoteLeft, FaBookOpen, FaChevronRight } from 'react-icons/fa';
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
      title: "Early Learning Adventures",
      description: "Fun, engaging programs helping little ones grow and learn! (Ages 2-6)",
      Icon: FaBrain,
      color: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      iconColor: "text-yellow-500"
    },
    {
      title: "School Success Squad",
      description: "Working together with teachers to make learning fun and successful!",
      Icon: FaGraduationCap,
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconColor: "text-blue-500"
    },
    {
      title: "Family Growth Journey",
      description: "Supporting families with love, understanding, and proven strategies",
      Icon: FaHandHoldingHeart,
      color: "bg-gradient-to-br from-green-100 to-green-200",
      iconColor: "text-green-500"
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

  const testimonials = [
    {
      quote: "The progress we've seen in our child has been remarkable. The team at Nurture Path truly understands our needs.",
      author: "Sarah M.",
      role: "Parent"
    },
    {
      quote: "Their evidence-based approach and dedication to each child's success makes all the difference.",
      author: "Michael R.",
      role: "School Principal"
    },
    {
      quote: "We've seen incredible improvements in both behavior and social skills. Highly recommended!",
      author: "Jennifer K.",
      role: "Parent"
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
              <div className="flex flex-col items-center justify-center mb-16">
                <div className="w-20 h-1 bg-purple-600 mb-8" />
                <h2 className="text-6xl md:text-7xl font-bold font-montserrat text-gray-900 tracking-tight leading-none mb-4">
                  Welcome
                </h2>
                <p className="text-xl text-purple-600 font-semibold tracking-wider uppercase">Nurture Path</p>
              </div>
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
              <div className="flex flex-col items-center justify-center mb-16">
                <div className="w-20 h-1 bg-purple-300 mb-8" />
                <h2 className="text-6xl md:text-7xl font-bold font-montserrat text-white tracking-tight leading-none mb-4">
                  Why Choose Us
                </h2>
                <p className="text-xl text-purple-300 font-semibold tracking-wider uppercase">Our Difference</p>
              </div>
            </motion.div>
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

      {/* Credentials & Testimonials Section - Light Purple */}
      <section className="py-32 bg-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-50/50" />
        <motion.div {...fadeIn} className="container mx-auto px-4 max-w-6xl relative">
          {/* Certifications */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="flex flex-col items-center justify-center mb-16">
                <div className="w-20 h-1 bg-purple-600 mb-8" />
                <h2 className="text-6xl md:text-7xl font-bold font-montserrat text-gray-900 tracking-tight leading-none mb-4">
                  Credentials
                </h2>
                <p className="text-xl text-purple-600 font-semibold tracking-wider uppercase">Our Expertise</p>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg group relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <FaCertificate className="text-4xl text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-montserrat">BCBA Certified</h3>
                <p className="text-gray-600">Board Certified Behavior Analysts leading all therapeutic programs</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg group relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <FaCertificate className="text-4xl text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-montserrat">BACB Accredited</h3>
                <p className="text-gray-600">Recognized by the Behavior Analyst Certification Board for excellence</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg group relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <FaCertificate className="text-4xl text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-montserrat">State Licensed</h3>
                <p className="text-gray-600">Fully licensed by the State of New Jersey Department of Health</p>
              </motion.div>
            </div>

            {/* Additional Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg group relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <FaCertificate className="text-4xl text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-montserrat">Insurance Approved</h3>
                <p className="text-gray-600">Accepted by major insurance providers including Medicaid, Blue Cross, and United Healthcare</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg group relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <FaCertificate className="text-4xl text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 font-montserrat">CEU Provider</h3>
                <p className="text-gray-600">Authorized continuing education provider for behavior analysts and therapists</p>
              </motion.div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
              What Families Are Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg relative"
                >
                  <FaQuoteLeft className="text-4xl text-purple-200 absolute top-4 left-4" />
                  <div className="relative">
                    <p className="text-gray-600 mb-6 italic pt-8">"{testimonial.quote}"</p>
                    <div className="text-right">
                      <p className="font-bold text-purple-600">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Curriculum Preview */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-montserrat">
              Our Curriculum Approach
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover our comprehensive ABA therapy curriculum designed for lasting positive change
            </p>
            <Link
              to="/curriculum"
              className="
                group
                inline-flex
                items-center
                bg-purple-600
                text-white
                px-8
                py-4
                rounded-full
                font-montserrat
                font-semibold
                transition-all
                duration-300
                hover:bg-purple-700
              "
            >
              <FaBookOpen className="mr-2" />
              <span>Explore Our Curriculum</span>
              <FaChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
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
