import React from "react";
import { Link } from "react-router-dom";
import "./Page404.css";

const Page404 = () => {
    return (
        <div className="not-area">
            <div className="not-img text-center">
                <img src="images/not.png" alt="" />
            </div>
            <div className="not-content text-center">
                <h1>Page Not Found</h1>
                <p>Why don't you try one of these pages instead?</p>
                <div className="btns">
                    <Link className="btn btn-success" to="/">
                        Home
                    </Link>
                    <Link className="btn btn-success" to="/reviews">
                        Reviews
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Page404;
