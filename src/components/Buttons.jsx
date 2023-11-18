import React from "react";
import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {/* Button to display all satellites */}
      <button onClick={() => setSat(satData)}>All Orbits</button>

      {/* Buttons to filter by satellite type */}
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