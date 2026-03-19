import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import LeadForm from '../components/LeadForm';

export default function Home() {
  return (
    <div className="page-transition">
      <Hero />
      <WhyChooseUs />
      <LeadForm />
    </div>
  );
}
