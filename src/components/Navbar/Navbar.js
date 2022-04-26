import React from "react";
import { BsMoon, BsFillSunFill } from "react-icons/bs";

function Navbar({ theme, setTheme }) {
  console.log(theme);

  const toggleTheme = () => {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Where in the world?</h1>
      <div className="theme-container">
        {theme === "dark" ? (
          <BsFillSunFill onClick={toggleTheme} />
        ) : (
          <BsMoon onClick={toggleTheme} />
        )}
        <h4 onClick={toggleTheme}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </h4>
      </div>
    </nav>
  );
}

export default Navbar;
