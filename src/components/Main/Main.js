import './Main.scss';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <main className="main">
            <div className="main-content _container">
                <div className="main-content__columns main-columns">
                    <div className="main-columns__column column-content">
                        <Link to="/create" className="column-content__create create-block">
                            <picture className="create-block__img">
                                <source srcSet="/img/create-note-img.webp" type="image/webp" />
                                <img src="/img/create-note-img.png" alt="create-note-img" className="create-block__img_img" />
                            </picture>
                            <div className="create-block__create">Create a new note</div>
                        </Link>
                    </div>
                    <div className="main-columns__column column-content">
                        <Link to="/note" className="column-content__view view-block">
                            <picture className="view-block__img">
                                <source srcSet="/img/view-notes-img.webp" type="image/webp" />
                                <img src="/img/view-notes-img.png" alt="view-notes-img" className="view-block__img_img" />
                            </picture>
                            <div className="view-block__view">View other notes</div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;