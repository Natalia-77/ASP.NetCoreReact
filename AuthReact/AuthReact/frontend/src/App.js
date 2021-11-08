import './App.css';
import React, {Suspense} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const DefaultLayout = React.lazy(()=>import('./components/containers/DefaultLayout'));
const AdminLayout = React.lazy(()=>import('./components/containers/AdminLayout'));
function App() {
  return (
    <>
 <Suspense fallback={<div>Загрузка ...</div>}>
          <Switch>
            <Route path="/admin" name="Admin" render={props=> <AdminLayout {...props}/>} /> 
            <Route path="/" name="Default" render={props=> <DefaultLayout {...props}/>} />
          </Switch>
        </Suspense>     
    </>

  );
}

export default App;
