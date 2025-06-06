import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formState);
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
                Ready to <span className="text-amber-500">Level Up</span>?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Whether you're launching a product, validating a service, or pivoting a brand, Level Up is where founders go to be heard, seen, and supported in real time.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Transform Your Vision</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">
                  Each activation under Level Up becomes a platform for visibility, a stage for credibility, and a pipeline for opportunity.
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  More than marketing—Level Up is movement-building for entrepreneurs on the rise.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                    <span className="text-amber-600 dark:text-amber-400">📍</span>
                  </div>
                  <span className="text-gray-800 dark:text-gray-200">123 Innovation Drive, San Francisco, CA</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                    <span className="text-amber-600 dark:text-amber-400">📧</span>
                  </div>
                  <span className="text-gray-800 dark:text-gray-200">contact@nxnlvl.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                    <span className="text-amber-600 dark:text-amber-400">📱</span>
                  </div>
                  <span className="text-gray-800 dark:text-gray-200">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-md">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <CheckCircle size={64} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Message Received!</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Thank you for reaching out. We'll be in touch with you shortly to discuss how we can help level up your business.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Get in Touch</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                      placeholder="Tell us about your business needs"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium rounded-md shadow-md hover:shadow-lg flex items-center justify-center transform hover:scale-105 transition-all"
                  >
                    Send Message <Send size={16} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;