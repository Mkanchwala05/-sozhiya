import React, { useState } from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/login.scss";
import LogoImage from "../assets/images/logo.png"
import FirstStep from "./components/registrationStep/registrationStep1"
import SecondStep from "./components/registrationStep/registrationStep2"
import Axios from 'axios';

const firstComponent = () => {
  // return (<FirstStep />)
  return (<div> hello </div>)
}
const secondComponent = () => {
  return (<SecondStep />)
}


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
        navigate('/');
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
                              <Form.Control onChange={(e) => handle(e)} value={data.email} type="email" placeholder="Enter email" />
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
                                  { timeOfBirth && 
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
                                  { dayofBirth && 
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
                                { placeofBirth && 
                                  <Col>
                                    <Form.Control type="text" placeholder="Enter Place Of Birth" onChange={(e) => handle(e)} value={data.placeofBirth}/>
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
                                <Form.Select aria-label="Default select example"  onChange={(e) => handle(e)} value={data.education} >
                                  <option value="66" classification="Any Bachelors in Management">ACS</option>
                                  <option value="63" classification="Any Bachelors in Management">Any Masters in Management</option>
                                  <option value="58" classification="Any Bachelors in Management">BBA</option>
                                  <option value="60" classification="Any Bachelors in Management">BBM</option>
                                  <option value="61" classification="Any Bachelors in Management">BFM (Financial Management)</option>
                                  <option value="62" classification="Any Bachelors in Management">BHM (Hotel Management) </option>
                                  <option value="64" classification="Any Bachelors in Management">MBA</option>
                                  <option value="59" classification="Any Bachelors in Management">MBA / PGDM / PGDBM</option>
                                  <option value="65" classification="Any Bachelors in Management">MBE</option>
                                  <option value="67" classification="Any Bachelors in Management">MFM (Financial Management)</option>
                                  <option value="68" classification="Any Bachelors in Management">MHM  (Hotel Management)</option>
                                  <option value="69" classification="Any Bachelors in Management">MHRM (Human Resource Management)</option>
                                  <option value="70" classification="Any Bachelors in Management">PGDM</option>

                                  <option value="18" classification="Any Bachelors in Engineering">Aeronautical Engineering</option>
                                  <option value="19" classification="Any Bachelors in Engineering">B Plan</option>
                                  <option value="9" classification="Any Bachelors in Engineering">B.Arch</option>
                                  <option value="16" classification="Any Bachelors in Engineering">B.Tech</option>
                                  <option value="8" classification="Any Bachelors in Engineering">B.Tech(IT)</option>
                                  <option value="10" classification="Any Bachelors in Engineering">B.Tech(Mech)</option>
                                  <option value="7" classification="Any Bachelors in Engineering">BCA</option>
                                  <option value="11" classification="Any Bachelors in Engineering">BE</option>
                                  <option value="17" classification="Any Bachelors in Engineering">BE Or Similar</option>
                                  <option value="14" classification="Any Bachelors in Engineering">BE(Civil)</option>
                                  <option value="12" classification="Any Bachelors in Engineering">BE(CS)</option>
                                  <option value="13" classification="Any Bachelors in Engineering">BE(ECE)</option>
                                  <option value="15" classification="Any Bachelors in Engineering">BE(EEE)</option>
                                  <option value="6" classification="Any Bachelors in Engineering">BE/B.Tech</option>
                                  <option value="20" classification="Any Bachelors in Engineering">BSc IT / Computer Science</option>

                                  <option value="122" classification="Others">Any Degree</option>
                                  <option value="132" classification="Others">Any Professional Degree</option>
                                  <option value="149" classification="Others">B.A.,M.S</option>
                                  <option value="144" classification="Others">B.D.S/M.D.S/M.B.B.S/M.D</option>
                                  <option value="128" classification="Others">B.E/M.E/MCA/M.SC/MBA</option>
                                  <option value="150" classification="Others">B.H.,M.S</option>
                                  <option value="137" classification="Others">B.Pharam</option>
                                  <option value="148" classification="Others">B.S,M.S</option>
                                  <option value="134" classification="Others">BA,L.L.B</option>
                                  <option value="126" classification="Others">BE M.S</option>
                                  <option value="135" classification="Others">BE,M.S(USA)</option>
                                  <option value="136" classification="Others">BE,MS</option>
                                  <option value="124" classification="Others">BE/B.TECH/ME/M.TECH</option>
                                  <option value="125" classification="Others">BE/MBA</option>
                                  <option value="121" classification="Others">BE/MCA</option>
                                  <option value="129" classification="Others">BE/MCA/MBA/CA</option>
                                  <option value="127" classification="Others">BE/ME</option>
                                  <option value="138" classification="Others">CC</option>
                                  <option value="145" classification="Others">Doctor or Engineer</option>
                                  <option value="141" classification="Others">Engineering master degree or doctor MD MS</option>
                                  <option value="140" classification="Others">M.Res</option>
                                  <option value="133" classification="Others">M.Tech/MS(Engg)/MD(Doctor)</option>
                                  <option value="119" classification="Others">Master Degree</option>
                                  <option value="146" classification="Others">MBBS,MD</option>
                                  <option value="131" classification="Others">MBBS/MD</option>
                                  <option value="142" classification="Others">ME,MBA,MS</option>
                                  <option value="143" classification="Others">Medical</option>
                                  <option value="139" classification="Others">Medical/IT professional</option>
                                  <option value="147" classification="Others">MIB</option>
                                  <option value="120" classification="Others">MS/MD/MBA</option>
                                  <option value="118" classification="Others">nursing</option>
                                  <option value="117" classification="Others">Others</option>
                                  <option value="123" classification="Others">PG Degree</option>
                                  <option value="130" classification="Others">U.G Degree</option>

                                  <option value="40" classification="Any Bachelors in Arts / Science / Commerce">Aviation Degree</option>
                                  <option value="33" classification="Any Bachelors in Arts / Science / Commerce">B.Com</option>
                                  <option value="39" classification="Any Bachelors in Arts / Science / Commerce">B.COM(ACS)</option>
                                  <option value="152" classification="Any Bachelors in Arts / Science / Commerce">B.Com(CA)</option>
                                  <option value="36" classification="Any Bachelors in Arts / Science / Commerce">B.Ed</option>
                                  <option value="35" classification="Any Bachelors in Arts / Science / Commerce">B.Phil</option>
                                  <option value="34" classification="Any Bachelors in Arts / Science / Commerce">B.Sc</option>
                                  <option value="32" classification="Any Bachelors in Arts / Science / Commerce">BA</option>
                                  <option value="38" classification="Any Bachelors in Arts / Science / Commerce">Bachelor Degree</option>
                                  <option value="41" classification="Any Bachelors in Arts / Science / Commerce">BFA</option>
                                  <option value="42" classification="Any Bachelors in Arts / Science / Commerce">BFT</option>
                                  <option value="37" classification="Any Bachelors in Arts / Science / Commerce">BHM</option>
                                  <option value="43" classification="Any Bachelors in Arts / Science / Commerce">BMM (MASS MEDIA)</option>
                                  <option value="44" classification="Any Bachelors in Arts / Science / Commerce">BSc</option>
                                  <option value="45" classification="Any Bachelors in Arts / Science / Commerce">BSW</option>

                                  <option value="75" classification="Any Bachelors in Medicine in General / Dental / Surgeon">B.Pharm</option>
                                  <option value="76" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BAMS</option>
                                  <option value="73" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BDS</option>
                                  <option value="77" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BHMS</option>
                                  <option value="79" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BPT</option>
                                  <option value="78" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BSMS</option>
                                  <option value="80" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BUMS</option>
                                  <option value="74" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BVSc</option>
                                  <option value="72" classification="Any Bachelors in Medicine in General / Dental / Surgeon">MBBS</option>

                                </Form.Select>
                                <Form.Text id="passwordHelpBlock" muted>
                                  Hold CTRL Key To Select Multiple Items.i.
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
                                <Form.Control as="textarea" rows={3} placeholder="Enter Employer Details"  onChange={(e) => handle(e)} value={data.employerDetails}  />
                                <Form.Text className="text-muted">
                                  Don't give any contact information. If any misuse, admin will remove that without your permission.
                                </Form.Text>
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="employedCountry">
                                <Form.Label> Currently Employed Country </Form.Label>
                                <Form.Select aria-label="Default select example"  onChange={(e) => handle(e)} value={data.employedCountry} >
                                  <option value="0">Select</option>
                                  <option value="3">Afghanistan</option>
                                  <option value="16">Aland Islands</option>
                                  <option value="6">Albania</option>
                                  <option value="62">Algeria</option>
                                  <option value="12">American Samoa</option>
                                  <option value="1">Andorra</option>
                                  <option value="9">Angola</option>
                                  <option value="5">Anguilla</option>
                                  <option value="10">Antarctica</option>
                                  <option value="4">Antigua and Barbuda</option>
                                  <option value="11">Argentina</option>
                                  <option value="7">Armenia</option>
                                  <option value="15">Aruba</option>
                                  <option value="14">Australia</option>
                                  <option value="13">Austria</option>
                                  <option value="17">Azerbaijan</option>
                                  <option value="32">Bahamas</option>
                                  <option value="24">Bahrain</option>
                                  <option value="20">Bangladesh</option>
                                  <option value="19">Barbados</option>
                                  <option value="36">Belarus</option>
                                  <option value="21">Belgium</option>
                                  <option value="37">Belize</option>
                                  <option value="26">Benin</option>
                                  <option value="28">Bermuda</option>
                                  <option value="33">Bhutan</option>
                                  <option value="30">Bolivia</option>
                                  <option value="18">Bosnia and Herzegovina</option>
                                  <option value="35">Botswana</option>
                                  <option value="34">Bouvet Island</option>
                                  <option value="31">Brazil</option>
                                  <option value="106">British Indian Ocean Territory</option>
                                  <option value="237">British Virgin Islands</option>
                                  <option value="29">Brunei</option>
                                  <option value="23">Bulgaria</option>
                                  <option value="22">Burkina Faso</option>
                                  <option value="25">Burundi</option>
                                  <option value="117">Cambodia</option>
                                  <option value="47">Cameroon</option>
                                  <option value="38">Canada</option>
                                  <option value="53">Cape Verde</option>
                                  <option value="124">Cayman Islands</option>
                                  <option value="41">Central African Republic</option>
                                  <option value="213">Chad</option>
                                  <option value="46">Chile</option>
                                  <option value="48">China</option>
                                  <option value="54">Christmas Island</option>
                                  <option value="39">Cocos Islands</option>
                                  <option value="49">Colombia</option>
                                  <option value="119">Comoros</option>
                                  <option value="45">Cook Islands</option>
                                  <option value="50">Costa Rica</option>
                                  <option value="98">Croatia</option>
                                  <option value="52">Cuba</option>
                                  <option value="55">Cyprus</option>
                                  <option value="56">Czech Republic</option>
                                  <option value="40">Democratic Republic of the Congo</option>
                                  <option value="59">Denmark</option>
                                  <option value="58">Djibouti</option>
                                  <option value="60">Dominica</option>
                                  <option value="61">Dominican Republic</option>
                                  <option value="219">East Timor</option>
                                  <option value="63">Ecuador</option>
                                  <option value="65">Egypt</option>
                                  <option value="209">El Salvador</option>
                                  <option value="88">Equatorial Guinea</option>
                                  <option value="67">Eritrea</option>
                                  <option value="64">Estonia</option>
                                  <option value="69">Ethiopia</option>
                                  <option value="72">Falkland Islands</option>
                                  <option value="74">Faroe Islands</option>
                                  <option value="71">Fiji</option>
                                  <option value="70">Finland</option>
                                  <option value="75">France</option>
                                  <option value="80">French Guiana</option>
                                  <option value="175">French Polynesia</option>
                                  <option value="214">French Southern Territories</option>
                                  <option value="76">Gabon</option>
                                  <option value="85">Gambia</option>
                                  <option value="79">Georgia</option>
                                  <option value="57">Germany</option>
                                  <option value="82">Ghana</option>
                                  <option value="83">Gibraltar</option>
                                  <option value="89">Greece</option>
                                  <option value="84">Greenland</option>
                                  <option value="78">Grenada</option>
                                  <option value="87">Guadeloupe</option>
                                  <option value="92">Guam</option>
                                  <option value="91">Guatemala</option>
                                  <option value="81">Guernsey</option>
                                  <option value="86">Guinea</option>
                                  <option value="93">Guinea-Bissau</option>
                                  <option value="94">Guyana</option>
                                  <option value="99">Haiti</option>
                                  <option value="96">Heard Island and McDonald Islands</option>
                                  <option value="97">Honduras</option>
                                  <option value="95">Hong Kong</option>
                                  <option value="100">Hungary</option>
                                  <option value="109">Iceland</option>
                                  <option value="105">India</option>
                                  <option value="101">Indonesia</option>
                                  <option value="108">Iran</option>
                                  <option value="107">Iraq</option>
                                  <option value="102">Ireland</option>
                                  <option value="104">Isle of Man</option>
                                  <option value="103">Israel</option>
                                  <option value="110">Italy</option>
                                  <option value="44">Ivory Coast</option>
                                  <option value="112">Jamaica</option>
                                  <option value="114">Japan</option>
                                  <option value="111">Jersey</option>
                                  <option value="113">Jordan</option>
                                  <option value="125">Kazakhstan</option>
                                  <option value="115">Kenya</option>
                                  <option value="118">Kiribati</option>
                                  <option value="243">Kosovo</option>
                                  <option value="123">Kuwait</option>
                                  <option value="116">Kyrgyzstan</option>
                                  <option value="126">Laos</option>
                                  <option value="135">Latvia</option>
                                  <option value="127">Lebanon</option>
                                  <option value="132">Lesotho</option>
                                  <option value="131">Liberia</option>
                                  <option value="136">Libya</option>
                                  <option value="129">Liechtenstein</option>
                                  <option value="133">Lithuania</option>
                                  <option value="134">Luxembourg</option>
                                  <option value="148">Macao</option>
                                  <option value="144">Macedonia</option>
                                  <option value="142">Madagascar</option>
                                  <option value="156">Malawi</option>
                                  <option value="158">Malaysia</option>
                                  <option value="155">Maldives</option>
                                  <option value="145">Mali</option>
                                  <option value="153">Malta</option>
                                  <option value="143">Marshall Islands</option>
                                  <option value="150">Martinique</option>
                                  <option value="151">Mauritania</option>
                                  <option value="154">Mauritius</option>
                                  <option value="245">Mayotte</option>
                                  <option value="157">Mexico</option>
                                  <option value="73">Micronesia</option>
                                  <option value="139">Moldova</option>
                                  <option value="138">Monaco</option>
                                  <option value="147">Mongolia</option>
                                  <option value="140">Montenegro</option>
                                  <option value="152">Montserrat</option>
                                  <option value="137">Morocco</option>
                                  <option value="159">Mozambique</option>
                                  <option value="146">Myanmar</option>
                                  <option value="160">Namibia</option>
                                  <option value="169">Nauru</option>
                                  <option value="168">Nepal</option>
                                  <option value="166">Netherlands</option>
                                  <option value="8">Netherlands Antilles</option>
                                  <option value="161">New Caledonia</option>
                                  <option value="171">New Zealand</option>
                                  <option value="165">Nicaragua</option>
                                  <option value="162">Niger</option>
                                  <option value="164">Nigeria</option>
                                  <option value="170">Niue</option>
                                  <option value="163">Norfolk Island</option>
                                  <option value="121">North Korea</option>
                                  <option value="149">Northern Mariana Islands</option>
                                  <option value="167">Norway</option>
                                  <option value="172">Oman</option>
                                  <option value="178">Pakistan</option>
                                  <option value="185">Palau</option>
                                  <option value="183">Palestinian Territory</option>
                                  <option value="173">Panama</option>
                                  <option value="176">Papua New Guinea</option>
                                  <option value="186">Paraguay</option>
                                  <option value="174">Peru</option>
                                  <option value="177">Philippines</option>
                                  <option value="181">Pitcairn</option>
                                  <option value="179">Poland</option>
                                  <option value="184">Portugal</option>
                                  <option value="182">Puerto Rico</option>
                                  <option value="187">Qatar</option>
                                  <option value="42">Republic of the Congo</option>
                                  <option value="188">Reunion</option>
                                  <option value="189">Romania</option>
                                  <option value="191">Russia</option>
                                  <option value="192">Rwanda</option>
                                  <option value="27">Saint Barthélemy</option>
                                  <option value="199">Saint Helena</option>
                                  <option value="120">Saint Kitts and Nevis</option>
                                  <option value="128">Saint Lucia</option>
                                  <option value="141">Saint Martin</option>
                                  <option value="180">Saint Pierre and Miquelon</option>
                                  <option value="235">Saint Vincent and the Grenadines</option>
                                  <option value="242">Samoa</option>
                                  <option value="204">San Marino</option>
                                  <option value="208">Sao Tome and Principe</option>
                                  <option value="193">Saudi Arabia</option>
                                  <option value="205">Senegal</option>
                                  <option value="190">Serbia</option>
                                  <option value="51">Serbia and Montenegro</option>
                                  <option value="195">Seychelles</option>
                                  <option value="203">Sierra Leone</option>
                                  <option value="198">Singapore</option>
                                  <option value="202">Slovakia</option>
                                  <option value="200">Slovenia</option>
                                  <option value="194">Solomon Islands</option>
                                  <option value="206">Somalia</option>
                                  <option value="246">South Africa</option>
                                  <option value="90">South Georgia and the South Sandwich Islands</option>
                                  <option value="122">South Korea</option>
                                  <option value="68">Spain</option>
                                  <option value="130">Sri Lanka</option>
                                  <option value="196">Sudan</option>
                                  <option value="207">Suriname</option>
                                  <option value="201">Svalbard and Jan Mayen</option>
                                  <option value="211">Swaziland</option>
                                  <option value="197">Sweden</option>
                                  <option value="43">Switzerland</option>
                                  <option value="210">Syria</option>
                                  <option value="226">Taiwan</option>
                                  <option value="217">Tajikistan</option>
                                  <option value="227">Tanzania</option>
                                  <option value="216">Thailand</option>
                                  <option value="215">Togo</option>
                                  <option value="218">Tokelau</option>
                                  <option value="222">Tonga</option>
                                  <option value="224">Trinidad and Tobago</option>
                                  <option value="221">Tunisia</option>
                                  <option value="223">Turkey</option>
                                  <option value="220">Turkmenistan</option>
                                  <option value="212">Turks and Caicos Islands</option>
                                  <option value="225">Tuvalu</option>
                                  <option value="238">U.S. Virgin Islands</option>
                                  <option value="229">Uganda</option>
                                  <option value="228">Ukraine</option>
                                  <option value="2">United Arab Emirates</option>
                                  <option value="77">United Kingdom</option>
                                  <option value="231">United States</option>
                                  <option value="230">United States Minor Outlying Islands</option>
                                  <option value="232">Uruguay</option>
                                  <option value="249">usa</option>
                                  <option value="233">Uzbekistan</option>
                                  <option value="240">Vanuatu</option>
                                  <option value="234">Vatican</option>
                                  <option value="236">Venezuela</option>
                                  <option value="239">Vietnam</option>
                                  <option value="241">Wallis and Futuna</option>
                                  <option value="66">Western Sahara</option>
                                  <option value="244">Yemen</option>
                                  <option value="247">Zambia</option>
                                  <option value="248">Zimbabwe</option>
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
                                <Form.Control type="text" placeholder="Enter Country" onChange={(e) => handle(e)} value={data.country}  />
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="state">
                                <Form.Label> State </Form.Label>
                                <Form.Control type="text" placeholder="Enter State" onChange={(e) => handle(e)} value={data.state}/>
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="city">
                                <Form.Label> City/Town </Form.Label>
                                <Form.Control type="text" placeholder="Enter City/Town" onChange={(e) => handle(e)} value={data.city}/>
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="countryLiving">
                                <Form.Label> Country Living In </Form.Label>
                                <Form.Control type="text" placeholder="Enter Country Living In" onChange={(e) => handle(e)} value={data.countryLiving} />
                              </Form.Group>

                              <Form.Group as={Col} className="mb-3" controlId="native">
                                <Form.Label> Native </Form.Label>
                                <Form.Control type="text" placeholder="Enter Native" onChange={(e) => handle(e)} value={data.native}/>
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