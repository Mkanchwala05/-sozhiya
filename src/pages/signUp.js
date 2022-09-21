import React from "react";
import { Container, Row, Form, Button, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../assets/styles/login.scss";
import LogoImage from "../assets/images/logo.png"

function SignUpPage() {
    return (
        <>
            <div className="d-lg-flex half signUpUI">
                <div className="login-bg order-1 order-md-2"></div>
                <div className="contents order-2 order-md-1">
                    <Container>
                        <Row className="align-items-center justify-content-center loginRowBox">
                            <Col md={8} lg={8} xs={12} className="m-auto">
                                <Link to="/">
                                    <img src={LogoImage} alt="logo" className="logoImg"/>
                                </Link>
                                    
                                <Form>
                                        <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> Username </Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    <Row>

                                        <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                                            <Form.Label> Password </Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> Email address </Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </Row>
                                    <Row>

                                        <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> DOB </Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                      
                                        <Form.Group as={Col}  className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> Sex </Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option> Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Subject </Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <Row className="justify-content-end">
                                        <Col md={4} xs={12}>   
                                            <Form.Group className="mb-3" controlId="formBasicEmail" className="submitBtnBox">
                                                <Form.Label> submit </Form.Label>
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default SignUpPage;