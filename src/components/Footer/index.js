import React from "react";
import FooterBottom from "./FooterBottom";
import FooterMain from "./FooterMain";
import FooterTop from "./FooterTop";
import "./index.css";

const Footer = () => {
    return (
        <footer>
            <FooterTop></FooterTop>
            <FooterMain></FooterMain>
            <FooterBottom></FooterBottom>
        </footer>
    );
};
export default Footer;
