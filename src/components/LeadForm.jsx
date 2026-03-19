export default function LeadForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Test ride booked! We will contact you shortly.");
  };

  return (
    <section id="book" style={{padding: '120px 0', position: 'relative'}}>
      <div className="orb orb-blue" style={{ width: '500px', height: '500px', right: '-10%', bottom: '0%' }}></div>
      <div className="container">
        <div className="glass-card slide-up" style={{maxWidth: '800px', margin: '0 auto', padding: '60px'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '16px'}}>Book A <span className="text-gradient">Test Ride</span></h2>
            <p style={{color: 'var(--text-secondary)', fontSize: '1.1rem'}}>Experience the NamoEV Pro firsthand. Fill out the form below and our team will get in touch to schedule your ride.</p>
          </div>
          
          <form onSubmit={handleSubmit} style={{display: 'grid', gap: '24px'}}>
            <div className="grid grid-2">
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <label style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500}}>Full Name</label>
                <input type="text" required placeholder="John Doe" style={inputStyle} />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <label style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500}}>Phone Number</label>
                <input type="tel" required placeholder="+1 (555) 000-0000" style={inputStyle} />
              </div>
            </div>
            
            <div className="grid grid-2">
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <label style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500}}>Email Address</label>
                <input type="email" required placeholder="john@example.com" style={inputStyle} />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <label style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500}}>City / Location</label>
                <input type="text" required placeholder="New York" style={inputStyle} />
              </div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <label style={{fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500}}>Preferred Model</label>
              <select style={{...inputStyle, ...selectStyle}}>
                <option value="namoev" style={{color: '#000'}}>NamoEV Standard</option>
                <option value="namoev-pro" style={{color: '#000'}}>NamoEV Pro</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{marginTop: '20px', width: '100%', padding: '16px'}}>
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid var(--glass-border)',
  padding: '14px 16px',
  borderRadius: '8px',
  color: 'var(--text-primary)',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

const selectStyle = {
  appearance: 'none',
  WebkitAppearance: 'none',
  // Make select styling consistent
}
