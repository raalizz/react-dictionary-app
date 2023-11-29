import React, { useState } from "react";

import "./SearchBar.css";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
          autoFocus="true"
        />
      </form>
    </div>
  );
}
