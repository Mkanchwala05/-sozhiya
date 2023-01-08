import React, { useEffect, useState } from "react";
import { Container, Card } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function FeaturedProfile(props) {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('http://localhost:3000/users');
        setUsers(await response.json());
    }

    useEffect(() => {
        getUsers();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <>
            <div className="featureProfilePageUI grid_1">
                <Container>
                    <h2 className="text-center"> Featured Profiles </h2>
                    <div className="heart-divider">
                        <span className="grey-line"></span>
                        <FaHeart className="pink-heart" />
                        <FaHeart className="grey-heart" />
                        <span className="grey-line"></span>
                    </div>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        // infinite={true}
                        // // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5s"
                    >
                        {users.map((curElem) => {
                            return (
                                <div onClick={"/profile/"+ curElem.id}>
                                    <Card key={curElem.id} >
                                        <div className="featureProfile_card_image">
                                            <Card.Img variant="top" src={"https://plchldr.co/i/245x155?bg=EB6361"} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>  {curElem.name} {curElem.id + 21000} </Card.Title>
                                            <Card.Text>
                                                {curElem.name}
                                            </Card.Text>
                                            {/* </Card.Text>
                                                {post.storydesignation}
                                            </Card.Text> */}
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                        }
                    </Carousel>
                </Container>
            </div>
        </>
    );
};

export default FeaturedProfile;
