import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import FAQs from './pages/FAQs';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
