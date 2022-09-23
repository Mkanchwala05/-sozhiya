import React from "react";
import {ListGroup, Form, Container, Row ,Col, Card, Button}  from 'react-bootstrap';
import Header from "./components/header";
import MatchesFilter from "./components/matchesFilter";
import BreadcrumbUI from "./components/Breadcrumb";
import "../assets/styles/matchesUI.scss";

const MatchesProfile = (props) => {
    const posts = [
        {   id: 1, 
            userID:"254879",
            userImage: "https://plchldr.co/i/245x155?bg=EB6361",
            userLastSeen: '4 Hours Ago', 
            userDescriptionTxt: "Some quick example text to build on the card title and make up the bulk of the card's content",
            userAge: "	28 " ,
            userHeight: " 5ft 5in 163cm" ,
            religion: "Sikh" ,
            MaritalStatus: "Single" ,
            userlocation: "India" ,
            userProfileCreated: "Self" ,
            userEducation: "Engineering"             
        },
        {   id: 2, 
            userID:"254870",
            userImage: "https://plchldr.co/i/245x155?bg=EB6361",
            userLastSeen: '4 Hours Ago', 
            userDescriptionTxt: "Some quick example text to build on the card title and make up the bulk of the card's content",
            userAge: "	28 " ,
            userHeight: " 5ft 5in 163cm" ,
            religion: "Sikh" ,
            MaritalStatus: "Single" ,
            userlocation: "India" ,
            userProfileCreated: "Self" ,
            userEducation: "Engineering"             
        },
        {   id: 3, 
            userID:"25435",
            userImage: "https://plchldr.co/i/245x155?bg=EB6361",
            userLastSeen: '4 Hours Ago', 
            userDescriptionTxt: "Some quick example text to build on the card title and make up the bulk of the card's content",
            userAge: "	28 " ,
            userHeight: " 5ft 5in 163cm" ,
            religion: "Sikh" ,
            MaritalStatus: "Single" ,
            userlocation: "India" ,
            userProfileCreated: "Self" ,
            userEducation: "Engineering"             
        },
        {   id: 4, 
            userID:"35665",
            userImage: "https://plchldr.co/i/245x155?bg=EB6361",
            userLastSeen: '4 Hours Ago', 
            userDescriptionTxt: "Some quick example text to build on the card title and make up the bulk of the card's content",
            userAge: "	28 " ,
            userHeight: " 5ft 5in 163cm" ,
            religion: "Sikh" ,
            MaritalStatus: "Single" ,
            userlocation: "India" ,
            userProfileCreated: "Self" ,
            userEducation: "Engineering"             
        },
        {   id: 5, 
            userID:"532532",
            userImage: "https://plchldr.co/i/245x155?bg=EB6361",
            userLastSeen: '4 Hours Ago', 
            userDescriptionTxt: "Some quick example text to build on the card title and make up the bulk of the card's content",
            userAge: "	28 " ,
            userHeight: " 5ft 5in 163cm" ,
            religion: "Sikh" ,
            MaritalStatus: "Single" ,
            userlocation: "India" ,
            userProfileCreated: "Self" ,
            userEducation: "Engineering"             
        },
        {   id: 6, 
            userID:"356678",
            userImage: "https://plchldr.co/i/245x155?bg=EB6361",
            userLastSeen: '4 Hours Ago', 
            userDescriptionTxt: "Some quick example text to build on the card title and make up the bulk of the card's content",
            userAge: "	28 " ,
            userHeight: " 5ft 5in 163cm" ,
            religion: "Sikh" ,
            MaritalStatus: "Single" ,
            userlocation: "India" ,
            userProfileCreated: "Self" ,
            userEducation: "Engineering"             
        }
        
    ];
    const post = props.posts;
    return (
        <>
            <div className="matchesPageUI">
            
                <Header />
                <Container className="matchesPageUIBody">
                    <BreadcrumbUI/>
                    <Row>
                        <Col md={9}>
                            <ListGroup horizontal className="matchFilter">
                                <ListGroup.Item> Don't Show : </ListGroup.Item>
                                <ListGroup.Item>   
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Don't show already viewed " />
                                    </Form.Group> 
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label=" Don't show already contacted" />
                                    </Form.Group> 
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label=" Show profiles with photo" />
                                    </Form.Group> 
                                </ListGroup.Item>
                            </ListGroup>
                            {posts.map((post) =>
                                <Card  key={post.id}>
                                    <Card.Header>{post.userID} | Profile Created for self</Card.Header>
                                    <Card.Body>
                                        <Card.Img variant="top" src={post.userImage} />
                                        <div className="userDescription"> 
                                            <small> Last Login : {post.userLastSeen} </small>
                                            <p> {post.userDescriptionTxt} <br/>
                                            More....</p>
                                        </div>
                                        <div className="userPersnoalDetails"> 
                                            <ListGroup variant="flush">
                                                <ListGroup.Item> <span> Age / Height : </span>	<p> {post.userAge}, {post.userHeight} </p> </ListGroup.Item>
                                                <ListGroup.Item> <span> Last Login : </span>	<p> {post.userLastSeen} </p> </ListGroup.Item>
                                                <ListGroup.Item> <span> Religion : </span>	    <p> {post.religion} </p> </ListGroup.Item>
                                                <ListGroup.Item> <span> Marital Status : </span>	<p> {post.MaritalStatus} </p> </ListGroup.Item>
                                                <ListGroup.Item> <span> Location : </span>	<p> {post.userlocation} </p> </ListGroup.Item>
                                                <ListGroup.Item> <span> Profile Created By : </span>	<p> {post.userProfileCreated} </p> </ListGroup.Item>
                                                <ListGroup.Item> <span> Education :</span>	<p> {post.userEducation} </p> </ListGroup.Item>
                                            </ListGroup>
                                            <div>
                                                <Button className="sndMailBtn"> Send Mail </Button>
                                                <Button className="shortlistBtn">ShortListed</Button>
                                                <Button className="sndInterestBtn"> Send Interest</Button>
                                            </div>
                                        </div>                                    
                                    </Card.Body>
                                </Card>
                             )}
                        </Col>

                        <Col md={3} className="match_right">
                            <MatchesFilter/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default MatchesProfile;
