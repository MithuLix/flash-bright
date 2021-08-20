import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import AppBar from './Components/AppBar/AppBar';
import Login from './Components/Login/Login';
import MainPage from '../src/Components/MainPage';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Services/Services';
import Gallery from './Components/Gallery/Gallery';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
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

            <Route path="/home"><Home /></Route>

            <Route path="/gallery"><Gallery /></Route>

            <Route path="/services"><Services /></Route>

            <Route path="/blog"><Blog /></Route>

            <Route path="/contact"><Contact /></Route>

            <Route path="/login"><Login /></Route>

            {/* <PrivateRoute path="/"></PrivateRoute> */}

            <Route path="*"><NoMatch /></Route>
          </Switch>
          
          <Footer/>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
