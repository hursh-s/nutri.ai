import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div className="page home-page">
    <div className="text-container">
      <h2>Welcome to Nutri.ai!</h2>
      <p className="right-text">Your go-to source for AI-driven nutrition</p>
    </div>
    <p>Discover the power of AI-driven nutrition.</p>
  </div>
);


const About = () => (
  <div className="page">
    <h2>About Us</h2>
    <p>ㅤ</p>
    <p>We are a team of four students, and developers</p>
    <p>ㅤ</p>
    <p>ㅤ</p>
    <div className="text-container">
      <p>Hursh: Website creator</p>
      <p className="right-text">Aryan:</p>
      <p className="right-text">Yashwanth:</p>
      <p className="right-text">Rishab:</p>
    </div>
      
      
  </div>
);

const Access = () => (
  <div className="page">
    <h2>Access Nutri.ai Here</h2>
    <p>Placeholder text for the Access Nutri.ai page.</p>
  </div>
);

const WhatIsNutriAi = () => (
  <div className="page">
    <h2>What is Nutri.ai?</h2>
    <p>Placeholder text for the What is Nutri.ai? page.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/access">Access Nutri.ai Here</Link>
            <Link to="/what-is-nutri-ai">What is Nutri.ai?</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/about" element={<About />} />
          <Route path="/access" element={<Access />} />
          <Route path="/what-is-nutri-ai" element={<WhatIsNutriAi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
