# Привет!
&nbsp;

---
## Это приложение написано на "ReactJS" и "NodeJS" с использованием баз данных "SQL" через серверную платформу "OpenServer". Если вы хотите протестировать работу приложения, то вам потребуется:
&nbsp; 
### **1. `Установить "`[NodeJS](https://nodejs.org/)`" с офицального сайта`;**
### **2. `Скачать и установить "basic" версию "`[OpenServer](https://ospanel.io)`" с официального сайта`;**
### **3. `Установить все модули из файла "package.json" командой в терминале`;**
### **4. `Перейти в папку "backend-project" и установить все модули той же командой в терминале`;**
### **5. `После выполнения всех предыдущих шагов, открываем "OpenServer" и нажимаем "запустить сервер", затем переходим во вкладку "дополнительно" и выбираем приложение "PhpMyAdmin" - для работы с базами данных `;**
### **6. `Вводим пароль и логин, по умолчанию: "root", "root"`;**
### **7. `Теперь нужно создать базу данных, в левой части нажимаем на "Создать БД", вводим название "notes_on_reactjs" и оставляем кодировку по умолчанию, нажимаем "Создать"`;**
### **8. `Выбираем "созданную" БД и справа на верхней панели инструментов выбираем "Импорт", теперь нужно указать файл "SQL" из папки "backend_project", после выбора прокручиваем до низу и нажимаем "Вперёд". Теперь вы можете прослеживать добавленные заметки в "notes_on_reactjs"`;**
### **9. `Возвращаемся в редактор кода, открываем терминал и запускаем приложение "Notes_on_ReactJS" командой в терминале`;**
```

npm start

```
### **10. `Открываем еще один терминал и переходим в папку "backend_project", запускаем "NodeJS" сервер командой в терминале`;**
```

node index.js

```
&nbsp;
## **Наконец вы можете начинать работать с приложением!**

---
&nbsp;

# 1. Введение
&nbsp;

---
### "Notes on ReactJS" - это приложение, написанное на "ReactJS", "NodeJS" и использующее серверную среду разработки "OpenServer", также в приложении широко используется роутинг для SPA, но имеются и функции перенаправления с перезагрузкой страницы.

### Работа приложения заключается в создании заметок или сообщений пользователем и просмотра уже созданных заметок или сообщений для ознакомления. Каждая заметка при создании имеет свой уникальный ID-хеш, который можно скопировать и вставить на странице поиска, тем самым ознакомиться с ее содержимым.

### Благодаря взаимодействию между "backend"-ом и "frontend"-ом по API, а также приложению по созданию и работе с sql-таблицами "PhpMyAdmin" в серверной среде "OpenServer" - приложение Notes on ReactJS, создает и сохраняет заметки на сервере, и получает созданные заметки при запросе от клиента.

### Попробуйте его работу, с главной страницы вы можете сразу перейти к созданию, либо просмотру заметок (для просмотра нужен ID заметки). После создания вы можете перейти по ссылке сразу к созданной заметке, либо нажав на поле с ID заметки скопировать её. Теперь вы можете перейдя в "NOTES" вставить скопированную заметку щелкнув в поле поиска, если заметка будет найдена, то будет показано все ее содержимое, если нет, значит вы ошиблись с написанием и получили уведомление об ошибке.
---
&nbsp;

# 2. Ознакомление
&nbsp;

---
### Разберемся со структурой приложения. Приложение разделено на две части: "backend" и "frontend". "Вackend" часть, расположена в папке "backend_project". В ней содержится: папка "db " - для создания структуры заметок; файл "index.js" - содержащий основную работу сервера и связь с фронтэндом; файл "reactjs.sql" - содержащий шаблон таблицы для импорта в "ОpenServer". 

### "Frontend" часть приложения, находится в основном каталоге. В папке "public" по умолчанию расположены: папка "img" - содержащая все картинки приложения; файл "index.html" - основной файл для страницы; иконка проекта "favicon.ico" и служебные файлы с информацией. В папке "src" основного каталога, лежат: папка "сomponents" - содержащая все компоненты приложения для рендеринга на странице и их стили; папка "fonts" - содержащая шрифты приложения; файл env.json - содержащий url-адреса для сервера фронтэнда и бэкенда; файл "index.js" - являющийся точкой входа приложения; файл "index.scss" - содержит миксины для шрифтов приложения; файл "vars.scss" - содержит переменные с шрифтами; файл "reportWebVitals.js" - оставлен по умолчанию при создании React-приложения.

### В папке "сomponents" компоненты лежат в своих папках со своими стилями. Компонент "App" - является основным, он содержит импорты всех компонентов, а также роутинг между ними. Компонент "Main" - содержит главную страницу с переходом к созданию, либо просмотру заметки. Компонент "Create" - содержит функции и рендеринг создания новой заметки. Компонент "Notes" - содержит функционал для просмотра созданной заметки. Компонент "Header" - содержит заголовок страницы с навигацией по ней. Компонент "Footer" - не несет в себе никакой задачи, только визуальное представление. Компонент "About" - содержит информацию о проекте, перейти к нему можно через навигацию заголовка. Компонент "Error" - нужен для возникновения ошибки в поиске заметки или ошибке в пути адреса url. Компоненты "HeaderGeneral" и "FooterGeneral" - не являются частью приложения, они служат общей оберткой для всех приложений, и имеют свои уникальные стили и контент.    
---
&nbsp;

# 3. Обзор
&nbsp;

---
### Для разработки данного приложения я использовал модули: 
### **1. Для бэкенд проекта:  "mysql2", "randomstring", "sequelize";**
### **2. Для основного проекта: "react", "react-router-dom";**
---
&nbsp;

---
### Для начала разберём бэкенд часть приложения. Так как приложение орентировано на фронт-энд разработку, то мы в кратце затронем работу сервера не вдаваясь в детали процесса. Файл "reactjs.sql" содержит структуру таблицы. Именно этот файл импортируется в базу данных "phpMyAdmin". В папке "db" расположено два файла: "Notes" и "index.js". В "Notes" прописывается структура заметок для отправки в базу данных. В "index.js" находятся настройки модуля "sequelize" для работы с базой данных, там же указывается название базы данных и доступ к ней. Точкой входа приложения "backend-project" является файл "index.js". Именно он должен запускаться в отдельном терминале командой "node index.js" при тестировании приложения. В этом файле прописано создание сервера и его настройки.
---
&nbsp;

---
### Теперь подробнее разберем фронтенд часть. В компонент "App" импортируются все компоненты приложения, стили для компонента, хуки из модуля роутинга "react-router-dom", хук "useState" из модуля "react", а также общий для всех приложений "HeaderGeneral" и "FooterGeneral".
### Внутри самого компонента объявляются два стэйта: "urlNote" и "copyNote". Они понадобятся нам в дальнейшем при копировании и вставке созданной заметки.

```

import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, {useState} from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notes from '../Notes/Notes';
import Error from '../Error/Error';
import Create from '../Create/Create';
import About from '../About/About';
import HeaderGeneral from '../HeaderGeneral/Header';
import FooterGeneral from '../FooterGeneral/Footer';


function App() {
  const [urlNote, setUrlNote] = useState('');
  const [copyNote, setCopyNote] = useState('');

  return (
    <>
      <Router>
        <HeaderGeneral />
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/create" render={() => <Create urlNote={urlNote} setUrlNote={setUrlNote} copyNote={copyNote} setCopyNote={setCopyNote}/>} />
          <Route exact path="/note/" render={() => <Notes urlNote={urlNote} setUrlNote={setUrlNote} copyNote={copyNote} setCopyNote={setCopyNote}/>}/>
          <Route exact path="/note/:noteURL" render={() => <Notes urlNote={urlNote} setUrlNote={setUrlNote}/>}/>
          <Route component={Error} />
        </Switch>
        <Footer />
        <FooterGeneral />
      </Router>
    </>
  );
}

export default App;

```

### В блоке "return", в "Router" оборачиваются все комоненты, а в "Switch" те компоненты, по которым ожидается роутинг. Внутри "Switch" находятся "Route" со своими компонентами. Если url-адрес совпадает с "path", то будет отрисован конкретный компонент. Для передачи стэйтов "urlNote" и "copyNote" в качестве пропсов в компоненты, используется "render" со  стрелочной функцией. Некоторым комонентам прописан строгий "path" ("exact "), необходимый для корректного рендеринга нужных компонентов.
---
&nbsp;

---
### В компонент "Header" импортируется стили и компонент "Nav".

```

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

```

### В блоке "return" отрисовываются стилизованные блоки заголовка и его навигация (Nav).
---
&nbsp;

---
### В компоненте Nav, импортируются хук из модуля роутинга: "NavLink" - для работы с ссылками.

```

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

```

### Блок навигации по странице, представлен в виде списка с элементами, при нажитии на которые происходит ассинхронный переход между страницами приложения.
---
&nbsp;

---
### Компонент "Footer" рассматривать не будем, так как там ничего кроме импорта его стилей и отрисовки нет.

```

import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content _container">
                <div className="footer-content__content content-footer"></div>
            </div>
        </footer>
    );
}

export default Footer;

```
---
&nbsp;

---
### Теперь рассмотрим саму работу приложения. Начнем с компонента "Main". В начале импортируются стили компонента и хук роутинга "Link".

```

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
                                <source srcSet="img/create-note-img.webp" type="image/webp" />
                                <img src="img/create-note-img.png" alt="create-note-img" className="create-block__img_img"/>
                            </picture> 
                            <div className="create-block__create">Create a new note</div>
                        </Link>
                    </div>
                    <div className="main-columns__column column-content">
                        <Link to="/note" className="column-content__view view-block">
                            <picture className="view-block__img">
                                <source srcSet="img/view-notes-img.webp" type="image/webp" />
                                <img src="img/view-notes-img.png" alt="view-notes-img" className="view-block__img_img"/>
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

```

### В "return" происходит отрисовка двух основных ссылок приложения: "Create a new note" - переход на страницу создания заметки; "View other notes" - переход на страницу просмотра заметок.
---
&nbsp;

---
### Рассмотрим компонент "Create". В начале импортируется: стили компонента; модуль "React" и хук "useState"; "Link" из модуля "react-router-dom"; файл "env.json". В файле "env.json" для удобства прописаны url - адреса бэкенда и фронтенда.

```

import './Create.scss';
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import env from "../../env.json";

```
---
&nbsp;

---
### Внутри компонента объявляются стэйты: "url" - в который будет записываться хэш-строка запроса; "copy" - в который будет записываться id созданной заметки при нажатии на неё; "lineClass" - нужен для отображения/скрытия блока информации о созданной заметке, по умолчанию скрыт; "formClass" - нужен для отображения/скрытия блока для создания заметки.

```

function Create(props) {
    const [url, setUrl] = useState('');
    const [copy, setCopy] = useState('');
    const [lineClass, setLineClass] = useState('_hide');
    const [formClass, setFormClass] = useState('');
    const copied = React.createRef();

    return (
        
    );
}
export default Create;

```

### Реф "copied" - нужен для всплывающей подсказки, о том что созданная заметка была скопирована, чтобы её можно было просмотреть позже.
---
&nbsp;

---
### Теперь разберем рендеринг страницы. Страница делится на два блока с классами: "form-notes" - блок с формой для создания заметки; "result-notes" - блок с информацией о созданной заметки.

### Логика проста, по умолчнию блок с формой создания заметки показан сразу, после создания заметки блок с формой скрывается и показывается блок с информацией о созданной заметке.

```
return (
    <div className={`notes-create__create form-notes ${formClass}`}>
        <div className="form-notes__block block-form"> 
            <div className="block-form__content content-form">
                <form onSubmit={loadDataFromForm} className="content-form__form">
                    <label htmlFor="note" className="content-form__form_label">Create your note</label>
                    <textarea name="note" id="note" placeholder="Enter your text" className="content-form__form_text" rows="10">
                    </textarea>
                    <button type="submit" className="content-form__form_button _btn">Create</button>
                </form>
            </div>
        </div>
    </div> 
);

```

### Блок с формой имеет собитие с функцией "loadDataFromForm".
---
&nbsp;

---
### В функции "loadDataFromForm" сперва останавливаем дефолтное событие. Затем создаем и получаем в переменную "note" введенное значение в элементе "textarea".

```

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

```

### Полученное значение обрезаем от лишних пробелов. Далее значение проверяем на пустую строку, выводим сообщение если поле пустое и останавливаем функцию. В конце вызываем функцию "sendData" передавая в качестве параметра объект со значением (note). 
---
&nbsp;

---
### Функция "sendData" отправляет запрос на бэкенд и получает ответ в виде готового url-адреса. В начале скрываем со страницы блок с формой: "setFormClass('_hide')". Затем отображаем блок с информацией о созданной заметке: "setLineClass('')".

```

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

```

### После этого оправляем "fetch" - запрос на сервер бэкенда. Указываем тип запроса, прописываем заголовки, и отправляем объект с текстом созданной заметки, не забываем преобразовать в "JSON" - строку. Через "then" получаем ответ с сервера в виде объекта: "{result : true, url : id of note}". Далее через "then" делаем проверку на получение результата, если операция проходит успешно, то в стэйт "url" через селектор "setUrl", записываем конкатенацию строк состоящую из url - адреса фронтенда, слэша и ответа сервера в форме сгеннерированной id заметки. Также через пропс в стэйт "urlNote" записывается id заметки, он нужен для отображения id созданной заметки в блоке результата, кликнув по ней заметка скопируется для дальнейшей вставки в поле поиска.
---
&nbsp;

---
### Блок с результатом появляется после создания заметки. Он содержит: "поле с url - адресом заметки" - по которому вы можете сразу перейти к созданной заметке и прочитать ее содержимое; "поле с id созданной заметки" - нажав на которое, вы скопируете эту заметку для дальнейшего просмотра; текст с информацией для каждого поля; кнопки для быстрого перехода на страницы с созданием заметок и их просмотра.

```

return (
    <div className={`notes-create__result result-notes ${lineClass}`}>
        <div className="result-notes__result notes-result">
            <div className="notes-result__result">
                <h3 className="notes-result__result_title">You can view the created note two ways:</h3>
                <p className="notes-result__result_text">1. Click on the URL-link to go and see the created note;</p>
                <div className="notes-result__result_url"><a href={url}>{url}</a></div>
                <p className="notes-result__result_text">2. Click on the ID-Note link to copy it to the clipboard, then click the button "view other notes" and paste the note into the input field;</p>
                <div className="notes-result__result_urlNote">
                    <input type="text" defaultValue={props.urlNote} onClick={copyNote} readOnly/>
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
);

```

### На поле с заметкой вешается событие клик с функцией "copyNote". Блок со "span" под полем с заметкой нужен для вывода уведомления о том, что заметка была скопирована. Именно ему присваивается ref "copied", созданный ранее в начале компонента, так мы сможем получить этот блок и вывести в него уведомление о копировании, в качестве вывода текста используется стэйт "copy", равный изначально пустой строке.
---
&nbsp;

---
### В функции "copyNote" в начале отменяется событие по умолчанию, создаются переменные: "copy" - содержащая блок для уведомления; "input" - содержащая поле с заметкой.

```

const copyNote = (event) => {
    event.preventDefault();

    let copy = copied.current;
    let input = event.target;

    if (copy.classList.contains('_copied')) {
        copy.classList.remove('_copied');
        setTimeout(() => {
            copy.classList.add('_copied');
        },300);
    }
    else {
        copy.classList.add('_copied');
        props.setCopyNote(input.defaultValue);   
        setCopy('Copied!');
    }
}

```

### Далее идет проверка блока с уведомлением на наличие у него класса "_copied", отвечающий за скрытие/отображение уведомления о копировании. Если класс "_copied" присутствует у блока уведомления, то класс удаляется, а через 0.3 сек, добавляется снова с помощью метода "setTimeout". Данный способ позволяет плавно выводить уведомление при повторных нажатиях на поле с заметкой. В случае отсутствия класса "_copied" у блока уведомления, класс добавляется блоку, через пропс в стейт "copyNote" записывается значение поля (id заметки), а в стейт "copy" записывается текст "Copied!" для отображения на странице.
---
&nbsp;

---
### Теперь же рассмотрим работу компонента "Notes".

```

import './Notes.scss';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import env from "../../env.json";

```

### Первым делом импортируем необходимые нам инструменты: "стили для компонента"; "хуки 'useEffect' и 'useState' из модуля 'react'"; "хуки 'useParams' и 'Link' из модуля 'react-router-dom'"; "файл 'env.json' с url-адресами фронтенда и бэкенда.
---
&nbsp;

---

```

function Notes(props) {
    let {noteURL}  = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('_hide');
    const [formClass, setFormClass] = useState('_hide');
    const [errorClass, setErrorClass] = useState('_hide');

    let count = 0;

    return (

    );
}
export default Notes;

```

### В самом компоненте нам понадобится: переменная "noteURL" - она будет использовать хук "useParams" и будет содержать параметры url для заметки; стейт "noteText" - нужен для отображения текста найденной заметки; стейт "lineClass" - нужен для отображения/скрытия блока страницы с найденной заметкой; стейт "formClass" - нужен для отображения/скрытия блока страницы с полем поиска заметки; стейт "errorClass" - нужен для отображения/скрытия блока страницы с текстом об ошибке, если введенная заметка не была найдена или написана не корректно; переменная "count" - будет подсчитывать количество кликов в поле поиска, это нужно для корректной вставки ранее скопированной заметки, вставить скопированную заметку можно только один раз кликнув по полю поиска заметок, последующие вставки работать не будут.
---
&nbsp;

---
### Теперь разберем рендеринг страницы. Сама страница разделена на три блока: блок с классом "notes-found" - выводит блок с заметкой которая была найдена; блок с классом "notes-error" - выводит блок с ошибкой, если заметка не была найдена или введена не корректно; блок с классом "notes-search" - выводит блок с полем поиска заметок, он отображается по умолчанию. У данных блоков есть стейты в которые в зависимости от условий, добавляется класс "_hide" - скрывающий их со страницы.

### Основная работа блока поиска заметок основана на использовании хука "useEffect". С помощью него, все операции по поиску заметки, запроса на сервер бэкенда и отображения блоков "notes-error", "notes-found" срабатывают до отрисовки компонента.
---
&nbsp;

---
### В "useEffect" работа начинается с проверки хэша "noteURL" на "undefined", пройдя проверку посылается "fetch" - запрос на бэкенд сервер, указывается тип запроса, заголовки и тело запроса в которое передается, в качестве JSON-строки, объект с ключом "url" и значением параметров заметки "noteURL".

```

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

```

### Через "then" получаем ответ в виде объекта, повторный "then" содержит условия по результату ответа. Если проверка на условие проходит, то в блок с классом "notes-found" отправляется текст найденной заметки через стейт "noteText".

### Блок "notes-found" начинает отображаться на странице получая в классы стейт "lineClass" равный пустой строке, который по умолчанию содержал класс "_hide". Также блоки с классами "notes-error" и "notes-search" скрываются стейтами "errorClass" и "formClass" в которые записывается класс "_hide".

### Если проверка на условие не проходит, в стейты "lineClass" и "formClass" записывается класс "_hide", тем самым скрывая со страницы блоки с найденной заметкой и полем поиска, а в стейт "errorClass" - записывается пустая строка, что в свою очередь, отображает блок с ошибкой на странице.

### В случае если "noteURL" не был найден, то стейтам "lineClass" и "errorClass" присваивается класс "_hide", скрывая блоки с ошибкой и результатом со страницы, а стейту "formClass", наоборот присваевается пустая строка, отображая блок с поиском на страницу.
---
&nbsp;

---
### Подробнее разберем работу формы поиска. В блоке "notes-search" содержится форма, ей вешается событие с функцией "getNote".

```

return (
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
);

```

### Данная функция должна обрабатывать значение введенное в форму и перенаправлять по адресу созданной заметки, либо выводить блок с ошибкой.
---
&nbsp;

---
### Вначале мы сбрасываем событие по умолчанию, затем в переменнную "url" ложим значение из формы поиска, обрезаем от пробелов ("trim()") и пишем проверку на условие.

```

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

```

### В условии полученное значение ("url") проверяем на пустую строку и выводим сообщение о пустом поле, если проверка прошла и останавливаем работу вернув "false". В noteURL записываем значение из формы ("url"), и перенаправляем пользователя по адресу состоящему из адреса сервера ("env.url"), слэша ("/") и значения из формы ("url"). Так как "useEffect" начинает свою работу до загрузки компонента, то получив ID заметки, либо другое значение через функцию "getNote", он обращается к бэкенду, получает ответ, ставит условия и в зависимости от них, выводит на страницу конкретные блоки с контентом.
---
&nbsp;

---

```

return (
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
);

```

### В блоке с классом "notes-found" у кнопки "view" присутсвует событие клик с функцией "searchNote".
---
&nbsp;

---

```

function searchNote() {
    window.location.href = env.url;
}

```

### Функция эта нужна для перенаправления пользователя на блок с формой поиска, после того как он ознакомился с информацией по найденной заметке.
---
&nbsp;

---
### В блоке "notes-search" в форме предусмотрена функция вставки ранее копированной заметки. Функция "pasteCopied" срабатывает при первом клике по полю формы, и вставляет в поле значение из стэйта "copyNote" в который ранее было записан ID заметки в компоненте "Create".

```

const pasteCopied = (event) => {
    event.preventDefault();

    let input = event.target;
    
    if (input.value === '' && count === 0) {
        input.value = props.copyNote;
        count++;
    }
}

```

### Функция останавливает событие по умолчанию, в переменную "input" получает поле формы и делает проверку на условие, чтобы поле формы было пустым ("") и количество кликов было равно 0 ("count"). Это нужно чтобы вставка срабатывала один раз и только, если до этого в поле не было введено другое значение. Присваивается в значение поля поиска - значение из стейта "copyNote" полученный через пропс и "count" увеличивается на единицу, делая невозможным повторное срабатывание условия.
---
&nbsp;

---
### Чтож, на этом основная работа приложения заканчивается, но у нас остались некоторые компоненты дополняющие приложение, но не играя особой роли в нем. В кратце разберем эти компоненты.
---
&nbsp;

---
### Компонент "About" содержит краткую информацию о приложении и его работе.

```

import './About.scss';

function About() {
    return (
        <div className="about">
            <div className="about-content _container">
                <div className="about-content__block block-about">
                    <div className="block-about__info info-about">
                        <p className="info-about__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptas recusandae suscipit nisi ab molestias, nobis incidunt, cumque fugit possimus deserunt. Quia voluptatem et ratione pariatur aliquid nam facilis explicabo.
                        </p>
                        <p className="info-about__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis expedita exercitationem sint iste voluptate distinctio praesentium placeat libero culpa aliquid ea, laudantium ipsa? Odit maxime illo porro natus, delectus ex?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dicta dolorum aut dolor repellat itaque temporibus consectetur suscipit cupiditate, ipsam tempora, molestiae optio, reiciendis officiis nemo atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p className="info-about__text">
                            Magnam ex repudiandae dolores consequuntur numquam mollitia incidunt nihil pariatur reiciendis, aliquam ab recusandae. Iusto, animi reiciendis? Facilis aliquid officia totam maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum dolorum hic asperiores pariatur modi aut expedita, minima molestiae eius excepturi sapiente minus ab aperiam maxime soluta labore fugiat ratione.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

```
---
&nbsp;

---
### Компонент "Error" содержит информацию об ошибке при неправильном адресе или некорректно введеной заметке при ее поиске.

```

import './Error.scss';
import { Link } from 'react-router-dom'; 

function Error() {
    return (
        <div className="error">
            <div className="error-main _container">
                <div className="error-main__block main-error">
                    <div className="main-error__block error-info">
                        <h3 className="error-info__title">Error 404!</h3>
                        <div className="error-info__img">
                            <img src="./img/error-404-img.png" alt="" className="error-info__img_img"/>
                        </div>
                        <div className="error-info__text">
                            <p className="error-info__text_text">Something went wrong!</p>
                            <p className="error-info__text_text">Please check if the URL is correct. If it is not correct, follow this link to be on the main page of the application.</p>
                        </div>
                        <Link to="/" className="error-info__link _btn">Go to main page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;

```

### Он содержит кнопку-ссылку "Link" для быстрого перехода на главную страницу.
---
&nbsp;

---
### Компоненты "HeaderGeneral" и "FooterGeneral" - являются общим заголовком и подвалом страницы для всех приложений, они содержат свои стили и контент не связанный с работой данного приложения. 
---
&nbsp;

# 4. Заключение
&nbsp;

---
### В работе над приложением, использовались фронтэнд часть и бэкенд часть. Если мне была понятна работа фронтэнда и взаимодействие с бэкендом, то сам бэкенд, sql таблицы, openServer, и само написание сервера - скажем было интересно, сложно, но интересно. Не являясь "Вackend" или уж тем более "Full-stack" разработчиком, а обладая лишь базовыми знаниями бэкенда и хорошими знаниями фронтэнда, было проблематично разобраться в работе сервера и синхронизировать запросы без ошибок с пониманием самого процесса разработки. Но это был отличный опыт для меня, разобравшись и поняв принцип работы двух приложений связанных по API - является хорошим стартом для меня на пути к "Full-Stack" разработчику, куда собственно я и стремлюсь идти!
---
&nbsp;

# ___Спасибо за уделенное время!___ 
