import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 sm:mb-0">
          🐱 Kitten Mittens
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-200 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-200 transition-colors duration-300">Products</a></li>
            <li><a href="#" className="hover:text-blue-200 transition-colors duration-300">About Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;