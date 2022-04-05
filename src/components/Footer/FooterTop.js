import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const FooterTop = () => {
    return (
        <section className="footer-top py-4">
            <div className="container-md container-fluid">
                <div className="subscribe-area d-flex justify-content-between align-items-center">
                    <div className="f-top-left d-flex justify-content-between align-items-center">
                        <div className="icon">
                            <FontAwesomeIcon
                                icon={faEnvelopeOpenText}
                            ></FontAwesomeIcon>
                        </div>
                        <div className="f-top-text">
                            <h5 className="m-0 p-0 text-light">
                                Join Our Newsletter
                            </h5>
                            <p className="m-0 p-0 text-light">
                                Enter your email address and recived news.
                            </p>
                        </div>
                    </div>
                    <div className="f-top-right">
                        <form action="" className="w-100">
                            <div class="input-group">
                                <input
                                    type="email"
                                    class="form-control"
                                    placeholder="Enter Your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <span
                                    class="input-group-text"
                                    id="basic-addon2"
                                >
                                    {" "}
                                    <button>Subscribe</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FooterTop;
