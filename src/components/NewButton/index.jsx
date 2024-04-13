/* eslint-disable react/prop-types */
import React from "react";

function Button({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`justify-center self-center px-4 py-4 text-base tracking-normal text-center text-white whitespace-nowrap rounded shadow-sm bg-blue-950 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
