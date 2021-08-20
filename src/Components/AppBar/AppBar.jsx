/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons';
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
        <div className="sticky top-0 z-50">
            <Disclosure as="nav" className="bg-gray-600">
                {({ open }) => (
                    <>
                        <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
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
                                                className="block lg:block h-8 w-auto"
                                                src="https://i.ibb.co/syLS9zW/logo.png"
                                                alt="Workflow"
                                            />
                                        </Link>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex  space-x-4">
                                            <Link to="/home"><p className="text-red-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"> Home</p></Link>
                                            <Link to="/gallery"><p className="text-red-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"> Gallery</p></Link>
                                            <Link to="/services"><p className="text-red-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"> Services</p></Link>
                                            <Link to="/blog"><p className="text-red-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"> Blog</p></Link>
                                            <Link to="/contact"><p className="text-red-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"> Contact</p></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
                                                <span className="sr-only">Open user menu</span>
                                                {user ? <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" /> : <Link to="/login"><FontAwesomeIcon className="h-8 w-8 rounded-full" icon={faUser} /></Link>}
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link to="/home"><p className="text-red-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"> Home</p></Link>
                                <Link to="/gallery"><p className="text-red-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"> Gallery</p></Link>
                                <Link to="/services"><p className="text-red-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"> Services</p></Link>
                                <Link to="/blog"><p className="text-red-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"> Blog</p></Link>
                                <Link to="/contact"><p className="text-red-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"> Contact</p></Link>
                                {user ? <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" /> : <Link to="/login"><FontAwesomeIcon className="h-8 w-8 rounded-full" icon={faUserAlt} /></Link>}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}