import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

let count = 0;
let count_dashes = 0;

export default function PaymentDetails() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, cardNumber, cvc, expiryDate);

    if (!name || !cardNumber || !cvc || !expiryDate) {
      console.log("Please supply all information");
      //Blah ugly alert but better than nothing for now
      alert("Please supply all information");
    } else {
      //Blah ugly alert but better than nothing for now
      alert(`${name}'s order ready for review!`);
      setName("");
      setCardNumber("");
      setCvc("");
      setExpiryDate("");
    }
  };

  //kind of a hacky way to mimic a credit card payment system. Not perfect, but I didn't want to try to figure out a new library
  //(I had considered it at first and install one) while under time pressure. Not perfect but an adequate mock up (I hope).
  const handleCardNumber = (event) => {
    if (!/[0-9]/.test(event.target.value) && cardNumber.length === 0) {
      //alert to save time and give some feedback but they are uuuuuugly
      alert("Only numbers are valid");
    }
    if (/[0-9]/.test(event.target.value)) {
      if (count === 3 && count_dashes !== 3) {
        setCardNumber(`${event.target.value}-`);
        count = 0;
        count_dashes = count_dashes + 1;
      } else {
        setCardNumber(event.target.value);
        count = count + 1;
      }
    } else {
      setCardNumber("");
    }
  };

  const handleExpiration = (event) => {
    if (!/[0-9]/.test(event.target.value) && expiryDate.length === 0) {
      //alert to save time and give some feedback but they are uuuuuugly
      alert("Only numbers are valid");
    }
    if (/[0-9]/.test(event.target.value)) {
      if (expiryDate.length === 1) {
        setExpiryDate(`${event.target.value}/`);
      } else {
        setExpiryDate(event.target.value);
      }
    } else {
      setExpiryDate("");
    }
  };

  const handleCvc = (event) => {
    if (!/[0-9]/.test(event.target.value) && cvc.length === 0) {
      //alert to save time and give some feedback but they are uuuuuugly
      alert("Only numbers are valid");
    }
    if (/[0-9]/.test(event.target.value)) {
      setCvc(event.target.value);
    } else {
      setCvc("");
    }
  };

  return (
    <Container>
      <h1>Payment Details</h1>
      <Container as={Col} md={{ span: 6 }} className="mt-5">
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
              onChange={handleCvc}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Review Order
          </Button>
        </Form>
      </Container>
    </Container>
  );
}
