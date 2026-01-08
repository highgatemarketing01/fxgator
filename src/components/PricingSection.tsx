import { Check, X } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Select the plan that matches your trading goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 opacity-0 animate-scaleIn hover:border-green-500/50 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-green-500/20 relative flex flex-col" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Signals Monthly</h3>
              <div className="flex flex-col items-center gap-2 mb-4 min-h-[140px] justify-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl text-gray-500 line-through">£100</span>
                  <span className="text-5xl font-bold text-green-500">£50</span>
                </div>
                <span className="text-gray-400 text-lg">/month</span>
                <div className="text-gray-400 text-xs mt-2">
                  Then £100/month after
                </div>
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg px-4 py-2 mt-3">
                  <p className="text-green-400 text-sm font-semibold">Use code: <span className="text-green-300 font-bold">GATOR26</span></p>
                </div>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Take the exact same trades as us</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Instant alerts</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Basic trading resources</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Live trade breakdown calls</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500">Learn directly from us</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500">Priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500">Custom trading plan</span>
              </li>
            </ul>

            <a
              href="https://buy.stripe.com/fZucN53GE6cAc83aFC14406"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 text-center"
            >
              Get Started
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 opacity-0 animate-scaleIn hover:border-green-500/50 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-green-500/20 relative flex flex-col" style={{ animationDelay: '0.3s' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Signals Quarterly</h3>
              <div className="flex flex-col items-center gap-2 mb-4 min-h-[140px] justify-center">
                <span className="text-5xl font-bold text-green-500">£150</span>
                <span className="text-gray-400 text-lg">/3 months</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Take the exact same trades as us</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Instant alerts</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Basic trading resources</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Live trade breakdown calls</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500">Learn directly from us</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500">Priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500">Custom trading plan</span>
              </li>
            </ul>

            <a
              href="https://buy.stripe.com/fZu28r0us30o2xtaFC14400"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 text-center"
            >
              Get Started
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-gray-900 rounded-2xl p-8 border-2 border-green-500 opacity-0 animate-scaleIn relative overflow-hidden shadow-xl shadow-green-500/20 flex flex-col" style={{ animationDelay: '0.4s' }}>
            <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-bold px-4 py-1 rounded-full">
              PREMIUM
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">1-1 Mentoring</h3>
              <div className="flex flex-col items-center gap-2 mb-4 min-h-[140px] justify-center">
                <span className="text-5xl font-bold text-green-500">£75</span>
                <span className="text-gray-400 text-lg">/call</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">One-on-one personalized sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Learn directly from experienced traders</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Custom trading strategy development</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Live trade analysis and feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Personalized risk management guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Priority support and direct access</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Flexible scheduling for calls</span>
              </li>
            </ul>

            <a
              href="#waitlist"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50 hover:shadow-green-500/70 text-center"
            >
              Join Waiting List
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
