import React, { useState } from 'react';
import { Button, ButtonGroup, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AdminDrawer from '../AdminDrawer/AdminDrawer';
const axios = require('axios').default;


export default function AddService() {
    const [modal, setModal] = useState(false);
    const [imageURL, setImageURL] = useState(null);

    const handleImage = (e) => {
        const imageData = new FormData();
        imageData.set('key', '724b255f740bd113495d3666badd31e5')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) { console.log(error) });
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const addService = { title: data.title, price: data.price, imageURL: imageURL, description: data.description }
        if (imageURL) {
            fetch('http://localhost:5000/addService', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(addService)
            })
                .then(res => res.json())
                .then(data => {
                    setModal(true);
                })
        }
    };

    return (
        <div className="md:container">
            <div class="flex flex-wrap overflow-hidden">

                <div class="px-2 w-1/2 overflow-hidden xs:w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
                    <AdminDrawer />
                </div>

                <div class="px-4 py-4 w-1/2 overflow-hidden xs:w-full sm:w-full md:ml-12 md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <p className="text-2xl font-bold my-4" >Add a new Service</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="title" ref={register({ required: true })} className="bg-gray-200 p-3 my-2 w-full focus:bg-gray-50 rounded font-medium" type="text" placeholder="Enter title" />
                        <textarea name="description" as="textarea" rows={6} ref={register({ required: true })} className="bg-gray-200 p-3 my-2 w-full focus:bg-gray-50 rounded font-medium" placeholder="Enter Description" />
                        <div className="flex flex-row justify-between">
                            <input name="image" onChange={handleImage} ref={register({ required: true })} className="bg-gray-200 p-3 my-2 focus:bg-gray-50 rounded font-medium" type="file" />
                            <input name="price" ref={register({ required: true })} className="bg-gray-200 p-3 my-2 focus:bg-gray-50 rounded font-medium" type="number" placeholder="Enter price" />
                        </div>
                        {imageURL && <strong >Image uploaded successfully. <br /></strong>}

                        <button type="submit" className="shadow bg-gray-500 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-6 my-2 rounded">
                            Save to database
                        </button>
                    </form>
                </div>
            </div>
            {/* modal */}
            <modal show={modal} onHide={() => setModal(false)} centered>
                <body><h6>Service added successfully.</h6></body>
                <footer><button className="text-gray-500 hover:text-gray-600" onClick={() => setModal(false)}>Close</button></footer>
            </modal>
        </div>
    );
};

