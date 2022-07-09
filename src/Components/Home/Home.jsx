import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <div className="text-center ">
                <p className="text-white md:text-8xl font-bold pt-24 xs:text-5xl ">Capture Your Moments</p>
                <p className="text-white xs:text-sm m-auto md:text-2xl font-medium p-8 md:w-2/3 xs:w-full sm:w-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero facere, ullam harum quam reprehenderit autem maxime saepe? Blanditiis sint repudiandae vero quaerat voluptate molestiae quas, laborum debitis reprehenderit, ipsum facilis!</p>
                <Link to="/services">
                    <button className="text-2xl bg-gray-600 hover:bg-gray-500 border focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                        Buy a Service
                    </button>
                </Link>
            </div>
        </div>
    );
};