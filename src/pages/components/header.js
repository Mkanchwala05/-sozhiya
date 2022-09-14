import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../../assets/styles/header.scss"
import LogoImage from "../../assets/images/logo.png"

const Header = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={LogoImage} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#Matches">Matches</Nav.Link>
            <Nav.Link href="#Search">Search</Nav.Link>
            <Nav.Link href="#home">Messages</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
};

export default Header;