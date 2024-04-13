/* eslint-disable react/prop-types */
import React from "react";

function ReleaseButton({ id }) {
  return (
    <button
      onClick={() => alert("Release" + id)}
      className="block gap-3 font-semibold text-white grow justify-center px-1 py-2.3 bg-fuchsia-700  rounded-md shadow-md shadow-slate-800"
    >
      Release
    </button>
  );
}

export default ReleaseButton;
