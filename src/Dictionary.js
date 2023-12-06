import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";

import Footer from "./Footer";
import "./Styles.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    //documentation: https://www.shecodes.io/learn/apis/images
    const ShecodesApiKey = "da1f0bo0fb43abc333bbad06624a9e8t";
    const ShecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${ShecodesApiKey}`;
    axios.get(ShecodesApiUrl).then(handleShecodesResponse);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleShecodesResponse(response) {
    setPhotos(response.data.photos);
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
            Suggested Words: Sunset, Spring, Yoga, Twilight ...{" "}
          </div>
        </header>
        <main>
          <div>
            <Results results={results} />
            <Photos photos={photos} />
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
