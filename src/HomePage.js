import React from "react";
import Countries from "./components/Countries/Countries";
import Navbar from "./components/Navbar/Navbar";

function HomePage({ theme, setTheme }) {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />

      <Countries />
    </>
  );
}

export default HomePage;
