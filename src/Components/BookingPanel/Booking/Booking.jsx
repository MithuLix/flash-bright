import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import BookingPayment from './ProcessPayment/BookingPayment';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import { useParams } from 'react-router-dom';
import BookingDrawer from '../BookingDrawer/BookingDrawer';


export default function Booking () {
    const { register, handleSubmit } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const [paymentData, SetPaymentData] = useState(null); 

    const {id} = useParams();
    const [booking, setBooking] = useState({});
    const { title, price} = booking;
    useEffect(() => {
        fetch('http://localhost:5000/getServices/' + id)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [id])
 
    const onSubmit = data => {SetPaymentData(data);};
    const handlePaymentSuccess = paymentId => {
        const orderDetails = {email:loggedInUser.email, title: title, payment:paymentData,  status:'pending', paymentId, orderTime: new Date()}
        fetch('http://localhost:5000/newBooking', {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => { console.log(data)})
    };

    //css
    const book = { backgroundColor:"#f1f1f1"};
    const halfCol = { margin:"2rem 1rem"};
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff"};
    const formCtrl = { marginBottom:"1rem", backgroundColor:"#fff", border:"none"};
    const titleN = { marginBottom:"1rem", backgroundColor:"#fff", border:"none", fontWeight:"600"};
    const titleBtn = {textDecoration: 'inherit', color:"white", backgroundColor:"#4f4f4f",border:"none", fontWeight:"500"};

    return (
        <div>
            <Container>
                <Row className="g-0">
                    <Col><BookingDrawer/></Col>
                    <Col md={10}style={book}>
                        <h6 style={h6}>PLEASE, FILL THESE DETAILS TO PLACE ORDER.</h6>
                        <Col style={halfCol} md={5}>
                            <Row style={{display: paymentData ? 'none' : 'block'}} >
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <FormControl name="name" defaultValue={loggedInUser.name} style={formCtrl} ref={register({ required: true })} size="md" placeholder="enter name"/>
                                    <FormControl name="email" defaultValue={loggedInUser.email} style={formCtrl} ref={register({ required: true })} size="md" type="email" placeholder="enter email"/>
                                    <FormControl name="phone" style={formCtrl} ref={register({ required: true })} size="md" type="number" placeholder="enter phone"/>
                                    <FormControl name="address" style={formCtrl} ref={register({ required: true })} size="md"  placeholder="address"/>
                                    <FormControl name="title" value={title} style={titleN}  size="md"  disabled/>
                                    <Button className="btn-sm" type="submit" style={titleBtn}> Continue with ${price}</Button>
                                </Form>
                            </Row>
                            <Row style={{display: paymentData ? 'block' : 'none'}} >
                                <BookingPayment handlePayment={handlePaymentSuccess}></BookingPayment>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

