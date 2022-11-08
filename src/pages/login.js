import React, { useState } from "react";
import { Container, Row, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../assets/styles/login.scss";
import LogoImage from "../assets/images/logo.png"
import {useDispatch} from "react-redux"
import {login} from "../authUser/userSlice"

const LoginPage = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                password: password,
                email: email,
                loggedIn: true,
            })
        );
    };

    return (
        <>
            <div className="d-lg-flex half">
                <div className="login-bg order-1 order-md-2"></div>
                <div className="contents order-2 order-md-1">
                    <Container>
                        <Row className="align-items-center justify-content-center loginRowBox">
                            <div className="col-md-7 m-auto">
                                <Link to="/">
                                    <img src={LogoImage} alt="logo" className="logoImg" />
                                </Link>

                                <Form onSubmit={(e) => handleSubmit(e)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </Form.Group>

                                    <div className="d-flex justify-content-between">
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember me" />
                                        </Form.Group>
                                        <Link to="/" className="forgetPswd"> Forget Password? </Link>
                                    </div>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    <p className="signUpTxt"> Not Registered yet? <Link to="/signUp"> Create an Account </Link> </p>
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