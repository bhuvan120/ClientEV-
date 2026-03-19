import { ArrowRight, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ name, price, image, range, speed, description, isPro }) {
  return (
    <div className={`glass-card slide-up ${isPro ? 'pro-card' : ''}`} style={{display: 'flex', flexDirection: 'column', height: '100%', padding: '40px', position: 'relative', overflow: 'hidden'}}>
      {isPro && (
        <div style={{position: 'absolute', top: 20, right: 20, background: 'var(--accent-blue)', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800}}>PRO EDITION</div>
      )}
      <div style={{flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px', minHeight: '250px'}}>
        <img src={image} alt={name} style={{width: '100%', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.6))', transition: 'transform 0.3s ease'}} className="product-img" />
      </div>
      
      <h3 style={{fontSize: '2rem', marginBottom: '10px'}}>{name}</h3>
      <p style={{color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6}}>{description}</p>
      
      <div style={{display: 'flex', gap: '20px', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid var(--glass-border)'}}>
        <div>
          <p style={{color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '4px'}}>Range</p>
          <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600}}>
            <Target size={16} className="text-green" /> {range} km
          </div>
        </div>
        <div>
          <p style={{color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '4px'}}>Top Speed</p>
          <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600}}>
            <Zap size={16} className="text-blue" /> {speed} km/h
          </div>
        </div>
      </div>
      
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto'}}>
        <div>
          <p style={{color: 'var(--text-secondary)', fontSize: '0.85rem'}}>Starting at</p>
          <h4 style={{fontSize: '1.5rem', fontWeight: 700}}>₹{price}</h4>
        </div>
        <Link to="/book" className={`btn ${isPro ? 'btn-primary' : 'btn-secondary'}`} style={{padding: '10px 20px', borderRadius: '8px', color: isPro ? '#000' : '#fff'}}>
          Book Now <ArrowRight size={16} />
        </Link>
      </div>
      <style>{`
        .product-img:hover {
          transform: scale(1.05);
        }
        .pro-card {
           border-color: rgba(59, 130, 246, 0.3);
           box-shadow: 0 0 30px rgba(59, 130, 246, 0.05);
        }
      `}</style>
    </div>
  );
}
