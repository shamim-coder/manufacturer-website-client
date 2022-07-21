import React from "react";
import "./Home.css";

const Banner = () => {
    return (
        <section className="banner">
            <div class="hero justify-start container mx-auto py-28">
                <div className="text-white ">
                    <h5 className="font-bold mb-5 text-xl">PRO-TRUSTED PERFORMANCE</h5>
                    <h1 className="text-7xl font-bold leading-snug">
                        BATTERY-POWERED <br /> OUTDOOR EQUIPMENT
                    </h1>
                    <button className="btn btn-primary mt-10"> Read more</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
