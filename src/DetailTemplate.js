import React from "react";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import Navbar from "./components/Navbar/Navbar";

function DetailTemplate({ theme, setTheme }) {
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <CountryDetail />
    </div>
  );
}

export default DetailTemplate;
