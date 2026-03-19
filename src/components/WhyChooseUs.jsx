import { Leaf, Wrench, Wallet, Palette } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why-us">
      <div className="container">
        <h2 className="section-title slide-up">Why <span className="text-gradient">NamoEV</span></h2>
        
        <div className="grid grid-4 slide-up delay-200" style={{marginTop: '60px'}}>
          <div style={{textAlign: 'center'}}>
            <div style={{width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(145deg, rgba(0,255,136,0.1), transparent)', margin: '0 auto 20px auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Leaf size={32} className="text-green" />
            </div>
            <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>Eco-Friendly</h3>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>Zero emissions. Commute with a clean conscience and reduce your carbon footprint.</p>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <div style={{width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(145deg, rgba(0,240,255,0.1), transparent)', margin: '0 auto 20px auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Wrench size={32} className="text-blue" />
            </div>
            <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>Low Maintenance</h3>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>Fewer moving parts means fewer visits to the mechanic. Enjoy hassle-free ownership.</p>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <div style={{width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(145deg, rgba(0,255,136,0.1), transparent)', margin: '0 auto 20px auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Wallet size={32} className="text-green" />
            </div>
            <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>Cost Efficient</h3>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>Save thousands annually on fuel and maintenance. A smart investment for the long run.</p>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <div style={{width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(145deg, rgba(0,240,255,0.1), transparent)', margin: '0 auto 20px auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Palette size={32} className="text-blue" />
            </div>
            <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>Modern Design</h3>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>Turn heads everywhere you go with award-winning aesthetics and premium materials.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
