import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaUser, FaQuoteLeft, FaAward, FaCertificate } from 'react-icons/fa';
import { BsCheckCircleFill, BsStarFill, BsLightningFill, BsHeartFill } from 'react-icons/bs';
import { HiArrowRight } from 'react-icons/hi';

function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const serviceCards = [
    {
      title: "Couples Therapy",
      description: "Strengthen your relationship through improved communication and understanding",
      Icon: FaHeart,
      color: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconColor: "text-purple-500"
    },
    {
      title: "Family Counseling",
      description: "Create lasting harmony and build stronger, tighter family connections together",
      Icon: FaUsers,
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconColor: "text-blue-500"
    },
    {
      title: "Individual Growth",
      description: "Personal therapy focused on your role within relationships - your role in your family",
      Icon: FaUser,
      color: "bg-gradient-to-br from-green-100 to-green-200",
      iconColor: "text-green-500"
    }
  ];

  const testimonials = [
    {
      quote: "The guidance we received helped us rebuild our marriage stronger than ever. We learned to truly communicate.",
      author: "David & Sarah M.",
      role: "Couple"
    },
    {
      quote: "Our family dynamics have completely transformed. We now have tools to handle conflicts positively.",
      author: "The Rodriguez Family",
      role: "Family"
    },
    {
      quote: "The therapist's expertise in blended family dynamics made our transition so much smoother.",
      author: "Jennifer K.",
      role: "Parent"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Trust Indicators Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <motion.div 
              {...fadeIn}
              className="flex flex-col items-center text-center"
            >
              <FaAward className="text-4xl text-purple-600 mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">15+ Years</h3>
              <p className="text-gray-600">of Excellence</p>
            </motion.div>
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <FaCertificate className="text-4xl text-purple-600 mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Licensed</h3>
              <p className="text-gray-600">Professionals</p>
            </motion.div>
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <BsStarFill className="text-4xl text-purple-600 mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">5000+</h3>
              <p className="text-gray-600">Families Helped</p>
            </motion.div>
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <BsHeartFill className="text-4xl text-purple-600 mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">98%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
    {/* Services Section */}
    <section className="py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <motion.div {...fadeIn} className="container mx-auto px-4 max-w-6xl relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1">
            <div className="text-center lg:text-left mb-20 lg:mb-0">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4 text-purple-600 font-semibold tracking-wider uppercase"
              >
                Our Services
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-gray-900">
                Professional Therapy <br />
                <span className="text-gray-700">Tailored to Your Needs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Professional therapy services delivered with compassion and expertise, 
                designed to help you achieve lasting positive change.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="/images/path.png"
              alt="Therapy Journey Path"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
            >
              <div className="p-8">
                <div className={`${card.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <card.Icon className={`text-2xl ${card.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-montserrat text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {card.description}
                </p>
                <Link 
                  to={`/services#${card.title.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More
                  <HiArrowRight className="ml-2" />
                </Link>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <motion.div {...fadeIn} className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-gray-900">
              Client <span className="text-purple-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real experiences from families who have found healing and growth through our therapy services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-purple-50 p-8 rounded-2xl shadow-lg relative"
              >
                <FaQuoteLeft className="text-3xl text-purple-200 mb-4" />
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-purple-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-purple-900 relative overflow-hidden">
        <motion.div {...fadeIn} className="container mx-auto px-4 max-w-4xl relative">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-white">
              Begin Your Journey to Healing
            </h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed">
              Take the first step towards stronger relationships and emotional well-being.
              Schedule your consultation today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-full font-montserrat font-semibold text-lg transition-all duration-300 hover:bg-purple-100 hover:scale-105"
            >
              Schedule Your Consultation
              <HiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;