import React from 'react';
import { Row, Form, Button, Col } from 'react-bootstrap';
// import {  useNavigate } from "react-router-dom";

const FirstStep = () => {
    // const navigate = useNavigate();

    // const navigateHome = () => {
    //     navigate('/');
    // };
    return (
        <div>
            <h6> Horoscope Details </h6>
            <Row>
                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Time Of Birth </Form.Label>
                    <Form.Check
                        type="checkbox"
                        label="Not Known"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                    <Col className='inlineFromGrup'> 
                            <Form.Select aria-label="Default select example">
                                <option value="0" >  Hrs</option>
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                                <option value="4"> 4 </option>
                                <option value="5"> 5 </option>
                                <option value="6"> 6 </option>
                                <option value="7"> 7 </option>
                                <option value="8"> 8 </option>
                                <option value="9"> 9 </option>
                                <option value="10"> 10 </option>
                                <option value="11"> 11 </option>
                                <option value="12"> 12 </option>
                            </Form.Select>    
                            <Form.Select aria-label="Default select example">
                                <option value="0" > Min</option>
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                                <option value="4"> 4 </option>
                                <option value="5"> 5 </option>
                                <option value="6"> 6 </option>
                                <option value="7"> 7 </option>
                                <option value="8"> 8 </option>
                                <option value="9"> 9 </option>
                                <option value="10"> 10 </option>
                                <option value="11"> 11 </option>
                                <option value="12"> 12 </option>
                                <option value="13"> 13 </option>
                                <option value="14"> 14 </option>
                                <option value="15"> 15 </option>
                                <option value="16"> 16 </option>
                                <option value="17"> 17 </option>
                                <option value="18"> 18 </option>
                                <option value="19"> 19 </option>
                                <option value="20"> 20 </option>
                                <option value="21"> 21 </option>
                                <option value="22"> 22 </option>
                                <option value="23"> 23 </option>
                                <option value="24"> 24 </option>
                                <option value="25"> 25 </option>
                                <option value="26"> 26 </option>
                                <option value="27"> 27 </option>
                                <option value="28"> 28 </option>
                                <option value="29"> 29 </option>
                                <option value="30"> 30 </option>
                                <option value="31"> 31 </option>
                                <option value="32"> 32 </option>
                                <option value="33"> 33 </option>
                                <option value="34"> 34 </option>
                                <option value="35"> 35 </option>
                                <option value="36"> 36 </option>
                                <option value="37"> 37 </option>
                                <option value="38"> 38 </option>
                                <option value="39"> 39 </option>
                                <option value="40"> 40 </option>
                                <option value="41"> 41 </option>
                                <option value="42"> 42 </option>
                                <option value="43"> 43 </option>
                                <option value="44"> 44 </option>
                                <option value="45"> 45 </option>
                                <option value="46"> 46 </option>
                                <option value="47"> 47 </option>
                                <option value="48"> 48 </option>
                                <option value="49"> 49 </option>
                                <option value="50"> 50 </option>
                                <option value="51"> 51 </option>
                                <option value="52"> 52 </option>
                                <option value="53"> 53 </option>
                                <option value="54"> 54 </option>
                                <option value="55"> 55 </option>
                                <option value="56"> 56 </option>
                                <option value="57"> 57 </option>
                                <option value="58"> 58 </option>
                                <option value="59"> 59 </option>
                                <option value="60"> 60 </option>

                            </Form.Select>    
                            <Form.Select aria-label="Default select example">
                                <option value="0" > AM/PM</option>
                                <option value="am">AM</option>
                                <option value="pm">PM</option>
                            </Form.Select>           
                    </Col>
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Day Of Birth </Form.Label>
                    <Form.Check
                        type="checkbox"
                        label="Not Known"
                        name="formHorizontalRadios"
                        id="dayofBirth"
                    />
                    <Col> 
                        <Form.Select aria-label="Default select example">
                            <option value="0"> Select Day</option>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </Form.Select>          
                    </Col>
                </Form.Group>
            </Row>

            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label> Place Of Birth </Form.Label>
                <Form.Check
                    type="checkbox"
                    label="Not Known"
                    name="formHorizontalRadios"
                    id="placeofBirth "
                />
                <Col> 
                    <Form.Control type="text" placeholder="Enter Place Of Birth" />        
                </Col>
            </Form.Group>

            <Row>
               <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Rasi </Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="0"> Select Day</option>
                            <option value="1">Mesham / Aries </option>
                            <option value="2">Rishabam / Taurus</option>
                            <option value="3">Mithunam / Gemini</option>
                            <option value="4">Katagam / Cancer</option>
                            <option value="5">Simham / Leo</option>
                            <option value="6">Kanni / Virgo</option>
                            <option value="7">Tula / Libra</option>
                            <option value="8">Vrichigam / Scorpio</option>
                            <option value="9">Dhanus / Sagittarius</option>
                            <option value="10">Makara / Capricorn</option>
                            <option value="11">Kumbha / Aquarius</option>
                            <option value="12">Meena / Pisces</option>
                        </Form.Select>    
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Star </Form.Label>
                        <Form.Select aria-label="Default select example">
                        	<option value="0">Select</option>
                            <option value="17">Anusham</option>
                            <option value="1">Ashwini</option>
                            <option value="23">Avittam</option>
                            <option value="9">Ayilyam</option>
                            <option value="2">Bharani</option>
                            <option value="14">Chitrai</option>
                            <option value="13">Hastham</option>
                            <option value="18">Kettai</option>
                            <option value="3">Krittika</option>
                            <option value="10">Magam</option>
                            <option value="19">Moolam</option>
                            <option value="5">Mrigasira</option>
                            <option value="20">Pooradam</option>
                            <option value="11">Pooram</option>
                            <option value="25">Poorattadhi</option>
                            <option value="8">Poosam</option>
                            <option value="7">Punarpusam</option>
                            <option value="27">Revathi</option>
                            <option value="4">Rohini</option>
                            <option value="24">Sadhayam</option>
                            <option value="15">Swati</option>
                            <option value="6">Thiruvadirai</option>
                            <option value="22">Thiruvonam</option>
                            <option value="21">Uthiradam</option>
                            <option value="12">Uthiram</option>
                            <option value="26">Uthirattadhi</option>
                            <option value="16">Vishakham</option>
                        </Form.Select>        
                </Form.Group>
            </Row>

            <Row>
               <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Padham </Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option selected="selected" value="0">-Select-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">None</option>
                        </Form.Select>    
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Lagnam </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="0">Select</option>
                            <option value="9">Dhanus / Sagittarius</option>
                            <option value="6">Kanni / Virgo</option>
                            <option value="4">Katagam / Cancer</option>
                            <option value="11">Kumbha / Aquarius</option>
                            <option value="10">Makara / Capricorn</option>
                            <option value="12">Meena / Pisces</option>
                            <option value="1">Mesham / Aries </option>
                            <option value="3">Mithunam / Gemini</option>
                            <option value="2">Rishabam / Taurus</option>
                            <option value="5">Simham / Leo</option>
                            <option value="7">Tula / Libra</option>
                            <option value="8">Vrichigam / Scorpio</option>
                        </Form.Select>        
                </Form.Group>
            </Row>

        </div>
    )
  };
  export default FirstStep;