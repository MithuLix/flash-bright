import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import AppBar from './Components/AppBar/AppBar';
import Login from './Components/Login/Login';
import MainPage from '../src/Components/MainPage';
import NoMatch from './Components/NoMatch/NoMatch';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import AddService from './Components/AdminPanel/AddService/AddService';
import ManageServiceCard from './Components/AdminPanel/ManageServices/ManageServiceCard';
import OrderList from './Components/AdminPanel/OrderList/OrderList';
import ManageServices from './Components/AdminPanel/ManageServices/ManageServices';
import Booking from './Components/BookingPanel/Booking/Booking';
import BookingPayment from './Components/BookingPanel/Booking/ProcessPayment/BookingPayment';
import BookingList from './Components/BookingPanel/BookingList/BookingList';
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
            <Route path="/services"><Services /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/login"><Login /></Route>

            {/* booking components */}
            <Route path="/booking/:id"><Booking /></Route>
            <Route path="/bookingMain"><Booking /></Route>
            <Route path="/bookingPayment"><BookingPayment /></Route>
            <Route path='/bookingList'><BookingList /></Route>

            {/* admin components */}
            <Route path='/orderList'><OrderList /></Route>
            <Route path='/addService'><AddService/></Route>
            <Route path='/manageServices'><ManageServices/></Route>
            <Route path='/manageServicesCard'><ManageServiceCard/></Route>

            <Route path="*"><NoMatch /></Route>
          </Switch>

          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
