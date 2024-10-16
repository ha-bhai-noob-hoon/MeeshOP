// src/components/DashboardCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, content, linkText, linkUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-purpleCustom">{title}</h2>
      {content}
      <Link
        to={linkUrl}
        className="bg-purpleCustom text-white px-4 py-2 rounded-lg mt-4 inline-block"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default DashboardCard;
