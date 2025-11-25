declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url: string }, HTMLElement>;
    }
  }
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <spline-viewer
          url="https://prod.spline.design/KjwJc0Z4z-Hb2j97/scene.splinecode"
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        ></spline-viewer>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 opacity-0 animate-fadeInUp">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Our Forex Trading Blueprint to <span className="text-green-500">Consistent Payouts</span>
          </h1>
        </div>

        <div className="relative max-w-4xl mx-auto mb-8 opacity-0 animate-scaleIn" style={{ animationDelay: '0.3s' }}>
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl hover:border-green-500/50 transition-all duration-500 hover:scale-[1.02]" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              src="https://www.youtube.com/embed/TUdhV5v9zEM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="FX Gator Trading Blueprint"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
