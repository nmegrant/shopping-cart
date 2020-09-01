import React from "react";
import { useSelector } from "react-redux";
import { selectOrder } from "../store/order/selector";
import Table from "react-bootstrap/Table";

export default function CalculateTotal() {
  const order = useSelector(selectOrder());

  const subtotal = order.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  //tax in netherlands is 21%
  const tax = subtotal * 0.21;

  //covid time - all shipping is FREE
  const shipping = 0;

  const total = subtotal + tax + shipping;

  return (
    <Table
      borderless
      style={{ marginTop: "15px", border: "solid grey", padding: "10px" }}
    >
      <tbody>
        <tr>
          <td>Subtotal</td>
          <td>€{subtotal.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Tax</td>
          <td>€{tax.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>€{shipping.toFixed(2)}</td>
        </tr>
        <tr>
          <td style={{ fontWeight: "bold" }}>Total</td>
          <td>€{total.toFixed(2)}</td>
        </tr>
      </tbody>
    </Table>
  );
}
