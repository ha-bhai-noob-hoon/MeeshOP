// src/pages/InventoryPage.js

import React, { useState } from 'react';
import DashboardCard from '../components/DashboardCard';
import Header from '../components/Header';
import Footer from '../components/Footer';




 // Assuming Footer is reused from InventoryPage

const PricingStrategy = () => {
  const [selectedSKU, setSelectedSKU] = useState('');
  const [maxDiscount, setMaxDiscount] = useState('');
  const [minDiscount, setMinDiscount] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [strategy, setStrategy] = useState('');

  const skus = ['SKU1', 'SKU2', 'SKU3', 'SKU4', 'SKU5']; // Example SKUs
  const days = ['BAU', 'FSMS', 'MBS', 'MDS']; // Days of the week
  const strategies = ['FSMS', 'MBS', 'Price Match', 'Deal of the Day']; // Example strategies

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDay) {
      const randomStrategy = strategies[Math.floor(Math.random() * strategies.length)];
      setStrategy(randomStrategy);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen w-full bg-backgroundCustom font-sans p-6">
      <Header/>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Pricing Strategy:</h1>
      {/* Centered Container with Max Width */}
      <div className="max-w-5xl mx-auto p-4">
        {/* Flex Container for Form and Recommendations */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Form (left side) */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full md:w-1/2 max-w-md">
            {/* SKU Selector */}
            <div>
              <select
                value={selectedSKU}
                onChange={(e) => setSelectedSKU(e.target.value)}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
                required
              >
                <option value="" disabled>Select SKU...</option>
                {skus.map((sku) => (
                  <option key={sku} value={sku}>
                    {sku}
                  </option>
                ))}
              </select>
            </div>

            {/* Max Discount */}
            <div className="flex items-center">
              <input
                type="number"
                value={maxDiscount}
                onChange={(e) => setMaxDiscount(e.target.value)}
                placeholder="Enter Max Discount"
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
                required
              />
              <span className="ml-2">%</span>
            </div>

            {/* Min Discount */}
            <div className="flex items-center">
              <input
                type="number"
                value={minDiscount}
                onChange={(e) => setMinDiscount(e.target.value)}
                placeholder="Enter Min Discount"
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
                required
              />
              <span className="ml-2">%</span>
            </div>

            {/* Day Selector */}
            <div>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
                required
              >
                <option value="" disabled>Select Day...</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700"
            >
              Submit
            </button>
          </form>

          {/* Render Recommendations Card (right side) after form submission */}
          {submitted && (
            <div className="w-full md:w-1/2 max-w-md">
              <DashboardCard
                title="Recommendations"
                content={
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-purple-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl">
                      {selectedDay}
                    </div>
                    <p className="mt-4 text-xl font-bold">Strategy Name: {strategy}</p>
                    <p className="mt-1">$x.99</p> {/* Example price strategy */}
                  </div>
                }
              />
            </div>
          )}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PricingStrategy;


      // <Header/>
      // <h1 className="text-3xl font-bold text-purpleCustom">Pricing Strategy</h1>
      // {/* Add your content here */}
      // <Footer/>


      // const ProfitPage = () => {
      //   return (
      //     <div className="min-h-screen w-full bg-backgroundCustom font-sans p-6">
            
      //     </div>
      //   );
      // };
      
      // export default ProfitPage;