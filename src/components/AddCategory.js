import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setcategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    console.log("handleInputChange llamado",inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setcategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    } else {
      alert("No podes dejar el campo vacio");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        id="input"
        autoComplete="off"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};
