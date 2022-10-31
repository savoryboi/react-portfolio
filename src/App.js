import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navigation from './components/Header/Navigation';
import Footer from './components/Footer'
import './App.css';
import 'animate.css';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
          
        <Route path="/contact" element={<Contact />} />

        <Route path="/resume"  element={<Resume />}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
