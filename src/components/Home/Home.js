import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <section className="home-area">
            <div className="home-img">
                <img src="images/slide-1.png" alt="" />
            </div>
            <div className="home-content-container d-flex flex-column justify-content-center">
                <div className="container">
                    <div className="home-content col-md-6">
                        <h4>Fabulous</h4>
                        <h1>
                            Smart Watch Silver <span>Royel</span>
                        </h1>
                        <p>
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without
                            relying on meaningful content.
                        </p>
                        <a href="#">Live Demo</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Home;
