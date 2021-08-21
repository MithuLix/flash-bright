import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import AdminDrawer from '../AdminDrawer/AdminDrawer';
import ManageDestinationCard from './ManageServiceCard';


export default function ManageServices () {
    const [manageServices, setManageService] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => { fetch("http://localhost:5000/getServices")
        .then(res => res.json())
        .then(data => {  setManageService(data); setSpinner(false) })
    }, []);

    const book = { backgroundColor:"#f1f1f1",};
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff"};
    const halfCol  ={lineHeight:"1.2rem",  background: "rgba(255,255,255,0.8)",
                boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.2)", margin:"1rem", borderRadius:".5rem"}

    return (
    <div>
        <Container>
            <Row className="g-0">
                <Col><AdminDrawer/></Col>
                <Col md={9}style={book}>
                    <h6 style={h6}>MANAGE DESTINATIONS</h6>
                    <Col style={halfCol} >
                        <Table striped bordered hover size="sm">
                            <thead><tr><th>Name</th> <th>Price</th><th>Action</th></tr></thead>
                            <tbody>{manageServices.map((destination) => <ManageDestinationCard destination={destination} key={destination._id}></ManageDestinationCard>)}</tbody>
                        </Table>
                        <Row> 
                            {spinner && <div className="text-center"> <Spinner animation="border" variant="secondary" /></div>} 
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>
    </div>
    );
};