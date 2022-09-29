import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import "../../assets/styles/footer.scss"

const FooterUI = () => {
    return (
        <>
            <footer className="mt-5 pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={5} xs={12} className="about-company">
                            <h2>About Us</h2>
                            <p className="pr-5 "> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." </p>
                            <p>
                                <a href="#">
                                    <i className="fa fa-facebook-square mr-1"></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                            </p>
                        </Col>
                        <Col lg={3} xs={12} className="links">
                            <h4 className="mt-lg-0 mt-sm-3"> Quick Links </h4>
                            <ul className="m-0 p-0">
                                <li>- <a href="#">Lorem ipsum</a></li>
                                <li>- <a href="#">Nam mauris velit</a></li>
                                <li>- <a href="#">Etiam vitae mauris</a></li>
                                <li>- <a href="#">Fusce scelerisque</a></li>
                                <li>- <a href="#">Sed faucibus</a></li>
                                <li>- <a href="#">Mauris efficitur nulla</a></li>
                            </ul>
                        </Col>
                        <Col lg={4} xs={12} className="location">
                            <h4 className="mt-lg-0 mt-sm-4"> Help & Support </h4>
                            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                            <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
                            <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className=" copyright">
                            <p className=""><small className="">© 2022. All Rights Reserved.</small></p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
};

export default FooterUI;