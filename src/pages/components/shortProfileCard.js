import React, { useEffect, useState } from "react";
import {Card, Button}  from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa';

const ShortProfileCrad = (props) =>{
    const [users, setUsers ] = useState([]);

    const getUsers = async () => {
        const response = await fetch('http://localhost:3000/users');
        setUsers(await response.json());
    }

    useEffect(() => {
        getUsers();
    }, []);

   return(
    <>
         {users.map((curElem) =>   {
                 return(
            <Card  key={curElem.id}>
                <Card.Body>
                    <Card.Img variant="top" src={"https://plchldr.co/i/245x155?bg=EB6361"} />
                    <div className="userDescription"> 
                        <h4> {curElem.name} {curElem.id + 21000}
                            <div className="socialIcons">
                                <Link  to="/" > <FaFacebookF/> </Link>
                                <Link  to="/" > <FaTwitter/> </Link>
                                <Link  to="/" className="googlePlusIcon" > <FaGooglePlusG/> </Link>
                            </div>
                        </h4>
                        <small> Last Login : {curElem.userLastSeen} </small>
                        <p> 
                            <b> Sex :  </b> {curElem.sex} | 
                            <b> Religion : </b> {curElem.kulam} |
                            <b> Education : </b> {curElem.education} |
                            <b> Location  : </b> {curElem.employedCountry}
                        </p>
                        <Link to={"/profile/"+ curElem.id}> view full profile </Link>
                    </div>                                   
                </Card.Body>
                <Card.Footer>
                    <Button className="addPhotoBtn"> Add Photo </Button>
                    <Button className="sndMailBtn"> Send Mail </Button>
                </Card.Footer>
            </Card>
               ) 
            })
           
        }
    </>
   );
}

export default ShortProfileCrad;