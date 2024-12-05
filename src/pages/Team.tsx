import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCertificate, FaStar, FaLinkedin } from 'react-icons/fa';

const TeamHero = () => (
  <div className="relative h-[60vh] w-screen -ml-[50vw] left-1/2 right-1/2 mb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/team-hero.jpg")',
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
          Our Dedicated Team
        </motion.span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Meet Your Therapists
        </h1>
        <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
          Experienced professionals serving NY & NJ communities
        </p>
      </div>
    </div>
  </div>
);

const Team = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell, LMFT",
      role: "Lead Marriage & Family Therapist",
      location: "Manhattan, NY",
      image: "/images/therapist-1.jpg",
      bio: "With over 15 years of experience, Dr. Mitchell specializes in helping couples navigate complex relationship dynamics and life transitions.",
      specialties: ["Couples Therapy", "Premarital Counseling", "Family Systems"],
      credentials: ["PhD in Marriage & Family Therapy", "Licensed MFT", "AAMFT Approved Supervisor"],
      linkedin: "https://linkedin.com/in/sarahmitchell"
    },
    {
      name: "Michael Rodriguez, LMFT",
      role: "Family Systems Specialist",
      location: "Brooklyn, NY",
      image: "/images/therapist-2.jpg",
      bio: "Michael brings a warm, collaborative approach to helping families strengthen their bonds and improve communication patterns.",
      specialties: ["Family Therapy", "Blended Families", "Parent-Child Relations"],
      credentials: ["MA in Psychology", "Licensed MFT", "Gottman Level 3 Trained"],
      linkedin: "https://linkedin.com/in/michaelrodriguez"
    },
    {
      name: "Dr. Jennifer Park, LMFT",
      role: "Couples Therapy Specialist",
      location: "Jersey City, NJ",
      image: "/images/therapist-3.jpg",
      bio: "Dr. Park combines evidence-based approaches with compassionate care to help couples build stronger, more fulfilling relationships.",
      specialties: ["Marriage Counseling", "Relationship Issues", "Trauma-Informed Care"],
      credentials: ["PsyD in Clinical Psychology", "Licensed MFT", "EFT Certified"],
      linkedin: "https://linkedin.com/in/jenniferpark"
    }
  ];

  return (
    <div className="min-h-screen">
      <TeamHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Expertise Meets <span className="text-purple-600">Compassion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our licensed therapists bring years of experience and specialized training 
            to help you build stronger, healthier relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group"
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-purple-600 mb-3">
                  <FaMapMarkerAlt className="text-lg" />
                  <span className="text-sm font-montserrat">{member.location}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-montserrat">{member.name}</h3>
                <p className="text-purple-600 mb-4 font-montserrat">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Credentials:</h4>
                  <ul className="space-y-1">
                    {member.credentials.map((credential, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <FaCertificate className="text-purple-400 text-sm" />
                        <span className="text-sm">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-montserrat"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                    <span className="text-sm font-semibold">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-purple-900 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-6 font-montserrat text-white">
              Ready to Begin Your Journey?
            </h3>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-purple-100 transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
              </a>
              <a
                href="/insurance"
                className="inline-flex items-center bg-purple-800 text-white px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105"
              >
                View Insurance Options
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team; 