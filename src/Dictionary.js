import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";

import Footer from "./Footer";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function Search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <header>
        <h1>Dictionary</h1>
        <form onSubmit={Search}>
          <label>What word would you like to search?</label>
          <input
            type="search"
            placeholder="Search for a word"
            onChange={handleKeywordChange}
            className="searchEngine"
          />
        </form>
      </header>
      <main>
        <div>
          <Results results={results} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
