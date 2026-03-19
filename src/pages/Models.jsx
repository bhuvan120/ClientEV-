import ProductCard from '../components/ProductCard';

export default function Models() {
  const models = [
    {
      name: "NamoEV Standard",
      price: "45,000",
      image: "/images/standard.png",
      range: "100",
      speed: "65",
      description: "The perfect city commuter. Lightweight, agile, and incredibly efficient for daily rides.",
      isPro: false
    },
    {
      name: "NamoEV Pro",
      price: "55,000",
      image: "/images/showcase.png",
      range: "150",
      speed: "85",
      description: "Uncompromised performance. Featuring graphene battery tech, rapid charging, and enhanced power.",
      isPro: true
    }
  ];

  return (
    <div className="page-transition" style={{paddingTop: 'calc(var(--nav-height) + 60px)', minHeight: '100vh', paddingBottom: '100px'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
          <h1 className="section-title slide-up">Our <span className="text-gradient">Lineup</span></h1>
          <p className="section-subtitle slide-up delay-100">Distinctly NamoEV. Choose the ride that fits your lifestyle perfectly.</p>
        </div>
        
        <div className="grid grid-2 slide-up delay-200" style={{gap: '40px', maxWidth: '1000px', margin: '0 auto'}}>
          {models.map((model, idx) => (
            <ProductCard key={idx} {...model} />
          ))}
        </div>
      </div>
    </div>
  );
}
