import React, { useEffect, useState } from "react";
import Coffee from "./pages/Coffee";

const App = () => {
 /* const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/coffee");
      const FetchedData = await response.json();
      console.log( 'Fetched Data:',FetchedData);
      // confirm fetchData is an array, if not set it as an empty array
      // setData(Array.isArray(FetchedData)? fetchData :[]);
      setData(FetchedData);
    } catch (error) {
      console.log("Error fetching tasks: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
*/
  return (
    <div>
      <h1>Coffee Store Catalogue</h1>
      {/* <Coffee  onClick ={fetchData} data loading/> */}
      {/* <Coffee  fetchData ={fetchData} data={data} loading={loading}/> */}
      <Coffee />
    </div>
  );
};

export default App;
