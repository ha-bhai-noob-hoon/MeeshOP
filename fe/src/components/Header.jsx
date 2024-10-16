

import React from 'react';

// Path to the Meesho logo (replace with the actual path if you have the image in your project)
import meeshoLogo from '../assets/logo.png'; // Assuming the logo is in the 'assets' folder

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-backgroundCustom p-4">
      {/* Left section with logo and title */}
      <div>
        <div className="flex items-center">
          <img src={meeshoLogo} alt="Meesho Logo" className="h-16 w-16" />
          <h1 className="text-5xl font-bold ml-6">MeeshOP</h1>
        </div>
        <p className="text-gray-600 mt-2">A personalized dashboard for the seller aiming to familiarize them with the outputs of all proposed solutions...</p>
      </div>
      
      {/* Right section with user's dashboard */}
      <div className="flex items-center">
        <span className="h-5 w-5 rounded-full bg-purpleCustom mr-2"></span>
        <h2 className="text-2xl font-extrabold">Ayush's Dashboard:</h2>
      </div>
    </div>
  );
};

export default Header;
