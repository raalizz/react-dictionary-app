import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";

import Footer from "./Footer";
import "./Styles.css";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
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
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <header>
          <h1>Dictionary</h1>
          <form onSubmit={handleSubmit}>
            <label>What word would you like to search?</label>
            <input
              type="search"
              placeholder="Search for a word"
              defaultValue={props.defaultKeyword}
              onChange={handleKeywordChange}
              className="searchEngine"
            />
          </form>
          <div className="hints">
            Suggested Words: Sunset, Spring, Yoga, Wild ...{" "}
          </div>
        </header>
        <main>
          <div>
            <Results results={results} />
          </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    load();
    return null;
  }
}
