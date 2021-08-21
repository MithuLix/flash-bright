import React from 'react';


export default function BookingListCards(props) {
    const { title, status } = props.list;

    return (
        <div>
            <div>
                <section className="d-flex justify-content-between mt-2">
                    <h5>{title}</h5>
                    <button type="submit" className="shadow bg-gray-700 hover:bg-gray-600 border focus:shadow-outline focus:outline-none text-white font-bold py-3 px-6 my-2 rounded">
                        {status}
                    </button>
                </section>
            </div>
        </div>
    );
}