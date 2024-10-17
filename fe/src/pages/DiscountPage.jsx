// src/pages/InventoryPage.js
import React, { useState }from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardCard from '../components/DashboardCard';
import img1 from "../assets/dsc1.png";
import img2 from "../assets/dsc2.png";
import img3 from "../assets/dsc3.png";
import img4 from "../assets/dsc4.png";


const DiscountPage = () => {

  
  // State for SKU selection
  const [selectedSKU, setSelectedSKU] = useState('');
  const [maxInventory, setMaxInventory] = useState('');
  const [minInventory, setMinInventory] = useState('');

  // List of SKUs for the dropdown
  const skus = ['SKU1', 'SKU2', 'SKU3', 'SKU4'];

  const skuImages = {
    SKU1: img1,
    SKU2: img2,
    SKU3: img3,
    SKU4: img4,
    
  };

  const skuERPDsc = {
    SKU1: 9300,
    SKU2: 11900,
    SKU3: 11500,
    SKU4: 9700,
    
  };

  const skuOptDsc = {
    SKU1: 15,
    SKU2: 20,
    SKU3: 25,
    SKU4: 10,
    
  };

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
            title="Optimum discount levels"
            content={
              <div className="flex justify-between items-center">
                <span></span>
                <span className='text-3xl font-semibold text-purpleCustom'>{skuOptDsc[selectedSKU]} %</span>
              </div>
            }
          />
          <DashboardCard
            title="Estimated Revenue Projection"
            content={
              <div className="flex justify-between items-center">
                <span></span>
                <span className='text-3xl font-semibold text-purpleCustom'>₹ {skuERPDsc[selectedSKU]}</span>
              </div>
            }
          />
          
        </div>
        </div>
        <div className='border-gray-300 ml-4'>
        <h2 className="text-2xl font-bold mb-4">Chart Trends for {selectedSKU || 'SKU'}:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-gray-300">
          {/* <img src={img1} alt="Graph 1" className="w-full h-auto" /> */}
          <div className='min-w-max h-full'>
          {selectedSKU && (
              <div className="w-full md:w-1/2 max-w-screen-xl min-w-96">
                <img src={skuImages[selectedSKU]} alt={selectedSKU} className="rounded shadow-md" />
              </div>
            )}
            </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DiscountPage;



