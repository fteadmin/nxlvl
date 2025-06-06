import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
            About <span className="text-amber-500">Level Up</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Level Up is the activation core of NXNLVL, the business-building vertical of Pro Tribe, created to accelerate growth for emerging entrepreneurs and early-stage ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                As the social engine of NXNLVL, Level Up transforms brand development into a public journey—where building a business is not just a task, but a movement.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Powered by Life Connect, the multi-channel visibility engine of Future Trends Enterprise Inc., Level Up drives exposure, engagement, and elevation. It offers entrepreneurs the visibility they need to scale, by wrapping strategy in story and growth in community.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
            {[
              { title: 'Brand Storytelling', desc: 'Craft compelling narratives' },
              { title: 'Social Media', desc: 'Themed digital content' },
              { title: 'Startup Spotlight', desc: 'Showcase your venture' },
              { title: 'Lead Generation', desc: 'Drive business growth' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700 transition-all"
              >
                <h4 className="text-xl font-bold mb-2 text-black dark:text-white">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', text: 'Entrepreneurs Supported' },
              { number: '89%', text: 'Growth Rate for Members' },
              { number: '24/7', text: 'Community Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{stat.number}</p>
                <p className="text-gray-700 dark:text-gray-300">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;