import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { WaitlistForm } from '../components/WaitlistForm';
import { ProblemSection } from '../components/ProblemSection';
import { AgitateSection } from '../components/AgitateSection';
import { SolutionSection } from '../components/SolutionSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PricingSection } from '../components/PricingSection';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      <Hero />
      <WaitlistForm />
      <TestimonialsSection />
      <ProblemSection />
      <AgitateSection />
      <SolutionSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
