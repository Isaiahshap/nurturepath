import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChild, FaUser, FaHospital, FaClock, FaShieldAlt, FaPhone, FaCalendar, FaBuilding } from 'react-icons/fa';

const IntakeForm = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [selectedHours, setSelectedHours] = useState('');
  const dropdownRef = useRef(null);
  const [isStateOpen, setIsStateOpen] = useState(false);
  const stateRef = useRef(null);
  const [selectedState, setSelectedState] = useState('');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsHoursOpen(false);
      }
      if (stateRef.current && !stateRef.current.contains(event.target)) {
        setIsStateOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const hoursOptions = [
    { value: '10', label: '10 hours per week' },
    { value: '20', label: '20 hours per week' },
    { value: '30', label: '30 hours per week' },
    { value: '40', label: '40 hours per week' },
  ];

  const dropdownClasses = `
    absolute z-20 left-0 mt-2 w-full 
    bg-white rounded-xl shadow-lg 
    transform opacity-0 scale-95 
    transition-all duration-200 ease-in-out origin-top
    ${isHoursOpen ? 'opacity-100 scale-100' : 'invisible'}
  `;

  const dropdownItemClasses = `
    block w-full px-4 py-3 text-left text-gray-700 
    hover:text-purple-600 hover:bg-purple-50 
    transition-colors duration-200 
    first:rounded-t-xl last:rounded-b-xl
    relative after:content-[''] 
    after:absolute after:w-[calc(100%-2rem)] 
    after:h-0.5 after:bg-purple-600 
    after:left-4 after:bottom-0 
    after:scale-x-0 hover:after:scale-x-100 
    after:transition-transform after:duration-300 
    after:origin-left
  `;

  const states = [
    { value: 'NJ', label: 'New Jersey' },
    { value: 'TX', label: 'Texas' },
    { value: 'GA', label: 'Georgia' },
    // Add other states as needed
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
            ABA Therapy <span className="text-purple-600">Intake Form</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please complete this form to help us better understand your needs. Our staff will follow up within 48 hours.
          </p>
        </div>

        <form className="space-y-12 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
          {/* Client Information Section */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-purple-100 p-2 rounded-full">
                <FaChild className="text-2xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold font-montserrat text-gray-800">
                Patient Information
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                  First Name <span className="text-purple-600">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter first name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
                  Last Name <span className="text-purple-600">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter last name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="parentGuardian" className="block text-sm font-semibold text-gray-700">
                  Parent or Legal Guardian Name <span className="text-purple-600">*</span>
                </label>
                <input
                  type="text"
                  id="parentGuardian"
                  name="parentGuardian"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter parent/guardian name"
                />
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-purple-100 p-2 rounded-full">
                <FaPhone className="text-2xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold font-montserrat text-gray-800">
                Contact Information
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
                  Street Address <span className="text-purple-600">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter street address"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700">
                  City <span className="text-purple-600">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter city"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2" ref={stateRef}>
                  <label className="block text-sm font-semibold text-gray-700">
                    State <span className="text-purple-600">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsStateOpen(!isStateOpen)}
                      className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg 
                                 focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                                 transition-all duration-200 flex justify-between items-center"
                      value={selectedState}
                    >
                      <span className={selectedState ? 'text-gray-900' : 'text-gray-500'}>
                        {selectedState ? states.find(s => s.value === selectedState)?.label : 'Select State'}
                      </span>
                      <svg 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 
                                   ${isStateOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div className={`
                      absolute z-20 left-0 mt-2 w-full 
                      bg-white rounded-xl shadow-lg 
                      transform opacity-0 scale-95 
                      transition-all duration-200 ease-in-out
                      ${isStateOpen ? 'opacity-100 scale-100' : 'invisible'}
                    `}>
                      {states.map((state) => (
                        <button
                          key={state.value}
                          type="button"
                          onClick={() => {
                            setSelectedState(state.value);
                            setIsStateOpen(false);
                          }}
                          className="block w-full px-4 py-3 text-left text-gray-700 
                                     hover:bg-purple-50 hover:text-purple-600
                                     transition-colors duration-200 
                                     first:rounded-t-xl last:rounded-b-xl"
                        >
                          {state.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <input type="hidden" name="state" value={selectedState} required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700">
                    ZIP Code <span className="text-purple-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter ZIP code"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Service Availability */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-purple-100 p-2 rounded-full">
                <FaCalendar className="text-2xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold font-montserrat text-gray-800">
                Days and Hours Desired for ABA Services
              </h2>
            </div>

            <div className="space-y-6">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <div key={day} className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    {day} <span className="text-purple-600">*</span>
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="radio"
                          name={day.toLowerCase()}
                          value="available"
                          className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full 
                                     checked:border-purple-600 checked:border-6
                                     transition-all duration-200 cursor-pointer"
                        />
                      </div>
                      <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-200">
                        Available
                      </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="radio"
                          name={day.toLowerCase()}
                          value="not_available"
                          className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full 
                                     checked:border-purple-600 checked:border-6
                                     transition-all duration-200 cursor-pointer"
                        />
                      </div>
                      <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-200">
                        Not Available
                      </span>
                    </label>
                  </div>
                </div>
              ))}

              <div className="space-y-2" ref={dropdownRef}>
                <label className="block text-sm font-semibold text-gray-700">
                  Total Weekly Hours ABA Service Desired <span className="text-purple-600">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsHoursOpen(!isHoursOpen)}
                    className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg 
                               focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                               transition-all duration-200 flex justify-between items-center"
                  >
                    <span className={selectedHours ? 'text-gray-900' : 'text-gray-500'}>
                      {selectedHours ? `${selectedHours} hours per week` : 'Please select hours'}
                    </span>
                    <svg 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 
                                 ${isHoursOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={dropdownClasses}>
                    {hoursOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setSelectedHours(option.value);
                          setIsHoursOpen(false);
                        }}
                        className={dropdownItemClasses}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
                <input 
                  type="hidden" 
                  name="totalHours" 
                  value={selectedHours} 
                  required 
                />
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Submit Intake Form
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              Your information is protected under HIPAA guidelines and will be kept strictly confidential.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default IntakeForm; 