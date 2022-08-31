function About() {
    return (
      <div>
        <div className="headshot-img">
          <img src={require('../assets/images/headhot-new.png')}/>
        </div>
        <div className='about'>
        <h3>Communications major turned coder.</h3>
        <p>
          I graduated from the University of Minnesota in the spring of 2020, and two years later began my journey to becoming a developer. After getting comfortable playing around with some basic HTML, CSS, and JavaScript on my own, I enrolled in a full-time, full stack development bootcamp through the University of Minnesota and Trilogy Education.
          I am most passionate about front end/UX design and development, and consider myself a creative person. But I truly enjoy all aspects of building an application.
        </p>
      </div>
      </div>
    )
}

export default About;