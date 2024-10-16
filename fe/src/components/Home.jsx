// src/components/Home.js
import React from 'react';
import Header from './Header';
//import SearchBar from './SearchBar';
import DashboardCard from './DashboardCard';
import TranslateSection from './TranslateSection';
import ChatBubble from './ChatBubble';
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-backgroundCustom font-sans p-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Inventory Status Card */}
        <DashboardCard
          title="Inventory Status"
          content={
            <div className="mt-4 flex items-center space-x-4">
              {/* Circle Chart */}
              <div className="w-20 h-20 relative">
                <div className="absolute inset-0 flex justify-center items-center">
                  <span className="text-white text-lg font-semibold">89%</span>
                </div>
                <svg className="w-full h-full">
                  <circle
                    className="text-purpleCustom"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                    r="35"
                    cx="40"
                    cy="40"
                  />
                  <circle
                    className="text-orangeCustom"
                    strokeWidth="5"
                    strokeDasharray="219.911485751"
                    strokeDashoffset="24"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="35"
                    cx="40"
                    cy="40"
                  />
                </svg>
              </div>
              {/* Revenue Info */}
              <div className="text-gray-700">
                <p>₹ 4,91,658 - Maximum Revenue (BAU)</p>
                <p>₹ 48,28,051 - Maximum Revenue (FSMS)</p>
              </div>
            </div>
          }
          linkText="Go to Inventory Page"
          linkUrl="/inventory"
        />

        {/* Similar DashboardCards for other sections */}
        {/* Auto-SARIMA Chart Card */}
        <DashboardCard
          title="Auto-SARIMA Inventory Projection"
          content={
            <div className="mt-4">
              <img src="static/images/chart.png" alt="SARIMA Chart" className="w-full h-auto" />
            </div>
          }
          linkText="Go to SARIMA Page"
          linkUrl="/sarima"
        />

        {/* Sales Multiplier Card */}
        <DashboardCard
          title="Calculated Event Sales Multiplier"
          content={
            <div className="flex justify-between mt-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-purpleCustom">≈ 3.8</p>
                <p className="text-gray-600">Recommended for FSMS</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-purpleCustom">≈ 2.7</p>
                <p className="text-gray-600">Recommended for MBS</p>
              </div>
            </div>
          }
          linkText="Go to Multiplier Page"
          linkUrl="/multiplier"
        />

        {/* Profit Values Card */}
        <DashboardCard
          title="Optimal Profit Values for Discounts"
          content={
            <div className="mt-4 text-gray-700">
              <p>Optimal Profit: ₹ 150,467.83</p>
              <p>Optimal Revenue: ₹ 432,120.50</p>
            </div>
          }
          linkText="Go to Profit Page"
          linkUrl="/profit"
        />

        {/* Discount Strategy Card */}
        <DashboardCard
          title="Recommended Discount Strategy"
          content={
            <div className="mt-4 text-gray-700 flex justify-between">
              <span className='ml-4'>
              <p>10% - SKU 1</p>
              <p>4% - SKU 2</p>
              </span>
              <span  className='mr-4'>
              <p>9% - SKU 3</p>
              <p>18% - SKU 4</p>
              </span>
             
            </div>
          }
          linkText="Go to Discount Page"
          linkUrl="/discount"
        />

        {/* FSMS Insights Card */}
        <DashboardCard
          title="FSMS - Real Time Insights"
          content={
            <div className="mt-4 flex justify-between text-gray-700">
              <p>Hottest Selling</p>
              <p>Revenue Maximizer</p>
              <p>Least Sold</p>
            </div>
          }
          linkText="Go to Insights Page"
          linkUrl="/insights"
        />
      </div>
      
      <Footer/>
    </div>
  );
};

export default Home;
