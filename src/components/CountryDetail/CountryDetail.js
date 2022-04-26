import React from "react";
import Borders from "./Borders";
import CountryDescription from "./CountryDescription";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { BsArrowLeft } from "react-icons/bs";

function CountryDetail() {
  const params = useParams();
  const { isLoading, error, data } = useQuery("country", () =>
    fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return "An error occurred while " + error;
  }
  console.log(data);
  return (
    <main className="country-detail">
      <div className="country-detail-wrapper">
        <Link to={`/`} className="btn back-btn">
          {" "}
          <BsArrowLeft /> Back
        </Link>
        <CountryDescription data={data} />
        <Borders border={data[0].borders} />
      </div>
    </main>
  );
}

export default CountryDetail;
