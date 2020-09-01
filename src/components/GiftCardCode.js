import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

export default function GiftCardCode() {
  const [code, setCode] = useState();

  //wasn't sure if I should implement this or not. Didn't see it mentioned in the directions so I left it (also running out of time)
  const submitCode = (event) => {
    event.preventDefault();
    //Blah ugly alert but better than nothing for now
    alert("Discount invalid!");
    console.log(code);
    setCode("");
  };

  return (
    <Form style={{ marginTop: "10px", border: "solid grey", padding: "10px" }}>
      <Form.Group controlId="formBasicCode">
        <Form.Label>Gift card/Discount code</Form.Label>
        <Form.Control
          type="text"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
      </Form.Group>
      <Button variant="outline-primary" type="submit" onClick={submitCode}>
        Submit
      </Button>
    </Form>
  );
}
