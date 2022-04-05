import React from "react";
import "./index.css";

const FooterBottom = () => {
    return (
        <section className="footer-bottom">
            <div className="container-md container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="copy-text">
                        <p className="m-0 text-light">
                            Copyright 2022 all right reserved Tanjir
                        </p>
                    </div>
                    <div className="payment-bar">
                        <ul>
                            <li>
                                <img src="images/1.png" alt="" />
                            </li>
                            <li>
                                <img src="images/2.png" alt="" />
                            </li>
                            <li>
                                <img src="images/3.png" alt="" />
                            </li>
                            <li>
                                <img src="images/4.png" alt="" />
                            </li>
                            <li>
                                <img src="images/5.png" alt="" />
                            </li>
                            <li>
                                <img src="images/6.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FooterBottom;
