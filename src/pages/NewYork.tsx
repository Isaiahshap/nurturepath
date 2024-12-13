import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewYorkHero = () => (
  <div className="relative h-[60vh] w-screen -ml-[50vw] left-1/2 right-1/2 mb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/nyc.jpg")',
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
          New York Locations
        </motion.span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Empire State Therapy
        </h1>
        <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
          Professional Marriage & Family Therapy in New York
        </p>
      </div>
    </div>
  </div>
);

const NewYork = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const locations = [
    {
      name: "Manhattan Center",
      address: "123 Madison Avenue, Suite 500",
      city: "New York, NY 10016",
      phone: "(212) 555-0123",
      email: "manhattan@nurturepath.com",
      features: ["Couples Therapy", "Family Counseling", "Premarital Counseling"],
      image: "/images/locations/manhattan.jpg"
    },
    {
      name: "Brooklyn Heights",
      address: "456 Atlantic Avenue, Suite 300",
      city: "Brooklyn, NY 11201",
      phone: "(718) 555-0456",
      email: "brooklyn@nurturepath.com",
      features: ["Marriage Counseling", "Relationship Therapy", "Family Systems"],
      image: "/images/locations/brooklyn.jpg"
    },
    {
      name: "Long Island Office",
      address: "789 Northern Blvd, Suite 200",
      city: "Great Neck, NY 11021",
      phone: "(516) 555-0789",
      email: "longisland@nurturepath.com",
      features: ["Couples Workshops", "Teen Counseling", "Group Sessions"],
      image: "/images/locations/longisland.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <NewYorkHero />
      
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Our New York <span className="text-purple-600">Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With multiple locations throughout New York, we provide convenient access 
            to professional marriage and family therapy services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 font-montserrat">{location.name}</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start">
                    <FaMapMarkerAlt className="text-purple-600 mt-1 mr-3" />
                    {location.address}
                  </p>
                  <p className="flex items-center">
                    <FaPhone className="text-purple-600 mr-3" />
                    {location.phone}
                  </p>
                  <p className="flex items-center">
                    <FaEnvelope className="text-purple-600 mr-3" />
                    {location.email}
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Services Available:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center justify-center w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                >
                  <FaCalendar className="mr-2" />
                  Schedule a Visit
                </Link>
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
              Schedule your consultation at any of our New York locations.
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

export default NewYork; 