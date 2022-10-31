import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';
import App from './App';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <HashRouter>
      <App />
      <Routes>
        <Route path="/react-portfolio" element={<About />} />
        {/* <Route path="/react-portfolio/about" element={<About />} /> */}
        <Route path="/react-portfolio/portfolio" element={<Portfolio />} />
        <Route path="/react-portfolio/contact" element={<Contact />} />
        <Route path="/react-portfolio/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </HashRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
