import React from 'react';
import PortfolioCard from './PortfolioCard';

const CardContainer = ({ portfolio, onCardClick }) => {
  const brandingProjects = portfolio.filter(item => item.category === 'branding');
  const webProjects = portfolio.filter(item => item.category === 'web');

  return (
    <>
      <div className="bg-blue-500 p-4 mb-4">
        <div className="text-center text-white text-3xl mb-4">Branding Projects</div>
        <div className="flex flex-wrap justify-center">
          {brandingProjects.map((item) => (
            <PortfolioCard key={item.id} portfolio={item} onClick={onCardClick} />
          ))}
        </div>
      </div>

      <div className="bg-blue-500 p-4 mb-4">
        <div className="text-center text-white text-3xl mb-4">Web Projects</div>
        <div className="flex flex-wrap justify-center">
          {webProjects.map((item) => (
            <PortfolioCard key={item.id} portfolio={item} onClick={onCardClick} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardContainer;