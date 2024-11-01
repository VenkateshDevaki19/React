import React, { useEffect, useState } from "react";
import styles from "./Review.module.css";

const Review = ({id, name, job, text, image, onPrev, onNext}) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.review_container}>
        <div className={styles.image_container}>
          <img
            src={image}
            alt="profile_image"
          />
        </div>

        <h2 className={styles.userName}>{name}</h2>
        <p className={styles.role}>{job}</p>

        <div className={styles.info_container}>
          <p>
            {text}
          </p>
        </div>
        <div className="button_container">
          <button className={styles.leftSide_button} onClick={onPrev}>  
            <svg
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.09843 8.33711L8.69022 0.745703C9.05624 0.379688 9.64999 0.379688 10.016 0.745703L10.9016 1.63125C11.2672 1.99688 11.2676 2.58906 10.9031 2.95547L4.88632 9L10.9027 15.0449C11.2676 15.4113 11.2668 16.0035 10.9012 16.3691L10.0156 17.2547C9.6496 17.6207 9.05585 17.6207 8.68983 17.2547L1.09843 9.66289C0.73241 9.29688 0.73241 8.70312 1.09843 8.33711Z"
                fill="#3C3799"
              />
            </svg>
          </button>

          <button className={styles.rightSide_button} onClick={onNext}>
            <svg
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9014 9.66293L3.30985 17.2545C2.94371 17.6206 2.35012 17.6206 1.98403 17.2545L1.0986 16.369C0.733088 16.0035 0.732385 15.4111 1.09703 15.0448L7.11348 9L1.09703 2.95527C0.732385 2.58891 0.733088 1.99652 1.0986 1.63101L1.98403 0.745585C2.35016 0.379452 2.94375 0.379452 3.30985 0.745585L10.9014 8.33711C11.2675 8.7032 11.2675 9.2968 10.9014 9.66293Z"
                fill="#3C3799"
              />
            </svg>
          </button>
        </div>

        <button className={styles.surprise_button}>Surprise Me</button>
      </div>
    </div>
  );
};

export default Review;
