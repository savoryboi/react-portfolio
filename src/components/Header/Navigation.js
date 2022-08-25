import { Link } from "react-router-dom";

function Navigation(props) {

    return (
        <div>
            <nav>
                <Link className="link" to="/react-portfolio/about">
                    <h2>About</h2>
                </Link>
                <Link className="link" to="/react-portfolio/portfolio"><h2>portfolio</h2>
                </Link>
                <Link className="link" to="/react-portfolio/contact">
                    <h2>Contact</h2>
                </Link>
                <Link className="link" to="/react-portfolio/resume">
                    <h2>Resume</h2>
                </Link>

            </nav>
        </div>
    );
}

export default Navigation;