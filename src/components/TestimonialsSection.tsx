import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  '/Media/Testimonials/IMG_0471.PNG',
  '/Media/Testimonials/IMG_3365.png',
  '/Media/Testimonials/IMG_3367.JPG',
  '/Media/Testimonials/IMG_3368.JPG',
  '/Media/Testimonials/IMG_3370.JPG',
  '/Media/Testimonials/IMG_3374.png',
  '/Media/Testimonials/IMG_7823.PNG',
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Results Speak for Themselves
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            See what our community members are achieving with our proven strategies
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto opacity-0 animate-scaleIn" style={{ animationDelay: '0.3s' }}>
          <div className="relative aspect-square bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-green-500/20 transition-shadow duration-500">
            <img
              src={testimonials[currentIndex]}
              alt={`Testimonial ${currentIndex + 1}`}
              className="w-full h-full object-contain transition-opacity duration-500"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-green-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
