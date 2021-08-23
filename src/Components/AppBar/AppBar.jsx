/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext} from 'react'
import { Disclosure} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// firebase imported files
import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from "../Login/firebaseConfig";
import { UserContext } from "../../App";
if (firebase.apps.length === 0) { firebase.initializeApp(firebaseConfig) };


export default function AppBar() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const user = firebase.auth().currentUser;

    return (
        <div style={{ backgroundColor: '#485264f7' }}>
            <Disclosure as="nav"  >
                {({ open }) => (
                    <>
                        <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 mt-0 fixed w-full z-10 top-0" style={{ backgroundColor: '#485264f7' }}>
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red-400 hover:bg-gray-700 focus:outline-none">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <Link to="/home">
                                            <img
                                                className="block lg:block h-8"
                                                src="https://i.ibb.co/syLS9zW/logo.png"
                                                alt="Workflow"
                                            />
                                        </Link>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex  space-x-4">
                                            <Link to="/home"><p className="text-white  hover:bg-gray-700  px-3 py-2 rounded-md font-medium"> Home</p></Link>
                                            <Link to="/services"><p className="text-white hover:bg-gray-700  px-3 py-2 rounded-md font-medium"> Services</p></Link>
                                            <Link to="/bookingList"><p className="text-white hover:bg-gray-700  px-3 py-2 rounded-md font-medium"> Bookings</p></Link>
                                            <Link to="/orderList"><p className="text-white hover:bg-gray-700  px-3 py-2 rounded-md font-medium"> Admin</p></Link>
                                            <Link to="/contact"><p className="text-white hover:bg-gray-700  px-3 py-2 rounded-md font-medium"> Contact</p></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {user ? <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" /> : <Link to="/login"><FontAwesomeIcon className="text-2xl object-fill w-20  rounded-full bg-gray-200" icon={faUser} /></Link>}
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link to="/home"><p className="text-white hover:bg-gray-700  px-3 py-2 rounded-md font-medium"> Home</p></Link>
                                <Link to="/services"><p className="text-white hover:bg-gray-700  px-3 py-2 rounded-md font-medium"> Services</p></Link>
                                <Link to="/bookingList"><p className="text-white hover:bg-gray-700  px-3 py-2 rounded-md font-medium"> Bookings</p></Link>
                                <Link to="/orderList"><p className="text-white hover:bg-gray-700  px-3 py-2 rounded-md font-medium"> Admin</p></Link>
                                <Link to="/contact"><p className="text-white hover:bg-gray-700  px-3 py-2 rounded-md font-medium"> Contact</p></Link>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            {/* padding bottom */}
            <div className="pb-16"></div>
        </div>
    )
}


