import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>Logo</Navbar.Brand>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link as={NavLink} exact to="/">
            Women's
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} exact to="/">
            Men's
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} exact to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} exact to="/">
            Travel
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} exact to="/">
            Beauty
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} exact to="/">
            Sales
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
