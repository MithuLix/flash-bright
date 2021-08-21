import React from 'react';
import brand from '../../Images/logo.png';
import { faListAlt, faShoppingCart, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export default function BookingDrawer() {

    return (
        <div className="bg-gray-700 flex flex-col p-4 text-white md:h-screen">
            <Link to="/home"><img className="h-10 w-10 mb-4 m-auto" src={brand} alt="" /> </Link>
            <Link to="/manageServices" ><p className="hover:bg-gray-800 hover:text-white p-2 rounded"><FontAwesomeIcon icon={faListAlt} />&nbsp; Book</p></Link>
            <Link to="/bookingList" ><p className="hover:bg-gray-800 hover:text-white p-2 rounded"><FontAwesomeIcon icon={faShoppingCart} />&nbsp; Booking List</p></Link>
        </div>
    );
};