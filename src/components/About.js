import Contact from './Contact';
import Portfolio from './Portfolio';
const img = require('../assets/images/headshot-new.jpg');
const html = require('../assets/images/html.png');
const css = require('../assets/images/css.png');
const javascript = require('../assets/images/javascript.png');
const nodejs = require('../assets/images/nodejs.png');
const express = require('../assets/images/express.png');
const mongodb = require('../assets/images/mongodb.png');
const react = require('../assets/images/react.png');
const mysql = require('../assets/images/mysql.png');
const bootstrap = require('../assets/images/bootstrap.png');
const graphql = require('../assets/images/graphql.png');
const github = require('../assets/images/github.png')


function About() {

  return (
    <main className='Site'>


      <div className='about-container'>
        <div className='img-cont'>
          <img className="headshot-img" src={img}></img>
          <div id='intro'>
            <h2>Hi I'm Andy...</h2>
            <h3>i'm a full stack developer</h3>
            <Contact />
          </div>
        </div>
        <div className='info'>
        <h1>My tech stack...</h1>
        <div className='stack-icons'>
          <div className='tech-icon-container'>
            <img className='stack-icon' src={html} placeholder='html-icon'></img>
            <p>HTML</p>
          </div>
          <div className='tech-icon-container'>
            <img className='stack-icon' src={css} placeholder='css-icon'></img>
            <p>CSS</p>
          </div>
          <div className='tech-icon-container'>
              <img className='stack-icon' src={javascript} placeholder='js-icon'></img>
              <p>JavaScript</p>
          </div>
          <div className='tech-icon-container'>
              <img className='stack-icon' src={nodejs} placeholder='nodejs-icon'></img>
              <p>Node.js</p>
          </div>
          <div className='tech-icon-container'>
              <img className='stack-icon' src={react} placeholder='react-icon'></img>
              <p>React</p>
          </div>
          <div className='tech-icon-container'>
              <img className='stack-icon' src={mongodb} placeholder='mongodb-icon'></img>
              <p>MongoDB</p>
          </div>
          <div className='tech-icon-container'>
              <img className='stack-icon' src={graphql} placeholder='graphql-icon'></img>
              <p>GraphQL</p>
          </div>
          <div className='tech-icon-container'>
              <img className='stack-icon' src={bootstrap} placeholder='bootstrap-icon'></img>
              <p>Bootstrap</p>
          </div>
          <div className='tech-icon-container'>
              <img className='stack-icon' src={express} placeholder='express-icon'></img>
              <p>Express.js</p>
          </div>
          <div className='tech-icon-container'>
              <img className='stack-icon' src={github} placeholder='github-icon'></img>
              <p>GitHub</p>
          </div>
        </div>
        </div>
        <div className='info'>
          <h2>Who I am</h2>
          <p>
            I am a curious, quick, and adaptive learner who excels in real-world projects, both collaborative and individual. Working in restaurant management has taught me how to take on new projects, manage a team of employees, and solve real problems in a fast-paced work environment. Ready to focus those skills on growing as a developer with a team of dedicated, quality-driven individuals.
          </p>
        </div>
        <div className='info'>
          <h2>a little more...</h2>
          <p>
            I utilize my background in communications and media to create meaningful and creative solutions;
          </p>
        </div>
        <div className='info'>
          <h2>I thrive in a hands-on environment, and learn fast working with quality-driven teams.</h2>
        </div>
      </div>
      <div className='portfolio-section'>
        <h1>Some of my work...</h1>
        <h3>click the image for demo</h3>
        <Portfolio />
      </div>
    </main>
  )
}

export default About;