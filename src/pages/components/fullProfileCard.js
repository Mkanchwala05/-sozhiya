import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from 'react-bootstrap';

const FullPorfileCard = () => {
    
    const [users, setUsers ] = useState([]);

    const getUsers = async () => {
        const response = await fetch('http://localhost:3000/users');
        setUsers(await response.json());
    }

    useEffect(() => {
        getUsers();
    }, []);

    
    return (
        <>
            {users.map((curElem) =>   {
                return(


                    <Card key={curElem.id}>
                        <Card.Header> {curElem.id + 21000} | Profile Created for {curElem.createdBy}</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={"https://plchldr.co/i/245x155?bg=EB6361"} />
                            <div className="userDescription">
                                <small> Last Login : undefined
                                    {/* {curElem.userLastSeen}  */}
                                </small>
                                <p> {curElem.subject} <br />
                                    More....</p>
                            </div>
                            <div className="userPersnoalDetails">
                                <ListGroup variant="flush">
                                    <ListGroup.Item> <span> Name : </span>	<p> {curElem.name} </p> </ListGroup.Item>
                                    <ListGroup.Item> <span> Sex : </span>	<p> {curElem.sex} </p> </ListGroup.Item>
                                    <ListGroup.Item> <span> Religion : </span>	    <p> {curElem.kulam} </p> </ListGroup.Item>
                                    <ListGroup.Item> <span> Marital Status : </span>	<p> {curElem.maritalStatus} </p> </ListGroup.Item>
                                    <ListGroup.Item> <span> Location : </span>	<p> {curElem.employedCountry} </p> </ListGroup.Item>
                                    <ListGroup.Item> <span> Profile Created By : </span>	<p> {curElem.createdBy} </p> </ListGroup.Item>
                                    <ListGroup.Item> <span> Education :</span>	<p> {curElem.education} </p> </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                        <div className="ms-auto">
                            <Button className="sndMailBtn"> Send Mail </Button>
                            <Button className="shortlistBtn">ShortListed</Button>
                            <Button className="sndInterestBtn"> Send Interest</Button>
                        </div>
                    </Card>
                ) 
            })

           
            }
        </>
    );
}

export default FullPorfileCard;