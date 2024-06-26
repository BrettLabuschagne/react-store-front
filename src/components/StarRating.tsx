import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

interface StarRatingProps {
    rating: number; // Rating value between 0 and 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    return (
        <div>
            {" "}
            Average: {rating}&nbsp;
            {[...Array(fullStars)].map((_, index) => (
                <FontAwesomeIcon key={`full-${index}`} icon={faStar} color="gold" />
            ))}
            {halfStar && <FontAwesomeIcon key="half" icon={faStarHalfAlt} color="gold" />}
        </div>
    );
};

export default StarRating;
