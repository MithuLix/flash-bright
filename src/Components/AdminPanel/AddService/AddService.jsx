import React, { useState } from 'react';
import {  Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AdminDrawer from '../AdminDrawer/AdminDrawer';
const axios = require('axios').default;


export default function AddService() {
    const [modal, setModal] = useState(false);
    const [imageURL, setImageURL] = useState(null);

    const handleImage = (e) => {
        const imageData = new FormData();
        imageData.set('key', '72c7fe360a9a990fb11c2943aaa84494')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageURL(res.data.data.display_url))
            .catch(err => console.log(err))
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const addService = { title: data.title, price: data.price, imageURL: imageURL, description: data.description }
        if (imageURL) {
            fetch('https://travel-hub-server.herokuapp.com/addService', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(addService)
            })
                .then(res => res.json())
                .then(data => setModal(true))
        }
    }


    return (
        <div className="md:container">
            <div class="flex flex-wrap overflow-hidden">

                <div class="px-2 w-1/2 overflow-hidden xs:w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
                    <AdminDrawer />
                </div>

                <div class="px-4 py-4 w-1/2 overflow-hidden xs:w-full sm:w-full md:ml-12 md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-2xl font-bold">Add a new Service</p>
                        <div className=" w-full mb-6 mt-6">
                            <label className="block text-gray-700 text-xs font-bold mb-2" for="title">
                                Title
                            </label>
                            <input
                                name="title" {...register('test', { required: true })}
                                className="appearance-none w-full block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="title" />
                        </div>

                        <div className="flex flex-wrap mb-4">
                            <div className="w-full">
                                <label className="block text-gray-700 text-xs font-bold mb-2" for="description">
                                    Description of Service
                                </label>
                                <textarea
                                    name="description" as="textarea" {...register('test', { required: true })} rows="6"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                </textarea>
                            </div>
                        </div>

                        <div className="flex flex-wrap mb-4">
                            <div className="md:w-1/2">
                                <label className="block text-gray-700 text-xs font-bold mb-2" for="price">
                                    $ Price
                                </label>
                                <input
                                    name="price" {...register('test', { required: true })}
                                    className="appearance-none w-full block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="price" />
                            </div>

                            <div className="md:w-1/2 px-4 ">
                                <label class="w-64 flex flex-col items-center px-2 py-2 block text-gray-700 text-xs font-bold mb-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer">
                                    <svg class="w-6 h-6" fill="#F87171" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                    <span class="mt-2">Select an Image</span>
                                    <input
                                        name="image" onChange={handleImage} {...register('test', { required: true })}
                                        type='file' className="hidden"
                                    />
                                    {imageURL && <strong >Image uploaded successfully.</strong>}
                                </label>
                            </div>
                        </div>

                        <button className="shadow bg-red-400 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                            Save Service
                        </button>
                    </form>
                </div>

                {/* modal */}
                <Modal show={modal} onHide={() => setModal(false)} centered>
                    <Modal.Body><h6>Service added successfully.</h6></Modal.Body>
                    <Modal.Footer><button className="text-gray-500 hover:text-gray-600" onClick={() => setModal(false)}>Close</button></Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

