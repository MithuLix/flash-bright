import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingListCards from './BookingListCards';
import './BookingList.css';
import BookingDrawer from '../BookingDrawer/BookingDrawer';
import { Link } from 'react-router-dom';

export default function BookingList() {
    const [loggedInUser] = useContext(UserContext)
    const [bookingLists, setBookingLists] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch("https://flash-bright-backend.herokuapp.com/getBookingList?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => { setBookingLists(data); setSpinner(false) })
    }, [])


    return (
        <div className="container bg-gray-700 rounded p-6 h-screen md:w-2/3 text-center">
            <h6 className="text-white text-center text-2xl font-medium pb-6"> DEAR, <span className="text-uppercase text-danger">{loggedInUser.name}</span> YOU'VE <span className="text-danger">{bookingLists.length}</span> BOOKINGS.</h6>
            <div class=" flex justify-center items-center">
                {spinner && <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>}
            </div>
            <div id="bookingList">
                {bookingLists.map(list => <BookingListCards list={list} key={list._id}></BookingListCards>)}
            </div>
            <Link to={'/services'}>
                <button className=" font-medium bg-gray-700 border hover:bg-gray-600 text-white px-4 py-2 my-4 rounded focus:outline-none">Buy a Service</button>
            </Link>
        </div>
    );
};