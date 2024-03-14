/* eslint-disable react/prop-types */
import React from "react";

function Table({ headers, data }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th
              className=" w-[10%] text-xl  text-black capitalize "
              key={header + i}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
