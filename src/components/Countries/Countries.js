import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import Country from "./Country";
import Loader from "../Loading/Loader";
import CountryDetail from "../CountryDetail/CountryDetail";
function Countries() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://restcountries.com/v2/all").then((res) => res.json())
  );

  const [dataObj, setDataObj] = useState(data);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }
  const validData = dataObj ? dataObj : data;

  return (
    <>
      <Filter data={data} setDataObj={setDataObj} />
      <main className="home-page">
        {validData.map((country) => (
          <Link
            to={`/${country.alpha2Code}`}
            key={country.name}
            element={<CountryDetail />}
          >
            <Country country={country} />
          </Link>
        ))}
      </main>
    </>
  );
}

export default Countries;
