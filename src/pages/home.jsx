import React from "react";
import { FaShieldAlt, FaRobot, FaHeadset, FaCloud, FaMobileAlt, FaTools, FaBrush, FaShoppingCart, FaSearch, FaLock, FaGlobe, FaServer, FaDatabase, FaUserShield } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-teal-400 to-pink-600 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="flex items-center justify-center bg-cover bg-center h-[50vh]" style={{ backgroundImage: "url('https://via.placeholder.com/1500x900')" }}>
        <div className="text-center text-white px-6 md:px-12 py-12 bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Secure Your Future with Safetronic</h1>
          <p className="text-xl mb-8">Leading the way in cybersecurity, web, and mobile development services.</p>
          <a href="#services" className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition">Explore Our Services</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaShieldAlt className="text-6xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Penetration Testing</h3>
              <p className="text-gray-600">Ensure your systems are secure against potential threats and vulnerabilities.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaRobot className="text-6xl text-green-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI & Automation</h3>
              <p className="text-gray-600">Harness the power of AI to automate processes and improve efficiency.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaHeadset className="text-6xl text-red-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Our experts are always here to assist you with your technical needs.</p>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaCloud className="text-6xl text-indigo-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cloud Solutions</h3>
              <p className="text-gray-600">Seamless cloud migration and management for your growing business.</p>
            </div>
            {/* Service 5 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaMobileAlt className="text-6xl text-teal-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mobile Development</h3>
              <p className="text-gray-600">We build powerful and intuitive mobile apps for iOS and Android.</p>
            </div>
            {/* Service 6 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaTools className="text-6xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">DevOps & Automation</h3>
              <p className="text-gray-600">Streamline your workflows and automate infrastructure management.</p>
            </div>
            {/* Service 7: UI/UX Design */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaBrush className="text-6xl text-purple-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">UI/UX Design</h3>
              <p className="text-gray-600">Create intuitive, user-friendly designs that enhance user experience.</p>
            </div>
            {/* Service 8: E-commerce Development */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaShoppingCart className="text-6xl text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">E-commerce Development</h3>
              <p className="text-gray-600">Build scalable and secure e-commerce platforms tailored to your business.</p>
            </div>
            {/* Service 9: SEO Optimization */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaSearch className="text-6xl text-pink-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">SEO Optimization</h3>
              <p className="text-gray-600">Improve your website’s visibility and ranking on search engines.</p>
            </div>
            {/* Service 10: Cybersecurity Consulting */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaLock className="text-6xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cybersecurity Consulting</h3>
              <p className="text-gray-600">Expert advice on how to protect your organization from cyber threats.</p>
            </div>
            {/* Service 11: Web Development */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaGlobe className="text-6xl text-green-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
              <p className="text-gray-600">Create fast, responsive, and scalable websites tailored to your needs.</p>
            </div>
            {/* Service 12: Cloud Security */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaServer className="text-6xl text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cloud Security</h3>
              <p className="text-gray-600">Protect your cloud-based assets and data with top-notch security solutions.</p>
            </div>
            {/* Service 13: Database Management */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaDatabase className="text-6xl text-yellow-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Database Management</h3>
              <p className="text-gray-600">Manage, scale, and optimize your databases for performance and security.</p>
            </div>
            {/* Service 14: Identity & Access Management */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaUserShield className="text-6xl text-red-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Identity & Access Management</h3>
              <p className="text-gray-600">Control and secure access to your organization's resources with IAM solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2025 Safetronic. All Rights Reserved.</p>
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
