import React from "react";

function Country({ country }) {
  return (
    <div className="country">
      <div className="country-img-container">
        <img
          src={country.flags.png}
          className="country-img"
          alt="country flag"
        />
      </div>
      <div className="country-description">
        <div className="country-overview">
          <h3 className="country-name">{country.name}</h3>
        </div>
        <div className="country-overview">
          <h4>Population</h4>
          <small>{country.population.toLocaleString()}</small>
        </div>
        <div className="country-overview">
          <h4>Region</h4>
          <small>{country.region}</small>
        </div>
        <div className="country-overview">
          <h4>Capital</h4>
          <small>{country.capital}</small>
        </div>
      </div>
    </div>
  );
}

export default Country;
