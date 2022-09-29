import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../../assets/styles/header.scss"
import LogoImage from "../../assets/images/logo.png"

const Header = () => {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand to="/">
                        <img src={LogoImage} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ms-auto">
                            <Link className='nav-link' to='/' >Home</Link>
                            <Link className='nav-link' to="/about-us">About Us</Link>
                            <NavDropdown title="Matches" id="collasible-nav-dropdown">
                                <Link class="dropdown-item" to="/matches"> <span>  New Matches </span> </Link>
                                <Link class="dropdown-item" to="/viewed-profile" > <span> Who Viewed my Profile  </span> </Link>
                                <Link class="dropdown-item" to="/viewed-Not-Contacted"> <span> Viewed & not Contact  </span> </Link>
                                <Link class="dropdown-item" to="/premium-Members"> <span>   Premium Members  </span> </Link>
                                <Link class="dropdown-item" to="/premium-Members"> <span>   Shortlisted Profile  </span> </Link>
                            </NavDropdown>
                            <Nav.Link href="#Search">Search</Nav.Link>
                            <Nav.Link href="#home">Messages</Nav.Link>
                            <Nav.Link to="/login">Contact Us</Nav.Link>
                            <Link className='nav-link' to="/login"> Login </Link>
                            <Link className='nav-link' to="/signUp"> Sign Up </Link>

                            {/* <Link to="/login"> Login </Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default Header;