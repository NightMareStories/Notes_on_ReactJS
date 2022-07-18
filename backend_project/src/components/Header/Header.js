import Nav from './Nav/Nav';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header-content _container">
                <div className="header-content__content content-header">
                    <Nav />
                </div>
            </div>
        </header>
    );
}

export default Header;