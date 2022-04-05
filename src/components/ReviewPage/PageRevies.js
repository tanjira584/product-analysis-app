import React from "react";
import SingleReviews from "../Reviews/SingleReviews";
import useReviews from "../../hooks/useReviews";
import "./PageReviews.css";
import Breadcumb from "../Breadcumb/Breadcumb";
import HeaderMain from "../Header/Header";
import Footer from "../Footer";

const PageReview = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <section>
            <HeaderMain></HeaderMain>
            <Breadcumb page="Reviews"></Breadcumb>
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
            <Footer></Footer>
        </section>
    );
};
export default PageReview;
