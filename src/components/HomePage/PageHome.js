import React from "react";
import Footer from "../Footer";
import HeaderMain from "../Header/Header";
import Home from "../Home/Home";
import Reviews from "../Reviews/Reviews";

const PageHome = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <Home></Home>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};
export default PageHome;
