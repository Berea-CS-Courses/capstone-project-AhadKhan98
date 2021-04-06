import React from "react";

import "./styles.css";

import IconCard from "../../../../IconCard";
import { data } from "./data";

function SelectTechnology({ updateScreen }) {
  return (
    <div className="selectTechnology--container">
      <h4>Select technology</h4>
      <div className="selectTechnology--iconCard">
        {data.map((technology) => (
          <IconCard technology={technology} updateScreen={updateScreen} />
        ))}
      </div>
    </div>
  );
}

export default SelectTechnology;
