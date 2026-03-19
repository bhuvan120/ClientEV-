import { useEffect } from 'react';
import Lenis from 'lenis';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Models from './pages/Models';
import FeaturesPage from './pages/FeaturesPage';
import TechnologyPage from './pages/TechnologyPage';
import BookPage from './pages/BookPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Re-trigger scroll animations for new page elements
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.1 });
      
      const hiddenElements = document.querySelectorAll('.slide-up, .fade-in');
      hiddenElements.forEach((el) => observer.observe(el));
      
      return () => observer.disconnect();
    }, 100);
  }, [pathname]);
  
  return null;
}

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
