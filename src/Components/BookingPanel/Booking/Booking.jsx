import React, { useContext, useEffect, useState } from 'react';
import BookingPayment from './ProcessPayment/BookingPayment';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import { useParams } from 'react-router-dom';


export default function Booking() {
    const { register, handleSubmit } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const [paymentData, SetPaymentData] = useState(null);

    const { id } = useParams();
    const [booking, setBooking] = useState({});
    const { title, price } = booking;
    useEffect(() => {
        fetch('https://flash-bright-backend-production.up.railway.app/getServices/' + id)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [id])

    const onSubmit = data => { SetPaymentData(data); };
    const handlePaymentSuccess = paymentId => {
        const orderDetails = { email: loggedInUser.email, title: title, payment: paymentData, status: 'pending', paymentId, orderTime: new Date() }
        fetch('https://flash-bright-backend-production.up.railway.app/newBooking', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
    };

    return (
        <div className="container bg-gray-700 rounded p-6  md:w-2/4 text-center">

            <h6 className="font-medium text-white pb-4 text-lg">Please, fill out these details.</h6>
            <div md={5}>
                <div style={{ display: paymentData ? 'none' : 'block' }} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} className="bg-gray-300 p-3 my-2 w-full focus:bg-gray-50 rounded font-medium" type="text" placeholder="enter name" />
                        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} className="bg-gray-300 p-3 my-2 w-full focus:bg-gray-50 rounded font-medium" type="email" placeholder="enter email" />
                        <input name="phone" ref={register({ required: true })} className="bg-gray-300 p-3 my-2 w-full focus:bg-gray-50 rounded font-medium" type="number" placeholder="enter phone" />
                        <input name="address" ref={register({ required: true })} className="bg-gray-300 p-3 my-2 w-full focus:bg-gray-50 rounded font-medium" type="text" placeholder="enter address" />
                        <input name="title" value={title} ref={register({ required: true })} className="bg-gray-300 p-3 my-2 w-full focus:bg-gray-50 rounded font-medium" type="text" disabled />
                        <button type="submit" className="shadow bg-gray-700 hover:bg-gray-600 border focus:shadow-outline focus:outline-none text-white font-bold py-3 px-6 my-2 rounded "> Continue with ${price}</button>
                    </form>
                </div>
                <div style={{ display: paymentData ? 'block' : 'none' }} >
                    <BookingPayment handlePayment={handlePaymentSuccess}></BookingPayment>
                </div>
            </div>
        </div>
    );
};

