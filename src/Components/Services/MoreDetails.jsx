import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function MoreDetails() {
    const [spinner, setSpinner] = useState(true);

    const { id } = useParams();
    const [details, setDetails] = useState({});
    const { title, price, description, imageURL } = details;
    useEffect(() => {
        fetch('https://flash-bright-backend-production.up.railway.app/getServices/' + id)
            .then(res => res.json())
            .then(data => { setDetails(data); setSpinner(false) })
    }, [id])


    return (
        <div className="container bg-gray-700 rounded p-6  md:w-2/4 text-center">

            <h6 className="font-medium text-white pb-4 text-lg">More about this Service</h6>
            <div>
                <div class=" flex justify-center items-center my-4">
                    {spinner && <div class="animate-spin rounded-full h-10 w-10 border-b-2  border-white"></div>}
                </div>
                <img src={imageURL} alt="" />
                <p className="text-white text-2xl text-left font-medium py-4">{title}</p>
                <p className="text-white text-left  py-4">{description}</p>
                <p className="text-white text-left py-4">Price: $ {price}</p>
                <Link to="/services">
                    <button type="submit" className="shadow bg-gray-600 hover:bg-gray-500 border focus:shadow-outline focus:outline-none text-white font-bold py-3 px-6 my-2 rounded">
                        Go to Services
                    </button>
                </Link>
            </div>
        </div>
    );
};

