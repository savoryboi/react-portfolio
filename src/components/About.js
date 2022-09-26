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
            I graduated from the University of Minnesota in the spring of 2020, and two years later began my journey as a developer. After playing around with some basic HTML, CSS, and JavaScript on my own, I enrolled in a full-time, full stack development bootcamp through the University of Minnesota and Trilogy Education.
          </p>
        </div>
        <div className='about-section animate__animated animate__fadeInRightBig'>
          <h3>a little more...</h3>
          <p>
            I am most passionate about front end/UX design and development, and am a creative person at heart. The balance of technological skill and creativity is what made me fall in love with development. 
            <br></br>
            <br></br>
            I thrive in a hands-on environment, and learn fast. Especially when working collaboratively. Experienced in building solo and collaborative projects, deploying on both GitHub Pages and Heroku. 
          </p>
        </div>
      </div>

    </div>
  )
}

export default About;