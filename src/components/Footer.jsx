import { Link } from 'react-router-dom';
import { BatteryCharging, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{background: 'var(--bg-color-light)', paddingTop: '80px', paddingBottom: '40px', borderTop: '1px solid var(--glass-border)', position: 'relative', zIndex: 10}}>
      <div className="container">
        <div className="grid grid-4" style={{gap: '60px', marginBottom: '60px'}}>
          <div style={{gridColumn: 'span 2'}}>
            <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', textDecoration: 'none'}}>
              <BatteryCharging className="text-blue" size={28} />
              <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px', color: '#fff' }}>NAMO<span className="text-green">EV</span></span>
            </Link>
            <p style={{color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '400px', marginBottom: '30px'}}>
              Pioneering the future of urban mobility with high-performance, intelligent, and sustainable electric scooters designed for the modern world.
            </p>
            <div style={{display: 'flex', gap: '16px'}}>
              <a href="#" style={socialStyle}><Instagram size={20} /></a>
              <a href="#" style={socialStyle}><Twitter size={20} /></a>
              <a href="#" style={socialStyle}><Facebook size={20} /></a>
              <a href="#" style={socialStyle}><Youtube size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 style={{fontSize: '1.2rem', marginBottom: '24px'}}>Quick Links</h4>
            <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <li><Link to="/" style={linkStyle}>Home</Link></li>
              <li><Link to="/models" style={linkStyle}>Models</Link></li>
              <li><Link to="/features" style={linkStyle}>Features</Link></li>
              <li><Link to="/technology" style={linkStyle}>Technology</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{fontSize: '1.2rem', marginBottom: '24px'}}>Company</h4>
            <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <li><Link to="#" style={linkStyle}>About Us</Link></li>
              <li><Link to="#" style={linkStyle}>Careers</Link></li>
              <li><Link to="#" style={linkStyle}>Press</Link></li>
              <li><Link to="/book" style={linkStyle}>Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '30px', flexWrap: 'wrap', gap: '20px'}}>
          <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>&copy; 2026 NamoEV Vechiles. All rights reserved.</p>
          <div style={{display: 'flex', gap: '24px'}}>
            <Link to="#" style={{color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none'}}>Privacy Policy</Link>
            <Link to="#" style={{color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none'}}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.05)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'var(--text-primary)',
  transition: 'background 0.3s ease, color 0.3s ease',
  textDecoration: 'none'
};

const linkStyle = {
  color: 'var(--text-secondary)',
  transition: 'color 0.3s ease',
  fontSize: '0.95rem',
  textDecoration: 'none'
};
