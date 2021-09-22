import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Register from './components/account/Registration';
import Login from './components/account/Login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/"><Login /></Route>
          <Route exact path="/register"><Register/></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
