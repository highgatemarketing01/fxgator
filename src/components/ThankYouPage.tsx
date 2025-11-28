import { CheckCircle, ArrowRight, Mail, MessageCircle } from 'lucide-react';

export function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center animate-scaleIn">
          <div className="bg-green-500/20 rounded-full p-6 backdrop-blur-sm border border-green-500/30">
            <CheckCircle className="w-20 h-20 text-green-400" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fadeInUp">
          Thank You for Your Purchase!
        </h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Welcome to the <span className="text-green-400 font-semibold">FX GATOR</span> family! Your journey to mastering Forex trading starts now.
        </p>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700/50 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-start gap-4 mb-6">
            <Mail className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-2">Check Your Email</h3>
              <p className="text-gray-300 leading-relaxed">
                We've sent you a confirmation email with your order details and access instructions.
                If you don't see it in your inbox, please check your spam folder.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-lg font-semibold text-white mb-4">What Happens Next?</h3>
            <ul className="space-y-3 text-left text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-semibold flex-shrink-0">1.</span>
                <span>You'll receive immediate access to your trading signals and resources</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-semibold flex-shrink-0">2.</span>
                <span>Join our exclusive community of successful traders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-semibold flex-shrink-0">3.</span>
                <span>Start receiving daily market analysis and trading opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://discord.gg/PThbxePTFs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#5865F2]/30"
          >
            <MessageCircle className="w-5 h-5" />
            Join Our Discord Community
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30"
          >
            Return to Homepage
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <p className="text-gray-400 mt-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          Questions? Contact us at{' '}
          <a href="mailto:support@fxgator.com" className="text-green-400 hover:text-green-300 transition-colors">
            support@fxgator.com
          </a>
        </p>
      </div>
    </div>
  );
}
