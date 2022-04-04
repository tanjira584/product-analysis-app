import React from "react";
import SingleReviews from "../Reviews/SingleReviews";
import useReviews from "../../hooks/useReviews";
import "./PageReviews.css";
import Breadcumb from "../Breadcumb/Breadcumb";

const PageReview = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <section>
            <Breadcumb></Breadcumb>
            <div className="all-reviews">
                <div className="container">
                    <div className="row">
                        {reviews.map((review) => (
                            <div className="col-md-4 rev-box" key={review.id}>
                                <SingleReviews review={review}></SingleReviews>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PageReview;
