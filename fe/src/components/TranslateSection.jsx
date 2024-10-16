// src/components/TranslateSection.js
import React from 'react';

const TranslateSection = () => {
  const translateDashboard = () => {
    // Implement translation functionality
    alert('Translating Dashboard...');
  };

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-purpleCustom">
        Namaskar! I am Meesho's Chatbot...
      </h2>
      <div className="mt-4">
        <button
          className="bg-orangeCustom text-white px-4 py-2 rounded-lg"
          onClick={translateDashboard}
        >
          Translate
        </button>
      </div>
    </div>
  );
};

export default TranslateSection;
