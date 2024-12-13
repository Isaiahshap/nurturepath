import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaParking, FaWheelchair, FaBus } from 'react-icons/fa';

const LocationHero = () => (
  <div className="relative h-[60vh] w-screen -ml-[50vw] left-1/2 right-1/2 mb-16">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/locations-hero.jpg")',
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
          Our Locations
        </motion.span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Visit Us
        </h1>
        <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto">
          Convenient therapy locations in NY & NJ
        </p>
      </div>
    </div>
  </div>
);

const Locations = () => {
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
      features: ["Wheelchair Accessible", "Public Transit Nearby", "Parking Available"],
      icons: [FaWheelchair, FaBus, FaParking],
      hours: "Mon-Fri: 8am-8pm, Sat: 9am-5pm",
      mapUrl: "https://maps.google.com/?q=123+Madison+Avenue+NY",
      color: "from-blue-100 to-blue-200"
    },
    {
      name: "Brooklyn Heights",
      address: "456 Atlantic Avenue, Suite 300",
      city: "Brooklyn, NY 11201",
      phone: "(718) 555-0456",
      email: "brooklyn@nurturepath.com",
      features: ["Wheelchair Accessible", "Public Transit Nearby", "Parking Available"],
      icons: [FaWheelchair, FaBus, FaParking],
      hours: "Mon-Fri: 9am-7pm, Sat: 10am-4pm",
      mapUrl: "https://maps.google.com/?q=456+Atlantic+Avenue+Brooklyn",
      color: "from-blue-100 to-blue-200"
    },
    {
      name: "Long Island Office",
      address: "789 Northern Blvd, Suite 200",
      city: "Great Neck, NY 11021",
      phone: "(516) 555-0789",
      email: "longisland@nurturepath.com",
      features: ["Wheelchair Accessible", "Public Transit Nearby", "Parking Available"],
      icons: [FaWheelchair, FaBus, FaParking],
      hours: "Mon-Fri: 9am-6pm, Sat: 9am-3pm",
      mapUrl: "https://maps.google.com/?q=789+Northern+Blvd+Great+Neck",
      color: "from-blue-100 to-blue-200"
    },
    {
      name: "Jersey City Center",
      address: "456 Grove Street, Suite 300",
      city: "Jersey City, NJ 07302",
      phone: "(201) 555-0456",
      email: "jerseycity@nurturepath.com",
      features: ["Wheelchair Accessible", "Public Transit Nearby", "Parking Available"],
      icons: [FaWheelchair, FaBus, FaParking],
      hours: "Mon-Fri: 9am-7pm, Sat: 10am-4pm",
      mapUrl: "https://maps.google.com/?q=456+Grove+Street+NJ",
      color: "from-purple-100 to-purple-200"
    },
    {
      name: "Hoboken Office",
      address: "789 Washington Street, Suite 400",
      city: "Hoboken, NJ 07030",
      phone: "(201) 555-0789",
      email: "hoboken@nurturepath.com",
      features: ["Wheelchair Accessible", "Public Transit Nearby", "Parking Available"],
      icons: [FaWheelchair, FaBus, FaParking],
      hours: "Mon-Fri: 9am-7pm, Sat: 9am-3pm",
      mapUrl: "https://maps.google.com/?q=789+Washington+Street+Hoboken",
      color: "from-purple-100 to-purple-200"
    },
    {
      name: "Newark Center",
      address: "123 Market Street, Suite 200",
      city: "Newark, NJ 07102",
      phone: "(973) 555-0123",
      email: "newark@nurturepath.com",
      features: ["Wheelchair Accessible", "Public Transit Nearby", "Parking Available"],
      icons: [FaWheelchair, FaBus, FaParking],
      hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm",
      mapUrl: "https://maps.google.com/?q=123+Market+Street+Newark",
      color: "from-purple-100 to-purple-200"
    }
  ];

  return (
    <div className="min-h-screen">
      <LocationHero />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Find Your <span className="text-purple-600">Nearest Location</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Our offices are designed to provide a welcoming, comfortable environment 
            for your therapy sessions. Each location offers easy accessibility and 
            modern amenities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${location.color} p-8 rounded-3xl shadow-lg relative overflow-hidden`}
            >
              <h3 className="text-2xl font-bold mb-4 font-montserrat">
                {location.name}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-purple-600 text-xl mt-1" />
                  <div>
                    <p className="font-semibold">{location.address}</p>
                    <p>{location.city}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FaPhone className="text-purple-600" />
                  <a href={`tel:${location.phone}`} className="hover:text-purple-700">
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-purple-600" />
                  <a href={`mailto:${location.email}`} className="hover:text-purple-700">
                    {location.email}
                  </a>
                </div>

                <div className="border-t border-purple-200 pt-4 mt-4">
                  <p className="font-semibold mb-2">Hours:</p>
                  <p>{location.hours}</p>
                </div>

                <div className="border-t border-purple-200 pt-4">
                  <p className="font-semibold mb-2">Amenities:</p>
                  <div className="flex items-center space-x-4">
                    {location.icons.map((Icon, i) => (
                      <div key={i} className="flex items-center space-x-1">
                        <Icon className="text-purple-600" />
                        <span className="text-sm">{location.features[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-purple-900 px-6 py-3 rounded-lg font-montserrat font-semibold mt-4 hover:bg-purple-100 transition-all duration-300 hover:scale-105"
                >
                  Get Directions
                </a>
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
              Ready to Begin?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Schedule your consultation at the location most convenient for you.
              We're here to support your journey to healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-purple-100 transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
              </a>
              <a
                href="/insurance"
                className="inline-flex items-center bg-purple-800 text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105"
              >
                View Insurance Options
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Locations; 