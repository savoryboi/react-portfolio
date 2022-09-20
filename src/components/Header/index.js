import Navigation from './Navigation';
import './Header.css';

function Header() {
    return (
        <header>
            <a href='/react-portfolio'><h1>Andy Bjerk <span id='portfolio'>| Portfolio</span></h1></a>
            <Navigation />
        </header>
    );
}

export default Header;