import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../../assets/styles/header.scss"
import LogoImage from "../../assets/images/logo.png"
import { logout } from '../../store/auth/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
            
    const [userInfo, setUser] = useState(false);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout(
            setUser(false)
        ));
        localStorage.removeItem('Token');
        window.location.href = '/';
    }

    return (
        <>
            <Navbar expand="lg">
                <Container className='navbar-container_ui'>
                    <Link className="navbar-brand" to='/' > <img src={LogoImage} alt="logo" /> </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end navbar-mobile-menu">
                        <Nav className="ms-auto">
                            <Link className='nav-link' to='/' >Home</Link>
                            <Link className='nav-link' to="/about-us">About Us</Link>
                            <NavDropdown title="Matches" id="collasible-nav-dropdown">
                                <Link className="dropdown-item" to="/matches"> <span>  New Matches </span> </Link>
                                <Link className="dropdown-item" to="/viewed-profile" > <span> Who Viewed my Profile  </span> </Link>
                                <Link className="dropdown-item" to="/viewed-Not-Contacted"> <span> Viewed & not Contact  </span> </Link>
                                <Link className="dropdown-item" to="/premium-Members"> <span>   Premium Members  </span> </Link>
                                <Link className="dropdown-item" to="/premium-Members"> <span>   Shortlisted Profile  </span> </Link>
                                <Link className="dropdown-item" to="/upgrade"> <span>   Upgrade  </span> </Link>
                            </NavDropdown>
                            {/* <Nav.Link href="#Search">Search</Nav.Link> */}
                            <NavDropdown title="Messages" id="collasible-nav-dropdown">
                                <Link className="dropdown-item" to="/inbox"> <span> Inbox </span> </Link>
                                <Link className="dropdown-item" to="/send"> <span>   Sent </span> </Link>
                            </NavDropdown>
                            <Link className="nav-link" to="/contact-us"> Contact Us </Link>
                            { userInfo ?
                                 
                                <Link className='nav-link signUpBtn' to="/"
                                    onClick={() => {
                                        handleLogout();
                                    }}
                                  > Logout </Link> 
                                :
                                <Link className='nav-link loginBtn' to="/login"> Login </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default Header;