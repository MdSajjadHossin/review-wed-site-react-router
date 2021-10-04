import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className="bg-primary rounded-1 fw-bold px-3" href="/home" >Hermony Music School</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink id="nav-link" to="/home">Home</NavLink>
      <NavLink id="nav-link" to="/services">Services</NavLink>
      <NavLink id="nav-link" to="/faculty">Faculty</NavLink>
      <NavLink id="nav-link" to="/about">About</NavLink>
    </Nav>
    </Container>
  </Navbar>
</>

        </div>
    );
};

export default Header;