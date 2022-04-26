import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import "./Loader.css";
import LoadingCountry from "./LoadingCountry";
function Loader() {
  return (
    <div>
      <nav className="navbar navbar-loader">
        <div className="navbar-title-loader"></div>
        <div className="navbar-title-loader"></div>
      </nav>
      <div className="filter-container filter-container-loader">
        <div className="filter-1 react-select-container"></div>
        <div className="filter-2 search-container"></div>
      </div>
      <main className="home-page">
        <LoadingCountry />
        <LoadingCountry />
        <LoadingCountry />
        <LoadingCountry />
        <LoadingCountry />
        <LoadingCountry />
        <LoadingCountry />
        <LoadingCountry />
      </main>
    </div>
  );
}

export default Loader;
