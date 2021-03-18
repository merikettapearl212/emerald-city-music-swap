import { MDBNavbarNav } from "mdbreact";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import mainlogo from "../../images/mainlogo.png"

function NavTabs() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="p-0">
        <img
          src={mainlogo}
          className="img-fluid animated fadeInLeft"
          href="/"
          style={{ width: "12rem", height: "3rem"}}
          alt=""
              />
      </Navbar.Brand>
      <MDBNavbarNav right>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto animated fadeInLeft" id="name">
            <Nav.Link href="/" style={{ fontSize: "20px", color: "black" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/signup" style={{ fontSize: "20px", color: "black" }}>
              Signup
            </Nav.Link>
            <Nav.Link href="/login" style={{ fontSize: "20px", color: "black" }}>
              Login
            </Nav.Link>
            <Nav.Link href="#" style={{ fontSize: "20px", color: "black" }}>
              Something
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </MDBNavbarNav>
    </Navbar>
  );
}
export default NavTabs;
