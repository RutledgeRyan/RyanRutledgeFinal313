import React from 'react';

const PortfolioCard = ({ portfolio, onClick }) => (
  <div
    className="bg-white shadow-md rounded-lg p-4 m-4 w-64 cursor-pointer transform transition-transform hover:scale-105"
    onClick={() => onClick(portfolio)}
  >
    <img
      src={portfolio.image}
      alt={portfolio.name}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <h2 className="text-xl font-semibold mt-2">{portfolio.name}</h2>
    <p className="text-gray-600">{portfolio.description}</p>
  </div>
);

export default PortfolioCard;