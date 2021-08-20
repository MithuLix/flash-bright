import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import AppBar from './Components/AppBar/AppBar';
import Login from './Components/Login/Login.jsx';
import MainPage from '../src/Components/MainPage';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Services/Services';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <AppBar />

          <Switch>
            <Route exact path="/"><MainPage /></Route>

            <Route path="/home"><MainPage /></Route>

            <Route path="/home"><Services /></Route>

            <Route path="/login"><Login /></Route>

            <PrivateRoute path="/"></PrivateRoute>

            <Route path="/nomatch"><NoMatch /></Route>
          </Switch>
          
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
