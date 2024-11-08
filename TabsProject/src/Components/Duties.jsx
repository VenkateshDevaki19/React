import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";
import styles from "./tabsCss.module.css";

const Duties = ({ duties }) => {
  return (
    <div className={styles.dutyContainer}>
      {duties.map((item) => {
        const id = uuidv4(); // unique id generator
        return (
          <div key={id} className={styles.adjustContainer}>
            <FaAngleDoubleRight  className={styles.reactIconColor}/>
            <p className={styles.textContainer}>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
