import Contact from './Contact';
import Portfolio from './Portfolio';
const img = require('../assets/images/headshot-new.jpg');

function About() {

  return (
    <div className='Site'>


    <div className='about-container'>
      <div className='img-cont animate__animated animate__flipInY'>
        <img className="headshot-img" src={img}></img>
        <div id='intro'>
          <h2>Hi I'm Andy...</h2>
          <h3>restaurant manager turned coder.</h3>
          <Contact />
        </div>
      </div>
      <div className='info'>
        <h1>I thrive in a hands-on environment, and learn fast.</h1>
      </div>
      <div className='info'>
        <h2>Received a Certificate of Full Stack Web Development from the University of Minnesota</h2>
        <p>Developed my skills in the MERN stack, as well as JavaScript, HTML, and CSS. Known for creating responsive applications with simple and enjoyable UI/UX, and findiing creative solutions to logical problems.</p>
        <a href='https://www.credly.com/badges/533a754e-430b-47a3-8e67-895e5ea0f12c/linked_in?t=rj30hp' target='_blank'>Check out my certificate here!</a>
      </div>
      <div className='info'>
        <h2>Who I am</h2>
        <p>
          Proven by my time in bootcamp, I am a curious, quick, and adaptive learner who excels in real-world projects, both collaborative and individual. Working in restaurant management has taught me how to take on new projects, manage a team of employees, and solve real problems in a fast-paced work environment. Ready to focus those skills on growing as a developer with a team of dedicated, quality-driven individuals.
        </p>
      </div>
      <div className='info'>
        <h3>a little more...</h3>
        <p>
          I utilize my background in communications and media to create meaningful and creative solutions to user problems by having a holistic understanding of how users interact with digital products.
        </p>
      </div>
    </div>
    <div className='portfolio-section'>
    <h1>Some of my work...</h1>
    <Portfolio />
    </div>
    </div>
  )
}

export default About;