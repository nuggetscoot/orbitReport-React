import React from "react";
import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      <button onClick={() => setSat(satData)}>All Orbits</button>
      {displaySats.map((sat, id) => (
        <div key={id}>
          <button onClick={() => filterByType(sat)}>
            {sat} Orbit
          </button>
        </div>
      ))}
    </div>
  );
};
export default Buttons;