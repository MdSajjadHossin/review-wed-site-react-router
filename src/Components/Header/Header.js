import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className="bg-primary rounded-1 fw-bold px-3" href="/home" >Hermony Music School</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/faculty">Faculty</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
        </div>
    );
};

export default Header;