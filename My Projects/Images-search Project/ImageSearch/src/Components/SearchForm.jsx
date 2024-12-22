import React from "react";
import { useGlobalContext } from "./Context";

const SearchForm = () => {
  const { setSearchItem } = useGlobalContext();
  const handleSubmit = (event) => {
    console.log("clicked");
    event.preventDefault();
    const searchValue = event.target.elements.search.value;

    if (!searchValue) return;
    setSearchItem(searchValue);
  };

  return (
    <section className="search-container">
      <h1 className="Title">Images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="Search for images"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
