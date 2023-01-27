import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/login.scss";
import LogoImage from "../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/userSlice";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  EmailAddress: yup.string().email("Invalid email").required("This field is required"),
  Password: yup.string().required("This field is required"),
});
const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    EmailAddress: "",
    Password: "",
  });

  const dispatch = useDispatch();

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

                <Formik
                  initialValues={formData}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    const data = {
                      EmailAddress: values.EmailAddress,
                      Password: values.Password,
                    };
                    const { payload } = await dispatch(login(data));
                    console.log("payload", payload);
                    navigate("/");

                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={values.EmailAddress}
                          onChange={handleChange}
                          name="EmailAddress"
                          onBlur={handleBlur}
                        />
                        {touched.EmailAddress && errors.EmailAddress ? (
                          <div className="errorMessage">{errors.EmailAddress}</div>
                        ) : null}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicpassword"
                      >
                        <Form.Label>password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="password"
                          value={values.Password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="Password"
                        />

                        {touched.Password && errors.Password ? (
                          <div className="errorMessage">{errors.Password}</div>
                        ) : null}
                      </Form.Group>

                      <div className="d-flex justify-content-between">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Link to="/" className="forgetPswd">
                          {" "}
                          Forget password?{" "}
                        </Link>
                      </div>
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Submit
                      </Button>
                      <p className="signUpTxt">
                        {" "}
                        Not Registered yet?{" "}
                        <Link to="/signUp"> Create an Account </Link>{" "}
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
