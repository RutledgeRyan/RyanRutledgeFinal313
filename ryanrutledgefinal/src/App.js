import React, { useEffect, useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CardContainer from './components/CardContainer';
import './App.css';

function App() {
  const headingTitle = "Ryan Rutledge, Website and Software Designer";
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/api/project')
      .then(response => response.json())
      .then(data => setPortfolio(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCardClick = (portfolio) => {
    console.log('Card clicked:', portfolio);
  };

  return (
    <div className="App">
      <Header headingText={headingTitle} />
      
      
      
      <Footer
        year="2024"
        company="Ryan Rutledge | Web Developer"
        twitterLink="#"
        instaLink="#"
      />
    </div>
  );
}

export default App;