import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MoreDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const { title, price, description, image } = details;

    useEffect(() => {
        fetch('https://flash-bright-backend.herokuapp.com/getServices/' + id)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id])


    return (
        <div className="container bg-gray-700 rounded p-6  md:w-2/4 text-center">

            <h6 className="font-medium text-white pb-4 text-lg">Please, fill out these details.</h6>
            <div>
                <img src={image} alt="" />
                <p>{title}</p>
                <p>{description}</p>
                <button type="submit" className="shadow bg-gray-600 hover:bg-gray-500 border focus:shadow-outline focus:outline-none text-white font-bold py-3 px-6 my-2 rounded">
                    Go back
                </button>
            </div>
        </div>
    );
};

