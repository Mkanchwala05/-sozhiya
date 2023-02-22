import React, { useEffect, useState } from "react";
import { ListGroup, Card, Container, Row, Col, Tabs, Tab, } from 'react-bootstrap';
import Header from "./components/header";
import BreadcrumbUI from "./components/Breadcrumb";
import MatchesFilter from "./components/matchesFilter";
// import FullPorfileCard from "./components/fullProfileCard"
import FooterUI from "../pages/components/footer"
import "../assets/styles/profile.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import SorryMsg from "../assets/images/sorry.png"

const UserProfile = (props) => {

    const [users, setUsers] = useState(null)

    const { usr_id } = useParams()
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://sozhiyavellalarmarriage.com/matrimonyApp/UserController/getUsersList/${usr_id}`,
                );
                setUsers(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setUsers(null);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);
    if (users === null) {
        return (
            <Col className="d-flex justify-content-center">
                <img src={SorryMsg} alt="" />
            </Col>
        );
    }

    return (
        <>
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {loading && <div>A moment please...</div>}

            <div className="profilePageUI">
                <Header />
                <Container className="profilePageUIBody">
                    <BreadcrumbUI />
                    <Row>

                        <Col md={9}>
                            <Card>
                                <Card.Header>Profile ID : {users.data.usr_id + 21000} </Card.Header>
                                <Card.Body>
                                    <Card.Img variant="top" src={"https://plchldr.co/i/245x155?bg=EB6361"} />
                                    <div className="userPersnoalDetails">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item> <span> Name : </span>	<p> {users.data.usr_name} </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Sex : </span>	<p> {users.usr_gender} </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Religion : </span>	    <p> {users.data.usr_kothram} </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Marital Status : </span>	<p> {users.data.usr_marital_status} </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Location : </span>	<p> {users.data.usr_country} </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Profile Created By : </span>	<p> {users.data.usr_created_by} </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Education :</span>	<p> {users.data.usr_education} </p> </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Tabs
                                defaultActiveKey="aboutMyself"
                                id="uncontrolled-tab-example"
                                className="mb-3 mt-4"
                            >
                                <Tab eventKey="aboutMyself" title="About Myself">

                                    <h3 className="tabTitleTxt"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                                    <p className="tabDetailTxt">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
                                    </p>

                                    <h3 className="tabTitleTxt mt-3"> Basics & Lifestyle </h3>

                                    <div className="userPersnoalDetails">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item> <span> Name  : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Marital Status : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Body Type : </span>	    <p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Marital Status : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Height : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Physical Status : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Profile Created By :</span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Drink  :</span>	<p>  </p> </ListGroup.Item>
                                        </ListGroup>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item> <span> Age : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Mother Tongue : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Complexion  : </span>	    <p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Weight : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Blood Group : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Diet : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Smoke :</span>	<p>  </p> </ListGroup.Item>
                                        </ListGroup>
                                    </div>

                                    <h3 className="tabTitleTxt mt-3"> Religious / Social & Astro Background </h3>

                                    <div className="userPersnoalDetails">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item> <span> Time Of Birth : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Caste : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Date Of Birth : </span>	    <p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Place Of Birth : </span>	<p>  </p> </ListGroup.Item>
                                        </ListGroup>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item> <span> Religion : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Sub Caste : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Raasi : </span>	    <p>  </p> </ListGroup.Item>
                                        </ListGroup>
                                    </div>

                                    <h3 className="tabTitleTxt mt-3"> Education & Career </h3>

                                    <div className="userPersnoalDetails">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item> <span> Education  : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Education Detail  : </span>	<p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Occupation Detail : </span>	    <p>  </p> </ListGroup.Item>
                                            <ListGroup.Item> <span> Annual Income : </span>	<p>  </p> </ListGroup.Item>
                                        </ListGroup>
                                    </div>

                                </Tab>
                                <Tab eventKey="familyDetails" title="Family Details">

                                </Tab>
                                <Tab eventKey="partnerPreference" title="Partner Preference">

                                </Tab>
                            </Tabs>
                        </Col>
                        <Col md={3} className="match_right">
                            <MatchesFilter />
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterUI />
        </>
    );
};

export default UserProfile;
