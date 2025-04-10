import React from 'react';

function Buy() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 text-white">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">🚀 Something New is Coming!</h1>
        <p className="text-lg">We’re working on something exciting for you. Stay tuned and get ready for a new experience!</p>
        <div className="mt-6">
          <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buy;
