import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Paw-fect Comfort for Every Kitten!
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              At Kitten Mittens, we're on a mission to provide cozy, adorable mittens for every kitten on the planet. Because every little paw deserves warmth and style!
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Shop Kitten Mittens
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-300 w-full h-64 sm:h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-lg">
                [Image: Cute kitten wearing colorful mittens]
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;