import React from "react";
import styles from "../Components/CoffeeCard.module.css";

const CoffeeCard = ({ imageData, titleData, descData, priceData, ingredientsData }) => {
  return (
    <div className={styles.coffee_container}>
      <div className={styles.imageDiv}>
        <img src={imageData} alt="Coffee Image" />
      </div>

      <div className={styles.detailsDiv}>
        <h2>{titleData}</h2>
        <p>${priceData}</p>
        <p>{descData}</p>
        <ul className={styles.ingredient}>
          {
            ingredientsData.map((ingredient, index) => {
              <li key={index}>{ingredient}</li>
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default CoffeeCard;
