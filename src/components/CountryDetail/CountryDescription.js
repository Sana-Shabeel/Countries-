import React from "react";

function CountryDescription({ data }) {
  const country = data[0];
  const nativeName = Object.values(data[0].name.nativeName);
  const currency = Object.values(country.currencies)[0].name;
  const language = Object.values(country.languages);
  console.log(data);

  return (
    <div className="country-detailed-info">
      <div className="country-detail__img-container">
        <img
          src={country.flags.png}
          className="detail-country-flag"
          alt="country flag"
        />
      </div>
      <div className="country-detail-section">
        <section className="part-1">
          <h1 className="detail-country-name">{country.name.common}</h1>
          <div className="country-detailed-overview ">
            <h4>Native Name:</h4>
            <p>{nativeName.at(-1).common}</p>
          </div>
          <div className="country-detailed-overview ">
            <h4>Population:</h4>
            <p>{country.population.toLocaleString()}</p>
          </div>
          <div className="country-detailed-overview ">
            <h4>Region:</h4>
            <p>{country.region}</p>
          </div>
          <div className="country-detailed-overview ">
            <h4>Sub Region:</h4>
            <p>{country.subregion}</p>
          </div>
          <div className="country-detailed-overview ">
            <h4>Capital:</h4>
            <p>{country.capital}</p>
          </div>
        </section>
        <section className="part-2">
          <div className="country-detailed-overview ">
            <h4>Top level Domain:</h4>
            <p>{country.tld[0]}</p>
          </div>
          <div className="country-detailed-overview ">
            <h4>Currencies:</h4>
            <p>{currency}</p>
          </div>
          <div className="country-detailed-overview ">
            <h4>Language:</h4>
            <p>{language.join(", ")}</p>
          </div>
          <div className="country-detailed-overview ">
            <h4>Location:</h4>
            <a href={country.maps.googleMaps}>Google maps</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CountryDescription;
