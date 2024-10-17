// src/pages/InventoryPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const InsightsPage = () => {
  return (
    <div className="min-h-screen w-full bg-backgroundCustom font-sans p-6">
      <Header/>
      <h1 className="text-3xl font-bold text-purpleCustom">Insights Page</h1>
      {/* Add your content here */}
      <div className='w-full flex items-center justify-between py-10 px-10'>
        <div>
          <p>This Page is Currently under Development and not to be used for the Live Demo</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default InsightsPage;
