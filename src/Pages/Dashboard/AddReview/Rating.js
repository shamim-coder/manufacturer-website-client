import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarStroke } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
    return (
        <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center mb-0 text-yellow-500 text-[15px]">
                <FontAwesomeIcon icon={rating >= 1 ? faStar : faStarHalfStroke} />
                <FontAwesomeIcon icon={rating >= 2 ? faStar : faStarStroke} />
                <FontAwesomeIcon icon={rating >= 3 ? faStar : faStarStroke} />
                <FontAwesomeIcon icon={rating > 3 && rating < 4 ? faStarHalfStroke : rating >= 4 ? faStar : faStarStroke} />
                <FontAwesomeIcon icon={rating > 4 && rating < 5 ? faStarHalfStroke : rating >= 5 ? faStar : faStarStroke} />
            </div>
            <div className="rating-in-text">
                <p>( {rating.toFixed(1)} )</p>
            </div>
        </div>
    );
};

export default Rating;
