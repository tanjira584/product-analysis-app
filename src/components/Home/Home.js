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
                            For the most part, someone who is in love with
                            mechanical watches is not going to decide to wear a
                            smartwatch over a mechanical watch.
                        </p>
                        <a href="#">Live Demo</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Home;
