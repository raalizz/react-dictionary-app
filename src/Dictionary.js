import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
import "./Dictionary.css";
import SearchBar from "./SearchBar";
import Results from "./Results";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <header>
        <h6>What word would you like to search?</h6>
        <SearchBar />
      </header>
      <main>
        <section className="phonetics">
          <div className="container">
            <Results />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
