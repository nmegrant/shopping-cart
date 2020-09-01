import React from "react";
import PaymentDetails from "../components/PaymentDetails";
import OrderSummary from "../components/OrderSummary";

import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";

export default function MainPage() {
  return (
    <div style={{ display: "flex" }}>
      <Container as={Col} md={{ span: 3, offset: 1 }} className="mt-5">
        <PaymentDetails />
      </Container>
      <Container as={Col} md={{ span: 3, offset: 3 }} className="mt-5">
        <OrderSummary />
      </Container>
    </div>
  );
}
