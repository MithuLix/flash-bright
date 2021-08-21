import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = (props) => {
    const { imageURL, description, price, title, _id } = props.service;
    return (
        <div className=" bg-gray-600 shadow-md  rounded flex flex-col  sm:flex-row sm:h-52 sm:w-3/5 md:w-full">

            <img className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover" src={imageURL} alt="" />
            <div className=" flex-1 w-full flex flex-col p-4  justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-1/2">
                <h1 className="text-lg font-medium mb-1 text-white break-normal md:break-all">{title}</h1>
                <h1 className="font-normal text-gray-50" >$ {price}</h1>

                <div className="w-full flex justify-between ">
                    <Link to={`/booking/${_id}`}>
                        <button className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-1 rounded focus:outline-none">Buy</button>
                    </Link>
                    <Link to={`/more/${_id}`}>
                        <button className="w-full bg-gray-700 hover:bg-gray-800  text-white px-3 py-1 rounded focus:outline-none">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;