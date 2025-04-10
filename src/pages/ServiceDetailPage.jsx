import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const serviceData = {
  surveillance: {
    title: 'Smart Surveillance Systems',
    description: 'Detailed explanation of how our AI-powered surveillance works...',
  },
  alarm: {
    title: 'Advanced Alarm Solutions',
    description: 'Comprehensive coverage on how our alarm systems detect and respond...',
  },
  cloud: {
    title: 'Cloud Security Solutions',
    description: 'Everything about cloud data protection, storage encryption...',
  },
  app: {
    title: 'Mobile App Development',
    description: 'How our mobile solutions empower users to monitor security...',
  },
  consult: {
    title: 'Consultation & Support',
    description: 'We assist clients in planning, configuring, and maintaining security...',
  },
  install: {
    title: 'Security System Installation',
    description: 'Step-by-step guide on how our professional team installs devices...',
  },
};

function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceData[id];

  if (!service) {
    return (
      <div className="p-8 text-center text-red-500">
        Service not found.
        <button 
          onClick={() => navigate('/services')}
          className="block mt-4 text-indigo-600 font-semibold hover:underline"
        >
          ← Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">{service.title}</h1>
      <p className="text-lg text-gray-700">{service.description}</p>

      <div className="mt-6">
        <Link
          to="/services"
          className="text-indigo-600 font-semibold hover:underline text-base"
        >
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}

export default ServiceDetailPage;