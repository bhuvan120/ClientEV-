import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BatteryCharging } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`} style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: 'var(--nav-height)', zIndex: 1000,
      transition: 'all 0.3s ease', backgroundColor: isScrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%'}}>
        <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textDecoration: 'none'}}>
          <BatteryCharging className="text-blue" size={28} />
          <span style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '2px', color: '#fff' }}>NAMO<span className="text-green">EV</span></span>
        </Link>
        
        <div className="nav-links desktop-only" style={{gap: '32px', alignItems: 'center'}}>
          <Link to="/" style={{fontWeight: 500}}>Home</Link>
          <Link to="/models" style={{fontWeight: 500}}>Models</Link>
          <Link to="/features" style={{fontWeight: 500}}>Features</Link>
          <Link to="/technology" style={{fontWeight: 500}}>Technology</Link>
        </div>

        <div className="nav-actions desktop-only">
          <Link to="/book" className="btn btn-primary" style={{padding: '10px 24px'}}>Book Test Ride</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{background: 'none', border: 'none', color: '#fff', cursor: 'pointer'}}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu glass" style={{position: 'absolute', top: 'var(--nav-height)', left: 0, right: 0, display: 'flex', flexDirection: 'column', padding: '24px', gap: '16px'}}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/models" onClick={closeMenu}>Models</Link>
          <Link to="/features" onClick={closeMenu}>Features</Link>
          <Link to="/technology" onClick={closeMenu}>Technology</Link>
          <Link to="/book" className="btn btn-primary" onClick={closeMenu} style={{marginTop: '20px', textAlign: 'center'}}>Book Test Ride</Link>
        </div>
      )}
    </nav>
  );
}
