import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'var(--nav-height)', position: 'relative', overflow: 'hidden'}}>
      <div className="orb orb-blue" style={{ width: '600px', height: '600px', top: '-10%', left: '-10%' }}></div>
      <div className="orb orb-green" style={{ width: '400px', height: '400px', bottom: '10%', right: '-5%' }}></div>
      
      <div className="container hero-grid">
        <div className="hero-content fade-in">
          <h1 style={{fontSize: '4.5rem', marginBottom: '24px'}}>
            The Future Of <br />
            <span className="text-gradient">Electric Mobility</span>
          </h1>
          <p className="section-subtitle delay-100 slide-up" style={{textAlign: 'left', margin: '0 0 40px 0', fontSize: '1.25rem', color: 'var(--text-secondary)'}}>
            Experience unmatched performance, futuristic design, and smart connectivity. 
            The revolution on two wheels is here.
          </p>
          <div className="hero-ctas delay-200 slide-up" style={{display: 'flex', gap: '20px', marginBottom: '60px'}}>
            <a href="#book" className="btn btn-primary">
              Book Test Ride <ArrowRight size={20} />
            </a>
            <a href="#models" className="btn btn-secondary">
              <Play size={20} /> Explore Models
            </a>
          </div>
          
          <div className="hero-stats delay-300 slide-up" style={{display: 'flex', gap: '40px'}}>
            <div>
              <h3 style={{fontSize: '2.5rem', fontWeight: 800, lineHeight: 1}}>150<span className="text-green">km</span></h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px'}}>Max Range</p>
            </div>
            <div>
              <h3 style={{fontSize: '2.5rem', fontWeight: 800, lineHeight: 1}}>85<span className="text-blue">km/h</span></h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px'}}>Top Speed</p>
            </div>
            <div>
              <h3 style={{fontSize: '2.5rem', fontWeight: 800, lineHeight: 1}}>3.5<span className="text-green">hr</span></h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px'}}>Fast Charge</p>
            </div>
          </div>
        </div>

        <div className="hero-image fade-in delay-200" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src="/images/hero.png" alt="NamoEV Vechiles Scooter" style={{width: '100%', maxWidth: '800px', objectFit: 'contain', filter: 'drop-shadow(0 0 40px rgba(0,240,255,0.2))'}} />
          
          <div className="glass-card floating-ui" style={{position: 'absolute', top: '15%', right: '0%', padding: '12px 20px', borderRadius: '12px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <div style={{width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-green)', boxShadow: '0 0 10px var(--accent-green)'}}></div>
              <span style={{fontWeight: 600, fontSize: '0.9rem'}}>System Online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
