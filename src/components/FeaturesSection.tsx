import { TrendingUp, Copy, FileText, Headphones, Book, Users } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Two Trading Strategies',
      description: 'Choose from two proven strategies tailored to different trading styles and risk preferences.'
    },
    {
      icon: Copy,
      title: 'Copy Our Trading Signals',
      description: 'Get real-time trading signals directly from our expert traders and replicate their success.'
    },
    {
      icon: FileText,
      title: 'All Trade Breakdowns',
      description: 'Access detailed analysis of every trade, understanding the why behind each decision.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance whenever you need help or have questions about your trades.'
    },
    {
      icon: Book,
      title: 'Member Resources',
      description: 'Comprehensive library of guides, tutorials, and tools to accelerate your learning.'
    },
    {
      icon: Users,
      title: 'Private Community',
      description: 'Connect with fellow traders, share insights, and grow together in our exclusive community.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            When you join FX Gator, you get complete access to our comprehensive trading education system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="bg-green-500/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
