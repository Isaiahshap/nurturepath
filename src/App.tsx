import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Resources from './pages/Resources';
import FAQs from './pages/FAQs';
import Team from './pages/Team';
import Mission from './pages/Mission';
import Approach from './pages/Approach';
import Locations from './pages/Locations';
import NewJersey from './pages/NewJersey';
import Texas from './pages/Texas';
import Georgia from './pages/Georgia';
import IntakeForm from './pages/IntakeForm';
import Insurance from './pages/Insurance';
import NewYork from './pages/NewYork';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Accessibility from './pages/Accessibility';
import JoinOurTeam from './pages/JoinOurTeam';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/join-our-team" element={<JoinOurTeam />} />
          
          {/* Location Routes */}
          <Route path="/locations" element={<Locations />} />
          <Route path="/new-york" element={<NewYork />} />
          <Route path="/new-jersey" element={<NewJersey />} />
          <Route path="/texas" element={<Texas />} />
          <Route path="/georgia" element={<Georgia />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/intake-form" element={<IntakeForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/accessibility" element={<Accessibility />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
