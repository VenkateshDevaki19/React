import React from "react";
import axios from "axios";
import { useGlobalContext } from "./Context";
import { useQuery } from "@tanstack/react-query";

const url = `https://api.unsplash.com/search/photos/?client_id=5U_QDHpomb8j_5MPaQjXDSeumRdP6lZ2SI3rfu6Vir0`;

const Gallery = () => {
  const { searchItem } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", searchItem],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchItem}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container-msg">
        <h4>Loading....</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container-msg">
        <h4>There was an error</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container-msg">
        <h4>No results found</h4>
      </section>
    );
  }

  return (
    <div>
      <section className="image-container">
        {results.map((item) => {
          const url = item?.urls?.regular;
          return (
            <img
              src={url}
              alt={item.description}
              key={item.id}
              className="img"
            />
          );
        })}
      </section>
    </div>
  );
};

export default Gallery;
