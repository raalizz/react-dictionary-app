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
    <div className="Dictionary">
      <header>
        <h6>What word would you like to search?</h6>
        <div className="SearchBar">
          <form onSubmit={Search}>
            <input
              type="search"
              onChange={handleKeywordChange}
              className="searchEngine"
              autoFocus={true}
            />
          </form>
        </div>
      </header>
      <main>
        <section className="phonetics">
          <div className="container">
            <Results results={results} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
