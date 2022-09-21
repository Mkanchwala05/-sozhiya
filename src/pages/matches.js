    import React from "react";
import {ListGroup, Form, Container, Row ,Col, Card, Button}  from 'react-bootstrap';
import Header from "./components/header";
import BreadcrumbUI from "./components/Breadcrumb";

import "../assets/styles/matchesUI.scss";

const MatchesProfile = (props) => {
    const posts = [
        {   id: 1, 
            userID:"254879",
            userImage: "http://www.sozhiyavellalarmarriage.com/images/a5.jpg",
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
            userImage: "http://www.sozhiyavellalarmarriage.com/images/a6.jpg",
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
            userImage: "http://www.sozhiyavellalarmarriage.com/images/a7.jpg",
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
            userImage: "http://www.sozhiyavellalarmarriage.com/images/a8.jpg",
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
            userImage: "http://www.sozhiyavellalarmarriage.com/images/a6.jpg",
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
            userImage: "http://www.sozhiyavellalarmarriage.com/images/a5.jpg",
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
                <Container>
                    <BreadcrumbUI/>
                    <Row>
                        <Col md={9}>
                            <ListGroup horizontal>
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
                                                <ListGroup.Item> <span> Age / Height : </span>	{post.userAge}, {post.userHeight}</ListGroup.Item>
                                                <ListGroup.Item> <span> Last Login : </span>	{post.userLastSeen}</ListGroup.Item>
                                                <ListGroup.Item> <span> Religion : </span>	    {post.religion}</ListGroup.Item>
                                                <ListGroup.Item> <span> Marital Status : </span>	{post.MaritalStatus}</ListGroup.Item>
                                                <ListGroup.Item> <span> Location : </span>	{post.userlocation}</ListGroup.Item>
                                                <ListGroup.Item> <span> Profile Created By : </span>	{post.userProfileCreated}</ListGroup.Item>
                                                <ListGroup.Item> <span> Education :</span>	{post.userEducation}</ListGroup.Item>
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

                        <Col md={3}>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default MatchesProfile;
