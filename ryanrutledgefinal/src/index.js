// npm install react-router-dom


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import "./index.css";


export default function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="services" element={<Services />} />
    <Route path="portfolio" element={<Portfolio />} />
    <Route path="blog" element={<Blog />} />
  </Route>
</Routes>
</BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />
);