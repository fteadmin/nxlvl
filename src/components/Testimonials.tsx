import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Level Up transformed my startup from an idea into a movement. The visibility and community support has been invaluable for our growth.",
    author: "Sarah Johnson",
    position: "Founder, EcoTech Solutions",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "The brand storytelling expertise at NXNLVL helped us craft a narrative that resonates deeply with our audience. Our engagement has increased by 217%.",
    author: "Michael Chen",
    position: "CEO, Innovate AI",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "Level Up's social media activations put our brand in front of the right people at the right time. We've seen a dramatic increase in qualified leads.",
    author: "Alexis Rivera",
    position: "Marketing Director, FutureFit",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
            Success <span className="text-amber-500">Stories</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hear from entrepreneurs who have transformed their ventures through Level Up.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            {/* Gold decorative element */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-500/10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-16 h-16 bg-amber-500/10 rounded-full"></div>
            
            <div className="relative">
              <div className="mb-6 text-center">
                <div className="inline-block text-amber-500 text-6xl leading-none mb-4">"</div>
                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 italic mb-6">
                  {testimonials[current].quote}
                </p>
              </div>
              
              <div className="flex items-center justify-center mb-8">
                <img 
                  src={testimonials[current].avatar} 
                  alt={testimonials[current].author} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                />
                <div className="ml-4 text-left">
                  <p className="font-bold text-black dark:text-white">{testimonials[current].author}</p>
                  <p className="text-gray-600 dark:text-gray-400">{testimonials[current].position}</p>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={prev} 
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === current
                          ? 'bg-amber-500'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-amber-300 dark:hover:bg-amber-700'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={next} 
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;