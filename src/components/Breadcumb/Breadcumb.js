import React from "react";
import "./Breadcumb.css";
import { Link } from "react-router-dom";

const Breadcumb = () => {
    return (
        <section
            className="breadcumb-area"
            style={{ backgroundImage: "url(images/breadcrumb.jpg)" }}
        >
            <div className="breadcumb-content text-center">
                <h2>Reviews</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default Breadcumb;
