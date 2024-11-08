import React from "react";
import Duties from "./Duties";
import styles from "./tabsCss.module.css";

const JobInfo = ({ jobs, currentItem }) => {
  if (!jobs[currentItem]) {
    return <div>Loading...</div>;
  }

  const { title, company, dates, duties } = jobs[currentItem];
  return (
    <div className={styles.jobContainer}>
      <section>
        <h3 className={styles.jobTitle}>{title}</h3>
        <p className={styles.companyName}><span>{company}</span></p>
        <p className={styles.dateContent}>{dates}</p>
        <Duties duties={duties} />
      </section>
    </div>
  );
};

export default JobInfo;
