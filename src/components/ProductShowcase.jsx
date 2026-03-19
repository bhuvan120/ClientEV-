import { Zap, Battery, Crosshair, ShieldCheck } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section id="models">
      <div className="container">
        <h2 className="section-title slide-up">Meet The <span className="text-gradient">NamoEV Pro</span></h2>
        <p className="section-subtitle slide-up delay-100">Engineered for the modern urban explorer. Precision, power, and unparalleled design.</p>
        
        <div className="glass-card showcase-grid slide-up delay-200">
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src="/images/showcase.png" alt="NamoEV Pro Side Profile" style={{width: '100%', maxWidth: '600px', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))'}} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <h3 style={{fontSize: '2.5rem', marginBottom: '20px'}}>NamoEV <span className="text-blue">Pro</span></h3>
            <p style={{color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.1rem', lineHeight: 1.6}}>
              The pinnacle of electric mobility. Featuring an aerospace-grade aluminum frame, advanced regenerative braking, and a state-of-the-art Li-ion graphene battery for maximum range and longevity.
            </p>
            
            <div className="grid grid-2" style={{marginBottom: '40px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)'}}>
                <Zap className="text-blue" size={28} />
                <div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '4px'}}>10,000W</h4>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Peak Power</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)'}}>
                <Battery className="text-green" size={28} />
                <div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '4px'}}>72V 40Ah</h4>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Graphene Battery</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)'}}>
                <Crosshair className="text-blue" size={28} />
                <div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '4px'}}>Custom</h4>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Ride Modes</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)'}}>
                <ShieldCheck className="text-green" size={28} />
                <div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '4px'}}>Dual ABS</h4>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Braking System</p>
                </div>
              </div>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto', paddingTop: '30px', borderTop: '1px solid var(--glass-border)'}}>
              <div>
                <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px'}}>Starting from</p>
                <h3 style={{fontSize: '2.5rem', fontWeight: 800}}>₹55,000</h3>
              </div>
              <a href="#book" className="btn btn-primary">Pre-order Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
