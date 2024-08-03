import './Create.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import env from '../../env.json';

function Create(props) {
    const [url, setUrl] = useState('');
    const [copy, setCopy] = useState('');
    const [lineClass, setLineClass] = useState('_hide');
    const [formClass, setFormClass] = useState('');
    const copied = React.createRef();

    const sendData = (obj) => {
        setFormClass('_hide');
        setLineClass('');

        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    setUrl(`${env.url}/${response.url}`)
                    props.setUrlNote(response.url);
                }
            })
    }

    const loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('FILL IN THE FIELDS!');
            return false;
        }
        sendData({ 'note': note })
    }

    const copyNote = (event) => {
        event.preventDefault();

        let copy = copied.current;
        let input = event.target;

        if (copy.classList.contains('_copied')) {
            copy.classList.remove('_copied');
            setTimeout(() => {
                copy.classList.add('_copied');
            }, 300);
        }
        else {
            copy.classList.add('_copied');
            props.setCopyNote(input.defaultValue);
            setCopy('Copied!');
        }
    }

    return (
        <main className="main">
            <div className="create-content _container">
                <div className="create-content__create notes-create">
                    <div className={`notes-create__create form-notes ${formClass}`}>
                        <div className="form-notes__block block-form">
                            <div className="block-form__content content-form">
                                <form onSubmit={loadDataFromForm} className="content-form__form">
                                    <label htmlFor="note" className="content-form__form_label">Create your note</label>
                                    <textarea name="note" id="note" placeholder="Enter your text" className="content-form__form_text" rows="10"></textarea>
                                    <button type="submit" className="content-form__form_button _btn">Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={`notes-create__result result-notes ${lineClass}`}>
                        <div className="result-notes__result notes-result">
                            <div className="notes-result__result">
                                <h3 className="notes-result__result_title">You can view the created note two ways:</h3>
                                <p className="notes-result__result_text">1. Click on the URL-link to go and see the created note;</p>
                                <div className="notes-result__result_url"><a href={url}>{url}</a></div>
                                <p className="notes-result__result_text">2. Click on the ID-Note link to copy it to the clipboard, then click the button "view other notes" and paste the note into the input field;</p>
                                <div className="notes-result__result_urlNote">
                                    <input type="text" defaultValue={props.urlNote} onClick={copyNote} readOnly />
                                </div>
                                <div className="notes-result__result_copy" ref={copied}><span>{copy}</span></div>
                                <div className="notes-result__result_buttons result-buttons">
                                    <div className="result-buttons__create">
                                        <button onClick={() => window.location.reload()} className="result-buttons__create_btn _btn">Create a new note</button>
                                    </div>
                                    <div className="result-buttons__view">
                                        <Link to="/note" className="result-buttons__view_btn _btn">View other notes</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default Create;