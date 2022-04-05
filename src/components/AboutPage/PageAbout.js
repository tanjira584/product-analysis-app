import React from "react";
import Breadcumb from "../Breadcumb/Breadcumb";
import Footer from "../Footer";
import HeaderMain from "../Header/Header";

const PageAbout = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <Breadcumb page="About"></Breadcumb>
            <Footer></Footer>
        </div>
    );
};
export default PageAbout;
