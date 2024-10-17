// src/pages/InventoryPage.js
import React, { useState } from 'react';import Header from '../components/Header';
import Footer from '../components/Footer';
import TranslateSection from '../components/TranslateSection';
import ChatBubble from '../components/ChatBubble';
import DashboardCard from '../components/DashboardCard';
import img1 from "../assets/inven1.png";
import img2 from "../assets/inven2.png";
import img3 from "../assets/inven3.png";
import img4 from "../assets/inven4.png";
import img5 from "../assets/inven5.png";

const InventoryPage = () => {

  // State for SKU selection
  const [selectedSKU, setSelectedSKU] = useState('');

  // List of SKUs for the dropdown
  const skus = ['SKU1', 'SKU2', 'SKU3', 'SKU4', 'SKU5'];
  const [maxInventory, setMaxInventory] = useState('');
  const [minInventory, setMinInventory] = useState('');

  //Mapping SKUs to corresponding images
  const skuImages = {
    SKU1: img1,
    SKU2: img2,
    SKU3: img3,
    SKU4: img4,
    SKU5: img5,
  };

  const skuMinInv = {
    SKU1: 4000,
    SKU2: 4200,
    SKU3: 2600,
    SKU4: 3500,
    SKU5: 3000,
  };

  const skuMaxInv = {
    SKU1: 9500,
    SKU2: 10600,
    SKU3: 6800,
    SKU4: 8300,
    SKU5: 7600,
  };
  

  return (
    <div className="min-h-screen w-full bg-backgroundCustom font-sans p-6">
      <Header/>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center space-around">
        <div className='px-4'>
        <h1 className="text-3xl font-bold text-purpleCustom mb-6">Inventory Page</h1>
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
            title="Max inventory levels"
            content={
              <div className="flex justify-between items-center">
                <span></span>
                <span className='text-3xl font-semibold text-purpleCustom'>{skuMaxInv[selectedSKU]} units</span>
              </div>
            }
          />
          <DashboardCard
            title="Min inventory levels"
            content={
              <div className="flex justify-between items-center">
                <span></span>
                <span className='text-3xl font-semibold text-purpleCustom'>{skuMinInv[selectedSKU]} units</span>
              </div>
            }
          />
        </div>
        </div>

        
        <div className='border-gray-300 ml-4'>
        <h2 className="text-2xl font-bold mb-4">Chart Trends for {selectedSKU || 'SKU1'}:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-gray-300">
          {/* <img src={img1} alt="Graph 1" className="w-full h-auto" /> */}
          <div className='min-w-max h-full'>
            {selectedSKU && (
              <div className="w-full md:w-1/2 max-w-screen-2xl min-w-96">
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
// const InventoryPage = () => {
//   const [selectedSKU, setSelectedSKU] = useState('');
//   const [maxInventory, setMaxInventory] = useState('');
//   const [minInventory, setMinInventory] = useState('');

//   // Mapping SKUs to corresponding images
//   const skuImages = {
//     SKU1: img1,
//     SKU2: img2,
//     SKU3: img3,
//     SKU4: img4,
//     SKU5: img5,
//   };

//   const skus = ['SKU1', 'SKU2', 'SKU3', 'SKU4', 'SKU5']; // Example SKUs

//   return (
//     <div className="p-6">
//       {/* Page Title */}
//       <h1 className="text-3xl font-bold mb-6">Inventory Projection:</h1>

//       <div className="max-w-5xl mx-auto p-4">
//         {/* Flex Container for Form and Image */}
//         <div className="flex flex-col md:flex-row justify-between items-start gap-8">
//           {/* Form (left side) */}
//           <form className="space-y-4 w-full md:w-1/2 max-w-md">
//             {/* SKU Selector */}
//             <div>
//               <select
//                 value={selectedSKU}
//                 onChange={(e) => setSelectedSKU(e.target.value)}
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
//                 required
//               >
//                 <option value="" disabled>Select SKU...</option>
//                 {skus.map((sku) => (
//                   <option key={sku} value={sku}>
//                     {sku}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Max Inventory Level */}
//             <div className="flex items-center">
//               <input
//                 type="number"
//                 value={maxInventory}
//                 onChange={(e) => setMaxInventory(e.target.value)}
//                 placeholder="Max inventory levels"
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
//                 required
//               />
//               <span className="ml-2">x qty</span>
//             </div>

//             {/* Min Inventory Level */}
//             <div className="flex items-center">
//               <input
//                 type="number"
//                 value={minInventory}
//                 onChange={(e) => setMinInventory(e.target.value)}
//                 placeholder="Min inventory levels"
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
//                 required
//               />
//               <span className="ml-2">y qty</span>
//             </div>
//           </form>

//           {/* Render Image Dynamically based on SKU Selection */}
//           {selectedSKU && (
//             <div className="w-full md:w-1/2 max-w-md">
//               <img src={skuImages[selectedSKU]} alt={selectedSKU} className="rounded shadow-md" />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

export default InventoryPage;
