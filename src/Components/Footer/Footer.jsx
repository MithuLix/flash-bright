import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bottom-0">
            <footer className="footer-1 py-8 sm:py-2 " style={{backgroundColor: '#485264'}}>
                <div className="container mx-auto px-4">
                    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        <div className="px-4 sm:w-1/4 md:w-1/4 xl:w-1/6">
                            <h5 className="text-xl text-red-400 font-bold mb-6">Features</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Cool stuff</Link >
                                </li>
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Random feature</Link >
                                </li>
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Team feature</Link >
                                </li>
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Stuff for developers</Link >
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                            <h5 className="text-xl text-red-400 font-bold mb-6">Resources</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Resource</Link >
                                </li>
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Resource name</Link >
                                </li>
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Another resource</Link >
                                </li>
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Final resource</Link >
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl text-red-400 font-bold mb-6">About</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Team</Link >
                                </li>
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Locations</Link >
                                </li>
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Privacy</Link >
                                </li>
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Terms</Link >
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                            <h5 className="text-xl text-red-400 font-bold mb-6">Help</h5>
                            <ul className="list-none footer-links">
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Support</Link >
                                </li>
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Help Center</Link >
                                </li>
                                <li className="mb-2">
                                    <Link to="" className="text-gray-50 hover:text-red-400">Contact Us</Link >
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                            <h5 className="text-xl text-red-400 font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
                            <div className="flex sm:justify-center xl:justify-start">
                                <Link to="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-50 hover:text-white hover:bg-red-400 ">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link >
                                <Link to="" className="w-8 h-8 mx-2 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-50 hover:text-white hover:bg-red-400 ">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link >
                                <Link to="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-50 hover:text-white hover:bg-red-400 ">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link >
                            </div>
                            <div className="py-3">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">  Email address  </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className=" rounded  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                    <button type="submit" className="py-2 px-4 mt-4 border text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none"> Subscribe</button>
                                </div>
                            </div>
                            <p className="text-gray-50 sm:text-center xl:text-left">All rights reserved.</p>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;