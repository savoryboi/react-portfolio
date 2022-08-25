

const projects = [
    {
        title: 'PokeSLAP', 
        url: 'https://poke-slap.herokuapp.com/',
        github: 'https://github.com/palmersola/Pokemon-SLAP',
        img_path: require('../assets/images/Pokeslap_Gif.gif')
    }, 
    {
        title: 'ToDo App', 
        url: 'https://express-practice-andy.herokuapp.com/', 
        github: '#', 
        img_path: require('../assets/images/todo.gif')
    }, 
    {
        title: 'Lil Letter Lightshow',
        url: 'https://savoryboi.github.io/letter-lightshow/',
        github: 'https://github.com/savoryboi/letter-lightshow',
        img_path: require('../assets/images/lightshow.gif')
    }, 
    {
        title: 'Weather Dashboard',
        url: 'https://savoryboi.github.io/weather-app/',
        github: 'https://github.com/savoryboi/weather-app',
        img_path: require('../assets/images/weather-shot.png')
    }
]

function Project() {
    console.log(projects[0].img_path)
    return(
        
        <div className='project-container'>
        {projects.map((project, index) => {
            
            return <div key={index} className="project-div">
            <a href={project.url}>
                <img src={project.img_path}></img>
            </a>
            <div className='project-info'>
            <h3>{project.title}</h3>
            <a href={project.github}>GitHub Repo</a>
            </div>
            </div>
           })}
        </div>
    )
}

export default Project;