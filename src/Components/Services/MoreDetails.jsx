import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function MoreDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const { title, price, description, imageURL } = details;

    useEffect(() => {
        fetch('https://flash-bright-backend.herokuapp.com/getServices/' + id)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [id])


    return (
        <div className="container bg-gray-700 rounded p-6  md:w-2/4 text-center">

            <h6 className="font-medium text-white pb-4 text-lg">More about this Service</h6>
            <div>
                <img src={imageURL} alt="" />
                <p>{title}</p>
                <p>{description}</p>
                <p>{price}</p>
                <Link to="/services">
                    <button type="submit" className="shadow bg-gray-600 hover:bg-gray-500 border focus:shadow-outline focus:outline-none text-white font-bold py-3 px-6 my-2 rounded">
                        Go to Services
                    </button>
                </Link>
            </div>
        </div>
    );
};

