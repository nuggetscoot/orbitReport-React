import React from "react";

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((data, id) => (
          <tr key={id}>
            <td>{data.name}</td>

            <td>{data.type}</td>

            <td>{data.launchDate}</td>

            <td>
              {data.operational ? (
                <span style={{ color: "green" }}>Active</span>
              ) : (
                <span style={{ color: "red" }}>Inactive</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
