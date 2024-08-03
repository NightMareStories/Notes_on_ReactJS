# Hello!
&nbsp;

---
## This application is written in "ReactJS" and "NodeJS" using "SQL" databases through the "OpenServer" backend framework. If you want to test the operation of the application, then you will need:
&nbsp;
### **1. `Install "`[NodeJS](https://nodejs.org/)`" from the official site`;**
### **2. `Download and install the "basic" version of "`[OpenServer](https://ospanel.io)`" from the official website`;**
### **3. `Install all modules from the "package.json" file using a command in the terminal`:**
```

npm i

```
### **4. `Go to the "backend_project" folder and install all modules with the same command in the terminal`;**
### **5. `After completing all the previous steps, open "OpenServer". Next, go to "Settings", select the "Modules" tab. From the "MySQL / MariaDB" drop-down list, select the latest version of "MySQL" (currently "MySQL-8.0-Win10") and save your changes`;** 
### **6. `Close the settings and click "Run server", then go to the "Advanced" tab and select the "PhpMyAdmin" application - for working with databases`;**
### **7. `Enter your login and password, by default: "root", "" (leave the password field empty)`;**
### **8. `Now you need to create a database, on the left side, click on "New", enter the name "notes_on_reactjs" and leave the default encoding, click "Create"`;**
### **9. `Select the "created" database and on the right on the top toolbar select "Import", now you need to specify the "SQL" file from the "backend_project" folder, after selecting, scroll to the bottom and press "go". You can now track the added notes in "notes_on_reactjs"`;**
### **10. `Return to the code editor, open a terminal and launch the "Notes_on_ReactJS" application with a command in the terminal`;**
```

npm start

```
### **11. `Open another terminal and go to the "backend_project" folder, start the "NodeJS" server with a command in the terminal`;**
```

node index.js

```
&nbsp;
## **Finally, you can start working with the application!**

---

&nbsp;

# 1. Introduction
&nbsp;

---
### "Notes on ReactJS" is an application written in "ReactJS", "NodeJS" and using the server-side development environment "OpenServer", the application also makes extensive use of routing for SPA, but there are also redirection functions with page reloads.

### The work of the application is to create notes or messages by the user and view the already created notes or messages for review. Each note when created has its own unique ID-hash, which can be copied and pasted on the search page, thereby familiarizing yourself with its contents.

### Thanks to the interaction between the "backend" and "frontend" via the API, as well as the application for creating and working with sql tables "PhpMyAdmin" in the server environment "OpenServer" - the Notes on ReactJS application creates and saves notes on the server, and gets the generated notes when requested from the client.

### Try it, from the main page you can go directly to creating or viewing notes (you need a note ID to view). After creation, you can follow the link directly to the created note, or by clicking on the field with the note ID to copy it. Now you can go to "NOTES" to paste the copied note by clicking in the search field, if the note is found, then all its contents will be shown, if not, then you made a mistake with the spelling and received an error notification.  
---
&nbsp;

# 2. Familiarization
&nbsp;

---
### Let's figure out the structure of the application. The application is divided into two parts: "backend" and "frontend". The "backend" part is located in the "backend_project" folder. It contains: folder "db" - to create the structure of notes; file "index.js" - containing the main work of the server and communication with the front-end; file "reactjs.sql" - containing a table template for import into "OpenServer".

### The "frontend" part of the application is located in the main directory. In the "public" folder, by default, there are: "img" folder - containing all the images of the application; file "index.html" - the main file for the page; project icon "favicon.ico" and service files with information. In the "src" folder of the main directory, there are: "сomponents" folder - containing all application components for rendering on the page and their styles; folder "fonts" - containing application fonts; env.json file - containing urls for the front-end and back-end server; file "index.js" - which is the entry point of the application; file "index.scss" - contains mixins for application fonts; file "vars.scss" - contains variables with fonts; file "reportWebVitals.js" - left by default when creating a React application.

### In the folder "somponents" components are in their folders with their styles. The "App" component is the main component, it contains imports of all components, as well as routing between them. Component "Main" - contains the main page with transition to creating or viewing notes. Component "Create" - contains functions and rendering of creating a new note. Component "Notes" - contains functionality for viewing the created note. Component "Header" - contains the header of the page with navigation on it. The "Footer" component does not carry any task, only a visual representation. Component "About" - contains information about the project, you can go to it through the navigation header. Component "Error" - needed to generate an error in the search for a note or an error in the path of the url address. The "HeaderGeneral" and "FooterGeneral" components are not part of the application, they serve as a common wrapper for all applications, and have their own unique styles and content.  
---
&nbsp;

# 3. Overview
&nbsp;

---
### To develop this application, I used modules:
### **1. For a backend project: "mysql2", "randomstring", "sequelize";**
### **2. For the main project: "react", "react-router-dom";**
---
&nbsp;

---
### First, let's take a look at the backend part of the application. Since the application is focused on front-end development, we will briefly touch on the work of the server without going into the details of the process. The "reactjs.sql" file contains the structure of the table. It is this file that is imported into the "phpMyAdmin" database. There are two files in the "db" folder: "Notes" and "index.js". "Notes" specifies the structure of notes to be sent to the database. The "index.js" contains the settings of the "sequelize" module for working with the database, the name of the database and access to it are also indicated there. The entry point for the "backend-project" application is the "index.js" file. It should be launched in a separate terminal with the "node index.js" command when testing the application. This file contains the creation of the server and its settings.
---
&nbsp;

---
### Now let's take a closer look at the front-end part. All application components, styles for the component, hooks from the "react-router-dom" routing module, the "useState" hook from the "react" module, and also common for all applications "HeaderGeneral" and "FooterGeneral" are imported into the "App" component.
### Inside the component itself, two states are declared: "urlNote" and "copyNote". We will need them later when copying and pasting the created note.

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

### In the "return" block, in the "Router" all components are wrapped, and in the "Switch" those components for which routing is expected. Inside "Switch" there are "Routes" with their components. If the url is the same as "path", then the specific component will be rendered. To pass states "urlNote" and "copyNote" as props to components, use "render" with an arrow function. Some components have a strict "path" ("exact") required for correct rendering of the required components.
---
&nbsp;

---
### The styles and the Nav component are imported into the Header component.

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

### The "return" block renders the styled header blocks and its navigation (Nav).
---
&nbsp;

---
### In the Nav component, a hook from the routing module is imported: "NavLink" - for working with links.

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

### The page navigation block is presented in the form of a list with elements, when clicked, an asynchronous transition between the application pages occurs.
---
&nbsp;

---
### We will not consider the "Footer" component, since there is nothing there except importing its styles and drawing.

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
### Now let's take a look at the application itself. Let's start with the "Main" component. First, the component styles and the "Link" routing hook are imported.

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

### In "return", two main application links are drawn: "Create a new note" - go to the page for creating a note; "View other notes" - go to the page for viewing notes.
---
&nbsp;

---
### Consider the "Create" component. At the beginning, the following is imported: component styles; the "React" module and the "useState" hook; "Link" from the "react-router-dom" module; file "env.json". For convenience, the url - addresses of the backend and frontend - are registered in the file "env.json".

```

import './Create.scss';
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import env from "../../env.json";

```
---
&nbsp;

---
### The following states are declared inside the component: "url" - into which the hash query string will be written; "copy" - in which the id of the created note will be written when you click on it; "lineClass" - needed to display / hide the block of information about the created note, hidden by default; "formClass" - needed to show / hide the block for creating a note.

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

### The ref "copied" is needed for a tooltip stating that the created note has been copied so that it can be viewed later.
---
&nbsp;

---
### Now let's take a look at the rendering of the page. The page is divided into two blocks with classes: "form-notes" - a block with a form for creating a note; "result-notes" - a block with information about the created note.

### The logic is simple, by default the block with the form for creating a note is shown immediately, after creating a note, the block with the form is hidden and the block with information about the created note is shown.

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

### The block with the form has an event with the "loadDataFromForm" function.
---
&nbsp;

---
### In the "loadDataFromForm" function, we first stop the default event. Then we create and receive into the variable "note" the entered value in the element "textarea".

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

### We cut off the resulting value from unnecessary spaces. Next, we check the value for an empty string, display a message if the field is empty and stop the function. Finally, we call the "sendData" function passing an object with the value (note) as a parameter.
---
&nbsp;

---
### The "sendData" function sends a request to the backend and receives a response in the form of a ready-made url. First, hide the block with the form from the page: "setFormClass ('_ hide')". Then we display a block with information about the created note: "setLineClass ('')".

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

### After that we send a "fetch" request to the backend server. We indicate the type of request, write the headers, and send an object with the text of the created note, do not forget to convert it to a "JSON" string. Through "then" we get a response from the server in the form of an object: "{result: true, url: id of note}". Then, through "then" we check for the result, if the operation is successful, then into the "url" state through the "setUrl" selector, we write the concatenation of strings consisting of the url - the front-end address, the slash and the server response in the form of a generated note id. Also, the id of the note is written through the props to the "urlNote" state, it is needed to display the id of the created note in the result block, by clicking on it, the note will be copied for further insertion into the search field.
---
&nbsp;

---
### The block with the result appears after creating a note. It contains: "the field with the url - the address of the note" - by which you can go directly to the created note and read its contents; "field with the id of the created note" - by clicking on which, you will copy this note for further viewing; text with information for each field; buttons for quick transition to pages with the creation of notes and viewing them.

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

### A click event with the "copyNote" function is hung on the field with a note. The block with "span" under the note field is needed to display a notification that the note has been copied. The ref "copied", created earlier at the beginning of the component, is assigned to it, so we can get this block and display the copy notification in it, the "copy" state is used as the text output, which is equal to the initially empty string.
---
&nbsp;

---
### In the "copyNote" function, the default event is canceled at the beginning, and the following variables are created: "copy" - containing a block for notification; "input" - containing the note field.

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

### Next, the block is checked with a notification for the presence of the "_copied" class, which is responsible for hiding / showing the copy notification. If the class "_copied" is present in the notification block, then the class is removed, and after 0.3 seconds, it is added again using the "setTimeout" method. This method allows you to smoothly display a notification when you repeatedly click on a field with a note. If there is no "_copied" class in the notification block, the class is added to the block, through the props, the field value (note id) is written to the "copyNote" state, and the text "Copied!" Is written to the "copy" state. to display on the page.
---
&nbsp;

---
### Now let's look at how the "Notes" component works.

```

import './Notes.scss';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import env from "../../env.json";

```

### First of all, we import the tools we need: "styles for the component"; "the 'useEffect' and 'useState' hooks from the 'react' module"; "the 'useParams' and 'Link' hooks from the 'react-router-dom' module"; "file 'env.json' with url - addresses of the frontend and backend.
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

### In the component itself we need: the variable" noteURL "- it will use the" useParams "hook and will contain the url parameters for the note; state" noteText "- is needed to display the text found note; state "lineClass" - needed to show / hide the page block with the found note; state "formClass" - needed to show / hide the page block with the note search field; state "errorClass" - needed to show / hide the page block with the text about an error, if the entered note was not found or was written incorrectly; the "count" variable - will count the number of clicks in the search field, this is necessary for the correct insertion of a previously copied note, you can insert a copied note only once by clicking on the note search field, subsequent inserts won't work.
---
&nbsp;

---
### Now let's take a look at the rendering of the page. The page itself is divided into three blocks: a block with the "notes-found" class - displays a block with a note that was found; block with the "notes-error" class - displays a block with an error if the note was not found or was entered incorrectly; block with class "notes-search" - displays a block with a search field for notes, it is displayed by default. These blocks have states in which, depending on the conditions, the "_hide" class is added, which hides them from the page.

### The main work of the note search block is based on the useEffect hook. With it, all operations for finding a note, requesting the backend server and displaying the "notes-error", "notes-found" blocks are triggered before the component is rendered.
---
&nbsp;

---
### In "useEffect", work begins with checking the "noteURL" hash for "undefined", after passing the check, a "fetch" is sent - a request to the backend server, the type of request is indicated, the headers and body of the request to which the object with the key is passed as a JSON string "url" and the value of the note parameters "noteURL".

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

### Through "then" we get a response in the form of an object, repeated "then" contains conditions for the result of the response. If the check for the condition passes, then the text of the found note is sent to the block with the "notes-found" class via the "noteText" state.

### The "notes-found" block begins to be displayed on the page by receiving the "lineClass" state in the classes equal to the empty string, which by default contained the "_hide" class. Also, the blocks with the "notes-error" and "notes-search" classes are hidden by the "errorClass" and "formClass" states in which the "_hide" class is written.

### If the condition check fails, the "_hide" class is written to the "lineClass" and "formClass" states, thereby hiding the blocks with the found note and the search field from the page, and an empty string is written to the "errorClass" state, which in turn , displays a block with an error on the page.

### If "noteURL" was not found, then the "lineClass" and "errorClass" states are assigned the "_hide" class, hiding the blocks with the error and the result from the page, and the "formClass" state, on the contrary, is assigned an empty string, displaying the block with the search on page.
---
&nbsp;

---
### Let's take a closer look at how the search form works. The "notes-search" block contains a form, an event with the "getNote" function is hung up to it.

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

### This function should process the value entered into the form and redirect to the address of the created note, or output a block with an error.
---
&nbsp;

---
### First, we reset the event by default, then we put the value from the search form into the "url" variable, cut off spaces ("trim ()) and write a check for the condition.

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

### In the condition, the received value (" url ") is checked for an empty string and display the message about an empty field, if the check passed and stop the work by returning "false". In noteURL, write the value from the form ("url"), and redirect the user to the address consisting of the server address ("env.url"), slash ("/") and values ​​from the form ("url"). Since "useEffect" begins its work before the component is loaded, then having received the note ID, or another value through the "getNote" function, it refers to the backend, receives a response, sets conditions and, depending on them, displays specific content blocks on the page.
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

### In the block with the "notes-found" class, the "view" button has a click event with the "searchNote" function.
---
&nbsp;

---

```

function searchNote() {
    window.location.href = env.url;
}

```

### This function is needed to redirect the user to the block with the search form after he has read the information on the found note.
---
&nbsp;

---
### The "notes-search" block in the form provides the function of pasting a previously copied note. The "pasteCopied" function is triggered by the first click on the form field, and inserts into the field the value from the "copyNote" state into which the note ID was previously written in the "Create" component.

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

### The function stops the event by default, gets the form field into the "input" variable and checks for the condition that the form field is empty ("") and the number of clicks is 0 ("count"). This is necessary so that the insert works once and only if no other value has been entered in the field before. Assigned to the value of the search field - the value from the "copyNote" state received through the props and "count" is increased by one, making it impossible to repeat the condition.
---
&nbsp;

---
### Well, this is where the main work of the application ends, but we still have some components that complement the application, but do not play a special role in it. Let's take a quick look at these components.
---
&nbsp;

---
### The "About" component contains brief information about the application and its operation.

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
### The "Error" component contains information about an error with an incorrect address or an incorrectly entered note when searching for it.

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

### It contains a link button "Link" for quick access to the main page.
---
&nbsp;

---
### The "HeaderGeneral" and "FooterGeneral" components are the common header and footer of the page for all applications, they contain their own styles and content not related to the operation of this application.  
---
&nbsp;

# 4. Conclusion
&nbsp;

---
### In the work on the application, the front-end part and the back-end part were used. If I understood the work of the frontend and interaction with the backend, then the backend itself, sql tables, openServer, and the server itself - let's say it was interesting, difficult, but interesting. Not being a "Backend" or even more so a "Full-stack" developer, but having only basic knowledge of the backend and good knowledge of the frontend, it was problematic to understand the operation of the server and synchronize requests without errors with an understanding of the development process itself. But it was a great experience for me, having understood and understood the principle of operation of two applications connected by API - it is a good start for me on the way to a "Full-Stack" developer, where I actually strive to go! 
---
&nbsp;

# ___Thank you for your time!___ 

