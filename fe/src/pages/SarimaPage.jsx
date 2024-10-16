// src/pages/SarimaPage.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const SarimaPage = () => {
  // Sample data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Inventory Projection',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: '#FF9D00',
        borderColor: '#570847',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 max-w-9xl mx-auto bg-backgroundCustom font-sans">
      <h1 className="text-3xl font-bold text-purpleCustom">Auto-SARIMA Inventory Projection</h1>
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SarimaPage;
