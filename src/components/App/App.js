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
        {/* <HeaderGeneral /> */}
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
        {/* <FooterGeneral /> */}
      </Router>
    </>
  );
}

export default App;
