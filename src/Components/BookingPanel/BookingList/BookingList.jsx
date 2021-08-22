// import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from '../../../App';
// import BookingListCards from './BookingListCards';
// import { Link } from 'react-router-dom';

// export default function BookingList() {
//     const [loggedInUser] = useContext(UserContext)
//     const [bookingLists, setBookingLists] = useState([]);
//     const [spinner, setSpinner] = useState(true);

//     useEffect(() => {
//         fetch("https://flash-bright-backend.herokuapp.com/getBookingList?email=" + loggedInUser.email)
//             .then(res => res.json())
//             .then(data => { setBookingLists(data); setSpinner(false) })
//     }, [])


//     return (
//         <div className="container bg-gray-700 rounded p-6 h-auto md:w-2/3 text-center">
//             <h6 className="text-white text-center text-2xl font-medium pb-6"> Dear, <span className="text-red-400">{loggedInUser.name}</span> You've <span className="text-red-400">{bookingLists.length}</span> Service.</h6>
//             <div class=" flex justify-center items-center">
//                 {spinner && <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>}
//             </div>
//             <div id="bookingList">
//                 {bookingLists.map(list => <BookingListCards list={list} key={list._id}></BookingListCards>)}
//             </div>
//             <Link to={'/services'}>
//                 <button className=" font-medium bg-gray-700 border hover:bg-gray-600 text-white px-4 py-2 my-4 rounded focus:outline-none">Buy a Service</button>
//             </Link>
//         </div>
//     );
// };

import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import BookingDrawer from '../BookingDrawer/BookingDrawer';
import BookingListCards from './BookingListCards';

export default function BookingList () {
    const [loggedInUser] = useContext(UserContext)
    const [bookingLists, setBookingLists] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch("https://flash-bright-backend.herokuapp.com/getBookingList?email=" + loggedInUser.email)
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
                        <h6 style={h6}> DEAR, <span className="text-uppercase text-danger">{loggedInUser.name}</span> YOU'VE <span className="text-danger">{bookingLists.length}</span> service.</h6>
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