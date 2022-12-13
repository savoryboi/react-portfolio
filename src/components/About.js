import Contact from './Contact';
import Portfolio from './Portfolio';
const img = require('../assets/images/headshot-new.jpg');

function About() {

  return (
    <main className='Site'>


    <div className='about-container'>
      <div className='img-cont'>
        <img className="headshot-img" src={img}></img>
        <div id='intro'>
          <h2>Hi I'm Andy...</h2>
          <h3>communications major and restaurant supervisor turned software engineer.</h3>
          <Contact />
        </div>
      </div>
      <div className='info'>
        <h1>Full stack developer with a Bachelor's in Communications and Media Studies.</h1>
        <p>
        JavaScript, HTML, CSS, and MERN stack (MongoDB, Express.js, React, and Node.js). Known for creating responsive applications with simple and enjoyable UI/UX, and finding creative solutions to logical problems.
        </p>
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
      <div className='info'>
        <h3>Received a Certificate of Full Stack Web Development from the University of Minnesota</h3>
      </div>
    </div>
    <div className='portfolio-section'>
    <h1>Some of my work...</h1>
    <Portfolio />
    </div>
    </main>
  )
}

export default About;