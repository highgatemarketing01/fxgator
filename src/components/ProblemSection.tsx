import { TrendingDown, AlertTriangle, Clock } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Losing Money Consistently',
      description: 'Trading without a proven strategy leads to emotional decisions and mounting losses.'
    },
    {
      icon: AlertTriangle,
      title: 'Information Overload',
      description: 'Drowning in conflicting advice from countless sources with no clear path forward.'
    },
    {
      icon: Clock,
      title: 'Wasting Time & Energy',
      description: 'Spending hours analyzing charts without a structured approach or mentor to guide you.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Struggling to Make Forex Trading Work?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            You're not alone. Most beginners face the same frustrating challenges that keep them from success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="bg-red-500/10 w-24 h-24 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <problem.icon className="w-12 h-12 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
