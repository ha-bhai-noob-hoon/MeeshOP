// src/pages/InventoryPage.js
import React, { useState }from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardCard from '../components/DashboardCard';
import img1 from "../assets/dsc1.png";
import img2 from "../assets/dsc2.png";


const DiscountPage = () => {

  
  // State for SKU selection
  const [selectedSKU, setSelectedSKU] = useState('');

  // List of SKUs for the dropdown
  const skus = ['SKU1', 'SKU2', 'SKU3', 'SKU4', 'SKU5'];

  return (
    <div className="min-h-screen w-full bg-backgroundCustom font-sans p-6">
      <Header/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center space-around">
        <div className='px-4'>
        <h1 className="text-3xl font-bold text-purpleCustom mb-6">Discount Strategy</h1>
        <div className="mb-6">
          <select
            value={selectedSKU}
            onChange={(e) => setSelectedSKU(e.target.value)}
            className="w-full md:w-1/3 p-2 bg-gray-100 border border-gray-300 rounded"
          >
            <option value="" disabled>Select SKU...</option>
            {skus.map((sku) => (
              <option key={sku} value={sku}>
                {sku}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <DashboardCard
            title="Max discount levels"
            content={
              <div className="flex justify-between items-center">
                <span></span>
                <span className='text-3xl font-semibold text-purpleCustom'>x %</span>
              </div>
            }
          />
          <DashboardCard
            title="Min discount levels"
            content={
              <div className="flex justify-between items-center">
                <span></span>
                <span className='text-3xl font-semibold text-purpleCustom'>y %</span>
              </div>
            }
          />
          
        </div>
        </div>
        <div className='border-gray-300 ml-4'>
        <h2 className="text-2xl font-bold mb-4">Chart Trends for {selectedSKU || 'SKU1'}:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-gray-300">
          <img src={img1} alt="Graph 1" className="w-full h-auto" />
          
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DiscountPage;



