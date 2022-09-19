import React from "react";
import { Container, Row, Form, Button } from 'react-bootstrap';
import "../assets/styles/login.scss";

function LoginPage() {
    return (
        <>
            <div class="d-lg-flex half">
                <div class="login-bg order-1 order-md-2"></div>
                <div class="contents order-2 order-md-1">
                    <Container>
                        <Row class="align-items-center justify-content-center">
                            <div class="col-md-7">
                                <h3>Login to <strong>Colorlib</strong></h3>
                                <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default LoginPage;