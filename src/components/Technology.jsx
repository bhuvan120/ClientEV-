import { Wifi, Map, Navigation } from 'lucide-react';

export default function Technology() {
  return (
    <section id="technology" style={{backgroundColor: 'var(--bg-color-light)'}}>
      <div className="container showcase-grid" style={{gap: '80px'}}>
        <div className="slide-up">
          <h2 className="section-title" style={{textAlign: 'left'}}>Always <span className="text-gradient">Connected</span></h2>
          <p style={{color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px', lineHeight: 1.6}}>
            The NamoEV isn't just a scooter; it's a smart device on wheels. 
            With built-in 5G connectivity and edge computing, your ride constantly optimizes performance and keeps you safe.
          </p>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <div style={{display: 'flex', gap: '16px'}}>
              <div style={{padding: '12px', background: 'rgba(0,240,255,0.1)', borderRadius: '12px', height: 'fit-content'}}>
                <Map className="text-blue" size={24} />
              </div>
              <div>
                <h4 style={{fontSize: '1.2rem', marginBottom: '8px'}}>Real-Time Geofencing</h4>
                <p style={{color: 'var(--text-secondary)'}}>Set virtual boundaries and receive instant alerts on your phone if your scooter leaves the designated area.</p>
              </div>
            </div>
            
            <div style={{display: 'flex', gap: '16px'}}>
              <div style={{padding: '12px', background: 'rgba(0,255,136,0.1)', borderRadius: '12px', height: 'fit-content'}}>
                <Wifi className="text-green" size={24} />
              </div>
              <div>
                <h4 style={{fontSize: '1.2rem', marginBottom: '8px'}}>Over-The-Air Updates</h4>
                <p style={{color: 'var(--text-secondary)'}}>Your scooter gets smarter over time. Receive wireless updates that improve range, performance, and add new features.</p>
              </div>
            </div>
            
            <div style={{display: 'flex', gap: '16px'}}>
              <div style={{padding: '12px', background: 'rgba(0,240,255,0.1)', borderRadius: '12px', height: 'fit-content'}}>
                <Navigation className="text-blue" size={24} />
              </div>
              <div>
                <h4 style={{fontSize: '1.2rem', marginBottom: '8px'}}>Turn-By-Turn Navigation</h4>
                <p style={{color: 'var(--text-secondary)'}}>The integrated 7-inch TFT dashboard provides seamless routing directly from your smartphone.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="slide-up delay-200" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="glass-card" style={{width: '100%', maxWidth: '350px', padding: 0, overflow: 'hidden', border: '1px solid var(--accent-blue)', boxShadow: '0 0 40px rgba(0,240,255,0.15)'}}>
            <div style={{padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between'}}>
              <h4 style={{fontWeight: 600}}>NamoEV App</h4>
              <span className="text-green" style={{fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px'}}>
                <span style={{width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-green)'}}></span> Connected
              </span>
            </div>
            <div style={{padding: '30px', textAlign: 'center'}}>
              <div style={{position: 'relative', width: '200px', height: '200px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', border: '4px solid var(--accent-blue)'}}>
                <div>
                  <h2 style={{fontSize: '3rem', margin: 0, lineHeight: 1}}>85<span style={{fontSize: '1.5rem'}}>%</span></h2>
                  <p style={{color: 'var(--text-secondary)', marginTop: '8px'}}>Battery</p>
                </div>
              </div>
              <p style={{marginTop: '30px', fontSize: '1.2rem'}}>Est. Range: <span className="text-gradient" style={{fontWeight: 800}}>124 km</span></p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
              <div style={{padding: '20px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.1)'}}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '4px'}}>Lock</h4>
                <p style={{color: 'var(--text-secondary)', fontSize: '0.8rem'}}>Secured</p>
              </div>
              <div style={{padding: '20px', textAlign: 'center'}}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '4px'}}>Track</h4>
                <p style={{color: 'var(--text-secondary)', fontSize: '0.8rem'}}>Live GPS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
