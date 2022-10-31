import React from "react";
import { Container, Row, Form, Button, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/login.scss";
import LogoImage from "../assets/images/logo.png"
import StepWizard from "react-step-wizard";

function SignUpPage() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };
    return (
        <>
            <div className="d-lg-flex half signUpUI">
                <div className="login-bg"></div>
                <div className="contents">
                    <Container>
                        <Row className="align-items-center justify-content-center loginRowBox">
                            <Col md={8} lg={8} xs={12} className="m-auto">
                                <Link to="/">
                                    <img src={LogoImage} alt="logo" className="logoImg" />
                                </Link>

                                <Form>
                                    <div>
                                        <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> Email address </Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Row>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                                                <Form.Label> Password </Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>  Confirm Password </Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                        </Row>

                                        <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> Name </Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" />
                                        </Form.Group>

                                        <Row>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                                <Form.Label> DOB </Form.Label>
                                                <Form.Control type="date" />
                                            </Form.Group>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                                <Form.Label> Sex </Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option> Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Row>
                                        <Row>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                                <Form.Label> Marital Status </Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="0"> Select Status </option>
                                                    <option value="1 ">Unmarried </option>
                                                    <option value="2">Divorced </option>
                                                    <option value="3">Widow / Widower </option>
                                                    <option value="4">Awaiting divorce </option>
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                                <Form.Label> Contact Person Name </Form.Label>
                                                <Form.Control type="text" placeholder="Enter Contact Person Name" />
                                            </Form.Group>

                                        </Row>
                                        <Row>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                                <Form.Label> Phone Number </Form.Label>
                                                <Form.Control type="number" placeholder="Enter Phone Number" />
                                            </Form.Group>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                                <Form.Label> Alternative Number </Form.Label>
                                                <Form.Control type="number" placeholder="Enter Alternative Number" />
                                            </Form.Group>

                                        </Row>

                                        <Row>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                                <Form.Label> Kulam </Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="0"> Select Kulam </option>
                                                    <option value="1">Aadai</option>
                                                    <option value="2">Aadhi</option>
                                                    <option value="3">Aanthai</option>
                                                    <option value="4">Aavan</option>
                                                    <option value="5">Agni</option>
                                                    <option value="6">Alagan</option>
                                                    <option value="7">Andhai</option>
                                                    <option value="8">Andhuvan</option>
                                                    <option value="9">Ariyan</option>
                                                    <option value="10">Bala</option>
                                                    <option value="11">Cheran</option>
                                                    <option value="12">Dananjayan</option>
                                                    <option value="13">Devendran</option>
                                                    <option value="14">Eala</option>
                                                    <option value="15">Eenjan</option>
                                                    <option value="16">Ennai</option>
                                                    <option value="17">Indhiran</option>
                                                    <option value="18">Kaadai</option>
                                                    <option value="19">Kaadan</option>
                                                    <option value="20">Kaari</option>
                                                    <option value="21">Kaavalar</option>
                                                    <option value="22">Kadunthuli</option>
                                                    <option value="23">Kalli</option>
                                                    <option value="24">Kanakkan</option>
                                                    <option value="25">Kanavaalan</option>
                                                    <option value="26">Kannan</option>
                                                    <option value="27">Kannandhai</option>
                                                    <option value="28">Kannivaadiyan</option>
                                                    <option value="29">Keerai</option>
                                                    <option value="30">Koorai</option>
                                                    <option value="31">Koventhan</option>
                                                    <option value="32">Kuzhaayan</option>
                                                    <option value="33">Maadai</option>
                                                    <option value="34">Maniyan</option>
                                                    <option value="35">Mazhluazhlagar</option>
                                                    <option value="36">Medhi </option>
                                                    <option value="92">Mullai</option>
                                                    <option value="37">Mullukkadhan </option>
                                                    <option value="38">Muthan</option>
                                                    <option value="39">Neelan</option>
                                                    <option value="40">Neerunni</option>
                                                    <option value="41">Odhaalar</option>
                                                    <option value="42">Olukkar</option>
                                                    <option value="43">Paaliyan</option>
                                                    <option value="93">Padari</option>
                                                    <option value="44">Padhuman</option>
                                                    <option value="45">Padukkunni</option>
                                                    <option value="46">Pala</option>
                                                    <option value="47">Panakkadai</option>
                                                    <option value="48">Panayan</option>
                                                    <option value="49">Pandhan</option>
                                                    <option value="50">Pandiyan</option>
                                                    <option value="51">Paniyan</option>
                                                    <option value="52">Pannai</option>
                                                    <option value="53">Pavalan</option>
                                                    <option value="54">Payiran</option>
                                                    <option value="55">Periyan</option>
                                                    <option value="56">Perunkudi</option>
                                                    <option value="57">Pillan</option>
                                                    <option value="58">Podiyan</option>
                                                    <option value="59">Ponnan</option>
                                                    <option value="60">Poochandhi</option>
                                                    <option value="61">Poonthai</option>
                                                    <option value="62">Poosan</option>
                                                    <option value="63">Porulthantha</option>
                                                    <option value="64">Saakadai</option>
                                                    <option value="65">Sanagan</option>
                                                    <option value="66">Sathandhai</option>
                                                    <option value="67">Sathuvaraayan</option>
                                                    <option value="68">Sedan</option>
                                                    <option value="69">Sellan</option>
                                                    <option value="70">Sempon</option>
                                                    <option value="71">Sempoothan</option>
                                                    <option value="72">Sengannan</option>
                                                    <option value="73">Sengunni</option>
                                                    <option value="74">Seralan</option>
                                                    <option value="75">Seran</option>
                                                    <option value="76">Sevadi</option>
                                                    <option value="77">Sevvayan</option>
                                                    <option value="78">Sevventhi</option>
                                                    <option value="79">Sowriyan</option>
                                                    <option value="80">Surapi</option>
                                                    <option value="81">Thazhinji</option>
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                                <Form.Label> Kovil </Form.Label>
                                                <Form.Control type="text" placeholder="Enter Kovil" />
                                            </Form.Group>

                                        </Row>

                                        <Row>

                                            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                                <Form.Label> Created by </Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="0">-Select-</option>
                                                    <option value="1">Self</option>
                                                    <option value="2">Parents</option>
                                                    <option value="3">Sister</option>
                                                    <option value="4">Brother</option>
                                                    <option value="5">Relative</option>
                                                    <option value="6">Friend</option>
                                                    <option value="7">Others</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Row>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Subject </Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>

                                        <Row className="justify-content-end">
                                            <Col md={4} xs={12}>
                                                <Form.Group className="mb-3 submitBtnBox" controlId="formBasicEmail">
                                                    <Form.Label> submit </Form.Label>
                                                    <Button variant="primary" type="submit" onClick={navigateHome} >
                                                        Submit
                                                    </Button>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
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