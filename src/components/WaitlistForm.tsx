import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { Mail, User, CheckCircle2, AlertCircle } from 'lucide-react';

export function WaitlistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ name, email }]);

      if (error) {
        if (error.code === '23505') {
          setErrorMessage('This email is already on the waitlist!');
        } else {
          setErrorMessage('Something went wrong. Please try again.');
        }
        setStatus('error');
      } else {
        const makeWebhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;
        if (makeWebhookUrl && makeWebhookUrl !== 'YOUR_MAKE_WEBHOOK_URL_HERE') {
          try {
            const webhookUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/waitlist-webhook`;
            await fetch(webhookUrl, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email, makeWebhookUrl }),
            });
          } catch (webhookError) {
            console.error('Webhook error:', webhookError);
          }
        }

        setStatus('success');
        setName('');
        setEmail('');
      }
    } catch (err) {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="waitlist" className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl opacity-0 animate-scaleIn hover:border-green-500/50 transition-colors duration-500" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Join the Waiting List
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Be the first to know when we launch and get exclusive early access
          </p>

          {status === 'success' ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <p className="text-green-500 font-semibold text-lg">
                You're on the list!
              </p>
              <p className="text-gray-400 mt-2">
                We'll notify you as soon as we launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-green-500/20"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waiting List'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
