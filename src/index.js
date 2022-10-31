import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route, Switch, Link,
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
      <Switch>
        <Route path="/react-portfolio">
          <About />
        </Route>
        <Route path="/react-portfolio/about">
          <About />
        </Route>
        <Route path="/react-portfolio/portfolio">
          <Portfolio />
        </Route>
        <Route path="/react-portfolio/contact">
          <Contact />
        </Route>
        <Route path="/react-portfolio/resume">
          <Resume />
        </Route>
      </Switch>
      <Footer />
    </HashRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
