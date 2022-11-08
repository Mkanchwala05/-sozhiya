import React, { useState } from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/login.scss";
import LogoImage from "../assets/images/logo.png"
import Axios from 'axios';



function SignUpPage() {

  const url = "http://localhost:3000/users"
  const [data, setData] = useState({
    name: "",
    emailId: "",
    userPassword: "",
    ConfirmPassword: "",
    dob: "",
    sex: "",
    maritalStatus: "",
    contactPerson: "",
    phoneNumber: "",
    alternativeNumber: "",
    kulam: "",
    kovil: "",
    createdBy: "",
    subject: "",
    timeOfBirth: "",
    dayofBirth: "",
    placeofBirth: "",
    rasi: "",
    star: "",
    padham: "",
    lagnam: "",
    jananaKaala: "",
    year: "",
    month: "",
    days: "",
    education: "",
    college: "",
    jobDetails: "",
    employerDetails: "",
    employedCountry: "",
  })

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      emailId: data.email,
      password: data.password,
      ConfirmPassword: data.ConfirmPassword,
      dob: data.dob,
      sex: data.sex,
      maritalStatus: data.maritalStatus,
      contactPerson: data.contactPerson,
      phoneNumber: data.phoneNumber,
      alternativeNumber: data.alternativeNumber,
      kulam: parseInt(data.Kulam),
      kovil: parseInt(data.Kovil),
      createdBy: data.createdBy,
      subject: data.subject,
      timeOfBirth: data.timeOfBirth,
      dayofBirth: data.dayofBirth,
      placeofBirth: data.placeofBirth,
      rasi: data.rasi,
      star: data.star,
      padham: data.padham,
      lagnam: data.lagnam,
      jananaKaala: data.jananaKaala,
      year: data.year,
      month: data.month,
      days: data.days,
      education: data.education,
      college: data.college,
      jobDetails: data.jobDetails,
      employerDetails: data.employerDetails,
      employedCountry: data.employedCountry,

    })
      .then(res => {
        navigate('/profile/:id');
      })
  }

  function handle(e) {
    const signUpData = { ...data }
    signUpData[e.target.id] = e.target.value
    setData(signUpData)
    console.log(signUpData)
  }

  const [steps, setSteps] = useState([
    { key: 'firstStep', isDone: true },
    { key: 'secondStep', isDone: false }
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);


  const navigate = useNavigate();

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      // alert('You have completed all steps.');

      return;
    }

    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = true;
      return x;
    }))
    setActiveStep(steps[index + 1]);
  }

  const handleBack = () => {
    const index = steps.findIndex(x => x.key === activeStep.key);
    if (index === 0) return;

    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = false;
      return x;
    }))
    setActiveStep(steps[index - 1]);
  }

  const [timeOfBirth, settimeOfBirths] = useState(true);
  const [dayofBirth, setdayofBirths] = useState(true);
  const [placeofBirth, setplaceofBirths] = useState(true);


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

                <Form onSubmit={(e) => submit(e)}>

                  <div className="wizardApp">
                    <div className="box">
                      <div className="steps">
                        <ul className="nav">
                          {steps.map((step, i) => {
                            return <li key={i} className={`${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                              <div> Step {i + 1}<br /><span>{step.label} </span></div>
                            </li>
                          })}
                        </ul>
                      </div>

                      <div className="step-component">
                        {/* {activeStep.component()} */}
                        {(steps[0].key === activeStep.key) &&
                          <div className='step1'>
                            <Form.Group as={Col} className="mb-3" controlId="emailId">
                              <Form.Label > Email address </Form.Label>
                              <Form.Control 
                                onChange={(e) => handle(e)} 
                                value={data.email} 
                                type="email" 
                                placeholder="Enter email" />
                            </Form.Group>

                            <Row>

                              <Form.Group as={Col} className="mb-3" controlId="userPassword">
                                <Form.Label> Password </Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => handle(e)} id="userPassword" value={data.userPassword} />
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="userPassword">
                                <Form.Label>  Confirm Password </Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => handle(e)} id="ConfirmPassword" value={data.ConfirmPassword} />
                              </Form.Group>
                            </Row>

                            <Form.Group as={Col} className="mb-3" controlId="name" >
                              <Form.Label> Name </Form.Label>
                              <Form.Control type="text" placeholder="Enter Name" onChange={(e) => handle(e)} value={data.name} />
                            </Form.Group>

                            <Row>

                              <Form.Group as={Col} className="mb-3" controlId="dob" >
                                <Form.Label> DOB </Form.Label>
                                <Form.Control type="date" onChange={(e) => handle(e)} value={data.dob} />
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="sex"  >
                                <Form.Label> Sex </Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.sex}>
                                  <option> Select Gender</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Other">Other</option>
                                </Form.Select>
                              </Form.Group>
                            </Row>
                            <Row>

                              <Form.Group as={Col} className="mb-3" controlId="maritalStatus"  >
                                <Form.Label> Marital Status </Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.maritalStatus}>
                                  <option value="0"> Select Status </option>
                                  <option value="Unmarried ">Unmarried </option>
                                  <option value="Divorced">Divorced </option>
                                  <option value="Widow / Widower">Widow / Widower </option>
                                  <option value="Awaiting divorce">Awaiting divorce </option>
                                </Form.Select>
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="contactPerson">
                                <Form.Label> Contact Person Name </Form.Label>
                                <Form.Control type="text" placeholder="Enter Contact Person Name" onChange={(e) => handle(e)} value={data.contactPerson} />
                              </Form.Group>

                            </Row>
                            <Row>

                              <Form.Group as={Col} className="mb-3" controlId="phoneNumber">
                                <Form.Label> Phone Number </Form.Label>
                                <Form.Control type="number" placeholder="Enter Phone Number" onChange={(e) => handle(e)} value={data.phoneNumber} />
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="alternativeNumber">
                                <Form.Label> Alternative Number </Form.Label>
                                <Form.Control type="number" placeholder="Enter Alternative Number" onChange={(e) => handle(e)} value={data.alternativeNumber} />
                              </Form.Group>

                            </Row>

                            <Row>

                              <Form.Group as={Col} className="mb-3" controlId="kulam">
                                <Form.Label> Kulam </Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.kulam}>
                                  <option value="0"> Select Kulam </option>
                                  <option value="Aadai">Aadai</option>
                                  <option value="Aadhi">Aadhi</option>
                                  <option value="Aanthai">Aanthai</option>
                                  <option value="Aavan">Aavan</option>
                                  <option value="Agni">Agni</option>
                                  <option value="Alagan">Alagan</option>
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

                              <Form.Group as={Col} className="mb-3" controlId="kovil">
                                <Form.Label> Kovil </Form.Label>
                                <Form.Control type="text" placeholder="Enter Kovil" onChange={(e) => handle(e)} value={data.kovil} />
                              </Form.Group>

                            </Row>

                            <Row>

                              <Form.Group as={Col} className="mb-3" controlId="createdBy">
                                <Form.Label> Created by </Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.createdBy}>
                                  <option value="0">-Select-</option>
                                  <option value="Self">Self</option>
                                  <option value="Parents">Parents</option>
                                  <option value="Sister">Sister</option>
                                  <option value="Brother">Brother</option>
                                  <option value="Relative">Relative</option>
                                  <option value="Friend">Friend</option>
                                  <option value="Others">Others</option>
                                </Form.Select>
                              </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="subject">
                              <Form.Label>Subject </Form.Label>
                              <Form.Control as="textarea" rows={3} onChange={(e) => handle(e)} value={data.subject} />
                            </Form.Group>
                          </div>
                        }

                        {/* step 2 ------------- */}

                        {(steps[1].key === activeStep.key) &&

                          <div>
                            <h6 className='tabTitleTxt'> Horoscope Details </h6>
                            <div className="signUpInnerBox">
                              <Row>
                                <Form.Group as={Col} className="mb-3" controlId="timeOfBirth">
                                  <Form.Label> Time Of Birth </Form.Label>
                                  <Form.Check
                                    type="checkbox"
                                    label="Not Known"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    onClick={() => settimeOfBirths(!timeOfBirth)}
                                  />
                                  {timeOfBirth &&
                                    <Col>
                                      <Form.Control type="time" placeholder="Enter Time Of Birth" onChange={(e) => handle(e)} value={data.timeOfBirth} />
                                    </Col>
                                  }
                                </Form.Group>

                                <Form.Group as={Col} className="mb-3" controlId="dayofBirth">
                                  <Form.Label> Day Of Birth </Form.Label>
                                  <Form.Check
                                    type="checkbox"
                                    label="Not Known"
                                    name="formHorizontalRadios"
                                    id="dayofBirth"
                                    onClick={() => setdayofBirths(!dayofBirth)}
                                  />
                                  {dayofBirth &&
                                    <Col>
                                      <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.dayofBirth}>
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
                                  }
                                </Form.Group>
                              </Row>

                              <Form.Group as={Col} className="mb-3" controlId="placeofBirth">
                                <Form.Label> Place Of Birth </Form.Label>
                                <Form.Check
                                  type="checkbox"
                                  label="Not Known"
                                  name="formHorizontalRadios"
                                  id="placeofBirth "
                                  onClick={() => setplaceofBirths(!placeofBirth)}
                                />
                                {placeofBirth &&
                                  <Col>
                                    <Form.Control type="text" placeholder="Enter Place Of Birth" onChange={(e) => handle(e)} value={data.placeofBirth} />
                                  </Col>
                                }
                              </Form.Group>

                              <Row>
                                <Form.Group as={Col} className="mb-3" controlId="rasi">
                                  <Form.Label> Rasi </Form.Label>
                                  <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.rasi}>
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

                                <Form.Group as={Col} className="mb-3" controlId="star">
                                  <Form.Label> Star </Form.Label>
                                  <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.star}>
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
                                <Form.Group as={Col} className="mb-3" controlId="padham">
                                  <Form.Label> Padham </Form.Label>
                                  <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.padham} >
                                    <option selected="selected" value="0">-Select-</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">None</option>
                                  </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} className="mb-3" controlId="lagnam">
                                  <Form.Label> Lagnam </Form.Label>
                                  <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.lagnam} >
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

                              <Form.Group as={Col} className="mb-3" controlId="jananaKaala">
                                <Form.Label> Janana Kaala Thisai Erupu </Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.jananaKaala}>
                                  <option selected="" value="0" >-Select-</option>
                                  <option value="1" >Surya</option>
                                  <option value="2" >Chandra</option>
                                  <option value="3" >Sevvai</option>
                                  <option value="4" >Bhudan</option>
                                  <option value="5" >Guru</option>
                                  <option value="6" >Sukran</option>
                                  <option value="7" >Sani</option>
                                  <option value="8" >Raghu</option>
                                  <option value="9" >Kedhu</option>
                                </Form.Select>
                                <Col className='inlineFromGrup mt-3'>
                                  <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.year} >
                                    <option selected="" value="0" >-Year-</option>
                                  </Form.Select>

                                  <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.month} >
                                    <option selected="" value="0"  >-Month-</option>
                                  </Form.Select>


                                  <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.days}>
                                    <option selected="" value="0"  >-Days-</option>
                                  </Form.Select>

                                </Col>
                              </Form.Group>

                              <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                  <Form.Label> Sevvai </Form.Label>
                                  <Col className='inlineFromGrup justify-content-start'>
                                    <Form.Check
                                      type="checkbox"
                                      label="Yes"
                                      name="formHorizontalRadios"
                                      id="placeofBirth "
                                    />

                                    <Form.Check
                                      type="checkbox"
                                      label="Not"
                                      name="formHorizontalRadios"
                                      id="placeofBirth "

                                    />
                                  </Col>

                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                  <Form.Label> Raaghu </Form.Label>
                                  <Col className='inlineFromGrup justify-content-start'>
                                    <Form.Check
                                      type="checkbox"
                                      label="Yes"
                                      name="formHorizontalRadios"
                                      id="placeofBirth "

                                    />

                                    <Form.Check
                                      type="checkbox"
                                      label="Not"
                                      name="formHorizontalRadios"
                                      id="placeofBirth "
                                    />
                                  </Col>
                                </Form.Group>
                              </Row>
                            </div>
                            <h6 className='tabTitleTxt'> Education & Occupation Details </h6>

                            <div className="signUpInnerBox">

                              <Form.Group as={Col} className="mb-3" controlId="education">
                                <Form.Label> Education </Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.education} >
                                  <option value="Bachelors" classification="Any Bachelors in Management">ACS</option>
                                  <option value="Bachelors" classification="Any Bachelors in Management">Any Masters in Management</option>
                                  <option value="Bachelors" classification="Any Bachelors in Management">BBA</option>
                                  <option value="Bachelors" classification="Any Bachelors in Management">BBM</option>
                                  <option value="Bachelors" classification="Any Bachelors in Management">BFM (Financial Management)</option>
                                  <option value="Bachelors" classification="Any Bachelors in Management">BHM (Hotel Management) </option>
                                  <option value="Bachelors" classification="Any Bachelors in Management">MBA</option>
                                  <option value="Bachelors" classification="Any Bachelors in Management">MBA / PGDM / PGDBM</option>
                                  <option value="Bachelors" classification="Any Bachelors in Management">MBE</option>
                                  <option value="Bachelors" classification="Any Bachelors in Management">MFM (Financial Management)</option>
                                  <option value="Bachelors" classification="Any Bachelors in Management">MHM  (Hotel Management)</option>
                                  <option value="Bachelors" classification="Any Bachelors in Management">MHRM (Human Resource Management)</option>
                                  <option value="Bachelors" classification="Any Bachelors in Management">PGDM</option>

                                  <option value="Bachelors" classification="Any Bachelors in Engineering">Aeronautical Engineering</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">B Plan</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">B.Arch</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">B.Tech</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">B.Tech(IT)</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">B.Tech(Mech)</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">BCA</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">BE</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">BE Or Similar</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">BE(Civil)</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">BE(CS)</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">BE(ECE)</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">BE(EEE)</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">BE/B.Tech</option>
                                  <option value="Bachelors" classification="Any Bachelors in Engineering">BSc IT / Computer Science</option>

                                  <option value="Bachelors2" classification="Others">Any Degree</option>
                                  <option value="Bachelors2" classification="Others">Any Professional Degree</option>
                                  <option value="Bachelors9" classification="Others">B.A.,M.S</option>
                                  <option value="Bachelors4" classification="Others">B.D.S/M.D.S/M.B.B.S/M.D</option>
                                  <option value="Bachelors8" classification="Others">B.E/M.E/MCA/M.SC/MBA</option>
                                  <option value="Bachelors0" classification="Others">B.H.,M.S</option>
                                  <option value="Bachelors7" classification="Others">B.Pharam</option>
                                  <option value="Bachelors8" classification="Others">B.S,M.S</option>
                                  <option value="Bachelors4" classification="Others">BA,L.L.B</option>
                                  <option value="Bachelors6" classification="Others">BE M.S</option>
                                  <option value="Bachelors5" classification="Others">BE,M.S(USA)</option>
                                  <option value="Bachelors6" classification="Others">BE,MS</option>
                                  <option value="Bachelors4" classification="Others">BE/B.TECH/ME/M.TECH</option>
                                  <option value="Bachelors5" classification="Others">BE/MBA</option>
                                  <option value="Bachelors1" classification="Others">BE/MCA</option>
                                  <option value="Bachelors9" classification="Others">BE/MCA/MBA/CA</option>
                                  <option value="Bachelors7" classification="Others">BE/ME</option>
                                  <option value="Bachelors8" classification="Others">CC</option>
                                  <option value="Bachelors5" classification="Others">Doctor or Engineer</option>
                                  <option value="Bachelors1" classification="Others">Engineering master degree or doctor MD MS</option>
                                  <option value="Bachelors0" classification="Others">M.Res</option>
                                  <option value="Bachelors3" classification="Others">M.Tech/MS(Engg)/MD(Doctor)</option>
                                  <option value="Bachelors9" classification="Others">Master Degree</option>
                                  <option value="Bachelors6" classification="Others">MBBS,MD</option>
                                  <option value="Bachelors1" classification="Others">MBBS/MD</option>
                                  <option value="Bachelors2" classification="Others">ME,MBA,MS</option>
                                  <option value="Bachelors3" classification="Others">Medical</option>
                                  <option value="Bachelors9" classification="Others">Medical/IT professional</option>
                                  <option value="Bachelors7" classification="Others">MIB</option>
                                  <option value="Bachelors0" classification="Others">MS/MD/MBA</option>
                                  <option value="Bachelors8" classification="Others">nursing</option>
                                  <option value="Bachelors7" classification="Others">Others</option>
                                  <option value="Bachelors3" classification="Others">PG Degree</option>
                                  <option value="Bachelors0" classification="Others">U.G Degree</option>

                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">Aviation Degree</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">B.Com</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">B.COM(ACS)</option>
                                  <option value="Bachelors2" classification="Any Bachelors in Arts / Science / Commerce">B.Com(CA)</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">B.Ed</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">B.Phil</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">B.Sc</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">BA</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">Bachelor Degree</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">BFA</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">BFT</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">BHM</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">BMM (MASS MEDIA)</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">BSc</option>
                                  <option value="Bachelors" classification="Any Bachelors in Arts / Science / Commerce">BSW</option>

                                  <option value="Bachelors" classification="Any Bachelors in Medicine in General / Dental / Surgeon">B.Pharm</option>
                                  <option value="Bachelors" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BAMS</option>
                                  <option value="Bachelors" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BDS</option>
                                  <option value="Bachelors" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BHMS</option>
                                  <option value="Bachelors" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BPT</option>
                                  <option value="Bachelors" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BSMS</option>
                                  <option value="Bachelors" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BUMS</option>
                                  <option value="Bachelors" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BVSc</option>
                                  <option value="Bachelors" classification="Any Bachelors in Medicine in General / Dental / Surgeon">MBBS</option>

                                </Form.Select>
                                <Form.Text id="passwordHelpBlock" muted>
                                  Hold CTRL Key To Select Multiple Items.
                                </Form.Text>
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="educationDetail">
                                <Form.Label> Education Detail </Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter Education Detail" onChange={(e) => handle(e)} value={data.educationDetail} />
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="college">
                                <Form.Label> College </Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter College" onChange={(e) => handle(e)} value={data.college} />
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="jobDetails">
                                <Form.Label> Job Title / Details </Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter Job Title / Details" onChange={(e) => handle(e)} value={data.jobDetails} />
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="employerDetails">
                                <Form.Label> Employer Details </Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter Employer Details" onChange={(e) => handle(e)} value={data.employerDetails} />
                                <Form.Text className="text-muted">
                                  Don't give any contact information. If any misuse, admin will remove that without your permission.
                                </Form.Text>
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="employedCountry">
                                <Form.Label> Currently Employed Country </Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.employedCountry} >
                                  <option value="0">Select</option>
                                  <option value="Afghanistan">Afghanistan</option>
                                  <option value="Åland Islands">Åland Islands</option>
                                  <option value="Albania">Albania</option>
                                  <option value="Algeria">Algeria</option>
                                  <option value="American Samoa">American Samoa</option>
                                  <option value="Andorra">Andorra</option>
                                  <option value="Angola">Angola</option>
                                  <option value="Anguilla">Anguilla</option>
                                  <option value="Antarctica">Antarctica</option>
                                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                  <option value="Argentina">Argentina</option>
                                  <option value="Armenia">Armenia</option>
                                  <option value="Aruba">Aruba</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Austria">Austria</option>
                                  <option value="Azerbaijan">Azerbaijan</option>
                                  <option value="Bahamas">Bahamas</option>
                                  <option value="Bahrain">Bahrain</option>
                                  <option value="Bangladesh">Bangladesh</option>
                                  <option value="Barbados">Barbados</option>
                                  <option value="Belarus">Belarus</option>
                                  <option value="Belgium">Belgium</option>
                                  <option value="Belize">Belize</option>
                                  <option value="Benin">Benin</option>
                                  <option value="Bermuda">Bermuda</option>
                                  <option value="Bhutan">Bhutan</option>
                                  <option value="Bolivia">Bolivia</option>
                                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                  <option value="Botswana">Botswana</option>
                                  <option value="Bouvet Island">Bouvet Island</option>
                                  <option value="Brazil">Brazil</option>
                                  <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                                  <option value="Bulgaria">Bulgaria</option>
                                  <option value="Burkina Faso">Burkina Faso</option>
                                  <option value="Burundi">Burundi</option>
                                  <option value="Cambodia">Cambodia</option>
                                  <option value="Cameroon">Cameroon</option>
                                  <option value="Canada">Canada</option>
                                  <option value="Cape Verde">Cape Verde</option>
                                  <option value="Cayman Islands">Cayman Islands</option>
                                  <option value="Central African Republic">Central African Republic</option>
                                  <option value="Chad">Chad</option>
                                  <option value="Chile">Chile</option>
                                  <option value="China">China</option>
                                  <option value="Christmas Island">Christmas Island</option>
                                  <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                  <option value="Colombia">Colombia</option>
                                  <option value="Comoros">Comoros</option>
                                  <option value="Congo">Congo</option>
                                  <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                  <option value="Cook Islands">Cook Islands</option>
                                  <option value="Costa Rica">Costa Rica</option>
                                  <option value="Cote D'ivoire">Cote D'ivoire</option>
                                  <option value="Croatia">Croatia</option>
                                  <option value="Cuba">Cuba</option>
                                  <option value="Cyprus">Cyprus</option>
                                  <option value="Czech Republic">Czech Republic</option>
                                  <option value="Denmark">Denmark</option>
                                  <option value="Djibouti">Djibouti</option>
                                  <option value="Dominica">Dominica</option>
                                  <option value="Dominican Republic">Dominican Republic</option>
                                  <option value="Ecuador">Ecuador</option>
                                  <option value="Egypt">Egypt</option>
                                  <option value="El Salvador">El Salvador</option>
                                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                                  <option value="Eritrea">Eritrea</option>
                                  <option value="Estonia">Estonia</option>
                                  <option value="Ethiopia">Ethiopia</option>
                                  <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                  <option value="Faroe Islands">Faroe Islands</option>
                                  <option value="Fiji">Fiji</option>
                                  <option value="Finland">Finland</option>
                                  <option value="France">France</option>
                                  <option value="French Guiana">French Guiana</option>
                                  <option value="French Polynesia">French Polynesia</option>
                                  <option value="French Southern Territories">French Southern Territories</option>
                                  <option value="Gabon">Gabon</option>
                                  <option value="Gambia">Gambia</option>
                                  <option value="Georgia">Georgia</option>
                                  <option value="Germany">Germany</option>
                                  <option value="Ghana">Ghana</option>
                                  <option value="Gibraltar">Gibraltar</option>
                                  <option value="Greece">Greece</option>
                                  <option value="Greenland">Greenland</option>
                                  <option value="Grenada">Grenada</option>
                                  <option value="Guadeloupe">Guadeloupe</option>
                                  <option value="Guam">Guam</option>
                                  <option value="Guatemala">Guatemala</option>
                                  <option value="Guernsey">Guernsey</option>
                                  <option value="Guinea">Guinea</option>
                                  <option value="Guinea-bissau">Guinea-bissau</option>
                                  <option value="Guyana">Guyana</option>
                                  <option value="Haiti">Haiti</option>
                                  <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                  <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                  <option value="Honduras">Honduras</option>
                                  <option value="Hong Kong">Hong Kong</option>
                                  <option value="Hungary">Hungary</option>
                                  <option value="Iceland">Iceland</option>
                                  <option value="India">India</option>
                                  <option value="Indonesia">Indonesia</option>
                                  <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                  <option value="Iraq">Iraq</option>
                                  <option value="Ireland">Ireland</option>
                                  <option value="Isle of Man">Isle of Man</option>
                                  <option value="Israel">Israel</option>
                                  <option value="Italy">Italy</option>
                                  <option value="Jamaica">Jamaica</option>
                                  <option value="Japan">Japan</option>
                                  <option value="Jersey">Jersey</option>
                                  <option value="Jordan">Jordan</option>
                                  <option value="Kazakhstan">Kazakhstan</option>
                                  <option value="Kenya">Kenya</option>
                                  <option value="Kiribati">Kiribati</option>
                                  <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                  <option value="Korea, Republic of">Korea, Republic of</option>
                                  <option value="Kuwait">Kuwait</option>
                                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                                  <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                  <option value="Latvia">Latvia</option>
                                  <option value="Lebanon">Lebanon</option>
                                  <option value="Lesotho">Lesotho</option>
                                  <option value="Liberia">Liberia</option>
                                  <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                  <option value="Liechtenstein">Liechtenstein</option>
                                  <option value="Lithuania">Lithuania</option>
                                  <option value="Luxembourg">Luxembourg</option>
                                  <option value="Macao">Macao</option>
                                  <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                  <option value="Madagascar">Madagascar</option>
                                  <option value="Malawi">Malawi</option>
                                  <option value="Malaysia">Malaysia</option>
                                  <option value="Maldives">Maldives</option>
                                  <option value="Mali">Mali</option>
                                  <option value="Malta">Malta</option>
                                  <option value="Marshall Islands">Marshall Islands</option>
                                  <option value="Martinique">Martinique</option>
                                  <option value="Mauritania">Mauritania</option>
                                  <option value="Mauritius">Mauritius</option>
                                  <option value="Mayotte">Mayotte</option>
                                  <option value="Mexico">Mexico</option>
                                  <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                  <option value="Moldova, Republic of">Moldova, Republic of</option>
                                  <option value="Monaco">Monaco</option>
                                  <option value="Mongolia">Mongolia</option>
                                  <option value="Montenegro">Montenegro</option>
                                  <option value="Montserrat">Montserrat</option>
                                  <option value="Morocco">Morocco</option>
                                  <option value="Mozambique">Mozambique</option>
                                  <option value="Myanmar">Myanmar</option>
                                  <option value="Namibia">Namibia</option>
                                  <option value="Nauru">Nauru</option>
                                  <option value="Nepal">Nepal</option>
                                  <option value="Netherlands">Netherlands</option>
                                  <option value="Netherlands Antilles">Netherlands Antilles</option>
                                  <option value="New Caledonia">New Caledonia</option>
                                  <option value="New Zealand">New Zealand</option>
                                  <option value="Nicaragua">Nicaragua</option>
                                  <option value="Niger">Niger</option>
                                  <option value="Nigeria">Nigeria</option>
                                  <option value="Niue">Niue</option>
                                  <option value="Norfolk Island">Norfolk Island</option>
                                  <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                  <option value="Norway">Norway</option>
                                  <option value="Oman">Oman</option>
                                  <option value="Pakistan">Pakistan</option>
                                  <option value="Palau">Palau</option>
                                  <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                  <option value="Panama">Panama</option>
                                  <option value="Papua New Guinea">Papua New Guinea</option>
                                  <option value="Paraguay">Paraguay</option>
                                  <option value="Peru">Peru</option>
                                  <option value="Philippines">Philippines</option>
                                  <option value="Pitcairn">Pitcairn</option>
                                  <option value="Poland">Poland</option>
                                  <option value="Portugal">Portugal</option>
                                  <option value="Puerto Rico">Puerto Rico</option>
                                  <option value="Qatar">Qatar</option>
                                  <option value="Reunion">Reunion</option>
                                  <option value="Romania">Romania</option>
                                  <option value="Russian Federation">Russian Federation</option>
                                  <option value="Rwanda">Rwanda</option>
                                  <option value="Saint Helena">Saint Helena</option>
                                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                  <option value="Saint Lucia">Saint Lucia</option>
                                  <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                  <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                  <option value="Samoa">Samoa</option>
                                  <option value="San Marino">San Marino</option>
                                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                  <option value="Saudi Arabia">Saudi Arabia</option>
                                  <option value="Senegal">Senegal</option>
                                  <option value="Serbia">Serbia</option>
                                  <option value="Seychelles">Seychelles</option>
                                  <option value="Sierra Leone">Sierra Leone</option>
                                  <option value="Singapore">Singapore</option>
                                  <option value="Slovakia">Slovakia</option>
                                  <option value="Slovenia">Slovenia</option>
                                  <option value="Solomon Islands">Solomon Islands</option>
                                  <option value="Somalia">Somalia</option>
                                  <option value="South Africa">South Africa</option>
                                  <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                  <option value="Spain">Spain</option>
                                  <option value="Sri Lanka">Sri Lanka</option>
                                  <option value="Sudan">Sudan</option>
                                  <option value="Suriname">Suriname</option>
                                  <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                  <option value="Swaziland">Swaziland</option>
                                  <option value="Sweden">Sweden</option>
                                  <option value="Switzerland">Switzerland</option>
                                  <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                  <option value="Taiwan">Taiwan</option>
                                  <option value="Tajikistan">Tajikistan</option>
                                  <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                  <option value="Thailand">Thailand</option>
                                  <option value="Timor-leste">Timor-leste</option>
                                  <option value="Togo">Togo</option>
                                  <option value="Tokelau">Tokelau</option>
                                  <option value="Tonga">Tonga</option>
                                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                  <option value="Tunisia">Tunisia</option>
                                  <option value="Turkey">Turkey</option>
                                  <option value="Turkmenistan">Turkmenistan</option>
                                  <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                  <option value="Tuvalu">Tuvalu</option>
                                  <option value="Uganda">Uganda</option>
                                  <option value="Ukraine">Ukraine</option>
                                  <option value="United Arab Emirates">United Arab Emirates</option>
                                  <option value="United Kingdom">United Kingdom</option>
                                  <option value="United States">United States</option>
                                  <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                  <option value="Uruguay">Uruguay</option>
                                  <option value="Uzbekistan">Uzbekistan</option>
                                  <option value="Vanuatu">Vanuatu</option>
                                  <option value="Venezuela">Venezuela</option>
                                  <option value="Viet Nam">Viet Nam</option>
                                  <option value="Virgin Islands, British">Virgin Islands, British</option>
                                  <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                                  <option value="Western Sahara">Western Sahara</option>
                                  <option value="Yemen">Yemen</option>
                                  <option value="Zambia">Zambia</option>
                                  <option value="Zimbabwe">Zimbabwe</option>
                                </Form.Select>
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Income </Form.Label>
                                <Col className='inlineFromGrup'>
                                  <Form.Select aria-label="Default select example" >
                                    <option value="0">Select</option>
                                    <option value="1">$ Canadian Dollar (CAD)</option>
                                    <option value="2">$ Australian Dollar (AUD)</option>
                                    <option value="3">€ Euro Member Countries (EUR)</option>
                                    <option value="4">₹ Indian Rupee (INR)</option>
                                    <option value="5">¥ Japanese Yen (JPY)</option>
                                    <option value="6">£ United Kingdom Pound (GBP)</option>
                                    <option value="7">$ United States Dollar (USD)</option>
                                  </Form.Select>

                                  <Form.Control type="number" placeholder="Enter Rupees" />


                                  <Form.Select aria-label="Default select example">
                                    <option value="0">Select</option>
                                    <option value="1"> Per Month </option>
                                    <option value="2"> Per Annum </option>
                                  </Form.Select>

                                </Col>
                              </Form.Group>
                            </div>

                            <h6 className='tabTitleTxt'> Contact Details </h6>
                            <div className="signUpInnerBox">
                              <Form.Group as={Col} className="mb-3" controlId="address">
                                <Form.Label> Address </Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter Address" onChange={(e) => handle(e)} value={data.address} />
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="country">
                                <Form.Label> Country </Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.country} >
                                  <option value="0">Select</option>
                                  <option value="Afghanistan">Afghanistan</option>
                                  <option value="Åland Islands">Åland Islands</option>
                                  <option value="Albania">Albania</option>
                                  <option value="Algeria">Algeria</option>
                                  <option value="American Samoa">American Samoa</option>
                                  <option value="Andorra">Andorra</option>
                                  <option value="Angola">Angola</option>
                                  <option value="Anguilla">Anguilla</option>
                                  <option value="Antarctica">Antarctica</option>
                                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                  <option value="Argentina">Argentina</option>
                                  <option value="Armenia">Armenia</option>
                                  <option value="Aruba">Aruba</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Austria">Austria</option>
                                  <option value="Azerbaijan">Azerbaijan</option>
                                  <option value="Bahamas">Bahamas</option>
                                  <option value="Bahrain">Bahrain</option>
                                  <option value="Bangladesh">Bangladesh</option>
                                  <option value="Barbados">Barbados</option>
                                  <option value="Belarus">Belarus</option>
                                  <option value="Belgium">Belgium</option>
                                  <option value="Belize">Belize</option>
                                  <option value="Benin">Benin</option>
                                  <option value="Bermuda">Bermuda</option>
                                  <option value="Bhutan">Bhutan</option>
                                  <option value="Bolivia">Bolivia</option>
                                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                  <option value="Botswana">Botswana</option>
                                  <option value="Bouvet Island">Bouvet Island</option>
                                  <option value="Brazil">Brazil</option>
                                  <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                                  <option value="Bulgaria">Bulgaria</option>
                                  <option value="Burkina Faso">Burkina Faso</option>
                                  <option value="Burundi">Burundi</option>
                                  <option value="Cambodia">Cambodia</option>
                                  <option value="Cameroon">Cameroon</option>
                                  <option value="Canada">Canada</option>
                                  <option value="Cape Verde">Cape Verde</option>
                                  <option value="Cayman Islands">Cayman Islands</option>
                                  <option value="Central African Republic">Central African Republic</option>
                                  <option value="Chad">Chad</option>
                                  <option value="Chile">Chile</option>
                                  <option value="China">China</option>
                                  <option value="Christmas Island">Christmas Island</option>
                                  <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                  <option value="Colombia">Colombia</option>
                                  <option value="Comoros">Comoros</option>
                                  <option value="Congo">Congo</option>
                                  <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                  <option value="Cook Islands">Cook Islands</option>
                                  <option value="Costa Rica">Costa Rica</option>
                                  <option value="Cote D'ivoire">Cote D'ivoire</option>
                                  <option value="Croatia">Croatia</option>
                                  <option value="Cuba">Cuba</option>
                                  <option value="Cyprus">Cyprus</option>
                                  <option value="Czech Republic">Czech Republic</option>
                                  <option value="Denmark">Denmark</option>
                                  <option value="Djibouti">Djibouti</option>
                                  <option value="Dominica">Dominica</option>
                                  <option value="Dominican Republic">Dominican Republic</option>
                                  <option value="Ecuador">Ecuador</option>
                                  <option value="Egypt">Egypt</option>
                                  <option value="El Salvador">El Salvador</option>
                                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                                  <option value="Eritrea">Eritrea</option>
                                  <option value="Estonia">Estonia</option>
                                  <option value="Ethiopia">Ethiopia</option>
                                  <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                  <option value="Faroe Islands">Faroe Islands</option>
                                  <option value="Fiji">Fiji</option>
                                  <option value="Finland">Finland</option>
                                  <option value="France">France</option>
                                  <option value="French Guiana">French Guiana</option>
                                  <option value="French Polynesia">French Polynesia</option>
                                  <option value="French Southern Territories">French Southern Territories</option>
                                  <option value="Gabon">Gabon</option>
                                  <option value="Gambia">Gambia</option>
                                  <option value="Georgia">Georgia</option>
                                  <option value="Germany">Germany</option>
                                  <option value="Ghana">Ghana</option>
                                  <option value="Gibraltar">Gibraltar</option>
                                  <option value="Greece">Greece</option>
                                  <option value="Greenland">Greenland</option>
                                  <option value="Grenada">Grenada</option>
                                  <option value="Guadeloupe">Guadeloupe</option>
                                  <option value="Guam">Guam</option>
                                  <option value="Guatemala">Guatemala</option>
                                  <option value="Guernsey">Guernsey</option>
                                  <option value="Guinea">Guinea</option>
                                  <option value="Guinea-bissau">Guinea-bissau</option>
                                  <option value="Guyana">Guyana</option>
                                  <option value="Haiti">Haiti</option>
                                  <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                  <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                  <option value="Honduras">Honduras</option>
                                  <option value="Hong Kong">Hong Kong</option>
                                  <option value="Hungary">Hungary</option>
                                  <option value="Iceland">Iceland</option>
                                  <option value="India">India</option>
                                  <option value="Indonesia">Indonesia</option>
                                  <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                  <option value="Iraq">Iraq</option>
                                  <option value="Ireland">Ireland</option>
                                  <option value="Isle of Man">Isle of Man</option>
                                  <option value="Israel">Israel</option>
                                  <option value="Italy">Italy</option>
                                  <option value="Jamaica">Jamaica</option>
                                  <option value="Japan">Japan</option>
                                  <option value="Jersey">Jersey</option>
                                  <option value="Jordan">Jordan</option>
                                  <option value="Kazakhstan">Kazakhstan</option>
                                  <option value="Kenya">Kenya</option>
                                  <option value="Kiribati">Kiribati</option>
                                  <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                  <option value="Korea, Republic of">Korea, Republic of</option>
                                  <option value="Kuwait">Kuwait</option>
                                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                                  <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                  <option value="Latvia">Latvia</option>
                                  <option value="Lebanon">Lebanon</option>
                                  <option value="Lesotho">Lesotho</option>
                                  <option value="Liberia">Liberia</option>
                                  <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                  <option value="Liechtenstein">Liechtenstein</option>
                                  <option value="Lithuania">Lithuania</option>
                                  <option value="Luxembourg">Luxembourg</option>
                                  <option value="Macao">Macao</option>
                                  <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                  <option value="Madagascar">Madagascar</option>
                                  <option value="Malawi">Malawi</option>
                                  <option value="Malaysia">Malaysia</option>
                                  <option value="Maldives">Maldives</option>
                                  <option value="Mali">Mali</option>
                                  <option value="Malta">Malta</option>
                                  <option value="Marshall Islands">Marshall Islands</option>
                                  <option value="Martinique">Martinique</option>
                                  <option value="Mauritania">Mauritania</option>
                                  <option value="Mauritius">Mauritius</option>
                                  <option value="Mayotte">Mayotte</option>
                                  <option value="Mexico">Mexico</option>
                                  <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                  <option value="Moldova, Republic of">Moldova, Republic of</option>
                                  <option value="Monaco">Monaco</option>
                                  <option value="Mongolia">Mongolia</option>
                                  <option value="Montenegro">Montenegro</option>
                                  <option value="Montserrat">Montserrat</option>
                                  <option value="Morocco">Morocco</option>
                                  <option value="Mozambique">Mozambique</option>
                                  <option value="Myanmar">Myanmar</option>
                                  <option value="Namibia">Namibia</option>
                                  <option value="Nauru">Nauru</option>
                                  <option value="Nepal">Nepal</option>
                                  <option value="Netherlands">Netherlands</option>
                                  <option value="Netherlands Antilles">Netherlands Antilles</option>
                                  <option value="New Caledonia">New Caledonia</option>
                                  <option value="New Zealand">New Zealand</option>
                                  <option value="Nicaragua">Nicaragua</option>
                                  <option value="Niger">Niger</option>
                                  <option value="Nigeria">Nigeria</option>
                                  <option value="Niue">Niue</option>
                                  <option value="Norfolk Island">Norfolk Island</option>
                                  <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                  <option value="Norway">Norway</option>
                                  <option value="Oman">Oman</option>
                                  <option value="Pakistan">Pakistan</option>
                                  <option value="Palau">Palau</option>
                                  <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                  <option value="Panama">Panama</option>
                                  <option value="Papua New Guinea">Papua New Guinea</option>
                                  <option value="Paraguay">Paraguay</option>
                                  <option value="Peru">Peru</option>
                                  <option value="Philippines">Philippines</option>
                                  <option value="Pitcairn">Pitcairn</option>
                                  <option value="Poland">Poland</option>
                                  <option value="Portugal">Portugal</option>
                                  <option value="Puerto Rico">Puerto Rico</option>
                                  <option value="Qatar">Qatar</option>
                                  <option value="Reunion">Reunion</option>
                                  <option value="Romania">Romania</option>
                                  <option value="Russian Federation">Russian Federation</option>
                                  <option value="Rwanda">Rwanda</option>
                                  <option value="Saint Helena">Saint Helena</option>
                                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                  <option value="Saint Lucia">Saint Lucia</option>
                                  <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                  <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                  <option value="Samoa">Samoa</option>
                                  <option value="San Marino">San Marino</option>
                                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                  <option value="Saudi Arabia">Saudi Arabia</option>
                                  <option value="Senegal">Senegal</option>
                                  <option value="Serbia">Serbia</option>
                                  <option value="Seychelles">Seychelles</option>
                                  <option value="Sierra Leone">Sierra Leone</option>
                                  <option value="Singapore">Singapore</option>
                                  <option value="Slovakia">Slovakia</option>
                                  <option value="Slovenia">Slovenia</option>
                                  <option value="Solomon Islands">Solomon Islands</option>
                                  <option value="Somalia">Somalia</option>
                                  <option value="South Africa">South Africa</option>
                                  <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                  <option value="Spain">Spain</option>
                                  <option value="Sri Lanka">Sri Lanka</option>
                                  <option value="Sudan">Sudan</option>
                                  <option value="Suriname">Suriname</option>
                                  <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                  <option value="Swaziland">Swaziland</option>
                                  <option value="Sweden">Sweden</option>
                                  <option value="Switzerland">Switzerland</option>
                                  <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                  <option value="Taiwan">Taiwan</option>
                                  <option value="Tajikistan">Tajikistan</option>
                                  <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                  <option value="Thailand">Thailand</option>
                                  <option value="Timor-leste">Timor-leste</option>
                                  <option value="Togo">Togo</option>
                                  <option value="Tokelau">Tokelau</option>
                                  <option value="Tonga">Tonga</option>
                                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                  <option value="Tunisia">Tunisia</option>
                                  <option value="Turkey">Turkey</option>
                                  <option value="Turkmenistan">Turkmenistan</option>
                                  <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                  <option value="Tuvalu">Tuvalu</option>
                                  <option value="Uganda">Uganda</option>
                                  <option value="Ukraine">Ukraine</option>
                                  <option value="United Arab Emirates">United Arab Emirates</option>
                                  <option value="United Kingdom">United Kingdom</option>
                                  <option value="United States">United States</option>
                                  <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                  <option value="Uruguay">Uruguay</option>
                                  <option value="Uzbekistan">Uzbekistan</option>
                                  <option value="Vanuatu">Vanuatu</option>
                                  <option value="Venezuela">Venezuela</option>
                                  <option value="Viet Nam">Viet Nam</option>
                                  <option value="Virgin Islands, British">Virgin Islands, British</option>
                                  <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                                  <option value="Western Sahara">Western Sahara</option>
                                  <option value="Yemen">Yemen</option>
                                  <option value="Zambia">Zambia</option>
                                  <option value="Zimbabwe">Zimbabwe</option>
                                </Form.Select>
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="state">
                                <Form.Label> State </Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.state} >
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                                </Form.Select>
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="city">
                                <Form.Label> City/Town </Form.Label>
                                <Form.Control type="text" placeholder="Enter City/Town" onChange={(e) => handle(e)} value={data.city} />
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="countryLiving">
                                <Form.Label> Country Living In </Form.Label>
                                <Form.Control type="text" placeholder="Enter Country Living In" onChange={(e) => handle(e)} value={data.countryLiving} />
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="native">
                                <Form.Label> Native </Form.Label>
                                <Form.Control type="text" placeholder="Enter Native" onChange={(e) => handle(e)} value={data.native} />
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="website">
                                <Form.Label> Personal Website/Blog </Form.Label>
                                <Form.Control type="text" placeholder="Enter Personal Website/Blog" onChange={(e) => handle(e)} value={data.website} />
                                <Form.Text className="text-muted">
                                  ( Eg:http://Yourblog.Com )
                                </Form.Text>
                              </Form.Group>
                            </div>

                          </div>

                        }

                      </div>

                      <div className="btn-component submitBtnBox">
                        <input className='btn backBtn' type="button" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
                        <Button className={steps[steps.length - 1].key !== activeStep.key ? 'nextBtn' : 'd-none'} onClick={handleNext} > Next </Button>
                        <Button type='submit' value={submit} onClick={handleNext} disabled={steps[steps.length - 1].key !== activeStep.key} > Sign Up </Button>
                      </div>
                    </div>
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