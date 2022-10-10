import React from "react";
import { Container, Button, Row, Form, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const HeroBanner = () => {
    const navigate = useNavigate();
  
    const navigateSignUp = () => {
      navigate('/signUp');
    };

    const navigateMatches = () => {
        navigate('/matches');
      };

    return (
        <>
            <div className="banner">
                <Container className="bannerContainer">
                    <div className="banner_info">
                        <h2>Millions of verified Members</h2>
                        <Button variant="primary" className="createprofileBtn" onClick={navigateSignUp} >
                            Create your Profile
                        </Button>
                    </div>
                </Container>
                <div className="banner_info_form">
                    <Container>
                        <Form>
                            <Row className="mb-3 align-items-end">
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label> I am looking for </Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Select Gender</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label> Located In </Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Select State</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label> Interested In </Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Select Interest</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Age </Form.Label>
                                    <Row className="align-items-center">
                                        <Col>
                                            <Form.Control type="text" placeholder="From" />
                                        </Col>
                                        -
                                        <Col>
                                            <Form.Control type="text" placeholder="To" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label> Status </Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option> Select Status </option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>
                                <Col>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="submitBtnBanner"
                                        onClick={navigateMatches}
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;
