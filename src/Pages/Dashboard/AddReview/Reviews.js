import React from "react";
import Ratings from "./Rating";

const Reviews = () => {
    return (
        <div className="xl:col-span-8 lg:col-span-8 md:col-span-7 col-span-12 grid grid-cols-3 gap-5">
            <div className="mb-10">
                <div className="review-header flex items-center gap-4">
                    <img className="w-20 h-20 object-cover object-top rounded-full shadow" src={"https://i.ibb.co/d46S4Yq/01.webp"} alt="" />
                    <div className="review-rating">
                        <h4 className="font-bold">{"Nieves Burns"}</h4>
                        <h4>{"BlueRock"}</h4>
                        <Ratings rating={3} />
                    </div>
                </div>
                <div className="review-text mt-5 italic">
                    <blockquote>"{"It's an honor to be a part of this company. It's been my dream to become a Digital Dude for as long as I can remember, so when I finally got the opportunity to audition for the team."}"</blockquote>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
