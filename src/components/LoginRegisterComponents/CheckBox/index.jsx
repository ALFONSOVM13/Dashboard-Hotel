import React from "react";

export default function CheckBox({ value, handler, name }) {
  return (
    <label style={{ color: "green" }}>
      <input
        className="w-5 h-5"
        name={name}
        type="checkbox"
        checked={value}
        onChange={handler}
      />
      <span style={{ color: "white", fontSize: "1.2rem" }}>&#x2713;</span>
    </label>
  );
}
