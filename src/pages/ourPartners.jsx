import React from "react";

// Import local images
import UnihopeImage from "../assets/Unihope.jpg";
import DellImage from "../assets/Dell.jpg";
import BoschImage from "../assets/Bosch.jpg";
import MilestoneImage from "../assets/Milestone.jpg";
import GenetecImage from "../assets/Genetec.jpg";

export default function OurPartners() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-teal-400 to-pink-600 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="flex items-center justify-center bg-cover bg-center h-[40vh]" style={{ backgroundImage: "url('https://via.placeholder.com/1500x900')" }}>
        <div className="text-center text-white px-6 md:px-12 py-8 bg-black bg-opacity-50">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Trusted Partners</h1>
          <p className="text-lg md:text-xl mb-6">We are proud to collaborate with these amazing organizations to bring you the best services.</p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Partner 1 */}
            <div className="group flex flex-col bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <div className="flex-shrink-0">
                <img
                  src={UnihopeImage}
                  alt="UnihopeKuwait"
                  className="w-full h-28 sm:h-32 object-contain group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="flex flex-col justify-end flex-grow p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">UnihopeKuwait</h2>
                <p className="mt-2 text-gray-600">
                  They are a leading company and are one of our trusted partners in our business.
                </p>
              </div>
            </div>

            {/* Partner 2 */}
            <div className="group flex flex-col bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <div className="flex-shrink-0">
                <img
                  src={DellImage}
                  alt="Dell"
                  className="w-full h-28 sm:h-32 object-contain group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="flex flex-col justify-end flex-grow p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Dell</h2>
                <p className="mt-2 text-gray-600">They are one of the leading partners for Safetronics.</p>
              </div>
            </div>

            {/* Partner 3 */}
            <div className="group flex flex-col bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <div className="flex-shrink-0">
                <img
                  src={BoschImage}
                  alt="Bosch Security Systems"
                  className="w-full h-28 sm:h-32 object-contain group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="flex flex-col justify-end flex-grow p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Bosch Security Systems</h2>
                <p className="mt-2 text-gray-600">
                  With advanced technologies in intrusion detection and fire safety, Bosch enhances our integrated security offerings.
                </p>
              </div>
            </div>

            {/* Partner 4 */}
            <div className="group flex flex-col bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <div className="flex-shrink-0">
                <img
                  src={MilestoneImage}
                  alt="Milestone Systems"
                  className="w-full h-28 sm:h-32 object-contain group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="flex flex-col justify-end flex-grow p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Milestone Systems</h2>
                <p className="mt-2 text-gray-600">
                  Milestone’s open platform video management software powers our intelligent video surveillance systems with flexibility and scalability.
                </p>
              </div>
            </div>

            {/* Partner 5 */}
            <div className="group flex flex-col bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <div className="flex-shrink-0">
                <img
                  src={GenetecImage}
                  alt="Genetec"
                  className="w-full h-28 sm:h-32 object-contain group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="flex flex-col justify-end flex-grow p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Genetec</h2>
                <p className="mt-2 text-gray-600">
                  A key player in surveillance technology, Genetec helps us offer cost-effective and reliable security systems for homes and businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 bg-green text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-lg mb-6">
            If you're ready to enhance your security systems or have any questions, don't hesitate to reach out to us.
          </p>
          <a
            href="mailto: info@unihopekuwait.com"
            className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
