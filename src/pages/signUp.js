import React, { useState } from 'react';
import { Container, Row, Form, Button, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/login.scss";
import LogoImage from "../assets/images/logo.png"
import FirstStep from "./components/registrationStep/registrationStep1"
import SecondStep from "./components/registrationStep/registrationStep2"

const firstComponent = () => {
    return ( <FirstStep/> )
}
const secondComponent = () => {
    return ( <SecondStep/> )
}

  
function SignUpPage() {
   

    const [steps, setSteps] = useState([
        { key: 'firstStep',  isDone: true, component: firstComponent },
        { key: 'secondStep', isDone: false, component: secondComponent }
      ]);
    
      const [activeStep, setActiveStep] = useState(steps[0]);
    
      const handleNext = () => {
        if (steps[steps.length - 1].key === activeStep.key) {
          alert('You have completed all steps.');
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

                                <div className="wizardApp">
                                    <div className="box">
                                        <div className="steps">
                                        <ul className="nav">
                                            {steps.map((step, i) => {
                                            return <li key={i} className={`${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                                                <div>Step {i + 1}<br /><span>{step.label}</span></div>
                                            </li>
                                            })}
                                        </ul>
                                        </div>
                                        <div className="step-component">
                                            {activeStep.component()}
                                        </div>
                                        <div className="btn-component">
                                        <input type="button" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
                                        <input type="button" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext} />
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