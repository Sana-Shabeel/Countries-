import React from "react";
import ReactSelect from "./ReactSelect";
import SearchCountry from "./SearchCountry";

function Filter({ data, setDataObj }) {
  return (
    <div className="filter-container">
      <SearchCountry data={data} setDataObj={setDataObj} />
      <ReactSelect data={data} setDataObj={setDataObj} />
    </div>
  );
}

export default Filter;
