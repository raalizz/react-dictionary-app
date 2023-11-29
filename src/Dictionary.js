import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
import "./Dictionary.css";
import SearchBar from "./SearchBar";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <header>
        <h7>What word would you like to search?</h7>
        <SearchBar />
      </header>
      <Footer />
    </div>
  );
}
