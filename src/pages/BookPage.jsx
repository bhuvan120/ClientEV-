import LeadForm from '../components/LeadForm';

export default function BookPage() {
  return (
    <div className="page-transition" style={{paddingTop: 'var(--nav-height)', minHeight: '100vh'}}>
      <LeadForm />
    </div>
  );
}
