import React from "react";

// Import local images
import UnihopeImage from "../assets/Unihope.jpg";
import DellImage from "../assets/Dell.jpg";
import BoschImage from "../assets/Bosch.jpg";
import MilestoneImage from "../assets/Milestone.jpg";
import GenetecImage from "../assets/Genetec.jpg";

export default function OurPartners() {
  return (
    <>
      {/* Main Content */}
      <div className="container mx-auto p-8">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">Our Trusted Partners</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          We are proud to collaborate with these amazing organizations to bring you the best services.
        </p>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Partner 1 */}
          <div className="group flex flex-col bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="flex-shrink-0">
              <img
                src={UnihopeImage}
                alt="UnihopeKuwait"
                className="w-full h-32 object-contain group-hover:opacity-75 transition-opacity duration-300"
              />
            </div>
            <div className="flex flex-col justify-end flex-grow p-6">
              <h2 className="text-2xl font-semibold text-gray-800">UnihopeKuwait</h2>
              <p className="mt-2 text-gray-600">
                They are a leading company and are one of our trusted partners in our business
              </p>
            </div>
          </div>

          {/* Partner 2 */}
          <div className="group flex flex-col bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="flex-shrink-0">
              <img
                src={DellImage}
                alt="Dell"
                className="w-full h-32 object-contain group-hover:opacity-75 transition-opacity duration-300"
              />
            </div>
            <div className="flex flex-col justify-end flex-grow p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Dell</h2>
              <p className="mt-2 text-gray-600">They are one of the leading Partner for Safetronics</p>
            </div>
          </div>

          {/* Partner 3 */}
          <div className="group flex flex-col bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="flex-shrink-0">
              <img
                src={BoschImage}
                alt="Bosch Security Systems"
                className="w-full h-32 object-contain group-hover:opacity-75 transition-opacity duration-300"
              />
            </div>
            <div className="flex flex-col justify-end flex-grow p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Bosch Security Systems</h2>
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
                className="w-full h-32 object-contain group-hover:opacity-75 transition-opacity duration-300"
              />
            </div>
            <div className="flex flex-col justify-end flex-grow p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Milestone Systems</h2>
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
                className="w-full h-32 object-contain group-hover:opacity-75 transition-opacity duration-300"
              />
            </div>
            <div className="flex flex-col justify-end flex-grow p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Genetec</h2>
              <p className="mt-2 text-gray-600">
                A key player in surveillance technology, Genetec helps us offer cost-effective and reliable security systems for homes and businesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-lg mb-8">
            If you're ready to enhance your security systems or have any questions, don't hesitate to reach out to us.
          </p>
          <a
            href="mailto:info@company.com"
            className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Latest News</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with the latest trends and advancements in security technology. Check out our recent blog posts!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* News Article 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Advancements in AI Surveillance</h3>
              <p className="text-gray-600">
                Explore how AI is transforming the way we monitor and secure properties, and the latest tools in the market.
              </p>
            </div>

            {/* News Article 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Cloud Security: The Future</h3>
              <p className="text-gray-600">
                Learn how cloud-based security systems are providing unmatched scalability and reliability for businesses.
              </p>
            </div>

            {/* News Article 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Securing Smart Homes</h3>
              <p className="text-gray-600">
                Discover the best ways to secure your smart home and ensure you have complete control over your property at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
