export function AgitateSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight opacity-0 animate-fadeInUp">
          Every Day You Wait, You're Missing Out on{' '}
          <span className="text-green-500 inline-block opacity-0 animate-slideUpUnderline" style={{ animationDelay: '0.5s' }}>Potential Profits</span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          While you're stuck in analysis paralysis, others are already making consistent profits with proven strategies. The forex market doesn't wait for anyone, and neither should you.
        </p>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          Without proper guidance, you could spend years making the same mistakes, burning through your capital, and watching opportunities slip away. The question is: how much longer can you afford to struggle alone?
        </p>
      </div>
    </section>
  );
}
