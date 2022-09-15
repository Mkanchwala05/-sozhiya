import React from "react";
import { Container, Card } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";

const FeaturedProfile = () => {
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
                    {/* <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                        <div><h3>5</h3></div>
                        <div><h3>6</h3></div>
                    </div> */}
                </Container>
            </div>
        </>
    );
};

export default FeaturedProfile;
