export function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fadeInUp">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Become a <span className="text-green-500">funded forex trader</span><br />
            in <span className="text-green-500 underline">MONTHS</span> using our <span className="text-green-500">strategies</span>
          </h1>
        </div>

        <div className="relative max-w-4xl mx-auto mb-8 opacity-0 animate-scaleIn" style={{ animationDelay: '0.3s' }}>
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl hover:border-green-500/50 transition-all duration-500 hover:scale-[1.02]" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              src="https://player.vimeo.com/video/1139817285?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="Website VSL #1"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
