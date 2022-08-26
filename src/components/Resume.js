function Resume() {
    return (
        <div className="resume-container">
            <div className="github-div">
                <a href="http://github.com/savoryboi">check out my github!</a>
            </div>
            <div className="language-div">
                <h2>My Languages</h2>
                <ul className="languages">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>SQL</li>
                    <li>Express</li>
                </ul>
            </div>
            <div>
                <h2>Experience</h2>
                <div className="experience-wrap">

                <div className="exp-container">
                    <h3 className="exp-title">PokeSLAP</h3>
                    <p className="exp-descrip">For this application, I was focused mostly on the front-end aspects. Working mainly with Handlebars and CSS, we wanted to create a retro-feeling game inspired by Pokémon colorschemes and styles. A super fun project to work on.</p>
                </div>
                <div className="exp-container">
                    <h3 className="exp-title">Certified Tomatoes</h3>
                    <p className="exp-descrip">This was my first group project during my coding bootcamp, and was mostly in charge of CSS and helping with the logistics of making API calls, and pulling the specific data from our API and presenting it on the webpage in the way we wanted. We had a lot of fun making our first collaborative application. </p>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Resume;