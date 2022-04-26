import React, { useState, useEffect } from "react";

function Borders({ border }) {
  const [countries, setCountries] = useState();
  const promiseArray = border?.map((code) =>
    fetch(`https://restcountries.com/v2/alpha/${code}
  `).then((res) => res.json())
  );

  useEffect(() => {
    Promise.all(promiseArray).then((values) => setCountries(values));
  }, [border]);

  if (border) {
    return (
      <div className="border-container">
        <p>Border Countries : </p>
        {countries?.map((country) => (
          <a href={`/${country.alpha2Code}`} className="btn border-btn">
            {country.name}
          </a>
        ))}
      </div>
    );
  }
  return (
    <div className="border-container">
      <p>Border Countries : </p>
      <buttton className="btn border-btn">This country has no borders</buttton>
    </div>
  );
}

export default Borders;
