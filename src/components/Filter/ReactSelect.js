import React from "react";
import Select from "react-select";

const options = [
  { label: "Africa", value: "Africa" },
  { label: "Americas", value: "Americas" },
  { label: "Asia", value: "Asia" },
  { label: "Europe", value: "Europe" },
  { label: "Oceania", value: "Oceania" },
];

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    color: state.selectProps.menuColor,
    background: "#202c37",
  }),
  control: (base, state) => ({
    ...base,
    width: "220px",
    background: "inherit",
    height: "6vh",
    outline: "none",
    color: "#fff",
  }),
};
const themes = (theme) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "orange",
      primary: "green",
    },
  };
};
function ReactSelect({ data, setDataObj, theme }) {
  const selectChangeHandler = (e) => {
    const value = e.value;
    const filteredResults = data.filter((country) => country.region === value);
    setDataObj(filteredResults);
  };
  return (
    <div className="react-select-container">
      <Select
        options={options}
        styles={customStyles}
        onChange={selectChangeHandler}
        theme={themes}
        menuColor={theme === "dark" ? "#202c37" : "#fff"}
        className="react-select"
        placeholder="Filter by region"
      />
    </div>
  );
}

export default ReactSelect;
