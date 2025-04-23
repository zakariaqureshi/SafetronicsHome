import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import backgroundImage from '../assets/bg_image.jpg';

const ContactForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm();

  const onSubmit = useCallback(async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted', data);
      reset();
    } catch (error) {
      console.error('Submission error', error);
    }
  }, [reset]);

  const InputField = ({ id, label, type = 'text', placeholder, validation, error }) => (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={4}
          {...register(id, validation)}
          className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-900 text-white placeholder-gray-400"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          {...register(id, validation)}
          className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-900 text-white placeholder-gray-400"
          placeholder={placeholder}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] pt-16 bg-gradient-to-r from-black to-gray-900">
      <div className="flex flex-col md:flex-row h-full">
        <div 
          className="hidden md:block md:w-1/2 bg-cover bg-center bg-no-repeat rounded-r-3xl shadow-lg"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            minHeight: 'calc(100vh - 4rem)' 
          }}
          aria-hidden="true"
        />

        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-black bg-opacity-80 rounded-3xl shadow-2xl p-8">
            <h2 className="text-3xl font-extrabold text-center text-white mb-6">
              Get in Touch with Safetronics
            </h2>
            <p className="text-center text-gray-300 mb-6 text-sm">
              Reach out to us for smart safety solutions, cybersecurity services, and expert tech consultations.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <InputField
                id="name"
                label="Full Name"
                placeholder="Enter your name"
                validation={{ required: 'Name is required' }}
                error={errors.name}
              />

              <InputField
                id="contactNumber"
                label="Contact Number"
                placeholder="Enter your contact number"
                validation={{ 
                  required: 'Contact number is required',
                  pattern: {
                    value: /^[0-9+\s]+$/,
                    message: 'Invalid phone number'
                  }
                }}
                error={errors.contactNumber}
              />

              <InputField
                id="email"
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                validation={{ 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                }}
                error={errors.email}
              />

              <InputField
                id="message"
                type="textarea"
                label="Your Message"
                placeholder="Write your message here"
                validation={{ 
                  required: 'Message is required',
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters"
                  }
                }}
                error={errors.message}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isSubmitting 
                    ? 'bg-indigo-800 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-6 text-center mt-8 border-t border-gray-800">
        <p className="text-sm">&copy; {new Date().getFullYear()} Safetronics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default React.memo(ContactForm);