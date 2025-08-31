// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/navbar';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contacts';
import About from './pages/About';
import ArtPage from './pages/Artspage';

// Scroll to top on route change (nice for navigation)
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Optional 404 page
function NotFound() {
  return (
    <div style={{ padding: '40px calc(88px + 24px)' }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <a href="/">Go Home</a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="page">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/works/:slug" element={<ArtPage />} />{' '}
          {/* artwork pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}
