import React from "react";
import "./Reviews.css";
import SingleReviews from "./SingleReviews";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <section className="reviews-area">
            <div className="container">
                <div className="section-header text-center">
                    <h6 className="mb-2">The products</h6>
                    <h2>Customer Review</h2>
                    <hr className="m-auto" />
                </div>
                <div className="reviews-contianer row">
                    {reviews.slice(0, 3).map((review) => (
                        <div className="col-md-4" key={review.id}>
                            <SingleReviews review={review}></SingleReviews>
                        </div>
                    ))}
                </div>
                <div className="reviews-btn mt-5 text-center">
                    <Link to="/reviews">See All Reviews</Link>
                </div>
            </div>
        </section>
    );
};
export default Reviews;
