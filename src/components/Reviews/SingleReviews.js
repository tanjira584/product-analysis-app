import React from "react";
import "./SingleReviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SingleReviews = ({ review }) => {
    const { name, desc, img, rating } = review;
    return (
        <div className="">
            <div className="user-review">
                <div className="rev-img">
                    <img src={img} alt="" />
                </div>
                <div className="rev-text">
                    <p>{desc}</p>
                </div>
                <div className="rev-info">
                    <h5>{name}</h5>
                    <p>Web Developer</p>
                </div>
                <div className="rev-rating">
                    <ul>
                        <li className={rating > 0 ? "rated" : " "}>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </li>
                        <li className={rating > 1 ? "rated" : " "}>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </li>
                        <li className={rating > 2 ? "rated" : " "}>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </li>
                        <li className={rating > 3 ? "rated" : " "}>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </li>
                        <li className={rating > 4 ? "rated" : " "}>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default SingleReviews;
