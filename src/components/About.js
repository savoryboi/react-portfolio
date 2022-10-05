const img = require('../assets/images/headshot-new.jpg');

function About() {

  return (
    <div className='about-container'>
      <div className='img-cont animate__animated animate__flipInY'>
        <img className="headshot-img" src={img}></img>
      </div>
      <div className='about-wrapper'>
        <div className='about-section animate__animated animate__fadeInLeftBig'>
          <h3>Communications major turned coder.</h3>
          <p>
          Full-Stack MERN developer, utilizing my background in communications and media to create meaningful and creative solutions to user problems by having a holistic understanding of how users interact with and utilize digital products. Recently received a Certificate of Full Stack Web Development from the University of Minnesota where I developed my skills in JavaScript, React.js, CSS, and a handful of other technologies (like Node.js). Known for creating sleek, responsive applications focused on simple and enjoyable UI/UX, and creative solutions to logistical problems.
          </p>
        </div>
        <div className='about-section animate__animated animate__fadeInRightBig'>
          <h3>a little more...</h3>
          <p>
          Proven by my time in bootcamp, I am a curious, quick, and adaptive learner who thrives in real-world projects, both collaborative and individual. Working in restaurant management has taught me how to take on projects, manage a team of employees, and solve real problems in a fast-paced work environment. Ready to focus those skills on growing as a developer with a team of dedicated, quality-driven individuals.
            <br></br>
            <br></br>
            I thrive in a hands-on environment, and learn fast. Experienced in building solo and collaborative projects, deploying on both GitHub Pages and Heroku. 
          </p>
        </div>
      </div>

    </div>
  )
}

export default About;