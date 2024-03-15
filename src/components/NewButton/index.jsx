import React from "react";

function Button({ text }) {
  return (
    <button className="justify-center self-center px-4 py-4 text-base tracking-normal text-center text-white whitespace-nowrap rounded shadow-sm bg-blue-950">
      {text}
    </button>
  );
}

export default Button;
