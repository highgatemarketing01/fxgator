import { Target, Lightbulb, Rocket } from 'lucide-react';
import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        style?: React.CSSProperties;
        className?: string;
      };
    }
  }
}

export function SolutionSection() {
  const solutions = [
    { icon: Target, title: 'Proven Strategies', desc: 'Learn battle-tested trading strategies that actually work in today\'s markets.' },
    { icon: Lightbulb, title: 'Expert Guidance', desc: 'Copy our signals and learn from detailed trade breakdowns every step of the way.' },
    { icon: Rocket, title: 'Fast Results', desc: 'Scale to consistent pay-outs within 90 days with our structured program.' }
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.0/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-900 relative overflow-hidden">
      <spline-viewer
        url="https://prod.spline.design/aHrtmzy6gUYSKPqm/scene.splinecode"
        className="absolute left-0 top-1/4 w-96 h-96 opacity-30 pointer-events-none"
        style={{
          animation: 'spinAndHover 8s ease-in-out infinite',
          transform: 'translateX(-20%)'
        }}
      />

      <spline-viewer
        url="https://prod.spline.design/aHrtmzy6gUYSKPqm/scene.splinecode"
        className="absolute right-0 top-1/4 w-96 h-96 opacity-30 pointer-events-none"
        style={{
          animation: 'spinAndHoverReverse 8s ease-in-out infinite',
          animationDelay: '4s',
          transform: 'translateX(20%) scaleX(-1)'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Introducing <span className="text-green-500">FX Gator</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Your complete forex trading education system designed specifically for beginners who want to achieve consistent profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((item, index) => (
            <div key={index} className="text-center opacity-0 animate-fadeInUp" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="bg-green-500/10 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-500 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                <item.icon className="w-16 h-16 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-2xl p-8 md:p-12 text-center hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 opacity-0 animate-scaleIn" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stop Guessing. Start Profiting.
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join FX Gator and transform from a struggling beginner into a confident trader with a proven roadmap to success.
          </p>
        </div>
      </div>
    </section>
  );
}
