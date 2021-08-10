import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Main navigation">
                <div className="container-xl">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><NavLink exact className="nav-link" to='/' aria-current="page">Главная</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to='/note' aria-current="page">Заметки</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to='/create' aria-current="page">Создать</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to='/about' aria-current="page">О проекте</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;