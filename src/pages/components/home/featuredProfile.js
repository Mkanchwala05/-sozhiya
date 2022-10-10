import React from "react";
import { Container, Card } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function FeaturedProfile(props){
    const navigate = useNavigate();
  
    const navigateMatches = () => {
        navigate('/matches');
    };

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
    const posts = [
        {id: 1, storyImage: "https://img.shaadi.com/success-story/cSH76530942-QSH17164890-big.jpg", storytitle: 'Profile ID : MI-387412', storyText: "28, Christian, Australia", storydesignation: 'Corporate' },
        {id: 2, storyImage: "https://img.shaadi.com/success-story/jSH80848585-hSH37823012-big.jpg",  storytitle: 'Profile ID : MI-387412', storyText: "28, Christian, Australia", storydesignation: 'Corporate' },
        {id: 3, storyImage: "https://img.shaadi.com/success-story/cSH76530942-QSH17164890-big.jpg", storytitle: 'Profile ID : MI-387412', storyText: "28, Christian, Australia", storydesignation: 'Corporate' },
        {id: 4, storyImage: "https://img.shaadi.com/success-story/vSH53920116-9SH77103955-big.jpg",  storytitle: 'Profile ID : MI-387412', storyText: "28, Christian, Australia", storydesignation: 'Corporate' },
        {id: 5, storyImage: "https://img.shaadi.com/success-story/cSH76530942-QSH17164890-big.jpg", storytitle: 'Profile ID : MI-387412', storyText: "28, Christian, Australia", storydesignation: 'Corporate' },
        {id: 6, storyImage: "https://img.shaadi.com/success-story/jSH80848585-hSH37823012-big.jpg",  storytitle: 'Profile ID : MI-387412', storyText: "28, Christian, Australia", storydesignation: 'Corporate' },
        {id: 7, storyImage: "https://img.shaadi.com/success-story/cSH76530942-QSH17164890-big.jpg", storytitle: 'Profile ID : MI-387412', storyText: "28, Christian, Australia", storydesignation: 'Corporate' },
        {id: 8, storyImage: "https://img.shaadi.com/success-story/jSH80848585-hSH37823012-big.jpg",  storytitle: 'Profile ID : MI-387412', storyText: "28, Christian, Australia", storydesignation: 'Corporate' },
        {id: 9, storyImage: "https://img.shaadi.com/success-story/cSH76530942-QSH17164890-big.jpg", storytitle: 'Profile ID : MI-387412', storyText: "28, Christian, Australia", storydesignation: 'Corporate' },
        {id: 10, storyImage: "https://img.shaadi.com/success-story/vSH53920116-9SH77103955-big.jpg",  storytitle: 'Profile ID : MI-387412', storyText: "28, Christian, Australia", storydesignation: 'Corporate' },
        {id: 11, storyImage: "https://img.shaadi.com/success-story/cSH76530942-QSH17164890-big.jpg", storytitle: 'Profile ID : MI-387412', storyText: "28, Christian, Australia", storydesignation: 'Corporate' },
        {id: 12, storyImage: "https://img.shaadi.com/success-story/jSH80848585-hSH37823012-big.jpg",  storytitle: 'Profile ID : MI-387412', storyText: "28, Christian, Australia", storydesignation: 'Corporate' },
    ];
    const post = props.posts;
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
                        {posts.map((post) =>
                        <div onClick={navigateMatches}>
                            <Card>
                                <div className="featureProfile_card_image">
                                    <Card.Img variant="top" src={post.storyImage} />
                                </div>
                                <Card.Body>
                                    <Card.Title> {post.storytitle} </Card.Title>
                                    <Card.Text>
                                        {post.storyText}
                                    </Card.Text>
                                    <Card.Text>
                                        {post.storydesignation}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        )}
                    </Carousel>
                </Container>
            </div>
        </>
    );
};

export default FeaturedProfile;
