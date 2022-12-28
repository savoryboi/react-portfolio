

const projects = [
    {
        title: 'Albumify', 
        url: 'https://albumify.netlify.app', 
        github: 'https://github.com/savoryboi/albumify', 
        img_path: require('../assets/images/albumify_demo.GIF'), 
        burner_email: 'albumify.test@gmail.com', 
        burner_password: 'albumifytest123'
    },
    {
        title: 'MyDood', 
        url: 'https://my-dood.herokuapp.com/',
        github: 'https://github.com/savoryboi/my-dood',
        img_path: require('../assets/images/mydood_gif.gif'), 
        burner_email: 'test@testing.com',
        burner_password: 'testing'
    },
    {
        title: 'PokeSLAP', 
        url: 'https://poke-slap.herokuapp.com/',
        github: 'https://github.com/palmersola/Pokemon-SLAP',
        img_path: require('../assets/images/Pokeslap_Gif.gif'),
        burner_email: 'testing', 
        burner_password: 'testing'
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