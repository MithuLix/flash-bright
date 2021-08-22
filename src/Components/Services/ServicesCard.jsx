import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = (props) => {
    const { imageURL, description, price, title, _id } = props.service;

    return (
        <div className=" bg-gray-700 shadow-md  rounded flex flex-col  sm:flex-row sm:h-52 sm:w-3/5 md:w-full xs:w-full">

            <img className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover" src={imageURL} alt="" />
            <div className=" flex-1 w-full flex flex-col p-3  justify-around h-1/2  sm:h-full sm:items-baseline sm:w-1/2">
                <h1 className="text-lg font-medium mb-1 text-white break-normal md:break-all">{title}</h1>
                <h1 className="font-medium text-lg text-gray-50 w-full py-1 px-2 my-1 rounded" >$ {price}</h1>

                <div className="w-full flex justify-between ">
                    <Link to={`/booking/${_id}`}>
                        <button className="font-medium bg-gray-700 border hover:bg-gray-600 text-white px-4 py-2 rounded focus:outline-none">Buy</button>
                    </Link>
                    <Link to={`/moreDetails/${_id}`}>
                        <button className="font-medium  bg-gray-700 border hover:bg-gray-600  text-white px-4 py-2 rounded focus:outline-none">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;