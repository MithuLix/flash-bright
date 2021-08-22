import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Components/Home/Home';
import AppBar from './Components/AppBar/AppBar';
import Login from './Components/Login/Login';
import MainPage from '../src/Components/MainPage';
import NoMatch from './Components/NoMatch/NoMatch';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import AdminDashboard from './Components/AdminPanel/AdminDashboard';
import AddService from './Components/AdminPanel/AddService/AddService';
import ManageServiceCard from './Components/AdminPanel/ManageServices/ManageServiceCard';
import OrderList from './Components/AdminPanel/OrderList/OrderList';
import ManageServices from './Components/AdminPanel/ManageServices/ManageServices';
import Booking from './Components/BookingPanel/Booking/Booking';
import BookingPayment from './Components/BookingPanel/Booking/ProcessPayment/BookingPayment';
import BookingList from './Components/BookingPanel/BookingList/BookingList';
import MoreDetails from './Components/Services/MoreDetails';
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
            <Route path="/moreDetailsMain"><MoreDetails /></Route>
            <Route path="/moreDetails/:id"><MoreDetails /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/login"><Login /></Route>

            {/* booking components */}
            <PrivateRoute path="/booking/:id"><Booking /></PrivateRoute>
            <PrivateRoute path="/bookingMain"><Booking /></PrivateRoute>
            <PrivateRoute path="/bookingPayment"><BookingPayment /></PrivateRoute>
            <PrivateRoute path='/bookingList'><BookingList /></PrivateRoute>

            {/* admin components */}
            {/* <Route path='/adminDashboard'><AdminDashboard /></Route> */}
            <PrivateRoute path='/orderList'><OrderList /></PrivateRoute>
            <PrivateRoute path='/addService'><AddService/></PrivateRoute>
            <PrivateRoute path='/manageServices'><ManageServices/></PrivateRoute>
            <PrivateRoute path='/manageServicesCard'><ManageServiceCard/></PrivateRoute>

            <Route path="*"><NoMatch /></Route>
          </Switch>

          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
