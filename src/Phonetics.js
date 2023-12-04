import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-volume-high emoji" title="Listen"></i>
      </a>
      <br />
      {props.phonetics.text}
    </div>
  );
}
