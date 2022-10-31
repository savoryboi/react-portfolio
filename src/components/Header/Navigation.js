import { Link } from "react-router-dom";

function Navigation(props) {

    return (
        <div>
            <nav>
                <Link className="link" to="/">
                    <h2>about</h2>
                </Link>
                <Link className="link" to="/portfolio"><h2>portfolio</h2>
                </Link>
                <Link className="link" to="/contact">
                    <h2>contact</h2>
                </Link>
                <Link className="link" to="/resume">
                    <h2>resume</h2>
                </Link>

            </nav>
        </div>
    );
}

export default Navigation;