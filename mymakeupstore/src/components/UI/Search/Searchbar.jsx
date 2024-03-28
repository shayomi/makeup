import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Searchbar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((product) => {
          return (
            value &&
            product &&
            product.name &&
            product.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    if (value.trim() === "") {
      setResults([]); // Clear results when input is empty
    } else {
      fetchData(value);
    }
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
