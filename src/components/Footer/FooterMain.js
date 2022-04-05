import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebookF,
    faInstagram,
    faPinterest,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const FooterMain = () => {
    return (
        <section className="footer-main">
            <div className="container-md container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="f-box px-2">
                            <div className="img mb-3">
                                <img src="images/footer-logo.png" alt="" />
                            </div>
                            <div className="text text-light">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit, labore et dolore magna aliqua.
                            </div>
                            <div className="footer-social">
                                <ul>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon
                                                icon={faFacebookF}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon
                                                icon={faTwitter}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon
                                                icon={faPinterest}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon
                                                icon={faYoutube}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="f-account px-2">
                            <h5 className="text-light mb-3">Your Account</h5>
                            <ul className="m-0 p-0">
                                <li>
                                    <a href=" ">Personal Info</a>
                                </li>
                                <li>
                                    <a href=" ">Orders</a>
                                </li>
                                <li>
                                    <a href=" ">Credit slips</a>
                                </li>
                                <li>
                                    <a href=" ">Addresses</a>
                                </li>
                                <li>
                                    <a href=" ">My Wishlists</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="f-product px-2">
                            <h5 className="mb-3 text-light">Products</h5>
                            <ul className="m-0 p-0">
                                <li>
                                    <a href=" ">delivery</a>
                                </li>
                                <li>
                                    <a href=" ">Legal notice</a>
                                </li>
                                <li>
                                    <a href=" ">Prices drop</a>
                                </li>
                                <li>
                                    <a href=" ">New Products</a>
                                </li>
                                <li>
                                    <a href=" ">Best Sells</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="f-address px-2">
                            <ul className="m-0 p-0">
                                <li className="d-flex justify-content-start align-items-center text-light">
                                    <div className="icon">
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                        ></FontAwesomeIcon>
                                    </div>

                                    <div className="address-text">
                                        <h5>Contact us</h5>
                                        <p>9856321455</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                        ></FontAwesomeIcon>
                                    </div>

                                    <div className="address-text">
                                        <h5>Email</h5>
                                        <p>tanjira584@gmail.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon
                                            icon={faLocationDot}
                                        ></FontAwesomeIcon>
                                    </div>

                                    <div className="address-text">
                                        <h5>Location</h5>
                                        <p>4005 Silver business point India</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FooterMain;
