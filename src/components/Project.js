

const projects = [
    {
        title: 'Spotlessify', 
        url: 'https://tinyurl.com/2p8ca3fe', 
        github: 'https://github.com/savoryboi/spotify_playlist_filter',
        img_path: require('../assets/images/spotlessify_screenshot.png')
    },
    {
        title: 'Albumify', 
        url: 'https://tinyurl.com/2hn45d5j', 
        github: 'https://github.com/savoryboi/albumify', 
        img_path: require('../assets/images/albumify_demo.GIF'), 
    },
    {
        title: 'Chrome Extension: Social Media Blocker', 
        url: 'https://github.com/savoryboi/social_blocker', 
        url: 'https://github.com/savoryboi/social_blocker', 
        img_path: require('../assets/images/blocker.gif')
    },
    {
        title: 'Letter Lightshow',
        url: 'https://savoryboi.github.io/letter-lightshow/',
        github: 'https://github.com/savoryboi/letter-lightshow',
        img_path: require('../assets/images/lightshow.png')
    }, 
    {
        title: 'Weather Dashboard',
        url: 'https://savoryboi.github.io/weather-app/',
        github: 'https://github.com/savoryboi/weather-app',
        img_path: require('../assets/images/weather-shot.png')
    }, 
    {
        title: 'JavaScript Quiz', 
        url: 'https://savoryboi.github.io/js-quiz/', 
        github: 'https://github.com/savoryboi/js-quiz',
        img_path: require('../assets/images/js-quiz.png')
    }
]
function Project() {
    return(
        
        <div className='project-container'>
        {projects.map((project, index) => {
            
            return <div key={index} className="project-div">
            <a target="_blank" href={project.url}>
                <img src={project.img_path}></img>
            </a>
            <div className='project-info'>
            <h3>{project.title}</h3>
            <a target="_blank" href={project.github}>GitHub Repo</a>
            {project.burner_email ? <div><p>login: {project.burner_email}</p> <p>password: {project.burner_password}</p> </div>: <div></div>}
            </div>
            </div>
           })}
        </div>
    )
}

export default Project;