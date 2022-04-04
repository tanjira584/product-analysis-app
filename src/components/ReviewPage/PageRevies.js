import React from "react";
import SingleReviews from "../Reviews/SingleReviews";

const PageReview = () => {
    return (
        <div className="container">
            <div className="all-reviews py-5">
                <div className="row">
                    <SingleReviews></SingleReviews>
                    <SingleReviews></SingleReviews>
                    <SingleReviews></SingleReviews>
                    <SingleReviews></SingleReviews>
                    <SingleReviews></SingleReviews>
                    <SingleReviews></SingleReviews>
                </div>
            </div>
        </div>
    );
};
export default PageReview;
