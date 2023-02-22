// import React from "react";
import { Table, Card,Badge, Col } from "react-bootstrap";
import "../../../assets/styles/dashboard.scss";
import React, { useState, useEffect } from "react";
// import { Card, Button, ListGroup, Col } from 'react-bootstrap';
import axios from "axios";
import SorryMsg from "../../../assets/images/sorry.png"

const DashboardHome = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState();

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
                `https://sozhiyavellalarmarriage.com/matrimonyApp/UserController/getUsersList`,
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
                <img src={SorryMsg} alt=""/>
            </Col>
        );
      }

    return (
        <>
         {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {loading && <div>A moment please...</div>}
                
            <div className="dashboard-body-right">
                <h3> Welcome Admin </h3>
                <p >All systems are running smoothly! You have <span> 3 unread alerts! </span> </p>
                <Card>
                    <Card.Header>User Data </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th> # </th>
                                    <th> Name </th>
                                    <th> Sex </th>
                                    <th> Religion </th>                                    
                                    <th> Location </th>
                                    <th> Profile Created By </th>
                                    <th> email ID </th>
                                </tr>
                            </thead>
                            <tbody>
                {users.data &&
                    users.data.map((curElem, index) => {
                        return (
                                <tr key={index}>
                                    <td> {curElem.usr_id + 21000} </td>
                                    <td> {curElem.usr_name}  </td>
                                    <td> {curElem.usr_gender} </td>                                    
                                    <td> {curElem.usr_kothram} </td>
                                    <td>{curElem.usr_country} </td>
                                    <td> {curElem.usr_created_by} </td>
                                    <td> {curElem.usr_email} </td>
                                    {/* <td>
                                        <Badge bg="success">
                                            Active
                                        </Badge>
                                    </td> */}
                                </tr>
                                )
                            })
                        }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

            </div>
        </>
    );
}

export default DashboardHome;
