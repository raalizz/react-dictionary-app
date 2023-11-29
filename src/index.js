import React from "react";
import ReactDOM from "react-dom/client";

import Dictionary from "./Dictionary";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Dictionary />
  </React.StrictMode>
);
reportWebVitals();
