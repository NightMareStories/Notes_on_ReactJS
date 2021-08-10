import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Error from './components/Error';
import Create from './components/Create';
import About from './components/About';
// import reactDom from 'react-dom';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/create" component={Create} />
          <Route exact path="/note/" component={Notes} />
          <Route exact path="/note/:noteURL" component={Notes} />
          <Route component={Error} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
