import './App.css';
import Navbar from './components/navbar/navbar';
import Register from './components/account/Registration';
import Login from './components/account/Login';
import UserList from './components/users';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from './components/home';
import EditUser from './components/users/Edit';
import DeleteUser from './components/users/Delete';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/user"><UserList /></Route> 
          <Route exact path="/register"><Register/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/edit/:id" render={({match})=><EditUser match={match}/>}></Route>
          <Route exact path="/delete/:id" render={({match})=><DeleteUser match={match}/>}></Route>
        </Switch>
      </div>
    </>

  );
}

export default App;
