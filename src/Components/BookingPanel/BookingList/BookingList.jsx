import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import BookingListCards from './BookingListCards';
import './BookingList.css';
import BookingDrawer from '../BookingDrawer/BookingDrawer';

export default function BookingList() {
    const [loggedInUser] = useContext(UserContext)
    const [bookingLists, setBookingLists] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/getBookingList?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => { setBookingLists(data); setSpinner(false) })
    }, [])


    return (
        <div className="md:container">
            <div className="flex flex-wrap overflow-hidden">

                <div className="px-2 w-1/2 overflow-hidden xs:w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
                    <BookingDrawer />
                </div>

                <div class="px-4 py-4 w-1/2 overflow-hidden xs:w-full sm:w-full md:ml-12 md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <p className="text-2xl font-bold my-4" >Add a new Service</p>

                    <h6 > DEAR, <span className="text-uppercase text-danger">{loggedInUser.name}</span> YOU'VE <span className="text-danger">{bookingLists.length}</span> BOOKINGS.</h6>
                    <div className="g-4 mt-3">
                        {spinner && <div className="text-center"> <Spinner animation="border" variant="secondary" /></div>}
                    </div>
                    <div id="bookingList">
                        {bookingLists.map(list => <BookingListCards list={list} key={list._id}></BookingListCards>)}
                    </div>
                </div>
            </div>
        </div>
    );
};