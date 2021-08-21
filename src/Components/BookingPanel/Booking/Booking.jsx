import React, { useContext, useEffect, useState } from 'react';
import BookingPayment from './ProcessPayment/BookingPayment';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import { useParams } from 'react-router-dom';
import BookingDrawer from '../BookingDrawer/BookingDrawer';


export default function Booking() {
    const { register, handleSubmit } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const [paymentData, SetPaymentData] = useState(null);

    const { id } = useParams();
    const [booking, setBooking] = useState({});
    const { title, price } = booking;
    useEffect(() => {
        fetch('http://localhost:5000/getServices/' + id)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [id])

    const onSubmit = data => { SetPaymentData(data); };
    const handlePaymentSuccess = paymentId => {
        const orderDetails = { email: loggedInUser.email, title: title, payment: paymentData, status: 'pending', paymentId, orderTime: new Date() }
        fetch('http://localhost:5000/newBooking', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
    };

    return (
        <div className="md:container">
            <div className="flex flex-wrap overflow-hidden">

                <div className="px-2 w-1/2 overflow-hidden xs:w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
                    <BookingDrawer />
                </div>

                <div class=" px-4 py-4 w-1/2 overflow-hidden xs:w-full sm:w-full md:ml-12 md:w-1/2 lg:w-1/2 xl:w-1/2">

                    <h6 className="font-medium text-white pb-4 text-lg">PLEASE, FILL OUT THESE DETAILS.</h6>
                    <div md={5}>
                        <div style={{ display: paymentData ? 'none' : 'block' }} >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} className="bg-gray-300 p-3 my-2 w-full focus:bg-gray-50 rounded font-medium" type="text" placeholder="enter name" />
                                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} className="bg-gray-300 p-3 my-2 w-full focus:bg-gray-50 rounded font-medium" type="email" placeholder="enter email" />
                                <input name="phone" ref={register({ required: true })} className="bg-gray-300 p-3 my-2 w-full focus:bg-gray-50 rounded font-medium" type="number" placeholder="enter phone" />
                                <input name="address" ref={register({ required: true })} className="bg-gray-300 p-3 my-2 w-full focus:bg-gray-50 rounded font-medium" type="text" placeholder="enter address" />
                                <input name="title" value={title} ref={register({ required: true })} className="bg-gray-300 p-3 my-2 w-full focus:bg-gray-50 rounded font-medium" type="text" disabled />
                                <button type="submit" className="shadow bg-gray-700 hover:bg-gray-600 border focus:shadow-outline focus:outline-none text-white font-bold py-3 px-6 my-2 rounded"> Continue ${price}</button>
                            </form>
                        </div>
                        <div style={{ display: paymentData ? 'block' : 'none' }} >
                            <BookingPayment handlePayment={handlePaymentSuccess}></BookingPayment>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

