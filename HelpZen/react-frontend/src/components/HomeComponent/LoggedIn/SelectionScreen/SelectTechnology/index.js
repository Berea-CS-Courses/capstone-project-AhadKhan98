import React from "react";

import "./styles.css";

import SelectLanguage from "../SelectLanguage";

function SelectTechnology() {
  return (
    <div>
      <h4>Select tech</h4>
      <button onClick={() => <SelectLanguage />}>Next</button>
    </div>
  );
}

export default SelectTechnology;
