export function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fadeInUp">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Become a <span className="text-green-500">funded forex trader</span><br />
            in <span className="text-green-500 underline">MONTHS</span> using our <span className="text-green-500">strategies</span>
          </h1>
        </div>

        <div className="relative max-w-4xl mx-auto mb-8 opacity-0 animate-scaleIn" style={{ animationDelay: '0.3s' }}>
          <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl hover:border-green-500/50 transition-all duration-500 hover:scale-[1.02] flex items-center justify-center">
            <div className="text-gray-500 text-lg">Video Placeholder</div>
          </div>
        </div>
      </div>
    </section>
  );
}
