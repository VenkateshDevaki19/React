import React, { useState } from "react";
import "./style.css";

const Article = ({ image, title, description }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isInterested, setIsInterested] = useState(false);

  const toggleInterested = () => {
    setIsInterested(!isInterested);
  }

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="article-container">
      <div className="image-content">
        <img
          src={image}
          alt={`${title} image`}
        />
      </div>

      <div className="info-content">
        <div className="info-title">
          <h3>{title}</h3>
        </div>

        <div className="info-text">
          <p className="info-para">
            {description.substring(0,100)}
            {isReadMore && (
              <span id="more">
                {description.substring(0,100)}
              </span>
            )}
          </p>

          <p className="info-read" onClick={toggleReadMore}>
            {isReadMore ? "Read Less" : "Read More"}
          </p>
        </div>

        <button onClick={toggleInterested}>
            {isInterested ? "Interest" : "Not Interested"}
        </button>
      </div>
    </div>
  );
};

export default Article;
