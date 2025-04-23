import React from 'react';

function ServicesPage() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-teal-400 to-pink-600 min-h-screen pt-16">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-400 to-pink-600 py-24 px-6 text-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Providing innovative security solutions for your Machines.
          </p>
          <a href="#services" className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition">
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="text-teal-400" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm1 12a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0v2zm0-4a1 1 0 1 1-2 0V6a1 1 0 1 1 2 0v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-green mb-4">Smart Surveillance Systems</h3>
              <p className="text-gray-700 mb-4">
                Our smart surveillance systems use AI and machine learning to ensure top-notch security for your home or business. Monitor everything in real-time from your mobile device.
              </p>
              <a href="#" className="text-green font-semibold hover:underline">
                Learn More
              </a>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="text-teal-400" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm1 12a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0v2zm0-4a1 1 0 1 1-2 0V6a1 1 0 1 1 2 0v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-green mb-4">Advanced Alarm Solutions</h3>
              <p className="text-gray-700 mb-4">
                Our advanced alarm solutions are designed to protect you against intrusions and emergencies. Get instant notifications and ensure your safety at all times.
              </p>
              <a href="#" className="text-green font-semibold hover:underline">
                Learn More
              </a>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="text-teal-400" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm1 12a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0v2zm0-4a1 1 0 1 1-2 0V6a1 1 0 1 1 2 0v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-text-green mb-4">Cloud Security Solutions</h3>
              <p className="text-gray-700 mb-4">
                Protect your data with our cloud-based security solutions. We provide secure data storage and access management to ensure your business stays protected.
              </p>
              <a href="#" className="text-green font-semibold hover:underline">
                Learn More
              </a>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="text-teal-400" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm1 12a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0v2zm0-4a1 1 0 1 1-2 0V6a1 1 0 1 1 2 0v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-text-green mb-4">Mobile App Development</h3>
              <p className="text-gray-700 mb-4">
                Our team of expert developers can create user-friendly mobile apps to help you manage and monitor your security system directly from your smartphone.
              </p>
              <a href="#" className="text-green font-semibold hover:underline">
                Learn More
              </a>
            </div>
            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="text-teal-400" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm1 12a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0v2zm0-4a1 1 0 1 1-2 0V6a1 1 0 1 1 2 0v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-green mb-4">Consultation & Support</h3>
              <p className="text-gray-700 mb-4">
                We offer expert consultation and ongoing support to help you optimize your security system. Let us guide you through your security challenges and solutions.
              </p>
              <a href="#" className="text-green font-semibold hover:underline">
                Learn More
              </a>
            </div>
            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="text-teal-400" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm1 12a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0v2zm0-4a1 1 0 1 1-2 0V6a1 1 0 1 1 2 0v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-green mb-4">Security System Installation</h3>
              <p className="text-gray-700 mb-4">
                Our team provides professional installation of all your security devices. We ensure that your system is set up for maximum effectiveness and reliability.
              </p>
              <a href="#" className="text-green font-semibold hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p>&copy; 2024 Safetronics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;
