import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WaitlistForm } from '../components/WaitlistForm';

export function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
