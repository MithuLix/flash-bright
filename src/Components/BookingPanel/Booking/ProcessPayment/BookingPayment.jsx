import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import "./BookingPayment.css";
const stripePromise = loadStripe("pk_test_51IkUGQDgqQnK6AZuzJt1sqbBOBMgzxSX72hYdGJpjegZITWHTDiv8MHHvDFGBJPdAR0rYhQtUhIWTDM408uLBa6v007PCeIvJN");

export default function BookingPayment ({handlePayment}) {
    return (
        <>
            <Elements stripe={stripePromise}>
                <PaymentForm handlePayment={handlePayment}/>
            </Elements>
        </>
    )
};