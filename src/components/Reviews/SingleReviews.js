import React from "react";
import "./SingleReviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SingleReviews = () => {
    return (
        <div className="col-md-4">
            <div className="user-review">
                <div className="rev-img">
                    <img src="images/testimonial-1.png" alt="" />
                </div>
                <div className="rev-text">
                    <p>
                        There are many variations of lorem ipsum available, but
                        the have suffered alteration in some form by
                        humour.”Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry.
                    </p>
                </div>
                <div className="rev-info">
                    <h5>Luies Charls</h5>
                    <p>Web Developer</p>
                </div>
                <div className="rev-rating">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default SingleReviews;
