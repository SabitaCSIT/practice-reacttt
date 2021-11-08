import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/components/about">About</Link><br />
        <Link to="/components/contact">Contact</Link><br />
        <Link to="/components/error">Error</Link><br />


        <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/components/about" component={About} />
        <Route exact path="/components/contact" component={Contact} />
        <Route  path="/components/error" component={Error} />


      </Switch>
      
      </Router>

     
    </div>
  );
}

export default App;
