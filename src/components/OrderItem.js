import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseOrderedItem,
  decreaseOrderedItem,
  removeOrderedItem,
} from "../store/order/actions";
import Button from "react-bootstrap/Button";

export default function OrderItem(props) {
  const { id, quantity, price, image, name } = props;
  const dispatch = useDispatch();

  const handleDecreaseItem = (event) => {
    event.preventDefault();
    dispatch(decreaseOrderedItem(id));
  };

  const handleIncreaseItem = (event) => {
    event.preventDefault();
    dispatch(increaseOrderedItem(id));
  };

  const handleRemoveItem = (event) => {
    event.preventDefault();
    dispatch(removeOrderedItem(id));
  };

  return (
    <div style={{ margin: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={image} alt="product" width="25" height="50" />
        <p style={{ paddingLeft: "10px" }}>{name}</p>
        <Button
          style={{
            height: "30px",
            backgroundColor: "white",
            color: "grey",
            border: "white",
          }}
          onClick={handleRemoveItem}
        >
          x
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="light" onClick={handleDecreaseItem}>
          -
        </Button>
        <p style={{ margin: "5px" }}>{quantity}</p>
        <Button variant="light" onClick={handleIncreaseItem}>
          +
        </Button>
        <p style={{ margin: "5px" }}> x €{price.toFixed(2)}</p>
      </div>
    </div>
  );
}
