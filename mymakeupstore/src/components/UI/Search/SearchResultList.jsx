import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const SearchResultsList = ({ hideResults, results }) => {
  const handleResultClick = () => {
    // Hide the search results list when a result is clicked
    hideResults();
  };

  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <NavLink to={`/${result.id}`} key={id}>
            <SearchResult result={result.name} onClick={handleResultClick} />
          </NavLink>
        );
      })}
    </div>
  );
};
