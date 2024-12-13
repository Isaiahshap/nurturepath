import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaGraduationCap, 
  FaHandHoldingHeart, 
  FaChartLine,
  FaBriefcase,
  FaClock
} from 'react-icons/fa';

const CareersHero = () => (
  <div className="relative h-[60vh] w-screen -ml-[50vw] left-1/2 right-1/2 mb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/join.jpg")',
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
          Careers
        </motion.span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Join Our Team
        </h1>
        <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
          Make a difference in people's lives through compassionate therapy
        </p>
      </div>
    </div>
  </div>
);

const JoinOurTeam = () => {
  const [showModal, setShowModal] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const positions = [
    {
      title: "Licensed Marriage & Family Therapist",
      type: "Contract",
      description: "Join our team as a licensed MFT providing therapy to couples and families.",
      requirements: [
        "Active MFT license",
        "3+ years clinical experience",
        "Experience with diverse populations",
        "Strong communication skills"
      ],
      icon: FaUsers,
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      title: "Clinical Supervisor",
      type: "Full-Time",
      description: "Lead and mentor our team of therapists while maintaining a small caseload.",
      requirements: [
        "AAMFT Approved Supervisor",
        "5+ years clinical experience",
        "Leadership experience",
        "Strong mentoring abilities"
      ],
      icon: FaGraduationCap,
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <CareersHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Current <span className="text-purple-600">Opportunities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our team of dedicated professionals committed to helping individuals, 
            couples, and families thrive through expert therapy and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${position.color} p-8 rounded-3xl shadow-lg relative overflow-hidden group`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <position.icon className={`text-4xl ${position.iconColor} mb-4`} />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold font-montserrat">
                  {position.title}
                </h3>
                <span className="bg-white/50 px-3 py-1 rounded-full text-sm flex items-center">
                  <FaClock className="mr-2" />
                  {position.type}
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                {position.description}
              </p>
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold">Requirements:</h4>
                <ul className="space-y-2">
                  {position.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center bg-white/80 hover:bg-white text-purple-900 px-6 py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 hover:scale-105"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div {...fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold mb-12 font-montserrat text-center">
            Why Join Our Team?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaHandHoldingHeart,
                title: "Supportive Environment",
                description: "Work in a collaborative, growth-oriented atmosphere with ongoing supervision and peer support."
              },
              {
                icon: FaChartLine,
                title: "Professional Growth",
                description: "Access to continuing education, training opportunities, and career advancement pathways."
              },
              {
                icon: FaBriefcase,
                title: "Comprehensive Benefits",
                description: "Competitive compensation, health insurance, retirement plans, and flexible scheduling options."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
              >
                <benefit.icon className="text-4xl text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 font-montserrat">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Demo Website Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full relative"
          >
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 font-montserrat text-gray-900">Demo Website Notice</h3>
              <p className="text-gray-600 leading-relaxed">
                This website is a demonstration project created by{' '}
                <a 
                  href="https://yeshaya.dev" 
                  className="text-purple-600 hover:text-purple-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  yeshaya.dev
                </a>
                . All components, designs, and functionality were developed as a portfolio piece. 
                This is not a real therapy practice, and no actual positions are available.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default JoinOurTeam; 