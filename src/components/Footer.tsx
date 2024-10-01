import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Kitten Mittens</h3>
            <p className="text-sm">Providing warmth and style to kittens worldwide.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li className="mb-1"><a href="#" className="hover:text-blue-300">Home</a></li>
              <li className="mb-1"><a href="#" className="hover:text-blue-300">Products</a></li>
              <li className="mb-1"><a href="#" className="hover:text-blue-300">About Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300">[FB]</a>
              <a href="#" className="text-white hover:text-blue-300">[TW]</a>
              <a href="#" className="text-white hover:text-blue-300">[IG]</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          <p>&copy; {currentYear} Kitten Mittens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;