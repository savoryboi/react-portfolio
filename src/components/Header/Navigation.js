import { Link } from "react-router-dom";

function Navigation(props) {

    return (
        <div>
            <nav>
                <Link className="link" to="/react-portfolio">
                    <h2>about</h2>
                </Link>
                <Link className="link" to="/react-portfolio/portfolio"><h2>portfolio</h2>
                </Link>
                <Link className="link" to="/react-portfolio/contact">
                    <h2>contact</h2>
                </Link>
                <Link className="link" to="/react-portfolio/resume">
                    <h2>resume</h2>
                </Link>

            </nav>
        </div>
    );
}

export default Navigation;