import React from 'react';
import { Link } from 'react-router-dom';
import {Fade, Bounce} from 'react-reveal';

export default function NoMatch() {

    return (
        <div className="container text-center pt-10 mt-10" >
            <Bounce top>
                <h1 className="text-red-400 text-8xl font-bold pb-10">Oops!</h1>
            </Bounce>
            <Fade bottom>
                <h5 className="text-2xl font-bold">404 - PAGE NOT FOUND</h5>
                <h6 className="text-2xl font-medium">This page you are looking might have been removed <br /> or name changed or is the temporary unavailable.</h6>
                <Link to="/home">
                <button type="submit" className="my-5 text-center py-2 px-4 border border-transparent text-medium font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none"> Go to Homepage</button>
                </Link>
            </Fade>
        </div>
    );
};
