import React from 'react';

// Path to Meesho chatbot icon and translate icon
import translateIcon from '../assets/translate.png'; // Example path
import chatbotIcon from '../assets/chatbot.png';     // Example path
import aibotIcon from '../assets/aibot.png';     // Example path
import trans from '../assets/trans.svg';     // Example path

const Footer = () => {
  return (
    <div className="fixed bottom-3 left-0 right-0 flex justify-between items-center mt-10 p-4 bg-backgroundCustom ">
      {/* Translate Section */}
      <div className="flex items-center ml-4">
        <img src={trans} alt="Translate" className="h-20 w-20" />
        <span className="ml-2 text-sm font-bold">TRANSLATE</span>
      </div>

      {/* Chatbot Section */}
      <div className="flex items-center mr-4">
        <div className="p-4 bg-backgroundCustom rounded-lg">
          <p className="text-sm">Namaskar! I am Meesho's chatbot aimed at assisting you...</p>
        </div>
        <img src={aibotIcon} alt="Chatbot" className="h-20 w-20 ml-4" />
      </div>
    </div>
  );
};

export default Footer;
