import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>Logo</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} exact to="/">
          Women's
        </Nav.Link>
        <Nav.Link as={NavLink} exact to="/">
          Men's
        </Nav.Link>
        <Nav.Link as={NavLink} exact to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} exact to="/">
          Travel
        </Nav.Link>
        <Nav.Link as={NavLink} exact to="/">
          Beauty
        </Nav.Link>
        <Nav.Link as={NavLink} exact to="/">
          Sales
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
