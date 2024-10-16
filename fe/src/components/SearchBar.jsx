// src/components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search inventory levels..."
        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-800"
      />
    </div>
  );
};

export default SearchBar;
