import React, { useEffect, useState } from "react";
import ButtonContainer from "./Components/ButtonContainer";
import JobInfo from "./Components/JobInfo";
import styles from "./Components/tabsCss.module.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetching = async () => {
    try {
      const response = await fetch(
        "https:/www.course-api.com/react-tabs-project"
      );
      const fetchData = await response.json();
      // console.log(fetchData);
      setJobs(fetchData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);
  return (
    <section className={styles.mainContainer}>
      {/* getting the all buttons */}
      <ButtonContainer
        jobs={jobs}
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
      />

      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};

export default App;
