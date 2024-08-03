import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notes from '../Notes/Notes';
import Error from '../Error/Error';
import Create from '../Create/Create';
import About from '../About/About';
import '../ComponentsReset.scss';
import '../Components.scss';
import GeneralHeader from '../GeneralHeader/Header';
import GeneralFooter from '../GeneralFooter/Footer';

function App() {
  const [urlNote, setUrlNote] = useState('');
  const [copyNote, setCopyNote] = useState('');

  return (
    <>
      <Router>
        <GeneralHeader />
        <Header />
        <Routes>
          <Route exact="true" path="/" element={<Main />} />
          <Route exact="true" path="/note/:noteURL" element={<Notes urlNote={urlNote} setUrlNote={setUrlNote} />} />
          <Route exact="true" path="/note/" element={<Notes urlNote={urlNote} setUrlNote={setUrlNote} copyNote={copyNote} setCopyNote={setCopyNote} />} />
          <Route path="/create" element={<Create urlNote={urlNote} setUrlNote={setUrlNote} copyNote={copyNote} setCopyNote={setCopyNote} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <GeneralFooter />
      </Router>
    </>
  );
}

export default App;
