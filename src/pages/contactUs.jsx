import React from 'react';
import { useForm } from 'react-hook-form';
import backgroundImage from '../assets/bg_image.jpg'; // Adjust path if needed

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted', data);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main section divided into 2 halves */}
      <div className="flex flex-grow">
        {/* Left side: BG Image only */}
        <div
          className="w-1/2 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Right side: Form with black background */}
        <div className="w-1/2 flex items-center justify-center bg-black bg-opacity-60">
          <div className="w-full max-w-lg p-8 bg-black bg-opacity-80 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-white mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              {/* Contact Number Field */}
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-white mb-2">Contact Number</label>
                <input
                  type="text"
                  id="contactNumber"
                  {...register('contactNumber', { required: 'Contact number is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Enter your contact number"
                />
                {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('Message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Write your message here"
                />
                {errors.Message && <p className="text-red-500 text-xs mt-1">{errors.Message.message}</p>}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p>&copy; 2024 Safetronics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ContactForm;
