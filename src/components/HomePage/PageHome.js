import React from "react";
import HeaderMain from "../Header/Header";
import Home from "../Home/Home";
import Reviews from "../Reviews/Reviews";

const PageHome = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <Home></Home>
            <Reviews></Reviews>
        </div>
    );
};
export default PageHome;
