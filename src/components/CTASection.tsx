export function CTASection() {
  const scrollToForm = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight opacity-0 animate-fadeInUp">
          Ready to Transform Your Trading?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Join the waiting list now and be among the first to access our proven forex trading strategies.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-12 py-5 rounded-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg shadow-green-500/30 inline-block opacity-0 animate-scaleIn hover:shadow-green-500/50"
          style={{ animationDelay: '0.4s' }}
        >
          Be the first to know when it drops
        </button>
      </div>
    </section>
  );
}
