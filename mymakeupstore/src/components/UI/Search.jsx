import React, { useState, useEffect } from "react";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import axios from "axios";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => {
        setFilteredData(response.data);
      });
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs flex flex-row gap-x-2 items-center">
        <input
          type="text"
          placeholder="search product"
          value={wordEntered}
          onChange={handleFilter}
          className="border border-gray-500 rounded-lg bg-transparent font-primary max-w-[150px] sm:w-[300px] md:max-w-[400px] md:w-[600px] h-[38px] px-3 py-2 focus:outline-none placeholder:text-[11px]"
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <AiOutlineSearch className="text-gray-500" />
          ) : (
            <AiOutlineClose
              id="clearBtn"
              onClick={clearInput}
              className="text-gray-500 cursor-pointer"
            />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="absolute top-16 mt-2 bg-white rounded-lg shadow-lg overflow-y-auto max-h-48">
          {filteredData.slice(0, 15).map((value) => (
            <div key={value.id}>
              <NavLink
                to={`/${value.id}`}
                className="dataItem w-full h-12 flex items-center px-4 hover:bg-gray-100"
                target="_blank"
                onClick={clearInput}
              >
                <p className="font-primary text-sm text-black ml-2">
                  {value.name}
                </p>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
