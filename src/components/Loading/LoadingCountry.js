import React from "react";

function LoadingCountry() {
  return (
    <section className="home-page">
      <div className="country">
        <div className="country-img-container-loader "></div>
        <div className="country-description">
          <div className="country-overview  loading-text">
            <div className="loading-h3"></div>
          </div>
          <div className="country-overview loading-text">
            <div className="loading-h4"></div>
            <div className="loading-small"></div>
          </div>
          <div className="country-overview loading-text">
            <div className="loading-h4"></div>
            <div className="loading-small"></div>
          </div>
          <div className="country-overview loading-text">
            <div className="loading-h4"></div>
            <div className="loading-small"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoadingCountry;
