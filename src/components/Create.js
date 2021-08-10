import React from "react";
import { useState } from "react";
import env from "../env.json";


function Create() {
    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide'); //Скрыть ссылку
    const [formClass, setFormClass] = useState('');

    const sendData = (obj) => {
        setFormClass('hide');
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
                console.log(response);
                if (response.result) {
                    setUrl(`${env.url}/${response.url}`)
                }
            })
    }

    const loadDataFromForm = (event) => {
        event.preventDefault();
        //  Сделать проверку на пробелы и пустые строки (unit: 18, time: 5:30)
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Заполните поля!');
            return false;
        }
        sendData({ 'note': note })
    }
    return (
        <div className="container">
            <div className="row">
                <form onSubmit={loadDataFromForm} className={formClass}>
                    <label htmlFor="note" className="form-label">Введите вашу заметку:</label>
                    <textarea name="note" id="note" defaultValue="Ваша заметка" placeholder="Введите свой текст" className="form-control mb-3" rows="3"></textarea>
                    <button type="submit" className="btn btn-primary">Создать</button>
                </form>
                <div className={lineClass}>
                    <div className="mb-3">{url}</div>
                    <div><p>Вы можете посмотреть созданную заметку:</p>
                        <p>1. Скопировать и вставить URL-адрес в адресную строку браузера;</p>
                        <p>2. Cкопировать ID заметки (после последнего слэша /) и посмотреть ее на главной странице или на странице заметок;</p>
                    </div>
                    <div><button onClick={() => window.location.reload()} className="btn btn-primary">Создать новую заметку</button></div>
                </div>
            </div>
        </div >
    );
}

export default Create;