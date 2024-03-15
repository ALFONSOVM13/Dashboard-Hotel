import React from "react";

function ReleaseButton({ id }) {
  return (
    <button
      onClick={() => alert("Release" + id)}
      className="flex gap-3 font-semibold text-white grow justify-center px-3 py-2.3 whitespace-nowrap bg-fuchsia-700 rounded-md shadow-sm"
    >
      Release
    </button>
  );
}

export default ReleaseButton;
