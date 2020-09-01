import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

let count = 0;

export default function PaymentDetails() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, cardNumber, cvc, expiryDate);
    setName("");
    setCardNumber("");
    setCvc("");
    setExpiryDate("");
  };

  const handleExpiration = (event) => {
    if (expiryDate.length === 1) {
      setExpiryDate(`${event.target.value}/`);
    } else {
      setExpiryDate(event.target.value);
    }
  };

  //COME BACK AND FIX THIS
  const handleCardNumber = (event) => {
    if (count === 3) {
      setCardNumber(`${event.target.value}-`);
      count = 0;
    } else {
      setCardNumber(event.target.value);
      count = count + 1;
    }
  };

  return (
    <Container>
      <h1>Payment Details</h1>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name on Card</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name on card"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCardNumber">
          <Form.Label>Card number</Form.Label>
          <Form.Control
            type="text"
            maxLength="19"
            placeholder="xxxx xxxx xxxx xxxx"
            value={cardNumber}
            onChange={handleCardNumber}
          />
        </Form.Group>
        <Form.Group controlId="formBasicExpiration">
          <Form.Label>Expiration</Form.Label>
          <Form.Control
            type="text"
            value={expiryDate}
            onChange={handleExpiration}
            maxLength="5"
          />
        </Form.Group>

        <Form.Group controlId="formBasicCVC">
          <Form.Label>CVC</Form.Label>
          <Form.Control
            type="text"
            value={cvc}
            maxLength="3"
            onChange={(event) => {
              setCvc(event.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
