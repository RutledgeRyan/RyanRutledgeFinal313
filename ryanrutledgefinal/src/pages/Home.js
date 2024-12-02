import React from "react";
import Header from "../components/Header.js";
import HomeFirstContainer from '../components/HomeFirstContainer.js';
import CountdownTimer from '../components/CountdownTimer.js';
import Footer from "../components/Footer.js";
import '../App.css';

function Home() {
  const headingTitle = "Ryan Rutledge"
  const headingcareer = "Software and Website Developer"
  return (
    
    <div className="App">
      
      <Header headingText = {headingTitle}
      headingcareer = {headingcareer}/>
      <HomeFirstContainer />
      <CountdownTimer endDate="2025-12-15" />
      <Footer
        year = "2024"
        company = "Ryan Rutledge | Web Developer"
        twitterLink =  "#"
        instaLink = "#"
      >
      </Footer>
      
    </div>
  );
};

export default Home;