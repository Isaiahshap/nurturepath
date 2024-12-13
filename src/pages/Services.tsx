import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaHeart, 
  FaUsers, 
  FaUser, 
  FaComments, 
  FaRing, 
  FaHandHoldingHeart 
} from 'react-icons/fa';

const ServicesHero = () => (
  <div className="relative h-[60vh] w-screen -ml-[50vw] left-1/2 right-1/2 mb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/services-hero.jpg")',
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
          Our Services
        </motion.span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Professional Therapy Services
        </h1>
        <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
          Comprehensive support for individuals, couples, and families
        </p>
      </div>
    </div>
  </div>
);

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const services = [
    {
      icon: FaHeart,
      title: "Couples Therapy",
      description: "Strengthen your relationship through improved communication and understanding. Work through challenges and build a deeper connection.",
      features: ["Communication Skills", "Conflict Resolution", "Trust Building"],
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: FaUsers,
      title: "Family Counseling",
      description: "Create lasting harmony and build stronger family connections. Address conflicts and improve relationships between family members.",
      features: ["Parent-Child Relations", "Sibling Dynamics", "Family Communication"],
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: FaUser,
      title: "Individual Growth",
      description: "Focus on personal development and understanding your role in relationships. Build self-awareness and emotional intelligence.",
      features: ["Self-Discovery", "Personal Growth", "Emotional Healing"],
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: FaComments,
      title: "Relationship Workshops",
      description: "Group sessions focused on building and maintaining healthy relationships. Learn from shared experiences and expert guidance.",
      features: ["Group Learning", "Skill Building", "Peer Support"],
      color: "from-yellow-100 to-yellow-200",
      iconColor: "text-yellow-600"
    },
    {
      icon: FaRing,
      title: "Premarital Counseling",
      description: "Prepare for a strong and lasting marriage. Address potential challenges and build a foundation for success.",
      features: ["Future Planning", "Expectation Setting", "Relationship Tools"],
      color: "from-pink-100 to-pink-200",
      iconColor: "text-pink-600"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Family Systems",
      description: "Understanding and improving family dynamics through a holistic approach. Create positive changes that benefit everyone.",
      features: ["System Analysis", "Pattern Recognition", "Positive Change"],
      color: "from-indigo-100 to-indigo-200",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <ServicesHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Our <span className="text-purple-600">Therapeutic</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive therapy services designed to support your journey 
            toward stronger relationships and emotional well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-3xl shadow-lg relative overflow-hidden group`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <service.icon className={`text-4xl ${service.iconColor} mb-4`} />
              <h3 className="text-2xl font-bold mb-3 font-montserrat">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="inline-block mr-2 px-3 py-1 bg-white/50 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
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
              Take the first step towards stronger relationships.
              Schedule your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-purple-100 transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/insurance"
                className="inline-flex items-center bg-purple-800 text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105"
              >
                View Insurance Options
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
