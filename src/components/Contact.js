

function Contact() {
    return (
        <div className="contact-container">
            <div>
                <h2 className="animate__animated animate__rollIn">get in touch with me</h2>
            </div>

            <div className="icon-wrapper">
                <a target="_blank" href='http://linkedin.com/in/andy-bjerk' >
                    <i className="animate__animated animate__bounceInUp fa-brands fa-linkedin fa-2x"></i>
                </a>
                <a target="_blank" href='http://github.com/savoryboi'>
                    <i className="animate__animated animate__bounceInDown fa-brands fa-github fa-2x"></i>
                </a>
                <a target="_blank" href='http://twitter.com/savorycode'>
                    <i className="animate__animated animate__bounceInUp fa-brands fa-twitter fa-2x"></i>
                </a>
                <a target="_blank" href='mailto: andbjerk@yahoo.com'>
                    <i className="animate__animated animate__bounceInDown fa-regular fa-envelope fa-2x"></i>
                </a>

            </div>
        </div>
    )
}

export default Contact;