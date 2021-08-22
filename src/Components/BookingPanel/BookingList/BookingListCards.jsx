import React from 'react';


export default function BookingListCards(props) {
    const { title, status } = props.list;

    return (
        <div>
            <section className="flex justify-between m-auto mt-2 bg-gray-200 rounded p-2 md:w-1/2 ">
                <h5 className="text-2xl font-medium">{title}</h5>
                <button type="submit" className="shadow bg-gray-700  hover:bg-gray-600 border focus:shadow-outline focus:outline-none text-white font-bold py-3 px-6 my-2 rounded">
                    {status}
                </button>
            </section>
        </div>
    );
}

