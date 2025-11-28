export function ThankYouSignals() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 opacity-0 animate-fadeInUp">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Thank You for Your Purchase!
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12">
            Welcome to FX Gator Signals. You're now part of our trading community.
          </p>
        </div>

        <div className="opacity-0 animate-scaleIn" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://discord.gg/hJr492TgZ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-12 py-5 rounded-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
          >
            Gain Access Now
          </a>
        </div>

        <div className="mt-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <p className="text-gray-500 text-sm">
            You'll receive instant alerts and be able to take the exact same trades as us.
          </p>
        </div>
      </div>
    </div>
  );
}
