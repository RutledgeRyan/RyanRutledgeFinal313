import React from "react";
import '../App.css';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";


function Blog() {
  const headingTitle = "Our Key to Communication: THE BLOG"
  const headingcareer = "See former Projects, Current Projects, or even communicate your needs and interests in the Blog Posts!"
  return (
    
    <div className="App">
      
      <Header headingText = {headingTitle}
      headingcareer = {headingcareer}/>
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

export default Blog;