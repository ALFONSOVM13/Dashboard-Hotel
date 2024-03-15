/* eslint-disable react/prop-types */
import React from "react";

function DeleteUserButton({ id }) {
  return (
    <button
      onClick={() => alert("Delete" + id)}
      className="flex gap-3 font-semibold text-white justify-center px-3 py-2.3 whitespace-nowrap bg-fuchsia-700 rounded-md shadow-sm"
    >
      Delete
    </button>
  );
}

export default DeleteUserButton;
