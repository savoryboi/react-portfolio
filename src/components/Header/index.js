import Navigation from './Navigation';
import './Header.css';

function Header() {
    return (
        <header>
            <div className='header_title'>
                <a href='/react-portfolio'><h1>Andy Bjerk <span id='portfolio'>| Portfolio</span></h1></a>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;