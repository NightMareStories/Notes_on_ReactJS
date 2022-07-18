import './Notes.scss';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import env from "../../env.json";

function Notes(props) {
    let {noteURL}  = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('_hide');
    const [formClass, setFormClass] = useState('_hide');
    const [errorClass, setErrorClass] = useState('_hide');

    let count = 0;

    useEffect(() => {
            if (noteURL !== undefined) {
                fetch(env.urlBackend, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify({ 'url': noteURL })
                })
                    .then(response => response.json())
                    .then(response => {
                        console.log(response);
                        if (response.result) {
                            setNoteText(response.note);
                            setLineClass('');
                            setFormClass('_hide');
                            setErrorClass('_hide');
                        }
                        else if (!response.result) {
                            setLineClass('_hide');
                            setFormClass('_hide');
                            setErrorClass('');
                        }
                    })
            }
            else {
                setLineClass('_hide');
                setFormClass('');
                setErrorClass('_hide');
            }
    }, []);

    function getNote(event) {
        event.preventDefault();

        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('FILL IN THE FIELDS!');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    function searchNote() {
        window.location.href = env.url;
    }

    const pasteCopied = (event) => {
        event.preventDefault();

        let input = event.target;
        
        if (input.value === '' && count === 0) {
            input.value = props.copyNote;
            count++;
        }
    }
    
    return (
        <main className="main">
            <div className="notes-content _container">
                <div className="notes-content__actions notes-actions">
                    <div className={`notes-actions__found notes-found ${lineClass}`}>
                        <div className="notes-found__block block-found">
                            <div className="block-found__content found-content">
                                <h4 className="found-content__title">note found!</h4>
                                <div className="found-content__note"><span>{noteURL}</span></div>
                                <div className="found-content__text"><p>{noteText}</p></div>
                                <div className="found-content__button">
                                    <button onClick={searchNote} className="found-content__button_view _btn">View other notes</button>
                                    <Link to="/create" className="found-content__button_create _btn">Create new note</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`notes-actions__error notes-error ${errorClass}`}>
                        <div className="notes-error__block block-error">
                            <div className="block-error__content content-error">
                                <h3 className="content-error__title">An error has occurred!</h3>
                                <p className="content-error__description">Please check if the note-ID is correct!</p>
                                <div className="content-error__buttons">
                                    <Link to="/create" className="content-error__buttons_create _btn">Create new note</Link>
                                    <a href="/note" className="content-error__buttons_view _btn">View other notes</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`notes-actions__search notes-search ${formClass}`}>
                        <div className="notes-search__block search-block">
                            <div className="search-block__content content-search">
                                <form action="" onSubmit={getNote} className="content-search__form">
                                    <label htmlFor="url" className="content-search__form_label">Search for a note</label>
                                    <input type="text" name="url" id="url" className="content-search__form_input" onClick={pasteCopied} autoComplete="off" placeholder="Enter the id of the note"/>
                                    <button type="submit" className="content-search__form_button _btn">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default Notes;