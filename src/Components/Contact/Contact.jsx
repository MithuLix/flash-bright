import React from 'react';

const Contact = () => {
    return (
        <div className=" md:container xs:p-4">
            <p className="text-center py-6 pb-12 text-5xl font-bold text-white">Contact Us</p>
            <div className="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">

                <form>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block text-gray-100 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="mohaiminul" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block text-gray-100 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Islam" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block text-gray-100 text-xs font-bold mb-2" for="grid-password">
                                Email Address
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="example@gmail.com" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block text-gray-100 text-xs font-bold mb-2" for="grid-password">
                                Your Message
                            </label>
                            <textarea rows="6" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                            </textarea>
                        </div>
                        <div className="flex justify-between w-full px-3">
                            <div className="md:flex md:items-center">
                                <label className="block text-gray-100 font-bold">
                                    <input className="mr-2 leading-tight" type="checkbox" />
                                    <span className="text-sm">
                                        Send me your newsletter!
                                    </span>
                                </label>
                            </div>
                            <button className="font-medium bg-gray-700 border hover:bg-gray-600 text-white px-4 py-2 rounded focus:outline-none">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>

                <div class="w-full object-cover h-64 lg:w-full  md:h-screen bg-cover bg-center xs:mt-24"
                    style={{ backgroundImage: 'url(https://i.ibb.co/x8PhCWt/contact-Svg.png)', marginTop: '-10%'}}>
                </div>
            </div>
        </div>
    );
};

export default Contact;