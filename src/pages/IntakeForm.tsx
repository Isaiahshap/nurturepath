import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaUsers, FaClipboardList, FaRing, FaHome, FaHistory, FaListAlt } from 'react-icons/fa';
import CustomDropdown from '../components/CustomDropdown';

const IntakeForm = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };


  const [sessionType, setSessionType] = useState('');
  const sessionRef = useRef(null);
  const [isSessionTypeOpen, setIsSessionTypeOpen] = useState(false);
  const [relationshipStatus, setRelationshipStatus] = useState('');
  const [timeframe, setTimeframe] = useState('');


  const sessionTypes = [
    { value: 'couples', label: 'Couples Therapy' },
    { value: 'family', label: 'Family Therapy' },
    { value: 'individual', label: 'Individual Therapy' },
    { value: 'premarital', label: 'Premarital Counseling' },
  ];

  const relationshipStatusOptions = [
    { value: 'married', label: 'Married' },
    { value: 'engaged', label: 'Engaged' },
    { value: 'dating', label: 'Dating' },
    { value: 'separated', label: 'Separated' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'single', label: 'Single' },
    { value: 'other', label: 'Other' }
  ];

  const timeframeOptions = [
    { value: 'less-than-month', label: 'Less than 1 month' },
    { value: '1-6-months', label: '1-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: '1-2-years', label: '1-2 years' },
    { value: 'more-than-2-years', label: 'More than 2 years' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <motion.div {...fadeIn} className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
            Therapy <span className="text-purple-600">Intake Form</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please complete this confidential form to help us understand your needs. 
            Our team will contact you within 24 hours to schedule your consultation.
          </p>
        </div>

        <form className="space-y-12 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
          {/* Client Information Section */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-purple-100 p-2 rounded-full">
                <FaUser className="text-2xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold font-montserrat text-gray-800">
                Primary Contact Information
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-200"
                  placeholder="Enter last name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email Address <span className="text-purple-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-200"
                  placeholder="Enter email address"
                />
              </div>
            </div>
          </section>

          {/* Relationship Status Section */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-purple-100 p-2 rounded-full">
                <FaRing className="text-2xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold font-montserrat text-gray-800">
                Relationship Status
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Current Relationship Status <span className="text-purple-600">*</span>
                </label>
                <CustomDropdown
                  options={relationshipStatusOptions}
                  value={relationshipStatus}
                  onChange={setRelationshipStatus}
                  placeholder="Select status"
                  required
                  name="relationshipStatus"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Length of Current Relationship
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-200"
                  placeholder="e.g., 5 years"
                />
              </div>
            </div>
          </section>

          {/* Living Situation Section */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-purple-100 p-2 rounded-full">
                <FaHome className="text-2xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold font-montserrat text-gray-800">
                Living Situation
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Who currently lives in your household? <span className="text-purple-600">*</span>
                </label>
                <textarea
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-200"
                  placeholder="Please list all household members and their ages"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Are there any children from previous relationships? <span className="text-purple-600">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="previousChildren" value="yes" className="mr-2" />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="previousChildren" value="no" className="mr-2" />
                    No
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Therapy History Section */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-purple-100 p-2 rounded-full">
                <FaHistory className="text-2xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold font-montserrat text-gray-800">
                Previous Therapy Experience
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Have you attended therapy before? <span className="text-purple-600">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="previousTherapy" value="yes" className="mr-2" />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="previousTherapy" value="no" className="mr-2" />
                    No
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  If yes, please describe your previous therapy experience
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-200"
                  placeholder="When did you attend, what type of therapy, and what was helpful/unhelpful?"
                  rows={4}
                />
              </div>
            </div>
          </section>

          {/* Specific Concerns Section - Add before the existing concerns section */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-purple-100 p-2 rounded-full">
                <FaListAlt className="text-2xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold font-montserrat text-gray-800">
                Specific Concerns
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Please select all that apply: <span className="text-purple-600">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Communication Issues",
                    "Trust/Infidelity",
                    "Parenting Challenges",
                    "Blended Family Issues",
                    "Anger Management",
                    "Financial Stress",
                    "Intimacy Concerns",
                    "Separation/Divorce",
                    "Grief/Loss",
                    "Mental Health",
                    "Substance Use",
                    "Cultural/Religious Differences"
                  ].map((concern) => (
                    <label key={concern} className="flex items-center space-x-2">
                      <input type="checkbox" name="concerns" value={concern.toLowerCase()} />
                      <span>{concern}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <CustomDropdown
                  options={timeframeOptions}
                  value={timeframe}
                  onChange={setTimeframe}
                  placeholder="Select timeframe"
                  label="How long have these concerns been present?"
                  name="timeframe"
                />
              </div>
            </div>
          </section>

          {/* Session Type Section */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-purple-100 p-2 rounded-full">
                <FaUsers className="text-2xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold font-montserrat text-gray-800">
                Type of Therapy
              </h2>
            </div>

            <div className="space-y-2" ref={sessionRef}>
              <div className="relative">
                <CustomDropdown
                  options={sessionTypes}
                  value={sessionType}
                  onChange={setSessionType}
                  placeholder="Select therapy type"
                  required
                  label="What type of therapy are you seeking?"
                  name="sessionType"
                />
              </div>
            </div>

            {sessionType === 'couples' && (
              <div className="space-y-2">
                <label htmlFor="partnerName" className="block text-sm font-semibold text-gray-700">
                  Partner's Name <span className="text-purple-600">*</span>
                </label>
                <input
                  type="text"
                  id="partnerName"
                  name="partnerName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-200"
                  placeholder="Enter partner's name"
                />
              </div>
            )}

            {sessionType === 'family' && (
              <div className="space-y-2">
                <label htmlFor="familyMembers" className="block text-sm font-semibold text-gray-700">
                  Family Members Attending <span className="text-purple-600">*</span>
                </label>
                <textarea
                  id="familyMembers"
                  name="familyMembers"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-200"
                  placeholder="Please list the names and ages of family members who will be attending"
                  rows={4}
                />
              </div>
            )}
          </section>

          {/* Concerns Section */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-purple-100 p-2 rounded-full">
                <FaClipboardList className="text-2xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold font-montserrat text-gray-800">
                Primary Concerns
              </h2>
            </div>

            <div className="space-y-2">
              <label htmlFor="concerns" className="block text-sm font-semibold text-gray-700">
                What brings you to therapy? <span className="text-purple-600">*</span>
              </label>
              <textarea
                id="concerns"
                name="concerns"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-200"
                placeholder="Please briefly describe your main concerns and what you hope to achieve through therapy"
                rows={6}
              />
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