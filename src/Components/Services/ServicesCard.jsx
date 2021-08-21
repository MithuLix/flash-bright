import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = (props) => {
    const { imageURL, description, price, title, _id } = props.service;
    return (
        <div classNameName=" container h-64 grid grid-rows-3 grid-flow-col gap-4">
            {/* card */}
            <div
                className=" bg-white shadow-md h-96 mx-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:h-52 sm:w-3/5 md:w-96">
                <img className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover" src={imageURL} alt="" />
                <div
                    className=" flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-1/2">
                    <div className="flex flex-col justify-start items-baseline">
                        <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">{title}</h1>
                        <Link to={`/more/${_id}`}>
                            <button className="bg-gray-600 hover:bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm">View More</button>
                        </Link>                    </div>
                    <p className="text-xs text-gray-500 w-4/5">{description}</p>
                    <div className="w-full flex justify-between items-center">
                        <h1 className="font-bold text-gray-500">{price}</h1>
                        <Link to={`/booking/${_id}`}>
                            <button className="bg-gray-600 hover:bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm ">Buy</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicesCard;