import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import "./Rating.css";

export default function Rating(props) {
  const { rate, register, cap } = props;
  return (
    <div>
        <span className="rating">
            {rate + " "}
        </span>
        <span>
            {
              rate >= 5
              ? (
                <>
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                </>
              )
              : (rate < 5 && rate >= 4.5)
              ? (
                <>
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStarHalfAlt} 
                />
                </>
              )
              : (rate < 4.5 && rate >= 4)
              ? (
                <>
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                </>
              )
              : (rate < 4 && rate >= 3.5)
              ? (
                <>
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStarHalfAlt} 
                />
                </>
              )
              : (rate < 3.5 && rate >= 3)
              ? (
                <>
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                </>
              )
              : (rate < 3 && rate >= 2.5)
              ? (
                <>
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStarHalfAlt} 
                />
                </>
              )
              : (rate < 2.5 && rate >= 2)
              ? (
                <>
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                </>
              )
              : (rate < 2 && rate >= 1.5)
              ? (
                <>
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                <FontAwesomeIcon
                className="star-icon"
                icon={faStarHalfAlt} 
                />
                </>
              )
              : (rate < 1.5 && rate >= 1)
              ? (
                <>
                <FontAwesomeIcon
                className="star-icon"
                icon={faStar} 
                />
                </>
              )
              : (rate < 1 && rate >= 0.5)
              ? (
                <>
                <FontAwesomeIcon
                className="star-icon"
                icon={faStarHalfAlt} 
                />
                </>
              )
              : (
                <span>No rating yet</span>
              )
            }
        </span>
        {cap ? (
          <span>{cap}</span>
        ) : (
          <span className="student">
            ({register + " students"})
          </span>
        )}
    </div>
    
  );
}