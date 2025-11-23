import { Hero } from './components/Hero';
import { WaitlistForm } from './components/WaitlistForm';
import { ProblemSection } from './components/ProblemSection';
import { AgitateSection } from './components/AgitateSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Hero />
      <WaitlistForm />
      <ProblemSection />
      <AgitateSection />
      <SolutionSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

export default App;
