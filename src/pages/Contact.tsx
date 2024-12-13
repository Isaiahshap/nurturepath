import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaCalendar,
  FaWhatsapp,
  FaVideo
} from 'react-icons/fa';

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  // Combining NY and NJ locations
  const locations = [
    // New York Locations
    {
      name: "Manhattan Center",
      address: "123 Madison Avenue, Suite 500",
      city: "New York, NY 10016",
      phone: "(212) 555-0123",
      email: "manhattan@nurturepath.com",
      features: ["In-Person Sessions", "Virtual Therapy", "Evening Hours"],
      state: "NY"
    },
    {
      name: "Brooklyn Heights",
      address: "456 Atlantic Avenue, Suite 300",
      city: "Brooklyn, NY 11201",
      phone: "(718) 555-0456",
      email: "brooklyn@nurturepath.com",
      features: ["In-Person Sessions", "Weekend Hours", "Group Sessions"],
      state: "NY"
    },
    {
      name: "Queens Center",
      address: "789 Queens Boulevard, Suite 200",
      city: "Queens, NY 11428",
      phone: "(718) 555-0789",
      email: "queens@nurturepath.com",
      features: ["In-Person Sessions", "Weekend Hours", "Group Sessions"],
      state: "NY"
    },
    // New Jersey Locations
    {
      name: "Jersey City Center",
      address: "456 Grove Street, Suite 300",
      city: "Jersey City, NJ 07302",
      phone: "(201) 555-0456",
      email: "jerseycity@nurturepath.com",
      features: ["In-Person Sessions", "Virtual Therapy", "Family Sessions"],
      state: "NJ"
    },
    {
      name: "Hoboken Office",
      address: "789 Washington Street, Suite 400",
      city: "Hoboken, NJ 07030",
      phone: "(201) 555-0789",
      email: "hoboken@nurturepath.com",
      features: ["In-Person Sessions", "Evening Hours", "Couples Therapy"],
      state: "NJ"
    },
    {
      name: "Westchester Office",
      address: "789 Washington Street, Suite 400",
      city: "Hoboken, NJ 07030",
      phone: "(201) 555-0789",
      email: "hoboken@nurturepath.com",
      features: ["In-Person Sessions", "Evening Hours", "Couples Therapy"],
      state: "NJ"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Contact <span className="text-purple-600">Our Offices</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose your preferred way to connect with us. We offer multiple communication 
            channels to ensure you can reach us in the way that's most comfortable for you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-purple-50 p-6 rounded-xl text-center"
          >
            <FaPhone className="text-3xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">Call us directly to schedule your appointment</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-purple-50 p-6 rounded-xl text-center"
          >
            <FaWhatsapp className="text-3xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600">Message us for quick responses and updates</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-purple-50 p-6 rounded-xl text-center"
          >
            <FaVideo className="text-3xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Virtual Sessions</h3>
            <p className="text-gray-600">Connect with us through secure video calls</p>
          </motion.div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-montserrat">{location.name}</h3>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                    {location.state}
                  </span>
                </div>
                
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start">
                    <FaMapMarkerAlt className="text-purple-600 mt-1 mr-3" />
                    <span>
                      {location.address}<br />
                      {location.city}
                    </span>
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
                  <h4 className="font-semibold mb-2">Available Services:</h4>
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
                  to="/intake-form"
                  className="mt-6 inline-flex items-center justify-center w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                >
                  <FaCalendar className="mr-2" />
                  Schedule Initial Consultation
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 