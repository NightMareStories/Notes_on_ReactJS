import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav() {
    return (
        <nav className="content-header__nav nav-link">
            <ul className="nav-link__links header-links">
                <li className="header-links__link"><NavLink exact to='/'>Main</NavLink></li>
                <li className="header-links__link"><NavLink to='/note'>Notes</NavLink></li>
                <li className="header-links__link"><NavLink to='/create'>Create</NavLink></li>
                <li className="header-links__link"><NavLink to='/about'>About</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;