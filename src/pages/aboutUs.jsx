import React from 'react';

function AboutPage() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-teal-400 to-pink-600 min-h-screen pt-20">

      {/* Unique Banner Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-teal-400 to-pink-600 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-6 md:px-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to Safetronics
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 animate__animated animate__fadeIn animate__delay-2s">
            A world of innovation, security, and endless possibilities
          </p>
          <a href="#about" className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition animate__animated animate__fadeIn animate__delay-3s">
            Discover Our Journey
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            At Safetronics, we strive to provide innovative solutions that help people achieve their goals.
            We are dedicated to delivering exceptional quality and customer service, all while maintaining
            a fun and supportive work environment.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-indigo-50">
        <div className="max-w-screen-xl mx-auto px-10 text-center">
          <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Saef Ali Mehdi</h3>
              <p className="text-gray-700">Sales Manager</p>
              <p className="text-gray-500 mt-2">Saef is the visionary behind Safetronics, constantly pushing boundaries to provide the best experience for our users.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Abdullah Ahmad Nour</h3>
              <p className="text-gray-700">Sales Operator</p>
              <p className="text-gray-500 mt-2">Abdullah Ahmad Nour plays a crucial role in driving revenue and building relationships with customers.</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Member 3</h3>
              <p className="text-gray-700">Pending</p>
              <p className="text-gray-500 mt-2">Pending</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-indigo-600 mb-12">Our Story</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Safetronics was founded in 2023 by a group of passionate individuals with a shared vision to revolutionize the security industry. 
            What started as a small startup has now grown into one of the leading providers of Software solutions, Mobile App Development, Cloud Security, and Hardware Solutions.
            Over the years, we’ve built a reputation for delivering reliable, high-performance systems that our customers can trust. 
            We’ve expanded our product offerings, entered new markets, and continually improved our solutions to stay ahead of the curve in an ever-changing industry.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="mb-4">© 2024 Safetronics. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-yellow-400">Facebook</a>
            <a href="#" className="hover:text-yellow-400">Twitter</a>
            <a href="#" className="hover:text-yellow-400">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
