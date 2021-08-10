import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from "../env.json";

function Notes() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

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
                        setFormClass('hide');
                        setErrorClass('hide')
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, []);

    function getNote(event) {
        event.preventDefault();

        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Заполните поля!');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    function searchNote() {
        window.location.href = env.url;
    }
    return (
        <div className="container">
            <div className="row">
                <div className={lineClass}>
                    <h4 className="mb-5">Заметка:</h4>
                    <div className="mb-3 bg-light text-danger fw-bold fs-4">{noteText}</div>
                    <div><button onClick={searchNote} className="btn btn-primary">Смотреть ещё одну заметку</button></div>
                </div>
                <div className={errorClass}>
                    <p>Произошла ошибка! Пожалуйста проверьте корректность введенного url-адреса!</p>
                </div>
                <div className={formClass}>
                    <form action="" onSubmit={getNote}>
                        <label htmlFor="url" className="form-label">Введите url-адрес заметки: </label>
                        <input type="text" name="url" id="url" className="form-control mb-3" />
                        <button type="submit" className="btn btn-primary">Искать заметку</button>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Notes;