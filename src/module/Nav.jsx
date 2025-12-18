import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar
      bg="default"
      expand="lg"
      className="p-4 w-100"
      style={{ position: 'absolute' }}
    >
      <Container>
        <Navbar.Brand href="#home" className="font-dancing">
          <h2 className="text-light">
            Shalma <span className="text-warning">&amp;</span> Kevin
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto font-readex">
            <Nav.Link href="#home" className="me-4 text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="me-4 text-light">
              About
            </Nav.Link>
            <Nav.Link href="#story" className="me-4 text-light">
              Our Story
            </Nav.Link>
            <Nav.Link href="#when" className="me-4 text-light">
              When
            </Nav.Link>
            <Nav.Link href="#guest-book" className="text-light">Guest Book</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
