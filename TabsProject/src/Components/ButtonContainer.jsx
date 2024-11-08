import React from "react";
import styles from "./tabsCss.module.css"

const ButtonContainer = ({ jobs, setCurrentItem, currentItem }) => {
  return (
    <div className={styles.btnContainer}>
      {jobs.map((item, index) => {
        return (
          <button key={item.id} onClick={() => setCurrentItem(index)}>
            <p>{item.company}</p>
          </button>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
