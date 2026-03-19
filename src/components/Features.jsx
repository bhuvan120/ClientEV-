import { Smartphone, Shield, Package, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap size={32} className="text-blue" />,
      title: "HyperCharge Technology",
      description: "Get 50km of range in just 15 minutes of charging. Never wait when you need to ride."
    },
    {
      icon: <Smartphone size={32} className="text-green" />,
      title: "Smart App Integration",
      description: "Control your ride, check battery stats, and track location directly from your smartphone."
    },
    {
      icon: <Shield size={32} className="text-blue" />,
      title: "Advanced Safety",
      description: "Equipped with collision warning, blind-spot detection, and anti-theft immobilization."
    },
    {
      icon: <Package size={32} className="text-green" />,
      title: "Spacious Storage",
      description: "Class-leading 45L under-seat storage easily fits two full-face helmets and your gear."
    }
  ];

  return (
    <section id="features" style={{position: 'relative'}}>
      <div className="container">
        <h2 className="section-title slide-up">Defining The <span className="text-gradient">Standard</span></h2>
        <p className="section-subtitle slide-up delay-100">Every feature is designed to elevate your ride and keep you connected to the road.</p>
        
        <div className="grid grid-4 slide-up delay-200">
          {features.map((feature, index) => (
            <div key={index} className="glass-card" style={{display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px 30px'}}>
              <div style={{width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {feature.icon}
              </div>
              <h3 style={{fontSize: '1.3rem'}}>{feature.title}</h3>
              <p style={{color: 'var(--text-secondary)', lineHeight: 1.6}}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
