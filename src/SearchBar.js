import React, { useState } from "react";
import axios from "axios";

import "./SearchBar.css";
import Results from "./Results";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function Search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchBar">
      <form onSubmit={Search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          className="searchEngine"
          autoFocus={true}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
