import React, { useEffect, useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  const headingTitle = "Ryan Rutledge, Website and Software Designer";
  

 

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