import React, { useMemo, useState } from "react";
import {useStripe,useElements,CardNumberElement,CardCvcElement,CardExpiryElement} from "@stripe/react-stripe-js";
import { Button, Card, Col, Container, Form, InputGroup, Modal} from "react-bootstrap";
import { Link } from "react-router-dom";

const useOptions = () => {
  const options = useMemo(() => ({
    style: {base: {color: "#424770",letterSpacing: "0.025em",
    fontFamily: "Source Code Pro, monospace","::placeholder": {color: "#aab7c4"}},
    invalid: {color: "#9e2146"}}}),[]);return options;};



export default function PaymentForm ({handlePayment}) {
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [paymentError, setPaymentError] = useState(null);
  const [modal, setModal] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const handleSubmit = async event => {event.preventDefault();
  if (!stripe || !elements) { return;}

const {error, paymentMethod} = await stripe.createPaymentMethod({
  type: 'card',card: elements.getElement(CardNumberElement)
});

if (error) {setPaymentError (error.message);setPaymentSuccess(null); setModal(true)} 
  else {handlePayment(paymentMethod.id); setPaymentSuccess(paymentMethod.id); setPaymentError(null); setModal(true)}
};


//css
const txt = {fontSize:".9rem", fontWeight:"500", marginBottom:"-.3rem" }
const titleBtn = {textDecoration: 'inherit', color:"white", backgroundColor:"#4f4f4f",border:"none", fontWeight:"500"};

return (
    <Container >
      <Form onSubmit={handleSubmit}>
        <Card.Text style={txt}>PAY WITH STRIPE METHOD :</Card.Text>
        <InputGroup className="mb-2">
          <CardNumberElement options={options} />
          <Col className="d-flex">
            <CardExpiryElement options={options}/>
            <CardCvcElement options={options}/>
          </Col>
        </InputGroup>
          <Button className="btn-sm" type="submit" style={titleBtn} disabled={!stripe}>Pay</Button>
      </Form>

        <Modal show={modal} onHide={()=>setModal(false)} centered>
            <Modal.Body>
              {paymentError && <h6 style={{color:"red"}}>{paymentError}</h6>}
              {paymentSuccess && <h6 style={{color:"green"}}>Your payment was success. Have a fantastic Trip.</h6>}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger btn-sm" onClick={()=> setModal(false)}>Close</Button>
              <Link to="/home"><Button variant="secondary btn-sm" >Back to Home</Button></Link>
            </Modal.Footer>
        </Modal>
    </Container>
  );
};
