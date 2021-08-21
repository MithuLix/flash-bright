import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import BookingListCards from './BookingListCards';
import './BookingList.css';
import BookingDrawer from '../BookingDrawer/BookingDrawer';

export default function BookingList () {
    const [loggedInUser] = useContext(UserContext)
    const [bookingLists, setBookingLists] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/getBookingList?email=" + loggedInUser.email)
        .then(res => res.json())
        .then(data => {setBookingLists(data); setSpinner(false)})
    }, [])

    //css
    const book = { backgroundColor:"#f1f1f1"}
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff",}

    return (
        <div>
            <Container>
                <Row className="g-0">
                    <Col><BookingDrawer/></Col>
                    <Col md={10}style={book}>
                        <h6 style={h6}> DEAR, <span className="text-uppercase text-danger">{loggedInUser.name}</span> YOU'VE <span className="text-danger">{bookingLists.length}</span> BOOKINGS.</h6>
                        <Row className="g-4 mt-3"> 
                            {spinner && <div className="text-center"> <Spinner animation="border" variant="secondary" /></div>} 
                        </Row>
                        <Col id="bookingList">
                            {bookingLists.map(list => <BookingListCards list={list} key={list._id}></BookingListCards>)}
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};