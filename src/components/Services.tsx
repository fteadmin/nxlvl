import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Brand Storytelling",
      description: "Craft compelling narratives and public personas that resonate with your target audience and establish your brand's voice.",
      icon: "📢"
    },
    {
      title: "Social Media Activations",
      description: "Engage audiences through themed digital content and strategic campaigns designed to increase visibility and engagement.",
      icon: "🚀"
    },
    {
      title: "Startup Showcases",
      description: "Gain exposure through curated demo days and spotlight features that put your venture in front of the right eyes.",
      icon: "✨"
    },
    {
      title: "Thought Leadership",
      description: "Position yourself as an industry authority through peer-driven roundtables and thought leadership opportunities.",
      icon: "🧠"
    },
    {
      title: "Lead Generation",
      description: "Implement ongoing loops that push traffic back into Pro Tribe's business incubator and drive conversions.",
      icon: "⚡"
    },
    {
      title: "Community Building",
      description: "Transform your audience into a movement with collaborative campaigns and engagement strategies.",
      icon: "🤝"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Through Level Up, NXNLVL entrepreneurs unlock a suite of powerful services designed to elevate their brand and accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-800 hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-amber-500 transition-colors">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-6">{service.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-amber-500 font-medium hover:text-amber-600 transition-colors"
              >
                Learn more <ArrowUpRight size={16} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;