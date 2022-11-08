import React, { useEffect, useState } from "react";
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from "axios";

const FullPorfileCard = (props) => {
    
    const { id } = useParams()
    const url = `http://localhost:3000/users`
    const [users, setUsers] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setUsers(response.data)
            })
    }, [url])
    if (users) {
        content =

            <Card key={users.id}>
                <Card.Header> {users.id + 21000} | Profile Created for self</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={"https://plchldr.co/i/245x155?bg=EB6361"} />
                    <div className="userDescription">
                        <small> Last Login : undefined
                            {/* {users.userLastSeen}  */}
                        </small>
                        <p> {users.subject} <br />
                            More....</p>
                    </div>
                    <div className="userPersnoalDetails">
                        <ListGroup variant="flush">
                            <ListGroup.Item> <span> Name : </span>	<p> {users.name} </p> </ListGroup.Item>
                            <ListGroup.Item> <span> Sex : </span>	<p> {users.sex} </p> </ListGroup.Item>
                            <ListGroup.Item> <span> Religion : </span>	    <p> {users.kulam} </p> </ListGroup.Item>
                            <ListGroup.Item> <span> Marital Status : </span>	<p> {users.maritalStatus} </p> </ListGroup.Item>
                            <ListGroup.Item> <span> Location : </span>	<p> {users.employedCountry} </p> </ListGroup.Item>
                            <ListGroup.Item> <span> Profile Created By : </span>	<p> {users.id + 21000} </p> </ListGroup.Item>
                            <ListGroup.Item> <span> Education :</span>	<p> {users.education} </p> </ListGroup.Item>
                        </ListGroup>
                        <div>
                            <Button className="sndMailBtn"> Send Mail </Button>
                            <Button className="shortlistBtn">ShortListed</Button>
                            <Button className="sndInterestBtn"> Send Interest</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
    }
    return (
        <>
            {/* {users.map((users) =>  */}
            { content }
            {/* )} */}
        </>
    );
}

export default FullPorfileCard;