/* eslint-disable react/prop-types */
import React from "react";

function EditButton({ id }) {
  return (
    <button
      onClick={() => alert("Edit" + id)}
      className="flex gap-3 font-semibold text-white justify-center px-4 bg-green-600 rounded-md shadow-sm"
    >
      Edit{" "}
    </button>
  );
}

export default EditButton;
