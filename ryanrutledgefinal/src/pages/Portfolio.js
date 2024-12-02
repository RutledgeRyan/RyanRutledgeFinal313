import React, { useEffect, useState } from 'react';
import Header from '../../src/components/Header.js';
import Footer from '../../src/components/Footer.js';
import PortfolioCarousel from '../../src/components/Carousel.js';
import CardContainer from '../components/CardContainer.js';
import PortfolioModal from '../components/Modal'; // Import the modal component

function Portfolio() {
  const headingTitle = 'Portfolio of Ryan Rutledge';
  const portfolioHeading = 'Amplify your Business through a Multitude of Facets';
  
  const carouselData = [
    {
      image: "../images/Carousel1.png",
      title: "Reactive components for Websites",
      description: "Strength within the React Library of Components to alter and expressively display your businesses information",
    },
    {
      image: "../images/Carousel2.png",
      title: "API Integration",
      description: "Stunningly simple API integration allowing for importation of a multitude of data sets created by our relationship, or from outside databases!",
    },
    {
      image: "../images/Carousel3.png",
      title: "Variable E-commerce Layout",
      description: "Simple to Intricate, developing your products in an online store needs to follow your values and brand design",
    },
    {
      image: "../images/Carousel4.png",
      title: "Branding A Business",
      description: "I offer customizable Branding Packages that begin with Logos, Colors, Typography, Mood Boards, and even Marketing Options",
    },
    {
      image: "../images/Carousel5.png",
      title: "Developing The Why Behind the Colors",
      description: "Utilizing Colors that display your brand, your values and your audiences expectations in your brand",
    },
    {
      image: "../images/Carousel6.png",
      title: "Typography Justification",
      description: "Creating the Typography that will match your Brands distinct interpretation and style. Creating a connection between your brands typography and what your audience becomes used to and expects",
    },
  ];

  const [portfolio, setPortfolio] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null); // State for selected portfolio
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/api/project')
      .then(response => response.json())
      .then(data => setPortfolio(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCardClick = (portfolio) => {
    setSelectedPortfolio(portfolio); // Set the selected portfolio
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedPortfolio(null); // Clear the selected portfolio
  };

  return (
    <div className="App">
      <Header headingText={headingTitle} headingcareer={portfolioHeading} />
      <main className="flex-grow p-4 max-w-6xl mx-auto">
        <PortfolioCarousel items={carouselData} />
        <CardContainer portfolio={portfolio} onCardClick={handleCardClick} />
      </main>
      <Footer
        year="2024"
        company="Ryan Rutledge | Web Developer"
        twitterLink="#"
        instaLink="#"
      />
      {isModalOpen && (
        <PortfolioModal data={selectedPortfolio} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Portfolio;