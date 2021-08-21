import React from 'react';
import brand from '../../Images/logo.png';
import { faList, faPlus, faTasks, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export default function AdminDrawer() {

    return (
        <div className="bg-gray-700 flex flex-col p-4 text-white md:h-screen">
            <Link to="/home"><img className="h-10 w-10 mb-4 m-auto" src={brand} alt="" /> </Link>
            <Link to="/orderList" ><p className="hover:bg-gray-500 hover:text-white p-2 rounded"><FontAwesomeIcon icon={faList} />&nbsp; Order List</p></Link>
            <Link to="/manageServices" ><p className="hover:bg-gray-500 hover:text-white  p-2 rounded"><FontAwesomeIcon icon={faTasks} />&nbsp; Manage Service</p></Link>
            <Link to="/addService" ><p className="hover:bg-gray-500 hover:text-white p-2 rounded"><FontAwesomeIcon icon={faPlus} />&nbsp; Add Service</p></Link>
        </div>
    );
};