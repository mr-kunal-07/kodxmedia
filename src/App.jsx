import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Testimonial from './components/Home/Testimonial';
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import SEOService from './Services/SEOService';
import Website from './Services/Website';
import WhatsAppButton from './components/WhatsAppButton';
import Application from './Services/Application';
import useTabVisibilityEffect from './components/useTabVisibilityEffect';

// ScrollToTop component to handle scroll on route change
const ScrollToTop = () => {

  useTabVisibilityEffect();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const AppRoutes = () => (
  <>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonial />} />
      <Route path="/website-development" element={<Website />} />
      <Route path="/app-development" element={<Application />} />
      <Route path="/seo-optimization" element={<SEOService />} />
      {/* Add other routes here as needed */}
    </Routes>
    <Footer />
    <WhatsAppButton />
  </>
);

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
