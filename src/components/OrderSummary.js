import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { selectOrder } from "../store/order/selector";
import Container from "react-bootstrap/Container";

export default function OrderSummary() {
  const order = useSelector(selectOrder());

  return (
    <Container style={{ border: "solid grey", padding: "10px" }}>
      <h1>Order Summary</h1>
      {order.map((item) => (
        <OrderItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.img}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </Container>
  );
}
