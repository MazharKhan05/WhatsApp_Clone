import Chat from './Chat';
import './App.css';
import {useState} from 'react';
import Sidebar from './Sidebar';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import Login from './Login';
import {useStateValue} from './StateProvider'

function App() {
  const [{user}, dispatch] = useStateValue();
  
  return (
    //BEM naming conventions
    <div className="app">
      {!user ? (
        <Login />
        ) : (
        <div className="app_body">
          <Router>
            <Sidebar />
            <Switch>
              
              <Route path="/rooms/:roomId"> 
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
    
      )
    }
  </div>
  );
}

export default App;
