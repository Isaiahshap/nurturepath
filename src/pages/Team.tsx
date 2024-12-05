import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaCertificate, FaStar } from 'react-icons/fa';

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
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Meet Our Team
        </h1>
        <p className="text-xl md:text-2xl font-lato max-w-2xl mx-auto">
          Dedicated professionals committed to your child's growth
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
      name: "Dr. Sarah Johnson",
      role: "Clinical Director, BCBA-D",
      bio: "With over 15 years of experience, Dr. Johnson leads our clinical team with expertise in early intervention and parent training.",
      specialties: ["Early Intervention", "Parent Training", "Research"],
      image: "/images/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "Lead BCBA",
      bio: "Specializing in school-based interventions, Michael brings creative approaches to behavioral support in educational settings.",
      specialties: ["School Consultation", "Social Skills", "Staff Training"],
      image: "/images/team/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "BCBA, Parent Training Coordinator",
      bio: "Emily's passion lies in empowering families with effective strategies for lasting behavioral change.",
      specialties: ["Family Support", "Behavior Management", "Training"],
      image: "/images/team/emily.jpg"
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
            Our team combines clinical excellence with genuine care, creating an 
            environment where every child can thrive.
          </p>
        </div>

        {/* Team Grid */}
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
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-montserrat">{member.name}</h3>
                <p className="text-purple-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Team; 