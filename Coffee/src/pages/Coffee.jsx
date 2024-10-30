import React, { useEffect, useState } from "react";
import CoffeeCard from "../Components/CoffeeCard";

const Coffee = () => {
  const [data, setData] = useState([]); //Holds the coffee data
  const [loading, setLoading] = useState(false); // Handles loading State
  const [showData, setShowData] = useState(false); // controls when to show data

  const fetchData = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:8080/coffee");
        const FetchedData = await response.json();
        // console.log("Fetched Data:", FetchedData);
        setData(FetchedData);
      } catch (error) {
        console.log("Error fetching tasks: ", error);
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleShowData = () => {
    setShowData(true);
  };

  return (
    <div>
      <button onClick={handleShowData}>Get Coffee</button>
      {loading && <p>Loading...</p>}
      {showData &&
        data.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            imageData={coffee.image}
            titleData={coffee.title}
            descData={coffee.description}
            priceData={coffee.price}
            ingredientsData={coffee.ingredients}
          />
        ))}
    </div>
  );
};

export default Coffee;
