import React from "react";
import {Card, Button}  from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa';

const ShortProfileCrad = (props) =>{
    const posts = [
        {   id: 1, 
            userID:"254879",
            userName:"Profile Name",
            userImage: "https://plchldr.co/i/245x155?bg=EB6361",
            userLastSeen: '4 Hours Ago', 
            userAge: "	28 " ,
            userHeight: " 5ft 5in 163cm" ,
            religion: "Sikh" ,
            userEducation: "Engineering",
            userOccupation: "Software Professional"              
        },
        {   id: 2, 
            userID:"254870",
            userImage: "https://plchldr.co/i/245x155?bg=EB6361",
            userLastSeen: '4 Hours Ago', 
            userAge: "	28 " ,
            userHeight: " 5ft 5in 163cm" ,
            religion: "Sikh" ,
            userEducation: "Engineering",
            userOccupation: "Software Professional"              
        },
        {   id: 3, 
            userID:"25435",
            userImage: "https://plchldr.co/i/245x155?bg=EB6361",
            userLastSeen: '4 Hours Ago', 
            userAge: "	28 " ,
            userHeight: " 5ft 5in 163cm" ,
            religion: "Sikh" ,
            userEducation: "Engineering",
            userOccupation: "Software Professional"              
        },
        {   id: 4, 
            userID:"35665",
            userImage: "https://plchldr.co/i/245x155?bg=EB6361",
            userLastSeen: '4 Hours Ago', 
            userAge: "	28 " ,
            userHeight: " 5ft 5in 163cm" ,
            religion: "Sikh" ,
            userEducation: "Engineering",
            userOccupation: "Software Professional"              
        },
        {   id: 5, 
            userID:"532532",
            userImage: "https://plchldr.co/i/245x155?bg=EB6361",
            userLastSeen: '4 Hours Ago', 
            userAge: "	28 " ,
            userHeight: " 5ft 5in 163cm" ,
            religion: "Sikh" ,
            userEducation: "Engineering",
            userOccupation: "Software Professional"              
        },
        {   id: 6, 
            userID:"356678",
            userImage: "https://plchldr.co/i/245x155?bg=EB6361",
            userLastSeen: '4 Hours Ago', 
            userAge: "	28 " ,
            userHeight: " 5ft 5in 163cm" ,
            religion: "Sikh" ,
            userEducation: "Engineering",      
            userOccupation: "Software Professional"       
        }
        
    ];
    const post = props.posts;
   return(
    <>
        {posts.map((post) =>
            <Card  key={post.id}>
                <Card.Body>
                    <Card.Img variant="top" src={post.userImage} />
                    <div className="userDescription"> 
                        <h4> {post.userName} ({post.userID}) 
                            <div className="socialIcons">
                                <Link  to="/" > <FaFacebookF/> </Link>
                                <Link  to="/" > <FaTwitter/> </Link>
                                <Link  to="/" className="googlePlusIcon" > <FaGooglePlusG/> </Link>
                            </div>
                        </h4>
                        <small> Last Login : {post.userLastSeen} </small>
                        <p> 
                            {post.userAge}, {post.userHeight} | 
                            <b> Religion : </b> {post.religion} |
                            <b> Education : </b> {post.userEducation} |
                            <b> Occupation  : </b> {post.userOccupation}
                        </p>
                        <Link to="/"> view full profile </Link>
                    </div>                                   
                </Card.Body>
                <Card.Footer>
                    <Button className="addPhotoBtn"> Add Photo </Button>
                    <Button className="sndMailBtn"> Send Mail </Button>
                </Card.Footer>
            </Card>
        )}
    </>
   );
}

export default ShortProfileCrad;