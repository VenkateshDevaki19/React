import React, { useEffect, useState } from "react";
import Review from "./Components/Review";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/people");
      const data = await response.json();
      console.log("User's data", data);
      setUsers(data);
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentUserIndex((preIndex) =>
      preIndex === users.length - 1 ? 0 : preIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentUserIndex((preIndex) =>
      preIndex === 0 ? users.length - 1 : preIndex - 1
    );
  };

  return (
    <div>
      {/* <Review /> */}
      {users.length > 0 && (
        <Review
          key={users[currentUserIndex].id}
          name={users[currentUserIndex].name}
          job={users[currentUserIndex].job}
          image={users[currentUserIndex].image}
          text={users[currentUserIndex].text}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default App;
