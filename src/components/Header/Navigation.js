import { Link } from "react-router-dom";

function Navigation(props) {

    return (
        <div>
            <nav>
                <Link className="link" to="/">
                    <h2>home</h2>
                </Link>
                <Link id="portfolio_navLink" className="link" to="/portfolio"><h2>portfolio</h2>
                </Link>
                <Link id="contact_navLink" className="link" to="/contact">
                    <h2>contact</h2>
                </Link>
            </nav>
        </div>
    );
}

export default Navigation;