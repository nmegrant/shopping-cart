import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

export default function OrderItem(props) {
  const dispatch = useDispatch();
  console.log(props.quantity);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={props.image} alt="product picture" width="25" height="50" />
        <p style={{ paddingLeft: "10px" }}>{props.name}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="light">-</Button>
        <p style={{ margin: "5px" }}>{props.quantity}</p>
        <Button variant="light">+</Button>
        <p style={{ margin: "5px" }}>{props.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
