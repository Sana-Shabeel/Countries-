import React from "react";
import { BsSearch } from "react-icons/bs";
function SearchCountry({ data, setDataObj }) {
  const inputChangeHandler = (e) => {
    const value = e.target.value;
    const filteredResults = data.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setDataObj(filteredResults);
  };
  return (
    <div className="search-container">
      <BsSearch />
      <input
        type="text"
        onChange={inputChangeHandler}
        className="form-control"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchCountry;
