import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Background decoration - top */}
      <div className="absolute top-0 right-0 w-full h-1/3 overflow-hidden opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwMCAwQzE1NS4yMjggMCAyMDAgNDQuNzcyIDIwMCAxMDBTMTU1LjIyOCAyMDAgMTAwIDIwMCAwIDE1NS4yMjggMCAxMDAgNDQuNzcyIDAgMTAwIDB6bTAgMTBjLTQ5LjcwNiAwLTkwIDQwLjI5NC05MCA5MHM0MC4yOTQgOTAgOTAgOTAgOTAtNDAuMjk0IDkwLTkwLTQwLjI5NC05MC05MC05MHptMCAxMGM0NC4xODMgMCA4MCAzNS44MTcgODAgODBzLTM1LjgxNyA4MC04MCA4MC04MC0zNS44MTctODAtODAgMzUuODE3LTgwIDgwLTgwem0wIDEwYy0zOC42NiAwLTcwIDMxLjM0LTcwIDcwczcxLjM0IDcwIDcwIDcwIDcwLTMxLjM0IDcwLTcwLTMxLjM0LTcwLTcwLTcweiIgZmlsbD0iI0ZGRDcwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white mb-6">
              <span className="block">Level Up:</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">The Social Engine of NXNLVL</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
              Transform your brand development into a public journey—where building a business is not just a task, but a movement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 rounded-md bg-amber-500 hover:bg-amber-600 text-white font-medium transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-md border-2 border-amber-500 text-amber-500 dark:text-amber-400 font-medium hover:bg-amber-500/10 transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-floatUp">
            <div className="relative w-full max-w-md">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl transform -rotate-6"></div>
              <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl border border-amber-200 dark:border-amber-900 shadow-xl">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">NX</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-4 text-black dark:text-white">Join the Movement</h3>
                
                <ul className="space-y-3 mb-6">
                  {['Brand storytelling', 'Social media activations', 'Startup spotlights', 'Lead generation'].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 rounded-md bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium hover:shadow-lg transition-shadow">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-black opacity-70"></div>
    </section>
  );
};

export default Hero;